import { useGetForm4sQuery } from "./form4sApiSlice"
import Form4 from "./Form4"
import useAuth from "../../hooks/useAuth"
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'

const Form4sList = () => {
    useTitle('Form4s: Form4s List')

    const { username, isManager, isAdmin } = useAuth()

    const {
        data: form4s,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetForm4sQuery('form4sList', {
        pollingInterval: 15000,
        refetchOnfocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids, entities } = form4s

        let filteredIds
        if(isManager || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(form4Id => entities[form4Id].username === username)
        }

        const tableContent = ids?.length && filteredIds.map(form4Id => <Form4 key={form4Id} form4Id={form4Id} />)

        content = (
            <table className="table table--form1">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th form1__username">Owner</th>
                        <th scope="col" className="table__th form1__created">Created</th>
                        <th scope="col" className="table__th form1__updated">Updated</th>
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
export default Form4sList