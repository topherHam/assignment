import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
//import act from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, } from 'react-router-dom'
import store from '../../../redux/store';

import { AddRecipeForm } from './newRecipe';

test('user can use form add new recipe', async () => {
    render(<Router><Provider store={store}><AddRecipeForm/></Provider></Router>);
    const user = userEvent.setup()
    const addBtn = screen.getByRole('button',{name: /add new recipe/i});
    expect(addBtn).toBeInTheDocument();
    await user.click(addBtn)
    const title = screen.getByLabelText(/^title$/i);
    const details = screen.getByText(/^description$/i);
    const timeCookingHours = screen.getByText(/^hours$/i);
    const timeCookingMinutes = screen.getByText(/^minutes$/i);
    
    const submitBtn = screen.getByText('add');
    expect(title).toBeInTheDocument();
    await user.type(title,'test')
    expect(details).toBeInTheDocument();
    await user.type(details,'this is a test')
    expect(timeCookingHours).toBeInTheDocument();
    expect(timeCookingMinutes).toBeInTheDocument();
    await user.type(timeCookingHours,'1')
    await user.type(timeCookingMinutes,'1')
    expect(submitBtn).toBeInTheDocument();
    await user.click(submitBtn);

});
