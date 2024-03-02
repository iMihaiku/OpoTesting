'use client'
import { crearTest } from '@/lib/tests'
import style from './modal.module.css'
import { useRouter } from 'next/navigation'

export default function CrearTestModal({ setModal, userName, userId }) {
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { nombre, descripcion } = event.target
    const res = await crearTest(nombre.value, descripcion.value, userName, userId)
    const isValid = res !== undefined
    if (isValid) router.push('/test/' + res.id + '/update')
    setModal()
  }
  return (
    <div className={style.ventanaModal}>
      <div className={style.tituloModal}>
        <h2>Crear Test</h2>
        <span onClick={() => setModal()}>X</span>
      </div>
      <form onSubmit={handleSubmit} className={style.testModalForm}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <label htmlFor="descripcion">Descripcion</label>
        <textarea id="descripcion"></textarea>
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}
