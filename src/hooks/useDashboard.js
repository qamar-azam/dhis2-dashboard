import { useEffect, useReducer } from 'react';

const DASHBOARD_URL =
  'https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/dashboards.json';

function reducer(state, action) {
  if (action.type === 'loading') {
    return {
      ...state,
      loading: action.loading
    };
  }

  if (action.type === 'error') {
    return {
      ...state,
      errror: action.msg
    };
  }

  if (action.type === 'set_filter') {
    return {
      ...state,
      filter: action.filter
    };
  }
  if (action.type === 'set_expanded') {
    let dashboards = [...state.dashboards].map((dashboard) => {
      if (dashboard.nav.id === action.id) {
        dashboard.isExpanded = !dashboard.isExpanded;
      }
      return dashboard;
    });

    return {
      ...state,
      dashboards
    };
  }

  if (action.type === 'update_starred') {
    const starred = {
      ...state.starred,
      [action.id]: !state.starred[action.id]
    };

    return {
      ...state,
      starred
    };
  }

  if (action.type === 'set_starred') {
    return {
      ...state,
      starred: action.starred
    };
  }

  if (action.type === 'set_dashboards') {
    const { list, dasboardDetails } = action.dashboard;
    const dashboardList = list.map((dashboard) => {
      return {
        nav: dashboard,
        isExpanded: dashboard.id === dasboardDetails.id ? true : false,
        content: dashboard.id === dasboardDetails.id ? dasboardDetails : null
      };
    });

    return {
      ...state,
      dashboards: dashboardList
    };
  }
  if (action.type === 'update_dashboards') {
    const { dasboardDetails } = action;
    let dashboardList = [...state.dashboards].map((dashboard) => {
      if (dashboard.nav.id === dasboardDetails.id) {
        dashboard.isExpanded = true;
        dashboard.content = dasboardDetails;
      }
      return dashboard;
    });

    return {
      ...state,
      dashboards: dashboardList
    };
  }
}

export const initialState = {
  filter: '',
  starred: {},
  dashboards: [
    {
      id: '',
      nav: '',
      content: {},
      isExpanded: false
    }
  ],
  loading: false,
  error: ''
};

function useDashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // save starred in localstorage
    if (state.starred && Object.keys(state.starred).length === 0) {
      let starred = localStorage.getItem('starred');
      dispatch({ type: 'set_starred', starred: JSON.parse(starred) });
    } else {
      localStorage.setItem('starred', JSON.stringify(state.starred));
    }
  }, [state.starred, dispatch]);

  const fetchDashboards = async () => {
    try {
      const data = await fetch(DASHBOARD_URL).then((res) => res.json());
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDasboardDetailsById = async (id) => {
    try {
      const DASHBOARD_DETAIL_URL = `https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/${id}.json`;
      const data = await fetch(DASHBOARD_DETAIL_URL).then((res) => res.json());
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const checkContentExist = (id) => {
    return state.dashboards.some(
      (dashboard) => dashboard.nav.id === id && dashboard.content !== null
    );
  };

  return {
    state,
    dispatch,
    checkContentExist,
    fetchDashboards,
    fetchDasboardDetailsById
  };
}

export default useDashboard;
