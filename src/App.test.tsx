import React from 'react';
import { render, screen } from '@testing-library/react';
import Wordle from './Wordle';

test('renders learn react link', () => {
  render(<Wordle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
