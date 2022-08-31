import * as Yup from 'yup';
import { useFormik } from 'formik';

const loginSchema = Yup.object().shape({
    userName: Yup.string().required(),
    password: Yup.string().required()
})
const signupSchema = Yup.object().shape({
    userName: Yup.string().required(),
    password: Yup.string().required().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,'Password should have a lower and upercase letter, minumn 6 characters and numbers'),
})
export const AuthForm = ({ handleFormSubmit, labelButton }) => {

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: labelButton === 'Login' ? loginSchema : signupSchema,
        onSubmit: () => {
            handleFormSubmit(formik.values.userName, formik.values.password)
        },
});

return (
    <form onSubmit={formik.handleSubmit}>
        <div className='input-auth'>
            <label htmlFor="username">
                {formik.touched.userName && formik.errors.userName ? '*' : null}Username
            </label>
            <input
                id="username"
                name="userName"
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? formik.errors.userName : ''}
        </div>
        <div className='input-auth'>
            <label htmlFor="password">
                {formik.touched.password && formik.errors.password ? '*' : null}Password
            </label>
            <input
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                type="password"
            />
             {formik.touched.password && formik.errors.password ? formik.errors.password : ''}
        </div>
        <button type="submit">
            {labelButton}
        </button>
    </form>
)
}