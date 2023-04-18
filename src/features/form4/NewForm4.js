import NewForm4Form from './NewForm4Form'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const NewForm4 = () => {
    useTitle('Self Tax Assessment Tool: New Form4')

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data.entities[id])
        }),
    })

    if (!users.length) return <PulseLoader color={"#FFF"} />

    const content = <NewForm4Form users={users} />

    return content
}
export default NewForm4