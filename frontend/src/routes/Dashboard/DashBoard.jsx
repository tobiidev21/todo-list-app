import React from 'react'
import { useUserStore } from '../../store/user.store'

export function DashBoard () {
  const user = useUserStore((state) => state.user)
  return (
    <>
      <h1>DashBoard</h1>
      <div>user: {user.name}</div>
      <div>email: {user.email}</div>
    </>
  )
}
