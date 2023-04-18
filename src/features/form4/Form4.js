import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useGetForm4sQuery } from './form4sApiSlice'
import { memo } from 'react'

const Form4 = ({ form4Id }) => {

    const { data: form4s } = useGetForm4sQuery()
    const form4 = form4s?.entities[form4Id]

    const navigate = useNavigate()

    if (form4) {
        const created = new Date(form4.createdAt).toLocaleString('en-GB')

        const updated = new Date(form4.updatedAt).toLocaleString('en-GB')

        const handleEdit = () => navigate(`/dash/form4s/${form4Id}`)

        return (
            <tr className="table__row">
                <td className="table__cell form__username">{form4.username}</td>
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

const memoizedForm4 = memo(Form4)

export default memoizedForm4