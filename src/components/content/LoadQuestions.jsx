'use client'
import style from './LoadQuestions.module.css'
import { Radio } from 'antd'
import { useState } from 'react'

export default function LoadQuestions({ questions }) {
  const [respuestas, setRespuestas] = useState({})
  const [isResolved, setIsResolved] = useState(false)
  const handleResolve = () => {
    const resultadosCorrectos = []
    const resultadosIncorrectos = []
    Object.keys(respuestas).forEach((questionId) => {
      const userAnswerId = respuestas[questionId]
      const question = questions.find((q) => {
        return String(q.id) === String(questionId)
      })
      if (!question) return
      const correctAnswer = question.answers.find((answer) => answer.isCorrect)
      userAnswerId === correctAnswer.id
        ? resultadosCorrectos.push(questionId)
        : resultadosIncorrectos.push(questionId)
    })
    setIsResolved(true)
  }
  const handleSetResponse = (e) => {
    const { name, value } = e.target
    setRespuestas({ ...respuestas, [name]: value })
  }
  return (
    <section className={style.test}>
      {questions.map((question, index) => {
        const isCorrect = question.answers.find((answer) => answer.isCorrect).id === respuestas[question.id]
        return (
          <div key={index} style={{
            backgroundColor: isResolved ? (isCorrect ? '#50b75047' : '#db6d6d4d') : 'initial'
          }}>
            <h3>{question.title}</h3>
            <ul>
              <Radio.Group
                defaultValue="a"
                size="small"
                name={question.id}
                onChange={handleSetResponse}
              >
                {question.answers.map((answer, index) => {
                  return (
                    <li key={index}>
                      <label className={style.label} htmlFor={answer.id}>
                        {answer.title}
                      </label>
                      <Radio.Button
                        className={style.radio}
                        value={answer.id}
                      ></Radio.Button>
                      <span className={style.correct}>
                        {isResolved ? (answer.isCorrect ? '✓' : '') : ''}
                      </span>
                      {/* <input type="radio" id={answer.id} name={question.id} value={answer.id}/> */}
                    </li>
                  )
                })}
              </Radio.Group>
            </ul>
          </div>
        )
      })}
      <div className={style.result}>
        <div>
          <span>Preguntas respondidas: </span>
          <span>{Object.keys(respuestas).length + '/' + questions.length}</span>
        </div>
        <button onClick={handleResolve}>Resolver</button>
      </div>
    </section>
  )
}
