import { sql } from '@vercel/postgres'

async function login(username, password) {
  const user =
    await sql`SELECT * FROM opo_users WHERE username = ${username} AND password = ${password}`
  if (user.rows.length === 0) return null
  return user.rows[0]
}

export { login }
