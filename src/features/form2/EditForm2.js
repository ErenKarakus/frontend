import { useParams } from 'react-router-dom'
import EditForm2Form from './EditForm2Form'
import { useGetForm2sQuery } from './form2sApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditForm2 = () => {
    useTitle('Self Tax Assessment Tool: Edit Form 2')

    const { id } = useParams()

    const { username, isManager, isAdmin } = useAuth()

    const { form2 } = useGetForm2sQuery("form2sList", {
        selectFromResult: ({ data }) => ({
            form2: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!form2 || !users?.length) return <PulseLoader color={"#FFF"} />

    if (!isManager && !isAdmin) {
        if (form2.username !== username) {
            return <p className="errmsg">No access</p>
        }
    }

    const content = <EditForm2Form form2={form2} users={users} />

    return content
}
export default EditForm2