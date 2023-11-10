import { useContext } from 'react';
import { DashboardContext } from '../../context/dashboardContext';
import { dashboardTypes } from '../../constants/dashboardTypes';

function FilterDropdown() {
  const { dispatch } = useContext(DashboardContext);

  const options = Object.keys(dashboardTypes).map((key) => {
    return (
      <option value={key} key={key}>
        {dashboardTypes[key]}
      </option>
    );
  });

  return (
    <select
      className='rounded text-small px-2 py-1'
      data-testid='filter-dropdown'
      onChange={(e) => dispatch({ type: 'set_filter', filter: e.target.value })}
    >
      <option value=''>All types</option>
      {options}
    </select>
  );
}

export default FilterDropdown;
