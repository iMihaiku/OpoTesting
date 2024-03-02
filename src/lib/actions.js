'use server'

import { cookies } from 'next/headers'

export async function serverExample() {
  console.log('serverExample')
  return 'server execution'
}

export async function setCookie(cookieName, cookieValue) {
  const cookieStorage = cookies()
  cookieStorage.set(cookieName, cookieValue)
}
