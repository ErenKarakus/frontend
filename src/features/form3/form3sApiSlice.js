import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const form3sAdapter = createEntityAdapter({})

const initialState = form3sAdapter.getInitialState()

export const form3sApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getForm3s: builder.query({
            query: () => ({
                url: '/form3s',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedForm3s = responseData.map(form3 => {
                    form3.id = form3._id
                    return form3
                });
                return form3sAdapter.setAll(initialState, loadedForm3s)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Form3', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Form3', id }))
                    ]
                } else return [{ type: 'Form3', id: 'LIST' }]
            }
        }),
        addNewForm3: builder.mutation({
            query: initialForm3 => ({
                url: '/form3s',
                method: 'POST',
                body: {
                    ...initialForm3,
                }
            }),
            invalidatesTags: [
                { type: 'Form3', id: "LIST" }
            ]
        }),
        updateForm3: builder.mutation({
            query: initialForm3 => ({
                url: '/form3s',
                method: 'PATCH',
                body: {
                    ...initialForm3,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form3', id: arg.id }
            ]
        }),
        deleteForm3: builder.mutation({
            query: ({ id }) => ({
                url: `/form3s`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form3', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetForm3sQuery,
    useAddNewForm3Mutation,
    useUpdateForm3Mutation,
    useDeleteForm3Mutation,
} = form3sApiSlice

// returns the query result object
export const selectForm3sResult = form3sApiSlice.endpoints.getForm3s.select()

// creates memoized selector
const selectForm3sData = createSelector(
    selectForm3sResult,
    form3sResult => form3sResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllForm3s,
    selectById: selectForm3ById,
    selectIds: selectForm3Ids
    // Pass in a selector that returns the form3s slice of state
} = form3sAdapter.getSelectors(state => selectForm3sData(state) ?? initialState)