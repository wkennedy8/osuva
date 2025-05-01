'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	FaArrowLeft,
	FaArrowRight,
	FaQuoteRight,
	FaQuoteLeft
} from 'react-icons/fa';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';

export const Testimonials = () => {
	const [index, setIndex] = useState(0);
	const testimonials = [
		{
			text: `Finally found a team that understands both design and business. Our brand now perfectly captures what makes us different.`,
			author: 'Tom Bennett',
			title: 'Founder @ Terrain Coffee',
			image: '/images/hero1.jpg'
		},
		{
			text: `Exceptional execution. They made our product and positioning stand out in a crowded market.`,
			author: 'Maya Chen',
			title: 'CEO @ Nova Labs',
			image: '/images/hero1.jpg'
		},
		{
			text: `Exceptional execution. They made our product and positioning stand out in a crowded market.`,
			author: 'Maya Chen',
			title: 'CEO @ Nova Labs',
			image: '/images/hero1.jpg'
		}
	];

	const handlePrev = () => {
		setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const handleNext = () => {
		setIndex((prev) => (prev + 1) % testimonials.length);
	};

	return (
		<div className='pt-36 text-center'>
			<h1 className='text-[44px] text-black font-medium leading-[1.1em] tracking-[-.07em]'>
				Real results, real feedback
			</h1>
			<div className='mt-12'>
				<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					Companies we've helped grow through strategic design, development, and
					digital transformation solutions.
				</p>
			</div>

			{/* CAROUSEL */}
			<div className='mt-24 px-4'>
				<div className='relative w-full h-[465px] max-w-md bg-white rounded-2xl p-6'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}
						>
							{/* Blue Quote Icon */}
							<FaQuoteLeft className='text-[#0048f9] text-5xl mb-4 justify-self-end' />

							{/* Testimonial Text */}
							<h3 className='text-[26px] text-black tracking-tighter leading-[1.2em] font-medium text-left'>
								{testimonials[index].text}
							</h3>

							{/* Author */}
							<div className='flex flex-col gap-3 mt-6'>
								<img
									src={testimonials[index].image}
									alt={testimonials[index].author}
									className='w-10 h-10 rounded-full object-cover'
								/>
								<div className='text-left'>
									<p className='font-medium text-black'>
										{testimonials[index].author}
									</p>
									<p className='text-sm text-gray-500'>
										{testimonials[index].title}
									</p>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Navigation & Progress Bar */}
				<div className='flex items-center gap-6 mt-6 w-full max-w-md'>
					<button onClick={handlePrev}>
						<IoIosArrowRoundBack className='text-5xl text-black hover:text-gray-700' />
					</button>

					<button onClick={handleNext}>
						<IoIosArrowRoundForward className='text-5xl text-black hover:text-gray-700' />
					</button>
					<div className='flex-1 h-[3px] bg-gray-300 rounded overflow-hidden'>
						<motion.div
							className='h-full bg-black'
							initial={{ width: 0 }}
							animate={{
								width: `${((index + 1) / testimonials.length) * 100}%`
							}}
							transition={{ duration: 0.4 }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
