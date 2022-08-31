import { fireEvent, render, screen, waitFor } from '@testing-library/react';
//import act from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, } from 'react-router-dom'
import store from '../../../redux/store';

import { AddRecipeForm } from './newRecipe';

test('close after submit', async () => {
    render(<Router><Provider store={store}><AddRecipeForm/></Provider></Router>);
    const add = jest.fn();
    const user = userEvent.setup()
    const addBtn = screen.getByText('+');
    expect(addBtn).toBeInTheDocument();
    await user.click(addBtn)
    const title = screen.getByLabelText(/^title$/i);
    const details = screen.getByText(/^description$/i);
    const timeCooking = screen.getByText(/^timeCooking$/i);
    
    const submitBtn = screen.getByText('add');
    expect(title).toBeInTheDocument();
    await user.type(title,'test')
    expect(details).toBeInTheDocument();
    await user.type(details,'this is a test')
    expect(timeCooking).toBeInTheDocument();
    await user.type(timeCooking,'3600')
    expect(submitBtn).toBeInTheDocument();
    await user.click(submitBtn);
    /*await waitFor(() =>
    expect(add).toHaveBeenCalledWith({
        title:'test',
        details:'test',
        timeCooking:'3600'
    })
  )*/

});
