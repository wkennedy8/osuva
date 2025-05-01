import { FaQuoteLeft } from 'react-icons/fa';

export const GettingStarted = () => {
	return (
		<div className='mt-24'>
			<h1 className='text-[44px] font-medium leading-[1.1em] tracking-[-.07em]'>
				From humble beginnings to a trusted digital partner
			</h1>
			<div className='mt-12 w-11/12'>
				<p className='text-[16px] font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					What started as a small team of three developers working from a tiny
					office has grown into a dynamic digital agency trusted by businesses
					across multiple industries. Through dedication to quality, transparent
					communication, and a deep understanding of our clients' needs, we've
					built lasting partnerships and delivered solutions that make a
					difference.
				</p>
			</div>
			<div className='mt-24'>
				{/* Blue Quote Icon */}
				<FaQuoteLeft className='text-[#0048f9] text-5xl mb-4' />

				{/* Testimonial Text */}
				<h3 className='text-[26px] tracking-tighter leading-[1.2em] font-medium text-left'>
					When we founded Osuva, we had a simple vision - to help businesses
					succeed in the digital world by combining technical excellence with
					genuine care for our clients' success. That vision still drives
					everything we do today.
				</h3>

				{/* Author */}
				<div className='flex items-center gap-3 mt-6'>
					<img
						src={'/images/hero1.jpg'}
						alt='Will Kennedy'
						className='w-10 h-10 rounded-full object-cover'
					/>
					<div className='text-left'>
						<p className='font-medium'>Will Kennedy</p>
						<p className='text-sm text-gray-500'>CEO & Founder</p>
					</div>
				</div>
			</div>
		</div>
	);
};
