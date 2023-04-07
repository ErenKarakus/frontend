import NewForm1Form from './NewForm1Form'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const NewForm1 = () => {
    useTitle('Self Tax Assessment Tool: New Form1')

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data.entities[id])
        }),
    })

    if (!users.length) return <PulseLoader color={"#FFF"} />

    const content = <NewForm1Form users={users} />

    return content
}
export default NewForm1