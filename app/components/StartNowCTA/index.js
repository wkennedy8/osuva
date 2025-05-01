import Link from 'next/link';

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
					className='text-2xl underline underline-offset-10 flex items-center gap-2'
				>
					Start now
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						className='size-5'
					>
						<path
							fillRule='evenodd'
							d='M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z'
							clipRule='evenodd'
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};
