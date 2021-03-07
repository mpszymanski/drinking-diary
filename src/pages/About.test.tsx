import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders settings page', () => {
  render(<About />);
  const linkElement = screen.getByText(/App about/i);
  expect(linkElement).toBeInTheDocument();
});
