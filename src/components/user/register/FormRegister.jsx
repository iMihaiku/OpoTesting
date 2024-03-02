'use client'
import style from '../style/component.module.css'
import { setCookie } from '@/lib/actions'
import { useRouter } from 'next/navigation'
export default function FormRegiser() {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const data = Object.fromEntries(form)
    const { username, password, email } = data
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email })
    })
    if (response.status === 500) {
      console.log('Error a la hora de registrar el usuario', response.message)
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
      <h2>Register OpoTest</h2>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username" name="username" placeholder='Username'/>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" placeholder='Username'/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" placeholder='Username'/>
      <button type="submit">Register</button>
      <span className={style.info}>Si tienes algun problema de inicio de sesion, por favor pongase
         en conctacto con el servicio de atencion al cliente. </span>
    </form>
  )
}
