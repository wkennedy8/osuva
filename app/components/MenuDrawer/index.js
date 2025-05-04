'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const MenuDrawer = ({ open, onClose }) => {
	const drawerVariants = {
		hidden: {
			x: '100%'
		},
		visible: {
			x: 0,
			transition: {
				type: 'easeIn',
				duration: 0.3
			}
		},
		exit: {
			x: '100%',
			transition: {
				type: 'easeOut',
				duration: 0.3,
				delay: 0.2
			}
		}
	};

	const backdropVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.3 }
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.3 }
		}
	};

	const links = [
		{ title: 'Home', href: '/' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'About', href: '/about' },
		{ title: 'Contact', href: '/contact' }
	];

	return (
		<AnimatePresence>
			{open && (
				<>
					{/* Backdrop */}
					<motion.div
						className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'
						initial='hidden'
						animate='visible'
						exit='exit'
						variants={backdropVariants}
						onClick={onClose}
					/>

					{/* Drawer */}
					<motion.div
						className='fixed top-0 right-0 h-screen w-full lg:w-[30%] bg-[#0048f9] z-60 flex flex-col'
						variants={drawerVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						<div className='p-6 flex justify-between items-center'>
							<button
								onClick={onClose}
								className='flex flex-col items-center z-50'
							>
								<span
									className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
										open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
									}`}
								></span>
								<span
									className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
										open ? 'opacity-0' : 'opacity-100'
									}`}
								></span>
								<span
									className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
										open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
									}`}
								></span>
							</button>
						</div>

						<div className='mt-12'>
							{links.map((link, i) => (
								<div key={i} className='px-6 mb-1'>
									<Link
										href={link.href}
										onClick={onClose}
										className='text-[44px] text-white font-medium tracking-[-0.07em] leading-[1.1em]'
									>
										{link.title}
									</Link>
								</div>
							))}
						</div>

						<div className='absolute bottom-20 w-full px-6 mt-12 flex justify-between'>
							<ul className='flex flex-col gap-2 w-1/2'>
								<li className='text-white text-lg'>Privacy Policy</li>
								<li className='text-white text-lg'>Instagram</li>
								<li className='text-white text-lg'>Github</li>
							</ul>
							<ul className='flex flex-col gap-2 w-1/2'>
								<li className='text-white text-lg'>Terms of Service</li>
								<li className='text-white text-lg'>Twitter</li>
								<li className='text-white text-lg'>Facebook</li>
							</ul>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
