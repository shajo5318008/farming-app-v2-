import { NextRequest } from 'next/server'
import OpenAI from 'openai'

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    const body = await req.json().catch(() => ({}))
    const { prompt } = body
    const mock = `Demo reply (no API key): ${prompt || 'नमस्ते किसान भाई! मैं आपकी कैसे मदद कर सकता हूँ?'} `
    return Response.json({ text: mock })
  }
  const body = await req.json().catch(() => ({}))
  const { prompt } = body
  if (!prompt) return new Response(JSON.stringify({ error: 'prompt required' }), { status: 400 })

  const client = new OpenAI({ apiKey })
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are HarvestHub AI, helping Indian farmers with market, weather, logistics, and app guidance in simple Hindi.' },
      { role: 'user', content: String(prompt) },
    ],
    temperature: 0.5,
  })

  const text = completion.choices[0]?.message?.content || ''
  return Response.json({ text })
}


