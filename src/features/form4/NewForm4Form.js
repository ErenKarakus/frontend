import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewForm4Mutation } from "./form4sApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"

const NewForm4Form = ({ users }) => {

    const { isAdmin, isManager } = useAuth()

    const [addNewForm4, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewForm4Mutation()

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
    const [q10, setQ10] = useState('')
    const [q11, setQ11] = useState('')
    const [q12, setQ12] = useState('')
    const [q13, setQ13] = useState('')
    const [q14, setQ14] = useState('')
    const [q15, setQ15] = useState('')
    const [q16, setQ16] = useState('')
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
            setQ10('')
            setQ11('')
            setQ12('')
            setQ13('')
            setQ14('')
            setQ15('')
            setQ16('')
            setUserId('')
            navigate('/dash/form4s')
        }
    }, [isSuccess, navigate])

    const onQ1Changed = e => setQ1(e.target.value)
    const onQ2Changed = e => setQ2(e.target.value)
    const onQ3Changed = e => setQ3(e.target.value)
    const onQ4Changed = e => setQ4(e.target.value)
    const onQ5Changed = e => setQ5(e.target.value)
    const onQ6Changed = e => setQ6(e.target.value)
    const onQ7Changed = e => setQ7(e.target.value)
    const onQ8Changed = e => setQ8(e.target.value)
    const onQ9Changed = e => setQ9(e.target.value)
    const onQ10Changed = e => setQ10(e.target.value)
    const onQ11Changed = e => setQ11(e.target.value)
    const onQ12Changed = e => setQ12(e.target.value)
    const onQ13Changed = e => setQ13(e.target.checked)
    const onQ14Changed = e => setQ14(e.target.value)
    const onQ15Changed = e => setQ15(e.target.checked)
    const onQ16Changed = e => setQ16(e.target.checked)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, userId].every(Boolean) && !isLoading

    const onSaveForm4Clicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewForm4({ user: userId, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16 })
        }
    }

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}
            > {user.username}</option>
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validQ1Class= !q1 ? "form__input--incomplete" : ''
    const validQ2Class= !q2 ? "form__input--incomplete" : ''
    const validQ3Class= !q3 ? "form__input--incomplete" : ''
    const validQ4Class= !q4 ? "form__input--incomplete" : ''
    const validQ5Class= !q5 ? "form__input--incomplete" : ''
    const validQ6Class= !q6 ? "form__input--incomplete" : ''
    const validQ7Class= !q7 ? "form__input--incomplete" : ''
    const validQ8Class= !q8 ? "form__input--incomplete" : ''
    const validQ9Class= !q9 ? "form__input--incomplete" : ''
    const validQ10Class= !q10 ? "form__input--incomplete" : ''
    const validQ11Class= !q11 ? "form__input--incomplete" : ''
    const validQ12Class= !q12 ? "form__input--incomplete" : ''
    const validQ13Class= !q13 ? "form__input--incomplete" : ''
    const validQ14Class= !q14 ? "form__input--incomplete" : ''
    const validQ15Class= !q15 ? "form__input--incomplete" : ''
    const validQ16Class= !q16 ? "form__input--incomplete" : ''


    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveForm4Clicked}>
                <div className="form__title-row">
                    <h1>New Form4 Tax reliefs</h1>
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
                <div className="form__title-row">
                    <h2>Paying into registered pension schemes and overseas pension schemes</h2>
                </div>
                <label className="form__label" htmlFor="q1">
                    <h3>Payments to registered pension schemes where basic rate tax relief will be claimed by your pension provider (called ‘relief at source’). Enter the payments and basic rate tax</h3> 
                </label>
                <input
                    className={`form__input ${validQ1Class}`}
                    id="q1"
                    name="q1"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q1}
                    onChange={onQ1Changed}
                />

                <label className="form__label" htmlFor="q2">
                    <h3>Payments to a retirement annuity contract where basic rate tax relief will not be claimed by your provider</h3> 
                </label>
                <input
                    className={`form__input ${validQ2Class}`}
                    id="q2"
                    name="q2"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q2}
                    onChange={onQ2Changed}
                />

                <label className="form__label" htmlFor="q3">
                    <h3>Q3: Payments to your employer’s scheme which were not deducted from your pay before tax –</h3> 
                    this will be unusual – read the notes                </label>
                <input
                    className={`form__input ${validQ3Class}`}
                    id="q3"
                    name="q3"
                    type="number"
                    autoComplete="off"
                    placeholder="£0000.00"
                    step={0.01}
                    value={q3}
                    onChange={onQ3Changed}
                />

                <label className="form__label" htmlFor="q4">
                    <h3>Q4: Payments to an overseas pension scheme, which is not UK-registered, which are eligible for tax relief and were not deducted from your pay before tax</h3> 
                </label>
                <input
                    className={`form__input ${validQ4Class}`}
                    id="q4"
                    name="q4"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q4}
                    onChange={onQ4Changed}
                />

                <div className="form__title-row">
                    <h2>Charitable giving</h2>
                </div>

                <label className="form__label" htmlFor="q5">
                    <h3>Q5: Gift Aid payments made in the year to 5 April 2023</h3> 
                </label>
                <input
                    className={`form__input ${validQ5Class}`}
                    id="q5"
                    name="q5"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q5}
                    onChange={onQ5Changed}
                />

                <label className="form__label" htmlFor="q6">
                    <h3>Q6: Total of any ‘one-off’ payments in box 5</h3> 
                </label>
                <input
                    className={`form__input ${validQ6Class}`}
                    id="q6"
                    name="q6"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q6}
                    onChange={onQ6Changed}
                />

                <label className="form__label" htmlFor="q7">
                    <h3>Q7: Gift Aid payments made in the year to 5 April 2023 but treated as if made in the year to 5 April 2022</h3> 
                </label>
                <input
                    className={`form__input ${validQ7Class}`}
                    id="q7"
                    name="q7"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q7}
                    onChange={onQ7Changed}
                />

                <label className="form__label" htmlFor="q8">
                    <h3>Q8: Gift Aid payments made after 5 April 2023 but to be treated as if made in the year to 5 April 2023</h3> 
                </label>
                <input
                    className={`form__input ${validQ8Class}`}
                    id="q8"
                    name="q8"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q8}
                    onChange={onQ8Changed}
                />

                <label className="form__label" htmlFor="q9">
                    <h3>Q9: Value of qualifying shares or securities gifted to charity</h3> 
                </label>
                <input
                    className={`form__input ${validQ9Class}`}
                    id="q9"
                    name="q9"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q9}
                    onChange={onQ9Changed}
                />

                <label className="form__label" htmlFor="q10">
                    <h3>Q10: Value of qualifying land and buildings gifted to charity</h3>
                </label>
                <input
                    className={`form__input ${validQ10Class}`}
                    id="q10"
                    name="q10"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q10}
                    onChange={onQ10Changed}
                />

                <label className="form__label" htmlFor="q11">
                    <h3>Q11:  Value of qualifying investments gifted to non-UK charities in boxes 9 and 10</h3> 
                </label>
                <input
                    className={`form__input ${validQ11Class}`}
                    id="q11"
                    name="q11"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q11}
                    onChange={onQ11Changed}
                />

                <label className="form__label" htmlFor="q12">
                    <h3>Q12: Gift Aid payments to non-UK charities in box 5</h3> 
                </label>
                <input
                    className={`form__input ${validQ12Class}`}
                    id="q12"
                    name="q12"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q12}
                    onChange={onQ12Changed}
                />

                <div className="form__title-row">
                    <h2>Blind Person's Allowance</h2>
                </div>

                <label className="form__label" htmlFor="q13">
                    <h3>Q13: If you’re registered blind, or severely sight impaired, and your name is on a local authority or other register, put ‘X’ in the box</h3> 
                </label>
                <input
                    className={`form__checkbox ${validQ13Class}`}
                    id="q13"
                    name="q13"
                    type="checkbox"
                    autoComplete="off"
                    value={q13}
                    onChange={onQ13Changed}
                />

                <label className="form__label" htmlFor="q14">
                    <h3>Enter the name of the local authority or other register</h3> 
                </label>
                <input
                    className={`form__input ${validQ14Class}`}
                    id="q14"
                    name="q14"
                    value={q14}
                    onChange={onQ14Changed}
                />

                <label className="form__label" htmlFor="q15">
                    <h3>Q15: If you want your spouse’s, or civil partner’s, surplus allowance, put ‘X’ in the box</h3> 
                </label>
                <input
                    className={`form__checkbox ${validQ15Class}`}
                    id="q15"
                    name="q15"
                    type="checkbox"
                    autoComplete="off"
                    value={q15}
                    onChange={onQ15Changed}
                />

                <label className="form__label" htmlFor="q16">
                    <h3>Q16: If you want your spouse, or civil partner, to have your surplus allowance, put ‘X’ in the box</h3> 
                </label>
                <input
                    className={`form__checkbox ${validQ16Class}`}
                    id="q16"
                    name="q16"
                    type="checkbox"
                    value={q16}
                    onChange={onQ16Changed}
                />
                { (isAdmin || isManager) && (
                    <>
                        <label className="form__label" htmlFor="user">
                            User
                        </label>
                        <select
                            className="form__input"
                            id="user"
                            name="user"
                            value={userId}
                            onChange={onUserIdChanged}
                        >
                            {options}
                        </select>
                    </>
                )}                
            </form>    
        </>
    )

    return content
}

export default NewForm4Form
