import { sql } from '@vercel/postgres'

async function register(username, password, email) {
  const userExists =
    await sql`SELECT * FROM opo_users WHERE username = ${username}`
  if (userExists.rows.length !== 0) {
    return { stauts: 500, message: 'Username already exists' }
  }
  const user =
    await sql`INSERT INTO opo_users (Id, Username, Password, Email) VALUES (DEFAULT, ${username}, ${password}, ${email}) RETURNING *`
  return user.rows.length !== 0
    ? { status: 200, user: user.rows[0] }
    : { status: 500, message: 'Error creating user' }
}

export { register }
