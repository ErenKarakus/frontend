import { useParams } from 'react-router-dom'
import EditForm3Form from './EditForm3Form'
import { useGetForm3sQuery } from './form3sApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditForm3 = () => {
    useTitle('Self Tax Assessment Tool: Edit Form 3')

    const { id } = useParams()

    const { username, isManager, isAdmin } = useAuth()

    const { form3 } = useGetForm3sQuery("form3sList", {
        selectFromResult: ({ data }) => ({
            form3: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!form3 || !users?.length) return <PulseLoader color={"#FFF"} />

    if (!isManager && !isAdmin) {
        if (form3.username !== username) {
            return <p className="errmsg">No access</p>
        }
    }

    const content = <EditForm3Form form3={form3} users={users} />

    return content
}
export default EditForm3