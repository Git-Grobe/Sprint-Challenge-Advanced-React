import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';


import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('IT RENDERS!!!', () => {
  render(<App />);
});


test('GET THE TITLE!!', () => {
  const { getByText } = render(<App />);
  getByText(/Sprint-Challenge-Advanced-React/i);
});

