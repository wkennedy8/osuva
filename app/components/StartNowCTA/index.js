import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export const StartNowCTA = () => {
	return (
		<div className='mt-24'>
			<h1 className='text-6xl font-medium leading-[1.1em] tracking-[-.07em]'>
				Want to build something better?
			</h1>
			<div className='mt-12 w-11/12'>
				<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					Our team brings together design, development, and strategic thinking
					to help you grow.
				</p>
			</div>
			<div className='mt-12'>
				<Link
					href='#'
					className='text-xl underline underline-offset-10 flex items-center gap-2'
				>
					Start now
					<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
				</Link>
			</div>
		</div>
	);
};
