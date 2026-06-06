import Register from '@/components/Register'
import React from 'react'

function Login() {
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
							<form>
								<div className="card-body gap-3 p-4">
									<input type="text"
										className='input w-full'
										placeholder='E-mail or Phone number' />
									<input type="password"
										className='input w-full'
										placeholder='password' />
									<button className='btn btn-primary text-xl'>Login</button>
									<p className="text-center cursor-pointer opacity-70">
										Forgotten password?
									</p>
									<div className="divider my-0"></div>
									<button className='btn btn-secondary text-lg  mx-auto'
										type='button'
										onClick={()=> document.querySelector('#register-form').showModal() }	
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