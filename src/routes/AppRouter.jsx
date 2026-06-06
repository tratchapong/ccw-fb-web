import Friends from '@/pages/Friends'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'

const guestRouter = createBrowserRouter([
	{ path: '/', Component: Login  },
	{ path: '*', element: <Navigate to='/' /> },
])

const userRouter = createBrowserRouter([
	{
		path: '/', element: <>
			<p className='py-4 border'>Header</p>
			<Outlet />
		</>,
		children: [
			{ path: '', Component: Home },
			{ path: 'friends', Component: Friends },
			{ path: 'profile', Component: Profile  },
			{ path: '*', element: <Navigate to='/' /> },
		]
	}
])


function AppRouter() {
	const user = 'andy@ggg.mail'
	const finalRouter = user ? userRouter : guestRouter
	return (
		<RouterProvider router={finalRouter} />
	)
}

export default AppRouter