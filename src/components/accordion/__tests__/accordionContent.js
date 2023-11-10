import { render, screen, within } from '@testing-library/react';
import AccordionContent from '../accordionContent';

const items = [
  {
    map: {
      id: 'voX07ulo2Bq',
      name: 'coverage this year'
    },
    shape: 'NORMAL',
    type: 'MAP',
    id: 'i6NTSuDsk6l'
  },
  {
    visualization: {
      type: 'COLUMN',
      id: 'DeRrc1gTMjn',
      name: 'ANC: ANC 3 coverage by districts last 12 months'
    },
    type: 'VISUALIZATION',
    id: 'azz0KRlHgLs'
  }
];
const props = {
  filter: 'MAP',
  dashboard: {
    isExpanded: true,
    content: {
      dashboardItems: items
    }
  }
};

describe('render Accordion Title component', () => {
  it('should render content with list', () => {
    render(<AccordionContent {...props} />);

    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(1);
  });
});
