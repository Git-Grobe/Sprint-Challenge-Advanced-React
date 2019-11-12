import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';


import { NavBar } from './NavBar';

test('IT RENDERS!!!', async () => {
    const data = await render(<NavBar />);
});
