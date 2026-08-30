import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(request) {
  try {
    const answers = await request.json();

    const name = answers.name?.trim();
    const email = answers.email?.trim();
    const company = answers.company?.trim();

    if (!name || !email) {
      return Response.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    const projectType =
      answers[1] || "Not provided";

    const business =
      answers[2] || "Not provided";

    const idea =
      answers[3] || "Not provided";

    const services = Array.isArray(answers[4])
      ? answers[4].join(", ")
      : answers[4] || "Not provided";

    const budget =
      answers[5] || "Not provided";

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
              max-width:700px;
              margin:auto;
              background:#ffffff;
              border:1px solid #e5e5e5;
            ">

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
                  AUREXA LABS
                </div>

                <h1 style="
                  margin:0;
                  font-size:30px;
                  font-weight:500;
                ">
                  New Project Inquiry
                </h1>

              </div>


              <div style="padding:40px;">

                ${field("NAME", name)}

                ${field("EMAIL", email)}

                ${field(
                  "COMPANY / BRAND",
                  company || "Not provided"
                )}

                ${field(
                  "WHAT ARE WE BUILDING?",
                  projectType
                )}

                ${field(
                  "BUSINESS",
                  business
                )}

                ${field(
                  "THE IDEA",
                  idea
                )}

                ${field(
                  "WHAT THEY NEED",
                  services
                )}

                ${field(
                  "BUDGET",
                  budget
                )}

              </div>


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

    if (error) {
  console.error("RESEND ERROR:", error);

  return Response.json(
    {
      success: false,
      message: error.message || "Resend failed.",
    },
    { status: 500 }
  );
}

    return Response.json({
      success: true,
      message:
        "Inquiry sent successfully.",
      data,
    });

  } catch (error) {
  console.error("PROJECT INQUIRY ERROR:", error);

  return Response.json(
    {
      success: false,
      message: error.message || "Something went wrong.",
    },
    { status: 500 }
  );
}
}


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


function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(
      /'/g,
      "&#039;"
    );
}