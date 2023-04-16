import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const form2sAdapter = createEntityAdapter({})

const initialState = form2sAdapter.getInitialState()

export const form2sApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getForm2s: builder.query({
            query: () => ({
                url: '/form2s',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedForm2s = responseData.map(form2 => {
                    form2.id = form2._id
                    return form2
                });
                return form2sAdapter.setAll(initialState, loadedForm2s)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Form2', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Form2', id }))
                    ]
                } else return [{ type: 'Form2', id: 'LIST' }]
            }
        }),
        addNewForm2: builder.mutation({
            query: initialForm2 => ({
                url: '/form2s',
                method: 'POST',
                body: {
                    ...initialForm2,
                }
            }),
            invalidatesTags: [
                { type: 'Form2', id: "LIST" }
            ]
        }),
        updateForm2: builder.mutation({
            query: initialForm2 => ({
                url: '/form2s',
                method: 'PATCH',
                body: {
                    ...initialForm2,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form2', id: arg.id }
            ]
        }),
        deleteForm2: builder.mutation({
            query: ({ id }) => ({
                url: `/form2s`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Form2', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetForm2sQuery,
    useAddNewForm2Mutation,
    useUpdateForm2Mutation,
    useDeleteForm2Mutation,
} = form2sApiSlice

// returns the query result object
export const selectForm2sResult = form2sApiSlice.endpoints.getForm2s.select()

// creates memoized selector
const selectForm2sData = createSelector(
    selectForm2sResult,
    form2sResult => form2sResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllForm2s,
    selectById: selectForm2ById,
    selectIds: selectForm2Ids
    // Pass in a selector that returns the form2s slice of state
} = form2sAdapter.getSelectors(state => selectForm2sData(state) ?? initialState)