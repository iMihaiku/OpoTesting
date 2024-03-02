import FormRegister from '@/components/user/register/FormRegister'
import style from './page.module.css'

export default function Page() {
  return (
    <main className={style.main}>
      <FormRegister />
    </main>
  )
}
