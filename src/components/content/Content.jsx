import style from './content.module.css'
import GridTest from './GridTest'
import { recuperarTests } from '@/lib/tests'
import LoadModal from '@/components/UI/LoadModal'
import { cookies } from 'next/headers'

export default async function Content() {
  const tests = await recuperarTests()
  const cookieStorage = cookies()
  const cookieString = cookieStorage.get('user')?.value
  const cookie = cookieString !== undefined ? JSON.parse(cookieString) : null
  return (
    <section className={style.test}>
      <div className={style.crearTest}>
        <LoadModal modalID="crearTest" textoBoton="Crear nuevo test" userName={cookie?.user.username} userId={cookie?.user.id}/>
      </div>
      <div className={style.testCreados}>
        <GridTest tests={tests}/>
      </div>
    </section>
  )
}
