export const FormLogin = ({ handleChangeUsername, userName, handleChangePassword, password, handleLogin }) =>
    <form>
        <div>
            <label htmlFor="username">
                Username
            </label>
            <input
                id="username"
                onChange={handleChangeUsername}
                value={userName}
            />
        </div>
        <div>
            <label htmlFor="password">
                Password
            </label>
            <input
                id="password"
                onChange={handleChangePassword}
                value={password}
                type="password"
            />
        </div>
        <button onClick={handleLogin}>
            Login
        </button>
    </form>