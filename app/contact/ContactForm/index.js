'use client';

import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const ContactForm = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: '' }); // clear error on input
	};

	const validateForm = () => {
		const newErrors = {};
		if (!form.name.trim()) newErrors.name = 'Name is required.';
		if (!form.email.trim()) {
			newErrors.email = 'Email is required.';
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			newErrors.email = 'Email is invalid.';
		}
		if (!form.message.trim()) newErrors.message = 'Message is required.';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			try {
				const response = await fetch('/api/contact', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(form)
				});

				console.log(response);
				setForm({
					name: '',
					email: '',
					message: ''
				});
			} catch (error) {
				console.log('Error submitting form', error);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className='max-w-xl w-full space-y-8'>
			<div className='flex flex-col'>
				<input
					type='text'
					name='name'
					placeholder='Name *'
					value={form.name}
					onChange={handleChange}
					className={`border-b pb-1 bg-transparent dark:placeholder-white focus:outline-none focus:border-[#0048f9] ${
						errors.name ? 'border-red-500' : 'border-gray-400'
					}`}
				/>
				{errors.name && (
					<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
				)}
			</div>

			<div className='flex flex-col'>
				<input
					type='email'
					name='email'
					placeholder='E-mail *'
					value={form.email}
					onChange={handleChange}
					className={`border-b pb-1 bg-transparent dark:placeholder-white focus:outline-none focus:border-[#0048f9] ${
						errors.email ? 'border-red-500' : 'border-gray-400'
					}`}
				/>
				{errors.email && (
					<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
				)}
			</div>

			<div className='flex flex-col'>
				<textarea
					name='message'
					placeholder='Project Information *'
					rows={4}
					value={form.message}
					onChange={handleChange}
					className={`border-b resize-none bg-transparent dark:placeholder-white focus:outline-none focus:border-[#0048f9] ${
						errors.message ? 'border-red-500' : 'border-gray-400'
					}`}
				/>
				{errors.message && (
					<p className='text-red-500 text-sm mt-1'>{errors.message}</p>
				)}
			</div>

			<div className='mb-12'>
				<button
					type='submit'
					className='group font-medium dark:text-white underline underline-offset-8 flex items-center gap-2'
				>
					Send message
					<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
				</button>
			</div>
		</form>
	);
};
