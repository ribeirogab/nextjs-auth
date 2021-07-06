import { useEffect } from 'react';

import { useAuth } from '../hooks/auth';
import { api } from '../services/api';

export default function Dashboard() {
  const { user } = useAuth();

  useEffect(() => {
    api.get('/me').then((response) => {
      console.log(response.data);
    }).catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.email}</p>
    </div>
  );
}
