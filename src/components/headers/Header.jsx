import Link from 'next/link'
import UserControler from './UserControler'
import style from '@/app/page.module.css'
export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/" className={style.opoLogo}><h1>OpoTesting</h1></Link>
      <UserControler />
    </header>
  )
}
