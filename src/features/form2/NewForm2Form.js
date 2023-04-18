import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewForm2Mutation } from "./form2sApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"

const NewForm2Form = ({ users }) => {

    const { isAdmin, isManager } = useAuth()

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
    const onQ2Changed = e => setQ2(e.target.value)
    const onQ3Changed = e => setQ3(e.target.value)
    const onQ4Changed = e => setQ4(e.target.value)
    const onQ5Changed = e => setQ5(e.target.value)
    const onQ6Changed = e => setQ6(e.target.value)
    const onQ7Changed = e => setQ7(e.target.value)
    const onQ8Changed = e => setQ8(e.target.value)
    const onQ9Changed = e => setQ9(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [q1, q2, q3, q4, q5, q6, q7, q8, q9, userId].every(Boolean) && !isLoading

    const onSaveForm2Clicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewForm2({ user: userId, q1, q2, q3, q4, q5, q6, q7, q8, q9 })
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

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveForm2Clicked}>
                <div className="form__title-row">
                    <h1>New Form2</h1>
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
                    <h2>What makes up your tax return</h2>
                    To make a complete return of your taxable income and gains for the year to 5 April 2023 you may need to complete some separate supplementary pages. Answer the following questions by putting ‘X’ in the ‘Yes’ or ‘No’ box.
                </div>
                <label className="form__label" htmlFor="q1">
                    <h3>Q1: Employment</h3> 
                    Were you an employee, director, office holder or agency worker in the year to 5 April 2023? Please read the notes before answering. Fill in a separate ‘Employment’ page for each employment, directorship and so on. On each ‘Employment’ page you complete, enter any other payments, expenses or benefits related to that employment. Say how many ‘Employment’ pages you are completing in the ‘Number’ box below.
                </label>
                <select
                    className={`form__input ${validQ1Class}`}
                    id="q1"
                    name="q1"
                    value={q1}
                    onChange={onQ1Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <label className="form__label" htmlFor="q2">
                    <h3>Q2: Self-employment</h3> 
                    If you worked for yourself (on your ‘own account’ or in self-employment) in the year to 5 April 2023, read the notes to decide if you need to fill in the ‘Self-employment’ pages. You may not need to if this income is up to £1,000. 
                    <div>Do you need to fill in the ‘Self-employment’ pages?</div> 
                    <div>Fill in a separate ‘Self-employment’ page for each business.</div> 
                    On each ‘Self-employment’ page you complete, enter any payments or expenses related to that business. Say how many businesses you had in the ‘Number’ box below. 
                    <div>(Answer ‘Yes’ if you were a ‘Name’ at Lloyd’s.)</div>
                </label>
                <select
                    className={`form__input ${validQ2Class}`}
                    id="q2"
                    name="q2"
                    value={q2}
                    onChange={onQ2Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <label className="form__label" htmlFor="q3">
                    <h3>Q3: Partnership </h3>
                    Were you in a partnership? Fill in a separate ‘Partnership’ page for each partnership you were a partner in and say how many partnerships you had in the ‘Number’ box below
                </label>
                <select
                    className={`form__input ${validQ3Class}`}
                    id="q3"
                    name="q3"
                    value={q3}
                    onChange={onQ3Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <label className="form__label" htmlFor="q4">
                    <h3>Q4: UK property</h3> 
                    If you received income from UK property (including rents and other income from land you own or lease out), read the notes to decide if you need to fill in the ‘UK property’ pages. You may not need to if this income is up to £1,000. 
                    <div>Do you need to fill in the ‘UK property’ pages?</div>
                </label>
                <select
                    className={`form__input ${validQ4Class}`}
                    id="q4"
                    name="q4"
                    value={q4}
                    onChange={onQ4Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label className="form__label" htmlFor="q5">
                    <h3>Q5: Foreign</h3>
                    If you:
                    <div>•	 were entitled to any foreign income</div>
                    <div>•	 have, or could have, received (directly or indirectly) income, or a capital payment or benefit from a person abroad as a result of any transfer of assets</div>
                    <div>•	 want to claim relief for foreign tax paid</div>
                    read the notes to decide if you need to fill in the ‘Foreign’ pages. You may not need to if your only foreign income was from land and property abroad up to £1,000.
                    <div>Do you need to fill in the ‘Foreign’ pages?</div> 
                </label>
                <select
                    className={`form__input ${validQ5Class}`}
                    id="q5"
                    name="q5"
                    value={q5}
                    onChange={onQ5Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label className="form__label" htmlFor="q6">
                    <h3>Q6: Trusts etc</h3>
                    Did you receive, or are you treated as having received, income from a trust, settlement or the residue of a deceased person’s estate? This does not include cash lump sums/transfer of assets, otherwise known as capital distributions, received under a will.
                </label>
                <select
                    className={`form__input ${validQ6Class}`}
                    id="q6"
                    name="q6"
                    value={q6}
                    onChange={onQ6Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label className="form__label" htmlFor="q7">
                    <h3>Q7: Capital Gains Tax summary</h3>
                    If you sold or disposed of any assets (for example, stocks, shares, land and property, a business), or had any chargeable gains, read the notes to decide if you have to fill in the ‘Capital Gains Tax summary’ page.
                    <div>If you do, you must also provide separate computations.</div>
                    <div>Do you need to fill in the ‘Capital Gains Tax summary’ page and provide computations?</div>
                </label>
                <select
                    className={`form__input ${validQ7Class}`}
                    id="q7"
                    name="q7"
                    value={q7}
                    onChange={onQ7Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="Computation(s) provided">Computation(s) provided</option>
                </select>

                <label className="form__label" htmlFor="q8">
                    <h3>Q8: Residence, remittance basis etc</h3>
                    Were you, for all or part of the year to 5 April 2023, one or more of the following:
                    <div>• not resident</div>
                    <div>• not domiciled in the UK and claiming the remittance basis</div>
                    <div>• dual resident in the UK and another country?</div>
                </label>
                <select
                    className={`form__input ${validQ8Class}`}
                    id="q8"
                    name="q8"
                    value={q8}
                    onChange={onQ8Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label className="form__label" htmlFor="q9">
                    <h3>Q9: Additional information</h3>
                    Some less common kinds of income and tax reliefs, for example, Married Couple’s Allowance, Life insurance gains, chargeable event gains, Seafarer’s Earnings Deduction and details of disclosed tax avoidance schemes, should be returned on the ‘Additional information’ pages.
                    <div>Do you need to fill in the ‘Additional information’ pages?</div>
                </label>
                <select
                    className={`form__input ${validQ9Class}`}
                    id="q9"
                    name="q9"
                    value={q9}
                    onChange={onQ9Changed}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
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

export default NewForm2Form
