import { useGetForm1sQuery } from "./form1sApiSlice"
import Form1 from "./Form1"
import useAuth from "../../hooks/useAuth"
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'

const Form1sList = () => {
    useTitle('Form1s: Form1s List')

    const { username, isManager, isAdmin } = useAuth()

    const {
        data: form1s,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetForm1sQuery('form1sList', {
        pollingInterval: 15000,
        refetchOnfocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data.message}</p>
    }

    if (isSuccess) {
        const { ids, entities } = form1s

        let filteredIds
        if(isManager || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(form1Id => entities[form1Id].username === username)
        }

        const tableContent = ids?.length && filteredIds.map(form1Id => <Form1 key={form1Id} form1Id={form1Id} />)

        content = (
            <table className="table table--form1s">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th form1__status">Username</th>
                        <th scope="col" className="table__th form1__created">Created</th>
                        <th scope="col" className="table__th form1__updated">Updated</th>
                        <th scope="col" className="table__th form1__username">Owner</th>
                        <th scope="col" className="table__th form1__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default Form1sList