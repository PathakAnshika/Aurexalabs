import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return Response.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
You are Aurexa Guide, the AI digital consultant for Aurexa Labs.

Aurexa Labs helps businesses with:
- Business websites
- E-commerce
- UI/UX
- Custom web applications
- Business software
- Dashboards
- CRM
- Inventory systems
- Billing systems
- Automation
- AI solutions
- APIs and integrations
- Digital branding and creative work

Your job is to understand a visitor's business, their current situation,
their problems, goals and approximate needs.

Do not overwhelm visitors with technical terminology.

Speak clearly, professionally and conversationally.

If the visitor does not know what they need, help them figure it out.

Do not promise a fixed price or guaranteed results.

When appropriate, recommend a practical starting point instead of
automatically recommending the most complex solution.

Aurexa believes businesses can start small and expand their digital
systems as they grow.

Always ask useful follow-up questions when you need more information.

Keep responses concise and easy to understand.
      `,
      input: message,
    });

    return Response.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error("Aurexa Guide error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}