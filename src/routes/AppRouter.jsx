import UserLayout from '@/layouts/UserLayout'
import Contact from '@/pages/Contact'
import Friends from '@/pages/Friends'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import useUserStore from '@/stores/userStore'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'

const commonRoute =[
 {path: 'contact', Component: Contact }
]


const guestRouter = createBrowserRouter([
	{ path: '/', Component: Login  },
	{ path: '*', element: <Navigate to='/' /> },
	...commonRoute
])

const userRouter = createBrowserRouter([
	{
		path: '/', Component: UserLayout ,
		children: [
			{ path: '', Component: Home },
			{ path: 'friends', Component: Friends },
			{ path: 'profile', Component: Profile  },
			{ path: '*', element: <Navigate to='/' /> },
			...commonRoute
		]
	}
])

function AppRouter() {
	const user = useUserStore(state => state.user)
	const finalRouter = user ? userRouter : guestRouter
	return (
		<RouterProvider key={user?.id} router={finalRouter} />
	)
}

export default AppRouter