import { useContext, useEffect } from 'react';
import Accordion from '../../components/accordion';
import useDashboard from '../../hooks/useDashboard';
import { DashboardContext } from '../../context/dashboardContext';
import Header from './header';
import Loader from '../../components/loader';

function Dashboard() {
  const { state, dispatch } = useContext(DashboardContext);
  const { fetchDashboards, fetchDasboardDetailsById } = useDashboard();

  const checkContentExist = (id) => {
    return state.dashboards.some(
      (dashboard) => dashboard.nav.id === id && dashboard.content !== null
    );
  };
  const getDashboards = async () => {
    try {
      dispatch({ type: 'loading', loading: true });
      const data = await fetchDashboards();
      if (data) {
        const firstDashboardId = data.dashboards[0].id;
        const dasboardDetails = await fetchDasboardDetailsById(
          firstDashboardId
        );

        dispatch({
          type: 'set_dashboards',
          dashboard: { list: data.dashboards, dasboardDetails }
        });

        // check if dashboard starred exist in localstorage
        const localStorageStarred = JSON.parse(localStorage.getItem('starred'));
        if (!localStorageStarred) {
          let starred = {};
          data.dashboards.forEach((dashboard) => {
            starred[dashboard.id] = dashboard.starred;
          });
          dispatch({ type: 'set_starred', starred });
        }
      }
      dispatch({ type: 'loading', loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  const getDashboardDetails = async (id) => {
    // expand accordion if content exist
    if (checkContentExist(id)) {
      dispatch({ type: 'set_expanded', id });
    } else {
      const dasboardDetails = await fetchDasboardDetailsById(id);
      dispatch({ type: 'update_dashboards', dasboardDetails });
    }
  };

  useEffect(() => {
    getDashboards();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      {state.loading && <Loader />}
      <Accordion getDashboardDetails={getDashboardDetails} />
    </>
  );
}

export default Dashboard;
