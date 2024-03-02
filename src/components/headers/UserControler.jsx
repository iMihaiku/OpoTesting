import { cookies } from 'next/headers'
import UserLogin from './UserLogin'
import UserPanel from './UserPanel'

export default function UserControler() {
  const cookieStorage = cookies()
  const cookieString = cookieStorage.get('user')?.value
  const cookie = cookieString !== undefined ? JSON.parse(cookieString) : null
  return (
    <div>
      {
        cookie !== null
          ? <UserPanel user={cookie.user}/>
          : <UserLogin />
      }
    </div>
  )
}
