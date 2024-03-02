'use client'

import { Empty } from 'antd'
import style from './customComponents.module.css'
import { useState } from 'react'
import AddQuestion from './AddQuestion'

export default function Questions({ testId }) {
  const [addQuestion, setAddQuestion] = useState(false)
  const handleClick = () => {
    setAddQuestion(true)
  }
  return (
    <section className={style.main}>
      {addQuestion ? <AddQuestion setAddQuestion={setAddQuestion} testId={testId}/> : null}
      <article className={style.noQuestions}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div className={style.emptyContent}>
              <span className={style.emptyText}>¡No hay preguntas aun!</span>
              <button onClick={handleClick}>Añadir</button>
            </div>
          }
        />
      </article>
    </section>
  )
}
