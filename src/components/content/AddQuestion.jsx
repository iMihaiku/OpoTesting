'use client'
import {
  addAnswersToQuestion,
  addQuestion,
  addQuestionToTest,
  updateAnswer,
  updateQuestion
} from '@/lib/tests'
import style from './customComponents.module.css'
import { message, Radio } from 'antd'

export default function AddQuestion({
  setAddQuestion,
  testId,
  questionActive,
  setQuestionActive,
  questions
}) {
  const NUMBER_OF_ANSWERS = 3
  const [messageApi, contextHolder] = message.useMessage()
  const handleAddContinue = async (e) => {
    e.preventDefault()
    const checkData = checkAllData(e.target.form, NUMBER_OF_ANSWERS, messageApi)
    if (!checkData) {
      return
    }
    const { question, answers } = checkData
    const questionRes = await addQuestion(question)
    await addQuestionToTest(testId, questionRes.id)
    answers.forEach(async (answer) => {
      await addAnswersToQuestion(
        answer.respuesta,
        questionRes.id,
        answer.isCorrect
      )
    })
    console.log('Add and Continue')
  }
  const handleAddEnd = (e) => {
    e.preventDefault()
    setAddQuestion(false)
  }
  const handleGuardar = (e) => {
    e.preventDefault()
    const checkData = checkAllData(e.target.form, NUMBER_OF_ANSWERS, messageApi)
    if (!checkData) {
      return
    }
    const { question, answers } = checkData
    updateQuestion(questionActive.id, question)
    questionActive.answers.forEach((answerActive, index) => {
      updateAnswer(answerActive.id, answers[index])
    })
    questions[questions.findIndex((item) => item.id === questionActive.id)] = {
      ...questionActive
    }
    messageApi.open({
      type: 'success',
      content: 'Pregunta actualizada correctamente'
    })
  }
  const handleCancel = (e) => {
    e.preventDefault()
    setAddQuestion(false)
  }
  const handleNuevaPregunta = (e) => {
    e.preventDefault()
    e.target.form.reset()
    setQuestionActive({})
  }
  const handleInputChange = (e) => {
    setQuestionActive({
      ...questionActive,
      title: e.target.value
    })
  }
  const handleRespuestaChange = (e) => {
    const index = e.target.id.split('_')[1]
    const { answers } = questionActive
    answers[index] = {
      ...answers[index],
      title: e.target.value
    }
    setQuestionActive({
      ...questionActive,
      answers
    })
  }

  const handleRadioChange = (e) => {
    const index = e.target.value
    const newAnswers = questionActive.answers.map((answer, i) => {
      if (index === i) {
        return { ...answer, isCorrect: true }
      } else {
        return { ...answer, isCorrect: false }
      }
    })
    setQuestionActive({
      ...questionActive,
      answers: newAnswers
    })
  }
  return (
    <article className={style.addQuestion}>
      {contextHolder}
      <form>
        <label htmlFor="question" className={style.labelForm}>
          Pregunta
        </label>
        <textarea
          className={style.textAreaQuestion}
          id="question"
          name="question"
          required
          placeholder="Respuesta..."
          value={questionActive?.title || ''}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="answer" className={style.labelForm}>
          Respuestas posibles:
        </label>
        <Radio.Group
          name="radiogroup"
          className={style.test}
          value={questionActive?.answers?.findIndex(
            (item) => item.isCorrect === true
          )}
          onChange={handleRadioChange}
        >
          {Array.from({ length: NUMBER_OF_ANSWERS }, (_, i) => {
            return (
              <div key={i}>
                <Radio value={i} id={'answerCorrect_' + i}>
                  OK
                </Radio>
                <textarea
                  className={style.textAreaQuestion}
                  id={'answer_' + i}
                  name={'answer_' + i}
                  required
                  placeholder="Respuesta..."
                  value={
                    questionActive?.answers?.length > i
                      ? questionActive.answers[i].title
                      : ''
                  }
                  onChange={handleRespuestaChange}
                />
              </div>
            )
          })}
        </Radio.Group>
        <div className={style.butons}>
          {(questionActive && Object.keys(questionActive).length > 0) ? (
            <>
              <button onClick={handleGuardar}>Guardar</button>
              <button type="submit" onClick={handleNuevaPregunta}>
                Añadir nueva pregunta
              </button>
              <button type="submit" onClick={handleCancel}>
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button type="submit" onClick={handleAddContinue}>
                Añadir y Continuar
              </button>
              <button type="submit" onClick={handleAddEnd}>
                Añadir y Finalizar
              </button>
              <button type="submit" onClick={handleCancel}>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </article>
  )
}

function checkAllData(form, maxAnswers, messageApi) {
  const question = form.question.value
  const answers = []
  for (let i = 0; i < maxAnswers; i++) {
    answers.push({
      respuesta: form['answer_' + i].value,
      isCorrect: form['answerCorrect_' + i].checked
    })
  }
  if (question === '') {
    messageApi.open({
      type: 'warning',
      content: 'La pregunta esta vacia'
    })
    return false
  }
  if (answers.filter((answer) => answer.respuesta === '').length > 0) {
    messageApi.open({
      type: 'warning',
      content: 'Hay respuestas vacias'
    })
    return false
  }
  if (answers.filter((answer) => answer.isCorrect).length === 0) {
    messageApi.open({
      type: 'warning',
      content: 'No hay respuesta correcta'
    })
    return false
  }
  return { question, answers }
}
