import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useGetForm1sQuery } from './form1sApiSlice'
import { memo } from 'react'

const Form1 = ({ form1Id }) => {

    // const { form1 } = useGetForm1sQuery("form1sList", {
    //     selectFromResults: ({ data }) => ({
    //         form1: data?.entities[form1Id]
    //     }),
    // })

    const { data: form1s } = useGetForm1sQuery()
    const form1 = form1s?.entities[form1Id]

    const navigate = useNavigate()

    if (form1) {
        const created = new Date(form1.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'long' })

        const updated = new Date(form1.updatedAt).toLocaleString('en-GB', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/form1s/${form1Id}`)

        return (
            <tr className="table__row">
                <td className="table__cell form1__created">{created}</td>
                <td className="table__cell form1__updated">{updated}</td>
                <td className="table__cell form1__username">{form1.q2}</td>
                
                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )          
    
    } else return null
}

const memoizedForm1 = memo(Form1)

export default memoizedForm1