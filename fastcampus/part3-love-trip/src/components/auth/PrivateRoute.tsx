import { useUserStore } from '@store/atom/user'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.getUser())

  if (user == null) {
    return <Navigate to="/signin" replace={true} />
  }

  return <>{children}</>
}

export default PrivateRoute