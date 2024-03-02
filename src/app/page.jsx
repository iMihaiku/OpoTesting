import style from './page.module.css'
import Content from '@/components/content/Content'
import Footer from '@/components/footer/Footer'

export default function Page() {
  return (
    <main className={style.main}>
      <Content />
      <Footer />
    </main>
  )
}
