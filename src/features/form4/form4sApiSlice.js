import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const form4sAdapter = createEntityAdapter({})

const initialState = form4sAdapter.getInitialState()

export const form4sApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getForm4s: builder.query({
            query: () => ({
                url: '/form4s',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedForm4s = responseData.map(form4 => {
                    form4.id = form4._id
                    return form4
                });
                return form4sAdapter.setAll(initialState, loadedForm4s)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Form4', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Form4', id }))
                    ]
                } else return [{ type: 'Form4', id: 'LIST' }]
            }
        }),
        addNewForm4: builder.mutation({
            query: initialForm4 => ({
                url: '/form4s',
                method: 'POST',
                body: {
                    ...initialForm4,
                }
            }),
            invalidatesTags: [
                { type: 'Form4', id: "LIST" }
            ]
        }),
        updateForm4: builder.mutation({
            query: initialForm4 => ({
                url: '/form4s',
                method: 'PATCH',
                body: {
                    ...initialForm4,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form4', id: arg.id }
            ]
        }),
        deleteForm4: builder.mutation({
            query: ({ id }) => ({
                url: `/form4s`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form4', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetForm4sQuery,
    useAddNewForm4Mutation,
    useUpdateForm4Mutation,
    useDeleteForm4Mutation,
} = form4sApiSlice

// returns the query result object
export const selectForm4sResult = form4sApiSlice.endpoints.getForm4s.select()

// creates memoized selector
const selectForm4sData = createSelector(
    selectForm4sResult,
    form4sResult => form4sResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllForm4s,
    selectById: selectForm4ById,
    selectIds: selectForm4Ids
    // Pass in a selector that returns the form4s slice of state
} = form4sAdapter.getSelectors(state => selectForm4sData(state) ?? initialState)