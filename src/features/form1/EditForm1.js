import { useParams } from 'react-router-dom'
import EditForm1Form from './EditForm1Form'
import { useGetForm1sQuery } from './form1sApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditForm1 = () => {
    useTitle('Self Tax Assessment Tool: Edit Form 1')

    const { id } = useParams()

    const { username, isManager, isAdmin } = useAuth()

    const { form1 } = useGetForm1sQuery("form1sList", {
        selectFromResult: ({ data }) => ({
            form1: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!form1 || !users?.length) return <PulseLoader color={"#FFF"} />

    if (!isManager && !isAdmin) {
        if (form1.username !== username) {
            return <p className="errmsg">No access</p>
        }
    }

    const content = <EditForm1Form form1={form1} users={users} />

    return content
}
export default EditForm1