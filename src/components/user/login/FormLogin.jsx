'use client'

import style from '@/components/user/style/component.module.css'
import { setCookie } from '@/lib/actions'
import { useRouter } from 'next/navigation'

export default function FormLogin() {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const data = Object.fromEntries(form)
    const { username, password } = data
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    if (response.status === 401) {
      console.log('Unauthorized')
      return
    }
    const result = await response.json()
    if (result.status === 200) {
      await setCookie('user', JSON.stringify(result))
      router.push('/')
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className={style.form}>
      <h2>Login OpoTest</h2>
      <label htmlFor="username">UserName</label>
      <input type="username" id="username" name="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Login</button>
      <span className={style.info}>
        Si tienes algun problema de inicio de sesion, por favor pongase en
        conctacto con el servicio de atencion al cliente.{' '}
      </span>
    </form>
  )
}
