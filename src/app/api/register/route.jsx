import { register } from '@/lib/register'

export async function POST(req, res) {
  const { username, password, email } = await req.json()
  const result = await register(username, password, email)
  return Response.json(result)
}
