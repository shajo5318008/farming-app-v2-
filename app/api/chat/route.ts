import { NextRequest } from "next/server"

export const maxDuration = 30

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    if (!message) return new Response("Missing message", { status: 400 })
    // Fallback demo streaming replacement
    const text = `AI (demo): ${message}`
    return Response.json({ text })
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Error processing request", { status: 500 })
  }
}
