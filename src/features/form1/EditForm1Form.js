import { useState, useEffect } from 'react'
import { useUpdateForm1Mutation, useDeleteForm1Mutation } from './form1sApiSlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'

const EditForm1Form = ({ form1, users }) => {

    const  { user, isManager, isAdmin } = useAuth()

    const [updateForm1, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateForm1Mutation()

    const [deleteForm1, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteForm1Mutation()

    const navigate = useNavigate()

    const [q1, setQ1] = useState(form1.q1)
    const [q2, setQ2] = useState(form1.q2)
    const [q3a, setQ3a] = useState(form1.q3a)
    const [q3b, setQ3b] = useState(form1.q3b)
    const [q3c, setQ3c] = useState(form1.q3c)
    const [q3d, setQ3d] = useState(form1.q3d)
    const [q3e, setQ3e] = useState(form1.q3e)
    const [q4, setQ4] = useState(form1.q4)
    const [q5, setQ5] = useState(form1.q5)
    const [userId, setUserId] = useState(form1.user)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
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
    }, [isSuccess, isDelSuccess, navigate])

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
        if (canSave) {
            await updateForm1({ id: form1.id, user: userId, q1, q2, q3a, q3b, q3c, q3d, q3e, q4, q5 })
        }
    }     


    const onDeleteForm1Clicked = async () => {
        await deleteForm1({ id: form1.id })
    }

    // const options = users.map(user => {
    //     return (
    //         <option 
    //             key={user.id} 
    //             value={user.id}
    //         >{user.username}</option>
    //     )
    // })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validQ1Class= !q1 ? "form__input--incomplete" : ''
    const validQ2Class= !q2 ? "form__input--incomplete" : ''
    const validQ3aClass= !q3a ? "form__input--incomplete" : ''
    const validQ3bClass= !q3b ? "form__input--incomplete" : ''
    const validQ3cClass= !q3c ? "form__input--incomplete" : ''
    const validQ3dClass= !q3d ? "form__input--incomplete" : ''
    const validQ3eClass= !q3e ? "form__input--incomplete" : ''
    const validQ4Class= !q4 ? "form__input--incomplete" : ''
    const validQ5Class= !q5 ? "form__input--incomplete" : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    console.log('username:', user)
    console.log('form1.user:', form1.user)
    console.log('isManager:', isManager)
    console.log('isAdmin:', isAdmin)
    let deleteButton = null
    
    if (isManager || isAdmin || (form1.user === user.id)) {
        deleteButton = (
            <button
                className="icon-button"
                title='Delete'
                onClick={onDeleteForm1Clicked}
            >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        )
    }

    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Form1 #{form1.ticket}</h2>
                    <div className="form__action-buttons">
                        <button 
                            className="icon-button"
                            title='Save'
                            onClick={onSaveForm1Clicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        {deleteButton}
                    </div>
                </div>
                <label className="form__label" htmlFor="q1">
                    Q1: Your date of birth – it helps get your tax right DD MM YYYY</label>
                <input
                    className={`form__input ${validQ1Class}`}
                    id="q1"
                    name="q1"
                    type="date"
                    autoComplete="off"
                    value={q1}
                    onChange={onQ1Changed}
                />

                <label className="form__label" htmlFor="q2">
                    Q2: Your name</label>
                <input
                    className={`form__input ${validQ2Class}`}
                    id="q2"
                    name="q2"
                    value={q2}
                    onChange={onQ2Changed}
                />

                <label className="form__label" htmlFor="q3a">
                    Q3a: Address line 1</label>
                <input
                    className={`form__input ${validQ3aClass}`}
                    id="q3a"
                    name="q3a"
                    value={q3a}
                    onChange={onQ3aChanged}
                />

                <label className="form__label" htmlFor="q3b">
                    Q3b: Address line 2</label>
                <input
                    className={`form__input ${validQ3bClass}`}
                    id="q3b"
                    name="q3b"
                    value={q3b}
                    onChange={onQ3bChanged}
                />

                <label className="form__label" htmlFor="q3c">
                    Q3c: Town/City</label>
                <input
                    className={`form__input ${validQ3cClass}`}
                    id="q3c"
                    name="q3c"
                    value={q3c}
                    onChange={onQ3cChanged}
                />

                <label className="form__label" htmlFor="q3d">
                    Q3d: County</label>
                <input
                    className={`form__input ${validQ3dClass}`}
                    id="q3d"
                    name="q3d"
                    value={q3d}
                    onChange={onQ3dChanged}
                />

                <label className="form__label" htmlFor="q3e">
                    Q3e: Postcode</label>
                <input
                    className={`form__input ${validQ3eClass}`}
                    id="q3e"
                    name="q3e"
                    value={q3e}
                    onChange={onQ3eChanged}
                />

                <label className="form__label" htmlFor="q4">
                    Q4: Phone number</label>
                <input
                    className={`form__input ${validQ4Class}`}
                    id="q4"
                    name="q4"
                    value={q4}
                    onChange={onQ4Changed}
                />

                <label className="form__label" htmlFor="q5">
                    Q5: Your National Insurance number</label>
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

export default EditForm1Form

