import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../Components/App';

test('renders greeting', () => {
  const { getByText } = render(<App />);
  const greeting = getByText(/Welcome to my Random Pokemon React Project!/i);
  expect(greeting).toBeInTheDocument();
});

test('renders link to pokeapi', () => {
  const { getByText } = render(<App />);
  const linkText = getByText(/This project uses pokeapi/i);
  expect(linkText).toBeInTheDocument();
});

test('renders link to github repo', () => {
  const { getByText } = render(<App />);
  const linkText = getByText(/Github Repo/i);
  expect(linkText).toBeInTheDocument();
});
