'use server'
import { sql } from '@vercel/postgres'

async function recuperarTests() {
  const tests = await sql`SELECT * FROM OPO_Test`
  return tests.rows
}
async function crearTest(nombre, descripcion, userName, userId) {
  const test =
    await sql`INSERT INTO OPO_Test (Id, Name, Description, User_name, User_id) VALUES (DEFAULT, ${nombre}, ${descripcion}, ${userName}, ${userId}) RETURNING *`
  return test.rows[0]
}
async function getTestById(id) {
  const test = await sql`SELECT * FROM OPO_Test WHERE Id = ${id}`
  return test.rows[0]
}
async function getQuestionsByTestId(id) {
  const questions =
    await sql`SELECT * FROM OPO_Test_Questions WHERE Test_id = ${id}`
  return questions.rows
}
async function getQuestionInfo(id) {
  const question = await sql`SELECT * FROM OPO_Questions WHERE Id = ${id}`
  return question.rows[0]
}
async function getAnswersByQuestionId(id) {
  const answers =
    await sql`SELECT * FROM OPO_Test_Answers WHERE Question_id = ${id}`
  return answers.rows
}
async function addQuestion(question) {
  const test =
    await sql`INSERT INTO OPO_Questions (Id, Question) VALUES (DEFAULT, ${question}) RETURNING *`
  return test.rows[0]
}
async function addQuestionToTest(testId, questionId) {
  const test =
    await sql`INSERT INTO OPO_Test_Questions (Test_id, Question_id) VALUES (${testId}, ${questionId}) RETURNING *`
  return test.rows[0]
}
async function addAnswersToQuestion(anwser, questionId, isCorrect) {
  console.log(anwser, questionId, isCorrect)
  const test =
    await sql`INSERT INTO OPO_Test_Answers (Id, Answer, Question_id, Iscorrect) VALUES (DEFAULT, ${anwser}, ${questionId}, ${isCorrect}) RETURNING *`
  return test.rows[0]
}
async function updateQuestion(id, question) {
  const test =
    await sql`UPDATE OPO_Questions SET Question = ${question} WHERE Id = ${id} RETURNING *`
  return test.rows[0]
}
async function updateAnswer(id, answer) {
  const { respuesta, isCorrect } = answer
  const test =
    await sql`UPDATE OPO_Test_Answers SET Answer = ${respuesta}, Iscorrect = ${isCorrect} WHERE Id = ${id} RETURNING *`
  return test.rows[0]
}
async function updateTestInfo(test, nombre, descripcion) {
  const testInfo =
    await sql`UPDATE OPO_Test SET Name = ${nombre}, Description = ${descripcion} WHERE Id = ${test} RETURNING *`
  return testInfo.rows[0]
}
export {
  recuperarTests,
  crearTest,
  getTestById,
  getQuestionsByTestId,
  addQuestionToTest,
  addAnswersToQuestion,
  addQuestion,
  getQuestionInfo,
  getAnswersByQuestionId,
  updateQuestion,
  updateAnswer,
  updateTestInfo
}
