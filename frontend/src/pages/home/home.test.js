import { render, screen } from '@testing-library/react';
//import act from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router, } from 'react-router-dom'
import Home from './index';


test('user can see home', async () => {
    render(<Router><Provider store={store}><Home /></Provider></Router>);
    const home = screen.getByText(/^Welcome to recipes$/i);
    expect(home).toBeInTheDocument();
});
test('user can open add recipe form', async () => {
    render(<Router><Provider store={store}><Home /></Provider></Router>);
    const addBtn = screen.getByRole('button',{name: /add new recipe/i});
    const user = userEvent.setup()
    expect(addBtn).toBeInTheDocument();
    await user.click(addBtn)
    const formAdd = screen.getByText(/^Add new recipe$/i);
    expect(formAdd).toBeInTheDocument();
    const cancelBtn = screen.getByText(/^cancel$/i);
    await user.click(cancelBtn)
    expect(formAdd).not.toBeInTheDocument()
});
