'use client';
import { motion, AnimatePresence } from 'motion/react';
import { use, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const items = [
	{
		question: 'What types of projects do you typically work on?',
		answer:
			'We work on a variety of digital products including websites, e-commerce platforms, mobile apps, and internal tools.'
	},
	{
		question: 'How long does a typical project take?',
		answer:
			'Most projects take between 4–12 weeks depending on scope, complexity, and client collaboration.'
	},
	{
		question: "What's your development process like?",
		answer:
			'Our process includes discovery, wireframing, design, development, testing, and launch — with regular client check-ins.'
	},
	{
		question: 'Do you provide ongoing support after launch?',
		answer:
			'Yes. We offer monthly support plans for maintenance, updates, and feature enhancements.'
	},
	{
		question: 'Can you work with our existing systems and team?',
		answer:
			'Absolutely. We can integrate with your existing tools and collaborate directly with your internal team.'
	}
];

export const Accordion = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const pathname = usePathname();

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='space-y-6'>
			{items.map((item, index) => {
				const isOpen = openIndex === index;
				return (
					<div
						key={index}
						className='border-b border-gray-300 last:border-0 pb-4'
					>
						<button
							className='flex justify-between items-start w-full text-left'
							onClick={() => toggle(index)}
						>
							<span
								className={`${
									pathname === '/contact' && 'dark:text-white'
								} text-[16px] w-3/4 font-medium text-black leading-tight`}
							>
								{item.question}
							</span>
							<span className='ml-4 mt-1 text-xl text-black'>
								{isOpen ? (
									<FiMinus
										className={pathname === '/contact' && 'dark:text-white'}
									/>
								) : (
									<FiPlus
										className={pathname === '/contact' && 'dark:text-white'}
									/>
								)}
							</span>
						</button>
						<AnimatePresence initial={false}>
							{isOpen && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
									className='overflow-hidden'
								>
									<div className='mt-3 text-[#8E8E93] text-sm leading-relaxed pr-6'>
										{item.answer}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
};
