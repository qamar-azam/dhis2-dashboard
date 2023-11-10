import AccordionNav from './accordionTitle';
import AccordionContent from './accordionContent';
import { useContext } from 'react';
import { DashboardContext } from '../../context/dashboardContext';

function Accordion({ getDashboardDetails }) {
  const { state } = useContext(DashboardContext);

  if (state.dashboards?.length === 0) {
    return null;
  }

  return (
    <>
      {state.dashboards.map((dashboard, index) => (
        <div key={index} className='bg-white mb-4 p-4 rounded shadow-md'>
          <AccordionNav
            nav={dashboard.nav}
            isExpanded={dashboard.isExpanded}
            getDashboardDetails={getDashboardDetails}
          />
          <AccordionContent dashboard={dashboard} filter={state.filter} />
        </div>
      ))}
    </>
  );
}

export default Accordion;
