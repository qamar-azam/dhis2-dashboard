import { createContext } from 'react';
import useDashboard from '../hooks/useDashboard';

export const DashboardContext = createContext({
  state: {},
  dispatch: (val) => {}
});

function DashboardProvider({ children }) {
  const { state, dispatch } = useDashboard();
  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardProvider };
