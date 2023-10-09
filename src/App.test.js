import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
screen.getByText("BookingForm");
try {
  const response = await fetch('https://example.com/api');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  // Process the data
} catch (error) {
  console.error('Error fetching data:', error);
}