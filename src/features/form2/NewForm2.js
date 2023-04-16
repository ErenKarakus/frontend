import NewForm2Form from './NewForm2Form'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const NewForm2 = () => {
    useTitle('Self Tax Assessment Tool: New Form2')

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data.entities[id])
        }),
    })

    if (!users.length) return <PulseLoader color={"#FFF"} />

    const content = <NewForm2Form users={users} />

    return content
}
export default NewForm2