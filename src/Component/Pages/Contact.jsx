import React, { useState, useEffect } from "react";
import { object } from "yup";
import { Footer } from "../Footer";

function Contact() {
	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		textarea: "",
	};

	const [formValue, setformValue] = useState(initialValues);

	const [formErrors, setformErrors] = useState({});

	const [isSubmit, setisSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setformValue({ ...formValue, [name]: value });
		console.log(formValue);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setformErrors(validate(formValue));
		setisSubmit(true);
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValue);
		}
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		if (!values.firstname) {
			errors.firstname = "Firstname is required";
		}
		if (!values.lastname) {
			errors.lastname = "Lastname is required";
		}
		if (!values.email) {
			errors.email = "Email is required";
		}

		if (!values.textarea) {
			errors.textarea = "Message is required";
		}

		return errors;
	};
	return (
		<>
			<prev>{JSON.stringify(formValue, undefined, 2)}</prev>
			<div className='w-full flex items-center justify-center '>
				<form
					onSubmit={handleSubmit}
					className=' top-4 bg-white  rounded py-12 lg:px-28 px-8'>
					<p className='md:text-3xl text-xl font-bold leading-7 text-left text-gray-700'>
						Contact Me
					</p>
					<p className=' text-s leading-7 text-gray-600 my-4 '>
						Contact Me Hi there, contact me to ask me about anything you have in
						mind.
					</p>
					<div className='md:flex items-center mt-12'>
						<div className='md:w-72 flex flex-col'>
							<label className='text-base font-semibold leading-none text-gray-800'>
								First name
							</label>
							<input
								id='first_name'
								tabIndex={0}
								arial-label='Enter your first name'
								type='text'
								className='placeholder:text-slate-400 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
								placeholder='Enter your first name'
								name='firstname'
								value={formValue.firstname}
								onChange={handleChange}
							/>
						</div>
						<p className='error'>{formErrors.firstname}</p>
						<div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
							<label className='text-base font-semibold leading-none text-gray-800'>
								Last name
							</label>
							<input
								id='last_name'
								tabIndex={0}
								arial-label='Enter your last name'
								type='text'
								className='placeholder:text-slate-400 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
								placeholder='Enter your last name'
								name='lastname'
								value={formValue.lastname}
								onChange={handleChange}
							/>
						</div>
						<p className='error'>{formErrors.lastname}</p>
					</div>
					<div className='md:flex items-center mt-8'>
						<div className='md:w-full flex flex-col'>
							<label className='text-base font-semibold leading-none text-gray-800'>
								Email
							</label>
							<input
								placeholder='yourname@email.com'
								tabIndex={0}
								// role='input'
								arial-label='yourname@email.com'
								type='email'
								id='email'
								className='placeholder:text-slate-400 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 '
								name='email'
								value={formValue.email}
								onChange={handleChange}
							/>
							<p className='error'>{formErrors.email}</p>
						</div>
					</div>
					<div>
						<div className='w-full flex flex-col mt-8'>
							<label className='text-base font-semibold leading-none text-gray-800'>
								Message
							</label>
							<textarea
								id='message'
								tabIndex={0}
								aria-label='leave a message'
								// role='textbox'
								type='text'
								className='placeholder:text-slate-400 h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none'
								placeholder='Send your message and I will reply soon'
								name='textarea'
								value={formValue.textarea}
								onChange={handleChange}
							/>
							<p className='error'>{formErrors.textarea}</p>
						</div>
					</div>
					<div className='flex justify-center items-center p-2'>
						<div className='rounded-full mx-2 mt-3'>
							<input type='checkbox' />
						</div>
						<p className='text-xs leading-5 text-gray-600 mt-4'>
							By clicking submit you agree to our terms of service, privacy
							policy and how we use data as stated
						</p>
					</div>
					<div className='flex items-center justify-center w-full'>
						<button
							type='submit'
							id='btn__submit'
							className='w-full  mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-blue-500 rounded hover:bg-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none'>
							Send message
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default Contact;
