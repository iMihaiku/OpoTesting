import style from './content.module.css'
import CustomCard from './CustomCard'
export default function GridTest({ tests }) {
  console.log(tests)
  return (
    <div className={style.gridTest}>
      {tests.map((test) => {
        return <CustomCard key={test.id} testInfo={test} />
      })}
    </div>
  )
}
