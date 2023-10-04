import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
screen.getByText("BookingForm");