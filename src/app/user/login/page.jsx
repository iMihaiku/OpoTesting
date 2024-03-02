import FormLogin from '@/components/user/login/FormLogin'
import style from './page.module.css'

export default function Page() {
  return (
    <main className={style.main}>
      <FormLogin />
    </main>
  )
}
