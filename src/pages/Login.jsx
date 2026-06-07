import Register from '@/components/Register'
import useUserStore from '@/stores/userStore'
import { loginSchema } from '@/validations/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

function Login() {
	const login = useUserStore(state => state.login)
	const [closeModal, setCloseModal] = useState(false) //for reset RegisterForm
	const { handleSubmit, register, formState, reset } = useForm({
		resolver: zodResolver(loginSchema),
		mode: 'onSubmit'
	})
	const { isSubmitting, errors } = formState

	const hdlClose = () => setCloseModal(prv => !prv)

	const onSubmit = async data => {
		try {
			await new Promise(resolve => setTimeout(resolve, 1000))
			const resp = await login(data)
			// toast.success(resp.data.message)
		} catch (err) {
			const errMsg = err.response?.data.message || err.message
			toast.error(errMsg)
		}
	}

	return (
		<>
			<div className="h-175 pt-20 pb-28 bg-base-200 ">
				<div className="p-5 mx-auto max-w-5xl min-h-135 flex justify-between max-md:flex-col">
					<div className="flex flex-col gap-4 mt-20 basis-3/5 max-md:text-center">
						<div className="text-5xl text-primary font-bold">Fakebook</div>
						<h2 className='text-[30px] leading-8 mt-3 w-128.5 max-md:hidden'>
							Fakebook helps you connect and share with the people in your life.
						</h2>
						<div className="badge badge-outline badge-error max-md:hidden">This is not real facebook</div>
					</div>
					<div className="flex flex-1 ">
						<div className="card bg-base-100 w-full h-87.5 shadow-xl mt-8">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="card-body gap-3 p-4">
									<div className="w-full">
										<input type="text"
											className='input w-full'
											placeholder='E-mail or Phone number'
											{...register('identity')}
										/>
										<p className="text-sm text-error">{errors.identity?.message}</p>
									</div>
									<div className="w-full">
										<input type="password"
											className='input w-full'
											placeholder='password'
											{...register('password')}
										/>
										<p className="text-sm text-error">{errors.password?.message}</p>
									</div>
									<button className='btn btn-primary text-xl' disabled={isSubmitting} >Login
										 { isSubmitting && <span className="loading loading-dots loading-sm"></span> }
									</button>
									<p className="text-center cursor-pointer opacity-70">
										Forgotten password?
									</p>
									<div className="divider my-0"></div>
									<button className='btn btn-secondary text-lg  mx-auto'
										type='button'
										onClick={() => document.querySelector('#register-form').showModal()}
									>Create new account</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<dialog id="register-form" className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<Register />
				</div>
			</dialog>
		</>
	)
}

export default Login