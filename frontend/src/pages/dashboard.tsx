import { useAuth } from '../hooks/auth';

export default function Dashboard() {
  const { user } = useAuth();
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.email}</p>
    </div>
  );
}
