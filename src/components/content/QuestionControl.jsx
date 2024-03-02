'use client'
import NoQuestions from '@/components/content/NoQuestions'
import Questions from '@/components/content/Questions'
import TestBasicInfo from '@/components/content/TestBasicInfo'
import { useState } from 'react'
export default function QuestionControl({
  testInfo,
  testQuestions,
  questionsInfo,
  testId
}) {
  const [questionActive, setQuestionActive] = useState()
  const [listOfQuestions, setListOfQuestions] = useState(questionsInfo)
  return (
    <main>
      <TestBasicInfo test={testId} testInfo={testInfo} />
      {listOfQuestions.length === 0 ? (
        <NoQuestions
          testId={testId}
          questions={listOfQuestions}
          questionActive={questionActive}
          setQuestionActive={setQuestionActive}
          setListOfQuestions={setListOfQuestions}
        />
      ) : (
        <Questions
          testId={testId}
          questions={listOfQuestions}
          questionActive={questionActive}
          setQuestionActive={setQuestionActive}
          setListOfQuestions={setListOfQuestions}
        />
      )}
    </main>
  )
}
