'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AnimatedHeroImage = ({ animate }) => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start center', 'center center']
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
	return (
		<motion.img
			ref={targetRef}
			src='/images/hero1.jpg'
			transition={{ duration: 3, type: 'tween' }}
			style={animate && { scale }}
			// priority
			height={800}
			width={800}
			alt='hero'
			className='object-cover h-full w-full'
		/>
	);
};
