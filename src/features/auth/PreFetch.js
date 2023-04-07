import { store } from '../../app/store'
import { usersApiSlice } from '../users/usersApiSlice'
import { form1sApiSlice } from '../form1/form1sApiSlice'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    
    useEffect(() => {
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
        store.dispatch(form1sApiSlice.util.prefetch('getForm1s', 'form1sList', { force: true }))
    }, [])

    return <Outlet />
}
export default Prefetch