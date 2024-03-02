'use client'
import style from './customComponents.module.css'
import ListQuestions from '@/components/content/ListQuestions'
import { useState } from 'react'
import AddQuestion from './AddQuestion'
export default function Questions({
  questions,
  testId,
  questionActive,
  setQuestionActive,
  setListOfQuestions
}) {
  const [addQuestion, setAddQuestion] = useState(false)

  const handleAnadir = () => {
    setQuestionActive({})
    setAddQuestion(true)
  }
  return (
    <section className={style.main}>
      {addQuestion ? (
        <AddQuestion
          testId={testId}
          setAddQuestion={setAddQuestion}
          questionActive={questionActive}
          setQuestionActive={setQuestionActive}
          setListOfQuestions={setListOfQuestions}
          questions={questions}
        />
      ) : (
        <div className={style.anadirPregunta}>
          <button onClick={handleAnadir}>Añadir pregunta</button>
        </div>
      )}

      <article className={style.questions}>
        <ListQuestions
          data={questions}
          setAddQuestion={setAddQuestion}
          setQuestionActive={setQuestionActive}
        />
      </article>
    </section>
  )
}
