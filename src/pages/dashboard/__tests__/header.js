import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../header';

describe('render page header', () => {
  it('should have logo', () => {
    render(<Header />);

    expect(screen.getByText(/Dashboards/i)).toBeInTheDocument();
  });

  it('should render filter dropdown', () => {
    render(<Header />);

    expect(screen.getAllByRole('option').length).toBe(5);
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'map' })
    );
    expect(screen.getByRole('option', { name: 'map' }).selected).toBe(true);
  });
});
