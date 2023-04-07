import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewForm1Mutation } from "./form1sApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"

const NewForm1Form = ({ users }) => {

    const [addNewForm1, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewForm1Mutation()

    const navigate = useNavigate()

    const [q1, setQ1] = useState('')
    const [q2, setQ2] = useState('')
    const [q3a, setQ3a] = useState('')
    const [q3b, setQ3b] = useState('')
    const [q3c, setQ3c] = useState('')
    const [q3d, setQ3d] = useState('')
    const [q3e, setQ3e] = useState('')
    const [q4, setQ4] = useState('')
    const [q5, setQ5] = useState('')
    const [userId, setUserId] = useState(users[0].id)

    useEffect(() => {
        if (isSuccess) {
            setQ1('')
            setQ2('')
            setQ3a('')
            setQ3b('')
            setQ3c('')
            setQ3d('')
            setQ3e('')
            setQ4('')
            setQ5('')
            setUserId('')
            navigate('/dash/form1s')
        }
    }, [isSuccess, navigate])

    const onQ1Changed = e => setQ1(e.target.value)
    const onQ2Changed = e => setQ2(e.target.value)
    const onQ3aChanged = e => setQ3a(e.target.value)
    const onQ3bChanged = e => setQ3b(e.target.value)
    const onQ3cChanged = e => setQ3c(e.target.value)
    const onQ3dChanged = e => setQ3d(e.target.value)
    const onQ3eChanged = e => setQ3e(e.target.value)
    const onQ4Changed = e => setQ4(e.target.value)
    const onQ5Changed = e => setQ5(e.target.value)
    //const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [q1, q2, q3a, q3b, q3c, q3d, q3e, q4, q5, userId].every(Boolean) && !isLoading

    const onSaveForm1Clicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewForm1({ user: userId, q1, q2, q3a, q3b, q3c, q3d, q3e, q4, q5 })
        }
    }

    // const options = users.map(user => {
    //     return (
    //         <option
    //             key={user.id}
    //             value={user.id}
    //         > {user.username}</option>
    //     )
    // })

    const errClass = isError ? "errmsg" : "offscreen"
    const validQ1Class= !q1 ? "form__input--incomplete" : ''
    const validQ2Class= !q2 ? "form__input--incomplete" : ''
    const validQ3aClass= !q3a ? "form__input--incomplete" : ''
    const validQ3bClass= !q3b ? "form__input--incomplete" : ''
    const validQ3cClass= !q3c ? "form__input--incomplete" : ''
    const validQ3dClass= !q3d ? "form__input--incomplete" : ''
    const validQ3eClass= !q3e ? "form__input--incomplete" : ''
    const validQ4Class= !q4 ? "form__input--incomplete" : ''
    const validQ5Class= !q5 ? "form__input--incomplete" : ''

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveForm1Clicked}>
                <div className="form__title-row">
                    <h2>New Form1</h2>
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
                <label className="form__label" htmlFor="q1">Q1:</label>
                <input
                    className={`form__input ${validQ1Class}`}
                    id="q1"
                    name="q1"
                    type="date"
                    autoComplete="off"
                    value={q1}
                    onChange={onQ1Changed}
                />

                <label className="form__label" htmlFor="q2">Q2:</label>
                <input
                    className={`form__input ${validQ2Class}`}
                    id="q2"
                    name="q2"
                    value={q2}
                    onChange={onQ2Changed}
                />

                <label className="form__label" htmlFor="q3a">Q3a:</label>
                <input
                    className={`form__input ${validQ3aClass}`}
                    id="q3a"
                    name="q3a"
                    value={q3a}
                    onChange={onQ3aChanged}
                />

                <label className="form__label" htmlFor="q3b">Q3b:</label>
                <input
                    className={`form__input ${validQ3bClass}`}
                    id="q3b"
                    name="q3b"
                    value={q3b}
                    onChange={onQ3bChanged}
                />

                <label className="form__label" htmlFor="q3c">Q3c:</label>
                <input
                    className={`form__input ${validQ3cClass}`}
                    id="q3c"
                    name="q3c"
                    value={q3c}
                    onChange={onQ3cChanged}
                />

                <label className="form__label" htmlFor="q3d">Q3d:</label>
                <input
                    className={`form__input ${validQ3dClass}`}
                    id="q3d"
                    name="q3d"
                    value={q3d}
                    onChange={onQ3dChanged}
                />

                <label className="form__label" htmlFor="q3e">Q3e:</label>
                <input
                    className={`form__input ${validQ3eClass}`}
                    id="q3e"
                    name="q3e"
                    value={q3e}
                    onChange={onQ3eChanged}
                />

                <label className="form__label" htmlFor="q4">Q4:</label>
                <input
                    className={`form__input ${validQ4Class}`}
                    id="q4"
                    name="q4"
                    value={q4}
                    onChange={onQ4Changed}
                />

                <label className="form__label" htmlFor="q5">Q5:</label>
                <input
                    className={`form__input ${validQ5Class}`}
                    id="q5"
                    name="q5"
                    value={q5}
                    onChange={onQ5Changed}
                />
            </form>    
        </>
    )

    return content
}

export default NewForm1Form