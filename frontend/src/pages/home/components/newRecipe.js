import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAddRecipe } from '../../../hooks'
import { Message } from '../../../common/message'
import { useCallback, useEffect, useState } from 'react'
/***
 * ---!<input
                            id="timeCooking"
                            name="timeCooking"
                            onChange={formik.handleChange}
                            value={formik.values.timeCooking}
                            type="time" name="appt-time" step="2"
                        />!--->
 */
export const AddRecipeForm = () => {

    const { newRecipe, error, add } = useAddRecipe()
    const [message, setMessage] = useState()
    const [showForm, setShowForm] = useState(false)

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            hours: '',
            minutes: ''
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            hours: Yup.number().min(0).max(24).required(),
            minutes: Yup.number().min(1).max(60).required(),
        }),
        onSubmit: () => {
            let timeCooking = formik.values.hours * 3600 + formik.values.minutes * 60
            add({ ...formik.values, timeCooking })
        },
    })

    const resetForm = useCallback(() => {
        formik.resetForm()
        setShowForm(false)
    }, [formik, setShowForm])

    useEffect(() => {
        if (error) {
            setMessage({ text: error, type: 'error' })
        }
    }, [error])
    useEffect(() => {
        if (newRecipe) {
            resetForm()
        }
    }, [newRecipe, resetForm])

    return (
        <div className={showForm ? 'modal' : ''}>
            {!showForm && <button onClick={() => setShowForm(true)}>add new recipe</button>}
            {showForm && <form className="formAdd" onSubmit={formik.handleSubmit}>
                <div>
                    <h4>Add new recipe</h4>
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
                    <h4 htmlFor="timeCooking">
                        {/*formik.touched.timeCooking && formik.errors.timeCooking ? '*' : null*/}Time Cooking
                    </h4>
                    <div className='time-cooking'>
                        <div className='input-time'>
                            <label htmlFor="hours">
                                {formik.touched.hours && formik.errors.hours ? '*' : null}hours
                            </label>
                            <input id="hours" placeholder='00' type="number" min={0} max={24} value={formik.values.hours} onChange={formik.handleChange} />
                        </div>
                        :
                        <div className='input-time'>
                            <label htmlFor="minutes">
                                {formik.touched.minutes && formik.errors.minutes ? '*' : null}minutes
                            </label>
                            <input id="minutes" placeholder='00' type="number" min={0} max={60} value={formik.values.minutes} onChange={formik.handleChange} />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="description">
                        {formik.touched.description && formik.errors.description ? '*' : null}description
                    </label>
                    <div>
                        <textarea
                            id="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            name="description"
                            type="textarea"
                            rows={3}
                        />
                    </div>
                </div>
                <button type="submit">
                    add
                </button>
                <button type="button" onClick={() => resetForm()}>
                    cancel
                </button>
                {message !== null && <Message message={message} callback={() => setMessage(null)} />}
            </form>}
        </div>
    )
}