import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';


import { PlayerCard } from './PlayerCard';

test('IT RENDERS!!!', async () => {
    const data = await render(<PlayerCard />);
});
