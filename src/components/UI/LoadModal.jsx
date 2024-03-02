'use client'
import CrearTestModal from '@/components/UI/CrearTestModal'
import { useState } from 'react'
import style from './modal.module.css'

export default function LoadModal({ modalID, textoBoton, userName, userId }) {
  const [modal, setModal] = useState()
  const MODALES = {
    crearTest: <CrearTestModal setModal={setModal} userName={userName} userId={userId} />
  }
  const handleClick = () => {
    if (userId === null || userId === undefined) return
    setModal(MODALES[modalID])
  }
  return (
    <div className={style.crearTest}>
      {userId === null || userId === undefined
        ? null
        : (
        <>
          <button onClick={handleClick}>{textoBoton}</button>
          {modal === undefined ? null : modal}
        </>
          )}
    </div>
  )
}
