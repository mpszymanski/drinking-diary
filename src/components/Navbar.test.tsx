import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import {MemoryRouter} from "react-router-dom";

test('renders navbar', () => {
  render(
    <MemoryRouter>
      <Navbar routes={[]} />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Drinking Diary/i);
  expect(linkElement).toBeInTheDocument();
});
