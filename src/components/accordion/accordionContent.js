import {
  IconVisualizationLine16,
  IconTextBox16,
  IconMessages16,
  IconWorld16
} from '@dhis2/ui';

import { dashboardTypes } from '../../constants/dashboardTypes';

function AccordionContent({ dashboard, filter }) {
  const { content, isExpanded } = dashboard;

  if (!content || !isExpanded) {
    return null;
  }

  const filterItems = (dashboardItems) => {
    return filter
      ? dashboardItems.filter((items) => items.type === filter)
      : dashboardItems;
  };

  return (
    <ul aria-labelledby='contents'>
      {filterItems(content.dashboardItems).map((item, index) => {
        const type = dashboardTypes[item.type];

        return (
          <li key={index} className='border-b-2 border-slate-100 p-2 text-sm'>
            <span className='inline-block mr-3'>
              {type === 'text' ? (
                <IconTextBox16 />
              ) : type === 'messages' ? (
                <IconMessages16 />
              ) : type === 'map' ? (
                <IconWorld16 />
              ) : (
                <IconVisualizationLine16 />
              )}
            </span>

            {type === 'text' ? item[type] : item[type].name}
          </li>
        );
      })}
    </ul>
  );
}

export default AccordionContent;
