import { useGetForm3sQuery } from "./form3sApiSlice"
import Form3 from "./Form3"
import useAuth from "../../hooks/useAuth"
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'

const Form3sList = () => {
    useTitle('Form3s: Form3s List')

    const { username, isManager, isAdmin } = useAuth()

    const {
        data: form3s,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetForm3sQuery('form3sList', {
        pollingInterval: 15000,
        refetchOnfocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        console.log("Error object:", error);
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids, entities } = form3s

        let filteredIds
        if(isManager || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(form3Id => entities[form3Id].username === username)
        }

        const tableContent = ids?.length && filteredIds.map(form3Id => <Form3 key={form3Id} form3Id={form3Id} />)

        content = (
            <table className="table table--form3s">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th form3__created">Created</th>
                        <th scope="col" className="table__th form3__updated">Updated</th>
                        <th scope="col" className="table__th form3__username">Owner</th>
                        <th scope="col" className="table__th form3__edit">Edit</th>
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
export default Form3sList