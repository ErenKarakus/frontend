import NewForm3Form from './NewForm3Form'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const NewForm3 = () => {
    useTitle('Self Tax Assessment Tool: New Form3')

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data.entities[id])
        }),
    })

    if (!users.length) return <PulseLoader color={"#FFF"} />

    const content = <NewForm3Form users={users} />

    return content
}
export default NewForm3