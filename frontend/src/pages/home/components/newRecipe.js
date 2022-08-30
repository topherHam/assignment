import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAddRecipe } from '../../../hooks'
import { Message } from '../../../common/message'
import { useCallback, useEffect, useState } from 'react'

export const AddRecipeForm = () => {

    const { newRecipe, error, add } = useAddRecipe()
    const [message, setMessage] = useState()
    const [showForm, setShowForm] = useState(false)

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            timeCooking: 36000
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            timeCooking: Yup.string().required(),
        }),
        onSubmit: () => add(formik.values),
    })

    const resetForm = useCallback(() => {
        formik.resetForm()
        setShowForm(false)
    }, [formik, setShowForm])

    useEffect(() => {
        if (error) {
            setMessage({ text: error, type: 'error' })
        }
        else if (newRecipe) {
            resetForm()
        }
    }, [error, newRecipe, resetForm])

    return (
        <>
            {!showForm && <button onClick={() => setShowForm(true)}>+</button>}
            {showForm && <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">
                        {formik.touched.title && formik.errors.title ? '*' : null}title
                    </label>
                    <div>
                        <input
                            id="title"
                            name="title"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="timeCooking">
                        {formik.touched.timeCooking && formik.errors.timeCooking ? '*' : null}timeCooking
                    </label>
                    <div>
                        <input
                            id="timeCooking"
                            name="timeCooking"
                            onChange={formik.handleChange}
                            value={formik.values.timeCooking}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="description">
                        {formik.touched.description && formik.errors.description ? '*' : null}description
                    </label>
                    <div>
                        <input
                            id="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            name="description"
                            type="textarea"
                        />
                    </div>
                </div>
                <button type="submit">
                    add
                </button>
                <button onClick={() => resetForm()}>
                    cancel
                </button>
                {message !== null && <Message message={message} callback={() => setMessage(null)} />}
            </form>}
        </>
    )
}