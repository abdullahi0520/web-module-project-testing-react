import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const fakeEpisode = {
    id:1, 
    image:'https://static.tvmaze.com/uploads/images/medium_landscape/342/855794.jpg', 
    name:'', 
    season:1, 
    number:1, 
    summary:'test', 
    runtime:1
}

const imgFakeEpisode = {
    id:2, 
    image:null, 
    name:'', 
    season:2, 
    number:1, 
    summary:'test no image', 
    runtime:1
}

test("renders without error", () => {
    render(<Episode episode={fakeEpisode}/>)
});

test("renders the summary test passed as prop", ()=>{
    
    render(<Episode episode={fakeEpisode}/>)
    const summary = screen.queryByText(/test/i);
    expect(summary).toBeInTheDocument();
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={imgFakeEpisode}/>)
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(image).toBeInTheDocument();




});
