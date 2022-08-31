
import { render, screen } from '@testing-library/react';
//import act from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux'
import store from '../../../redux/store';

import { BrowserRouter as Router, } from 'react-router-dom'
import Signup from './signup';

test('signup form interaction', async () => {
    const user = userEvent.setup()
    render(<Router><Provider store={store}><Signup /></Provider></Router>);
    const signup = screen.getByText(/^Create an account quickly$/i);
    expect(signup).toBeInTheDocument();
    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/username/i)
    const signupbtn = screen.getByText(/signup/i)
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(signupbtn).toBeInTheDocument()
    await user.type(username, 'chris')
    await user.type(password, '123456')
    await user.click(signupbtn)
});
