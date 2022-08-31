import { render, screen } from '@testing-library/react';
//import act from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Auth from './index';
import { BrowserRouter as Router, } from 'react-router-dom'


test('user can swicth between login and signup forms', async () => {
    render(<Router><Provider store={store}><Auth /></Provider></Router>);
    const login = screen.getByText(/^Welcome to recipes$/i)
    const user = userEvent.setup()
    expect(login).toBeInTheDocument();
    const signuplink = screen.getByText(/Not an account/);
    expect(signuplink).toBeInTheDocument();
    await user.click(signuplink)
    
    expect(login).not.toBeInTheDocument()
    const signup = screen.getByText(/^Create an account quickly$/i);
    expect(signup).toBeInTheDocument();
    const backBtn = screen.getByText(/^Back to login$/i);
    expect(backBtn).toBeInTheDocument();
    await user.click(backBtn)
    expect(signup).not.toBeInTheDocument()
    expect(screen.getByText(/^Welcome to recipes$/i)).toBeInTheDocument()

});
