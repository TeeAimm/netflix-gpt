import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

import Login from './Login/Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { auth } from 'utils/firebase';
import { addUser, removeUser } from 'store/userSlice';

const Body = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid, email, displayName }))
				//	navigate('/browse')
			} else {
				dispatch(removeUser())
				//	navigate('/')
			}
		});
	}, [])

	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Login />
		},
		{
			path: '/browse',
			element: <Browse />
		}
	])

	return (
		<>
			<RouterProvider router={appRouter} />
		</>
	)
}

export default Body