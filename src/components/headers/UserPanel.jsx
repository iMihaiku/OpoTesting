import Image from 'next/image'
import logo from '../../../public/Logo3.png'
export default function UserPanel({ user }) {
  return (
    <>
      <Image src={logo} alt={user.username} width={50} height={50} className="logo"/>
    </>
  )
}
