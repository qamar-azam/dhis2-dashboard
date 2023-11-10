import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccordionTitle from '../accordionTitle';
import { DashboardContext } from '../../../context/dashboardContext';

const props = {
  id: '1',
  displayName: 'nav'
};

const dispatchMock = jest.fn();
const providerProps = {
  state: {
    starred: {
      1: true,
      2: false
    }
  },
  dispatch: dispatchMock
};

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <DashboardContext.Provider value={providerProps}>
      {ui}
    </DashboardContext.Provider>,
    renderOptions
  );
};

describe('render Accordion Title component', () => {
  it('should show accordtion titles', () => {
    customRender(<AccordionTitle nav={props} />, { providerProps });

    expect(screen.getByText('nav')).toBeInTheDocument();
  });

  it('should display star icons and call function on click', async () => {
    customRender(<AccordionTitle nav={props} />, { providerProps });

    expect(screen.getByTestId('filled-star')).toBeInTheDocument();
    expect(screen.queryByTestId('empty-star')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('filled-star'));

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'update_starred',
      id: '1'
    });
  });

  it('should display arrow', async () => {
    customRender(<AccordionTitle nav={props} />, { providerProps });

    expect(screen.getByRole('button')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'set_expanded',
      id: '1'
    });
  });
});
