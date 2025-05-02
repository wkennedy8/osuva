'use client';

import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const ContactForm = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', form);
		// Add your logic here (e.g., API call or email service)
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='max-w-xl w-full space-y-8 text-black'
		>
			<div className='flex flex-col'>
				<input
					type='text'
					name='name'
					placeholder='Name *'
					required
					value={form.name}
					onChange={handleChange}
					className='border-b dark:placeholder-white border-gray-400 focus:outline-none focus:border-[#0048f9] bg-transparent pb-1'
				/>
			</div>

			<div className='flex flex-col'>
				<input
					type='email'
					name='email'
					required
					placeholder='E-mail *'
					value={form.email}
					onChange={handleChange}
					className='border-b dark:placeholder-white border-gray-400 focus:outline-none focus:border-[#0048f9] bg-transparent pb-1'
				/>
			</div>

			<div className='flex flex-col'>
				<textarea
					name='message'
					placeholder='Project Information *'
					required
					rows={4}
					value={form.message}
					onChange={handleChange}
					className='border-b dark:placeholder-white border-gray-400 focus:outline-none focus:border-[#0048f9] bg-transparent resize-none'
				/>
			</div>

			<div className='mb-12'>
				<button
					type='submit'
					className='font-medium dark:text-white underline underline-offset-8 flex items-center gap-2'
				>
					Send message
					<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
				</button>
			</div>
		</form>
	);
};
