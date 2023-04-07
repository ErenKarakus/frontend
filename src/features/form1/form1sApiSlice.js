import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const form1sAdapter = createEntityAdapter({})

const initialState = form1sAdapter.getInitialState()

export const form1sApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getForm1s: builder.query({
            query: () => ({
                url: '/form1s',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedForm1s = responseData.map(form1 => {
                    form1.id = form1._id
                    return form1
                });
                return form1sAdapter.setAll(initialState, loadedForm1s)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Form1', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Form1', id }))
                    ]
                } else return [{ type: 'Form1', id: 'LIST' }]
            }
        }),
        addNewForm1: builder.mutation({
            query: initialForm1 => ({
                url: '/form1s',
                method: 'POST',
                body: {
                    ...initialForm1,
                }
            }),
            invalidatesTags: [
                { type: 'Form1', id: "LIST" }
            ]
        }),
        updateForm1: builder.mutation({
            query: initialForm1 => ({
                url: '/form1s',
                method: 'PATCH',
                body: {
                    ...initialForm1,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form1', id: arg.id }
            ]
        }),
        deleteForm1: builder.mutation({
            query: ({ id }) => ({
                url: `/form1s`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form1', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetForm1sQuery,
    useAddNewForm1Mutation,
    useUpdateForm1Mutation,
    useDeleteForm1Mutation,
} = form1sApiSlice

// returns the query result object
export const selectForm1sResult = form1sApiSlice.endpoints.getForm1s.select()

// creates memoized selector
const selectForm1sData = createSelector(
    selectForm1sResult,
    form1sResult => form1sResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllForm1s,
    selectById: selectForm1ById,
    selectIds: selectForm1Ids
    // Pass in a selector that returns the form1s slice of state
} = form1sAdapter.getSelectors(state => selectForm1sData(state) ?? initialState)