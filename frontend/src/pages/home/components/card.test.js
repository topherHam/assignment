import { render, screen } from '@testing-library/react';
import { Card } from './card';
/*
const data = {
    "recipes": [
        {
            "_id": "630e75d8e0d3da87ac80ff66",
            "title": "test",
            "description": "this is the descriotion",
            "timeCooking": 36000,
            "user": "63093e9c799bc04a27d56d65",
            "__v": 0
        },
        {
            "_id": "630e77b6e0d3da87ac80ff84",
            "title": "test2",
            "description": "testeee",
            "timeCooking": 36000,
            "user": "63093e9c799bc04a27d56d65",
            "__v": 0
        },
        {
            "_id": "630e77d7e0d3da87ac80ff8d",
            "title": "test3",
            "description": "test333",
            "timeCooking": 36000,
            "user": "63093e9c799bc04a27d56d65",
            "__v": 0
        },
        {
            "_id": "630e7823e0d3da87ac80ff96",
            "title": "rerer",
            "description": "wewewe",
            "timeCooking": 36000,
            "user": "63093e9c799bc04a27d56d65",
            "__v": 0
        },]
}
*/
test('card print correct values', async () => {
    /*jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(data)
    })
    );*/
    const recipe =
    {
        "_id": "630e75d8e0d3da87ac80ff66",
        "title": "test",
        "description": "this is the descriotion",
        "timeCooking": 36000,
        "user": "63093e9c799bc04a27d56d65",
        "__v": 0
    }

    render(<Card recipe={recipe} />)
    
    expect(screen.getByText(/Title/).textContent.includes(recipe.title)).toBe(true)
    expect(screen.getByText(recipe.description)).toBeInTheDocument(true)
    expect(screen.getByText(/Time Cooking/).textContent.includes(recipe.timeCooking)).toBe(true)

})

