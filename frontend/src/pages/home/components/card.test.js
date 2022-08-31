import { render, screen } from '@testing-library/react';
import useFormatedSeconds from '../../../hooks/useFormatedDate';
import { Card } from './card';

test('card print correct values', async () => {

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
    let time = useFormatedSeconds(recipe.timeCooking)
    expect(screen.getByText(/Title/).textContent.includes(recipe.title)).toBe(true)
    expect(screen.getByText(recipe.description)).toBeInTheDocument(true)
    expect(screen.getByText(/Time Cooking:/).textContent.includes(time)).toBe(true)

})

