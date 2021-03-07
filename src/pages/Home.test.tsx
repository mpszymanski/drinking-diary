import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/App home/i);
  expect(linkElement).toBeInTheDocument();
});
