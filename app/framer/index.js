'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionH4 = motion.h4;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionDiv = motion.div;
export const MotionHeader = motion.header;

export const TranslateWrapper = ({ children, reverse }) => {
	return (
		<motion.div
			initial={{ translateX: reverse ? '-100%' : '0%' }}
			animate={{ translateX: reverse ? '0%' : '-100%' }}
			transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
			className='flex gap-4 px-2'
		>
			{children}
		</motion.div>
	);
};

export const RotateWords = ({ text, words, className }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 5000);
		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, []);
	return (
		<div className={className}>
			<h1>{text}</h1>
			{'  '}
			<AnimatePresence mode='wait'>
				<motion.h1
					className='ml-2 bg-[#0048f9] px-2 text-white'
					key={words[index]}
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.5 }}
				>
					{words[index]}
				</motion.h1>
			</AnimatePresence>
		</div>
	);
};
