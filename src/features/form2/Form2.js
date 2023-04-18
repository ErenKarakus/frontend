import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useGetForm2sQuery } from './form2sApiSlice'
import { memo } from 'react'

const Form2 = ({ form2Id }) => {

    const { data: form2s } = useGetForm2sQuery()
    const form2 = form2s?.entities[form2Id]

    const navigate = useNavigate()

    if (form2) {
        const created = new Date(form2.createdAt).toLocaleString('en-GB')

        const updated = new Date(form2.updatedAt).toLocaleString('en-GB')

        const handleEdit = () => navigate(`/dash/form2s/${form2Id}`)

        return (
            <tr className="table__row">
                <td className="table__cell form__username">{form2.username}</td>
                <td className="table__cell form__created">{created}</td>
                <td className="table__cell form__updated">{updated}</td>
                
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

const memoizedForm2 = memo(Form2)

export default memoizedForm2