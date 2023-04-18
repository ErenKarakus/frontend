import { useGetForm2sQuery } from "./form2sApiSlice"
import Form2 from "./Form2"
import useAuth from "../../hooks/useAuth"
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'

const Form2sList = () => {
    useTitle('Form2s: Form2s List')

    const { username, isManager, isAdmin } = useAuth()

    const {
        data: form2s,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetForm2sQuery('form2sList', {
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
        const { ids, entities } = form2s

        let filteredIds
        if(isManager || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(form2Id => entities[form2Id].username === username)
        }

        const tableContent = ids?.length && filteredIds.map(form2Id => <Form2 key={form2Id} form2Id={form2Id} />)

        content = (
            <table className="table table--form2s">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th form2__created">Created</th>
                        <th scope="col" className="table__th form2__updated">Updated</th>
                        <th scope="col" className="table__th form2__username">Owner</th>
                        <th scope="col" className="table__th form2__edit">Edit</th>
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
export default Form2sList