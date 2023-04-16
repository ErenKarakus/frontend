import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewForm2Mutation } from "./form2sApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"

const NewForm2Form = ({ users }) => {

    const [addNewForm2, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewForm2Mutation()

    const navigate = useNavigate()

    const [q1, setQ1] = useState('')
    const [q2, setQ2] = useState('')
    const [q3, setQ3] = useState('')
    const [q4, setQ4] = useState('')
    const [q5, setQ5] = useState('')
    const [q6, setQ6] = useState('')
    const [q7, setQ7] = useState('')
    const [q8, setQ8] = useState('')
    const [q9, setQ9] = useState('')
    const [userId, setUserId] = useState(users[0].id)

    useEffect(() => {
        if (isSuccess) {
            setQ1('')
            setQ2('')
            setQ3('')
            setQ4('')
            setQ5('')
            setQ6('')
            setQ7('')
            setQ8('')
            setQ9('')
            setUserId('')
            navigate('/dash/form2s')
        }
    }, [isSuccess, navigate])

    const onQ1Changed = e => setQ1(e.target.value)
    // const onQ2Changed = e => setQ2(e.target.value)
    // const onQ3Changed = e => setQ3(e.target.value)
    // const onQ4Changed = e => setQ4(e.target.value)
    // const onQ5Changed = e => setQ5(e.target.value)
    // const onQ6Changed = e => setQ6(e.target.value)
    // const onQ7Changed = e => setQ7(e.target.value)
    // const onQ8Changed = e => setQ8(e.target.value)
    // const onQ9Changed = e => setQ9(e.target.value)
    //const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [q1, q2, q3, q4, q5, q6, q7, q8, q9, userId].every(Boolean) && !isLoading

    const onSaveForm2Clicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewForm2({ user: userId, q1, q2, q3, q4, q5, q6, q7, q8, q9 })
        }
    }

    const errClass = isError ? "errmsg" : "offscreen"
    const validQ1Class= !q1 ? "form__input--incomplete" : ''
    // const validQ2Class= !q2 ? "form__input--incomplete" : ''
    // const validQ3Class= !q3 ? "form__input--incomplete" : ''
    // const validQ4Class= !q4 ? "form__input--incomplete" : ''
    // const validQ5Class= !q5 ? "form__input--incomplete" : ''
    // const validQ6Class= !q6 ? "form__input--incomplete" : ''
    // const validQ7Class= !q7 ? "form__input--incomplete" : ''
    // const validQ8Class= !q8 ? "form__input--incomplete" : ''
    // const validQ9Class= !q9 ? "form__input--incomplete" : ''

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveForm2Clicked}>
                <div className="form__title-row">
                    <h2>New Form2</h2>
                    <div className="form__action-buttons">
                        <button
                            className="form__button"
                            title="Save"
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="q1">
                    Q1: Employment Were you an employee, director, office holder or agency worker in the year to 5 April 2023? Please read the notes before answering. Fill in a separate ‘Employment’ page for each employment, directorship and so on. On each ‘Employment’ page you complete, enter any other payments, expenses or benefits related to that employment. Say how many ‘Employment’ pages you are completing in the ‘Number’ box below.</label>
                <select
                    className={`form__input ${validQ1Class}`}
                    id="q1"
                    name="q1"
                    value={q1}
                    onChange={onQ1Changed}
                    placeholder="fmjdnfjd"
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="agency_worker">Number</option>
                </select>

            </form>    
        </>
    )

    return content
}

export default NewForm2Form
