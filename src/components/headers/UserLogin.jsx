import Link from 'next/link'
import style from '@/app/page.module.css'

export default function UserLogin() {
  return (
    <>
      <Link href="/user/login" className={style.loginLinks}>Log in</Link>
      <Link href="/user/register" className={style.loginLinks}>Sign up</Link>
    </>
  )
}
