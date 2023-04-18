import { useParams } from 'react-router-dom'
import EditForm4Form from './EditForm4Form'
import { useGetForm4sQuery } from './form4sApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditForm4 = () => {
    useTitle('Self Tax Assessment Tool: Edit Form 4')

    const { id } = useParams()

    const { username, isManager, isAdmin } = useAuth()

    const { form4 } = useGetForm4sQuery("form4sList", {
        selectFromResult: ({ data }) => ({
            form4: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!form4 || !users?.length) return <PulseLoader color={"#FFF"} />

    if (!isManager && !isAdmin) {
        if (form4.username !== username) {
            return <p className="errmsg">No access</p>
        }
    }

    const content = <EditForm4Form form4={form4} users={users} />

    return content
}
export default EditForm4