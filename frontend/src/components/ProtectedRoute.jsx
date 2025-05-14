import { Navigate } from 'react-router'
import { useUserStore } from '../store/user.store'

export function ProtectedRoute ({ children }) {
  const user = useUserStore(state => state.user)
  if (!user) {
    return <Navigate to='/' />
  }

  return children
}
