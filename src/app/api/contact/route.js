import { Resend } from "resend";



export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      budget,
      message,
    } = body;

    // Required fields
    if (!name || !email || !service || !message) {
      return Response.json(
        {
          success: false,
          message:
            "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // Check environment variables
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error(
        "Missing Resend environment variables."
      );

      return Response.json(
        {
          success: false,
          message:
            "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } =
      await resend.emails.send({
        from:
          "Aurexa Labs <onboarding@resend.dev>",

        to: [
          process.env.CONTACT_EMAIL,
        ],

        replyTo: email,

        subject:
          `New Project Inquiry — ${name}`,

        html: `
          <div style="
            margin:0;
            padding:40px 20px;
            background:#f5f5f5;
            font-family:Arial,Helvetica,sans-serif;
          ">

            <div style="
              max-width:680px;
              margin:0 auto;
              background:#ffffff;
              border:1px solid #e5e5e5;
            ">

              <!-- HEADER -->

              <div style="
                padding:35px 40px;
                background:#070707;
                color:#ffffff;
              ">

                <div style="
                  font-size:11px;
                  letter-spacing:3px;
                  color:#d9ff3f;
                  margin-bottom:18px;
                ">
                  AUREXA LABS / NEW INQUIRY
                </div>

                <h1 style="
                  margin:0;
                  font-size:30px;
                  font-weight:500;
                ">
                  New Project Inquiry
                </h1>

              </div>


              <!-- CONTENT -->

              <div style="padding:40px;">

                ${field(
                  "NAME",
                  name
                )}

                ${field(
                  "EMAIL",
                  email
                )}

                ${field(
                  "COMPANY / BRAND",
                  company || "Not provided"
                )}

                ${field(
                  "SERVICE",
                  service
                )}

                ${field(
                  "BUDGET",
                  budget || "Not provided"
                )}

                ${field(
                  "PROJECT DETAILS",
                  message
                )}

              </div>


              <!-- FOOTER -->

              <div style="
                padding:22px 40px;
                border-top:1px solid #eeeeee;
                color:#999999;
                font-size:11px;
                letter-spacing:1px;
              ">
                SENT FROM AUREXA LABS WEBSITE
              </div>

            </div>

          </div>
        `,
      });


    // Resend returned an error

    if (error) {
      console.error(
        "RESEND ERROR:",
        error
      );

      return Response.json(
        {
          success: false,
          message:
            error.message ||
            "Unable to send email.",
        },
        { status: 500 }
      );
    }


    // Email successfully accepted by Resend

    console.log(
      "EMAIL SENT:",
      data
    );

    return Response.json({
      success: true,
      message:
        "Your inquiry has been sent successfully.",
      id: data?.id,
    });

  } catch (error) {

    console.error(
      "CONTACT API ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          error.message ||
          "Something went wrong.",
      },
      { status: 500 }
    );
  }
}


// =========================
// EMAIL FIELD
// =========================

function field(label, value) {
  return `
    <div style="
      padding:20px 0;
      border-bottom:1px solid #eeeeee;
    ">

      <div style="
        font-size:10px;
        letter-spacing:2px;
        color:#999999;
        margin-bottom:8px;
        letter-spacing:2px;
      ">
        ${escapeHtml(label)}
      </div>

      <div style="
        font-size:15px;
        line-height:1.7;
        color:#333333;
        white-space:pre-line;
      ">
        ${escapeHtml(value)}
      </div>

    </div>
  `;
}


// =========================
// SECURITY
// =========================

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );
}