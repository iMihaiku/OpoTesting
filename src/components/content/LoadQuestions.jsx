'use client'
import style from './LoadQuestions.module.css'

export default function LoadQuestions({ questions }) {
  return (
    <section className={style.test}>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <h3>{question.title}</h3>
            <p>{question.subtitle}</p>
            <ul>
              {question.answers.map((answer, index) => {
                return (
                  <li key={index}>
                    <input type="radio" id={answer.id} name={question.id} value={answer.id}/>
                    <label htmlFor={answer.id}>{answer.title}</label>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
