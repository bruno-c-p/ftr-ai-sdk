import { NextRequest } from "next/server";
import { openRouter } from "@/ai/open-router";
import { streamText } from "ai";
import { tools } from "@/ai/tools";

export async function POST(request: NextRequest) {
  const { messages } = await request.json();
  const result = streamText({
    model: openRouter.chat("openai/gpt-4o-2024-11-20"),
    tools,
    messages,
    maxSteps: 2,
    toolChoice: "required",
    system: `
      Sempre responda com markdown sem aspas no início e no final da resposta.
    `,
  });
  return result.toDataStreamResponse();
}

