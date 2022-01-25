import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const fakeShow = {
    name: 'fake show',
    summary:'fake summary',
    seasons: [
        {
            id: 0,
            name: 'season 1',
            episodes: []
        },
        {
            id: 1,
            name: 'season 2',
            episodes: []  
        },
        {
            id: 2,
            name: 'season 3',
            episodes: []  
        }
    ]
}

test('renders without errors', ()=>{
    render(<Show show={fakeShow} selectedSeason={'none'}/>);
});

test('renders Loading component when prop show is null', () => {});
render(<Show show={null} />);
const load = screen.queryByTestId('loading-container')
expect(load).toBeInTheDocument();

test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={fakeShow} selectedSeason={'none'}/>);
    const seasonOption = screen.queryAllByTestId('season-option');
    expect(seasonOption).toHaveLength(3)
});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn()
    render(<Show show={fakeShow} selectedSeason={'none'} handleSelect={handleSelect}/>);
    const select = screen.getByLabelText(/select a season/i)
    userEvent.selectOptions(select,['1']);
    
    expect(handleSelect).toBeCalled();


});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } =  render(<Show show={fakeShow} selectedSeason={'none'}/>);
    let episodes = screen.queryByTestId('episodes-container');
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show show={fakeShow} selectedSeason={1}/>)
});
