'use client';
import Link from 'next/link';
import { Accordion } from '../Accordion';
import { FiArrowUpRight } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export const FAQ = () => {
	const pathname = usePathname();

	return (
		<div className='mt-24 lg:mt-36'>
			<div className='lg:flex'>
				<div>
					<h1
						className={`${
							pathname === '/contact' && 'dark:text-white'
						} text-[44px] lg:text-[60px] text-black font-medium leading-14 tracking-tighter`}
					>
						Common Qs
					</h1>

					<div className='mt-12 w-11/12 lg:w-3/4'>
						<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
							Get quick answers about working with us and our approach to
							digital solutions. Cant' find what you're looking for? Reach out
							below!
						</p>
					</div>
					<div className='mt-12'>
						<Link
							href='#'
							className={`${
								pathname === '/contact' && 'dark:text-white'
							} text-lg text-black font-medium underline underline-offset-8 flex items-center gap-2`}
						>
							Contact us
							<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
						</Link>
					</div>
				</div>
				<div className='mt-12 lg:mt-0 pb-12 lg:pb-60 lg:w-full'>
					<Accordion />
				</div>
			</div>
		</div>
	);
};
