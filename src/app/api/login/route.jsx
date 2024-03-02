import { login } from '@/lib/login'

export async function POST(req, res) {
  const { username, password } = await req.json()
  let result = await login(username, password)
  result === null
    ? result = { error: 'Unauthorized', status: 401 }
    : result = { user: result, status: 200 }
  return Response.json(result)
}
