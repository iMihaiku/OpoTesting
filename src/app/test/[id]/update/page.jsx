import QuestionControl from '@/components/content/QuestionControl'
import { getQuestionsByTestId, getQuestionInfo, getAnswersByQuestionId, getTestById } from '@/lib/tests'

export default async function Page({ params }) {
  const testInfo = await getTestById(params.id)
  const testQuestions = await getQuestionsByTestId(params.id)
  const questionsInfo = await Promise.all(testQuestions.map(async (question, index) => {
    const questionInfo = await getQuestionInfo(question.question_id)
    const answers = await getAnswersByQuestionId(question.question_id)
    return {
      title: questionInfo.question,
      subtitle: 'La pregunta numero: ' + (index + 1),
      id: question.question_id,
      answers: answers.map((answer) => {
        return {
          id: answer.id,
          title: answer.answer,
          isCorrect: answer.iscorrect
        }
      })
    }
  }))
  console.log('Q', questionsInfo)
  return (
    <QuestionControl testInfo={testInfo} testQuestions={testQuestions} questionsInfo={questionsInfo} testId={params.id}/>
  )
}
