import { Navigate } from 'react-router-dom';
import useUser from '@/hooks/auth/useUser';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useUser().user;

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default PrivateRoute;
