import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export const StartNowCTA = () => {
	return (
		<div className='mt-24 lg:mt-48 lg:min-h-[50vh] lg:text-center'>
			<h1 className='text-6xl font-medium leading-[1.1em] tracking-[-.07em]'>
				Want to build something better?
			</h1>
			<div className='mt-12 w-11/12 lg:w-1/4 lg:mx-auto'>
				<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					Our team brings together design, development, and strategic thinking
					to help you grow.
				</p>
			</div>
			<div className='mt-12 lg:flex lg:justify-center'>
				<Link
					href='/contact'
					className='text-xl lg:text-2xl underline underline-offset-10 flex items-center gap-2'
				>
					Start now
					<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
				</Link>
			</div>
		</div>
	);
};
