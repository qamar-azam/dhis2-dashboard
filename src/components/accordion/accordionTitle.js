import {
  IconStar16,
  IconStarFilled16,
  IconChevronDown24,
  IconChevronUp24
} from '@dhis2/ui';
import { useContext } from 'react';
import { DashboardContext } from '../../context/dashboardContext';

function AccordionTitle({ nav, isExpanded, getDashboardDetails }) {
  const { state, dispatch } = useContext(DashboardContext);

  return (
    <>
      <div className='flex'>
        <h3
          className='font-bold cursor-pointer'
          onClick={() => getDashboardDetails(nav.id)}
        >
          {nav.displayName}
        </h3>
        <div className='ml-auto'>
          <span
            className='mr-8 inline-block cursor-pointer'
            data-testid={
              state.starred && state.starred[nav.id]
                ? 'filled-star'
                : 'empty-star'
            }
            onClick={() => dispatch({ type: 'update_starred', id: nav.id })}
          >
            {state.starred && state.starred[nav.id] ? (
              <IconStarFilled16 />
            ) : (
              <IconStar16 title='emptyStar' />
            )}
          </span>

          <span
            className='inline-block'
            role='button'
            onClick={() => dispatch({ type: 'set_expanded', id: nav.id })}
          >
            {isExpanded ? <IconChevronUp24 /> : <IconChevronDown24 />}
          </span>
        </div>
      </div>
    </>
  );
}

export default AccordionTitle;
