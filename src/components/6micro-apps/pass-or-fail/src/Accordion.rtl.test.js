/*
    This '@testing-library/react' test file avoids 
    [False +ve] and [False -ve] cases, a efficient 
    contrary to pass-or-fail\src\Accordion.test.js

    I am Avoiding to rely on implementation details, 
    because they can change and need to update tests.
*/

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { fetchMock } from '@react-mock/fetch';

import Accordion from './Accordion'

test('can open accordian items to see the contents', () => {
    const hats = { title: 'Favorite Hats', contents: 'Fedoras are classy' }
    const footware = {
        title: 'Favorite Footware',
        contents: 'Flipflops are the best',
    }
    const clickFn = jest.fn();
    const { queryByText, getByText, getByRole } = render(<Accordion items={[hats, footware]} />);

    expect(getByText(hats.contents)).toBeInTheDocument();
    // expect(queryByText(footware.contents)).toBeNull();

    // fireEvent.click(getByText(hats.title));

    // fireEvent.click(getByText(footware.title));
    // console.log('clg', getByText('button'));
    expect(getByText(footware.contents)).toBeInTheDocument();
    // expect(queryByText(hats.contents)).toBeNull();
});
