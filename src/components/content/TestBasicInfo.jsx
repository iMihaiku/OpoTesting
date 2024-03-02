'use client'
import { updateTestInfo } from '@/lib/tests'
import style from './content.module.css'

export default function TestBasicInfo({ test, testInfo }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const nombreTest = e.target.nombreTest.value
    const descripcionTest = e.target.descripcionTest.value
    await updateTestInfo(test, nombreTest, descripcionTest)
  }
  return (
    <section className={style.basicInfo} onSubmit={handleSubmit} >
      <form action="" className={style.form}>
        <label htmlFor="nombreTest">Nombre del test: </label>
        <textarea
          className={style.textArea}
          id="nombreTest"
          placeholder="Nombre del test"
          defaultValue={testInfo.name}
        />
        <label htmlFor="descripcionTest">Descripcion: </label>
        <textarea
          className={style.textArea}
          id="descripcionTest"
          placeholder="Descripcion del test"
          defaultValue={testInfo.description}
        />
        <button type="submit" className={style.actualizarButon}>Actualizar</button>
      </form>
    </section>
  )
}
