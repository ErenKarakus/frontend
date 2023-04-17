import { useState, useEffect } from 'react'
import { useUpdateForm3Mutation, useDeleteForm3Mutation } from './form3sApiSlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'

const EditForm3Form = ({ form3, users }) => {

    const  { isManager, isAdmin } = useAuth()

    const [updateForm3, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateForm3Mutation()

    const [deleteForm3, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteForm3Mutation()

    const navigate = useNavigate()

    const [q1, setQ1] = useState(form3.q1)
    const [q2, setQ2] = useState(form3.q2)
    const [q3, setQ3] = useState(form3.q3)
    const [q4, setQ4] = useState(form3.q4)
    const [q5, setQ5] = useState(form3.q5)
    const [q6, setQ6] = useState(form3.q6)
    const [q7, setQ7] = useState(form3.q7)
    const [q8, setQ8] = useState(form3.q8)
    const [q9, setQ9] = useState(form3.q9)
    const [q10, setQ10] = useState(form3.q10)
    const [q11, setQ11] = useState(form3.q11)
    const [q12, setQ12] = useState(form3.q12)
    const [q13, setQ13] = useState(form3.q13)
    const [q14, setQ14] = useState(form3.q14)
    const [q15, setQ15] = useState(form3.q15)
    const [q16, setQ16] = useState(form3.q16)
    const [q17, setQ17] = useState(form3.q17)
    const [q18, setQ18] = useState(form3.q18)
    const [q19, setQ19] = useState(form3.q19)
    const [q20, setQ20] = useState(form3.q20)
    const [q21, setQ21] = useState(form3.q21)
    const [userId, setUserId] = useState(form3.user)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setQ1('')
            setQ3('')
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
            setQ17('')
            setQ18('')
            setQ19('')
            setQ20('')
            setQ21('')
            setUserId('')
            navigate('/dash/form3s')
        }
    }, [isSuccess, isDelSuccess, navigate])

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
    const onQ13Changed = e => setQ13(e.target.value)
    const onQ14Changed = e => setQ14(e.target.value)
    const onQ15Changed = e => setQ15(e.target.value)
    const onQ16Changed = e => setQ16(e.target.value)
    const onQ17Changed = e => setQ17(e.target.value)
    const onQ18Changed = e => setQ18(e.target.value)
    const onQ19Changed = e => setQ19(e.target.value)
    const onQ20Changed = e => setQ20(e.target.value)
    const onQ21Changed = e => setQ21(e.target.value)
    //const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, userId].every(Boolean) && !isLoading

    const onSaveForm3Clicked = async (e) => {
        if (canSave) {
            await updateForm3({ id: form3.id, user: userId, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21 })
        }
    }     

    const onDeleteForm3Clicked = async () => {
        await deleteForm3({ id: form3.id })
    }

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
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
    const validQ17Class= !q17 ? "form__input--incomplete" : ''
    const validQ18Class= !q18 ? "form__input--incomplete" : ''
    const validQ19Class= !q19 ? "form__input--incomplete" : ''
    const validQ20Class= !q20 ? "form__input--incomplete" : ''
    const validQ21Class= !q21 ? "form__input--incomplete" : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    let deleteButton = null
    if (isManager || isAdmin) {
        deleteButton = (
            <button
                className="icon-button"
                title='Delete'
                onClick={onDeleteForm3Clicked}
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
                    <h3>Edit Form3 #{form3.ticket}</h3>
                    <div className="form__action-buttons">
                        <button 
                            className="icon-button"
                            title='Save'
                            onClick={onSaveForm3Clicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        {deleteButton}
                    </div>
                </div>
                <div className="form__title-row">
                    <h2>Interest and dividends from UK banks and building societies</h2>
                </div>
                <label className="form__label" htmlFor="q1">
                    <h3>Q1: Taxed UK interest –</h3> 
                    the net amount after tax has been taken off - read the notes
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
                    <h3>Q2: Untaxed UK interest –</h3> 
                    amounts which have not had tax taken off - read the notes
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
                    <h3>Q3: Untaxed foreign interest (up to £2,000) –</h3> 
                    amounts which have not had tax taken off - read the notes
                </label>
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
                    <h3>Q4: Dividends from UK companies –</h3> 
                    the amount received - read the notes
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

                <label className="form__label" htmlFor="q5">
                    <h3>Q5: Other dividends –</h3> 
                    the amount received - read the notes
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
                    <h3>Q6: Foreign dividends (up to £2,000) –</h3> the amount in sterling after foreign tax was taken off. Do not include this amount in the ‘Foreign’ pages
                </label>
                <input
                    className={`form__input ${validQ6Class}`}
                    id="q6"
                    name="q6"
                    type="number"
                    autoComplete="off"
                    placeholder="£0000.00"
                    step={0.01}
                    value={q6}
                    onChange={onQ6Changed}
                />

                <label className="form__label" htmlFor="q7">
                    <h3>Q7: Tax taken off foreign dividends –</h3> the sterling equivalent
                </label>
                <input
                    className={`form__input ${validQ7Class}`}
                    id="q7"
                    name="q7"
                    type="number"
                    autoComplete="off"
                    placeholder="£0000.00"
                    step={0.01}
                    value={q7}
                    onChange={onQ7Changed}
                />

                <div className="form__title-row">
                    <h2>UK pensions, annuities and other state benefits received</h2>
                </div>

                <label className="form__label" htmlFor="q8">
                    <h3>Q8: State Pension –</h3> amount you were entitled to receive in the year, not the weekly or 4-weekly amount - read the notes
                </label>
                <input
                    className={`form__input ${validQ8Class}`}
                    id="q8"
                    name="q8"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000.00"
                    step={0.01}
                    value={q8}
                    onChange={onQ8Changed}
                />

                <label className="form__label" htmlFor="q9">
                    <h3>Q9: State Pension lump sum –</h3> – the gross amount of any lump sum - read the notes
                </label>
                <input
                    className={`form__input ${validQ9Class}`}
                    id="q9"
                    name="q9"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000.00"
                    step={0.01}
                    value={q9}
                    onChange={onQ9Changed}
                />

                <label className="form__label" htmlFor="q10">
                    <h3>Q10: Tax taken off box 9</h3>
                </label>
                <input
                    className={`form__input ${validQ10Class}`}
                    id="q10"
                    name="q10"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000.00"
                    step={0.01}
                    value={q10}
                    onChange={onQ10Changed}
                />

                <label className="form__label" htmlFor="q11">
                    <h3>Q11: Pensions (other than State Pension), retirement annuities and taxable lump sums treated as pensions  –</h3> 
                    the gross amount. Tax taken off goes in box 12
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
                    <h3>Q12: Tax taken off box 11</h3> 
                </label>
                <input
                    className={`form__input ${validQ12Class}`}
                    id="q12"
                    name="q12"
                    type="number"
                    autoComplete="off"
                    placeholder="£-00000000.00"
                    step={0.01}
                    value={q12}
                    onChange={onQ12Changed}
                />

                <label className="form__label" htmlFor="q13">
                    <h3>Q13: Taxable Incapacity Benefit and contribution-based Employment and Support Allowance –</h3> 
                    read the notes
                </label>
                <input
                    className={`form__input ${validQ13Class}`}
                    id="q13"
                    name="q13"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000.00"
                    step={0.01}
                    value={q13}
                    onChange={onQ13Changed}
                />

                <label className="form__label" htmlFor="q14">
                    <h3>Tax taken off Incapacity Benefit in box 13</h3> 
                </label>
                <input
                    className={`form__input ${validQ14Class}`}
                    id="q14"
                    name="q14"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000.00"
                    step={0.01}
                    value={q14}
                    onChange={onQ14Changed}
                />

                <label className="form__label" htmlFor="q15">
                    <h3>Q15: Jobseeker's Allowance</h3> 
                </label>
                <input
                    className={`form__input ${validQ15Class}`}
                    id="q15"
                    name="q15"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000.00"
                    step={0.01}
                    value={q15}
                    onChange={onQ15Changed}
                />

                <label className="form__label" htmlFor="q16">
                    <h3>Q16: Total of any other taxable State Pensions and benefits</h3> 
                </label>
                <input
                    className={`form__input ${validQ16Class}`}
                    id="q16"
                    name="q16"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000.00"
                    step={0.01}
                    value={q16}
                    onChange={onQ16Changed}
                />

                <div className="form__title-row">
                    <h2>Other UK income not included on supplementary pages</h2>
                    Do not use this section for income that should be returned on supplementary pages. Share schemes, gilts, stock dividends, life insurance gains and certain other kinds of income go on the ‘Additional information’ pages.
                </div>

                <label className="form__label" htmlFor="q17">
                    <h3>Q17: Other taxable income –</h3> before expenses and taxtaken off
                </label>
                <input
                    className={`form__input ${validQ17Class}`}
                    id="q17"
                    name="q17"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q17}
                    onChange={onQ17Changed}
                />

                <label className="form__label" htmlFor="q18">
                    <h3>Q18: Total amount of allowable expenses –</h3> read the notes
                </label>
                <input
                    className={`form__input ${validQ18Class}`}
                    id="q18"
                    name="q18"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q18}
                    onChange={onQ18Changed}
                />

                <label className="form__label" htmlFor="q19">
                    <h3>Q19: Any tax taken off box 17</h3> 
                </label>
                <input
                    className={`form__input ${validQ19Class}`}
                    id="q19"
                    name="q19"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q19}
                    onChange={onQ19Changed}
                />

                <label className="form__label" htmlFor="q20">
                    <h3>Q20: Benefit from pre-owned assets –</h3> read the notes
                </label>
                <input
                    className={`form__input ${validQ20Class}`}
                    id="q20"
                    name="q20"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q20}
                    onChange={onQ20Changed}
                />

                <label className="form__label" htmlFor="q21">
                    <h3>Q21: Description of income in boxes 17 and 20 –</h3> if there’s not enough space here please give details in the ‘Any other information’ box, box 19, on page TR 7
                </label>
                <input
                    className={`form__input ${validQ21Class}`}
                    id="q21"
                    name="q21"
                    type="number"
                    autoComplete="off"
                    placeholder="£00000000.00"
                    step={0.01}
                    value={q21}
                    onChange={onQ21Changed}
                />
                
            </form>   
        </>
    )

    return content
}

export default EditForm3Form

