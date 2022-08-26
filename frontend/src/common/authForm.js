import * as Yup from 'yup';
import { useFormik } from 'formik';

export const AuthForm = ({ handleFormSubmit, labelButton }) => {

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            userName: Yup.string().required(),
            password: Yup.string().required(),
        }),
        onSubmit: () => {
            handleFormSubmit(formik.values.userName, formik.values.password)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">
                {formik.touched.userName && formik.errors.userName ? '*' : null}Username
                </label>
                <input
                    id="username"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                />
            </div>
            <div>
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
            </div>
            <button type="submit">
                {labelButton}
            </button>
        </form>
    )
}