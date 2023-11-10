import { DashboardProvider } from './context/dashboardContext';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='max-w-3xl m-auto p-12'>
        <DashboardProvider>
          <Dashboard />
        </DashboardProvider>
      </div>
    </div>
  );
}

export default App;
