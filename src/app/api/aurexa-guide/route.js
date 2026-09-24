
import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    // Parse request
    const { message, history = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Build conversation context
    const messages = [
      {
        role: "system",
        content: `
You are Aurexa Guide, the AI digital consultant for Aurexa Labs.

ABOUT AUREXA LABS:
Aurexa Labs helps businesses build practical digital solutions
that solve real business problems.

SERVICES:
- Business websites and landing pages
- E-commerce websites
- UI/UX and website redesign
- Custom web applications
- Business software and dashboards
- CRM, inventory and billing systems
- Workflow automation
- AI solutions
- APIs and integrations
- Digital branding and creative work

YOUR ROLE:
Understand the visitor's business, current situation,
challenges, goals and approximate requirements.


CONVERSATION RULES:
1. Talk like a friendly, real human business consultant.
2. Keep every reply between 20 and 50 words.
3. Use a maximum of 2-3 short sentences per reply.
4. Ask only ONE relevant follow-up question at a time.
5. Never give numbered lists, bullet points, or multiple questions.
6. Never repeat information the visitor has already shared.
7. Do not explain all possible services or solutions at once.
8. Listen to the visitor and respond directly to what they said.
9. Give detailed recommendations only when the visitor asks.
10. Keep the conversation natural, warm and engaging.

CONVERSATION STYLE:
- Start with a short, friendly acknowledgment.
- Respond to the visitor's specific situation.
- Ask one simple question to continue the conversation.
- Avoid long introductions, unnecessary explanations,
  excessive emojis and formal business language.
- Never sound like a chatbot reading a questionnaire.

EXAMPLE:

Visitor: I run a small cafe but don't have a website.

Good response:
"That's a great place to start! A simple website could
help people discover your cafe and check your menu.
Do you currently use Instagram for your cafe?"

Bad response:
A long introduction, multiple numbered questions,
a list of services, and a detailed explanation.

TONE:
Friendly, warm, concise and conversational.
Use the language the visitor uses.
For Hindi or Hinglish, reply in natural Hinglish.

Your goal is to have a short, natural conversation
and understand the visitor one message at a time.       `,
      },

      // Previous conversation messages
      ...(Array.isArray(history) ? history : [])
        .filter(
          (item) =>
            ["user", "assistant"].includes(item.role) &&
            typeof item.content === "string"
        )
        .slice(-10)
        .map((item) => ({
          role: item.role,
          content: item.content,
        })),

      // Current visitor message
      {
        role: "user",
        content: message.trim(),
      },
    ];

    // Call Groq API
   
const completion = await client.chat.completions.create({
  model: "openai/gpt-oss-20b",
  messages,
  temperature: 0.5,

  // Reserve enough tokens for reasoning and final answer
  max_completion_tokens: 1200,

  // Do not include reasoning in the user-facing response
  include_reasoning: false,
  reasoning_effort: "low",
});


const choice = completion.choices?.[0];

const reply = choice?.message?.content?.trim();

if (!reply) {
  console.error("Empty Groq response details:", {
    finish_reason: choice?.finish_reason,
    usage: completion.usage,
    message: choice?.message,
  });

  return Response.json(
    {
      error:
        "The AI could not generate a response. Please try again.",
      code: "empty_response",
    },
    { status: 502 }
  );
}

return Response.json({ reply });
  } catch (error) {
    // Log actual error in server terminal
    console.error("Aurexa Guide error:", {
      message: error.message,
      status: error.status,
      code: error.code,
      type: error.type,
    });

    const status = error.status || 500;

    // Return useful error details for development debugging
    return Response.json(
      {
        error: error.message || "Unable to respond right now.",
        code: error.code || null,
        type: error.type || null,
      },
      {
        status,
      }
    );
  }
}