import { act, render, screen, waitFor } from '@testing-library/react';
//import act from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux'
import store from '../../../redux/store';
import Login from './login';
import { BrowserRouter as Router, } from 'react-router-dom'
import { AuthForm } from '../../../common/authForm';

test('login form interaction', async () => {
    const makeLogin = jest.fn()
    render(<Router><Provider store={store}><AuthForm labelButton={'login'} handleFormSubmit={makeLogin} /></Provider></Router>);
    const user = userEvent.setup()
    
    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/username/i)
    const loginBtn = screen.getByText(/login/i)
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
    await user.type(username, 'chris')
    await user.type(password, '123456')
    await user.click(loginBtn)
    /*await act(() =>
    expect(makeLogin).toHaveBeenCalledWith({
        username:'test',
        password:'test',
    })
  )*/
});