import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useGetForm3sQuery } from './form3sApiSlice'
import { memo } from 'react'

const Form3 = ({ form3Id }) => {

    const { data: form3s } = useGetForm3sQuery()
    const form3 = form3s?.entities[form3Id]

    const navigate = useNavigate()

    if (form3) {
        const created = new Date(form3.createdAt).toLocaleString('en-GB')

        const updated = new Date(form3.updatedAt).toLocaleString('en-GB')

        const handleEdit = () => navigate(`/dash/form3s/${form3Id}`)

        return (
            <tr className="table__row">
                <td className="table__cell form__username">{form3.username}</td>
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

const memoizedForm3 = memo(Form3)

export default memoizedForm3