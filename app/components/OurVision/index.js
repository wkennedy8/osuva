export const OurVision = () => {
	const stats = [
		{ number: 12, text: 'Projects delivered', icon: '+' },
		{ number: 5, text: 'Industries served', icon: '+' },
		{ number: 95, text: 'Client retention', icon: '%' }
	];
	return (
		<>
			<div className='mt-24 pb-24 lg:flex'>
				<p className='uppercase text-md lg:text-xl lg:w-3/4'>
					{'/our vision/'}
				</p>
				<div className=''>
					<h1 className='mt-24 lg:mt-0 text-[44px] lg:text-[60px] lg:w-10/12 font-medium leading-[1.1em] tracking-[-.07em]'>
						Whether it's a website, an app, or a complete brand identity - we
						create work that works.
					</h1>
					<p className='mt-12 pr-4 text-lg lg:w-1/2 font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
						Good design isn't just about looks. It's about solving real problems
						and getting results. Here’s ours.
					</p>
					<div className='mt-12 lg:flex lg:gap-8'>
						{stats.map((stat, i) => {
							return (
								<div key={i} className='my-2'>
									<h3 className='text-[66px] lg:text-[80px] text-[#0048f9] font-medium tracking-[-0.05em]'>
										{stat.number}
										{stat.icon}
									</h3>
									<p className='text-md lg:text-lg text-[#8E8E93] leading-2'>
										{stat.text}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='h-[2px] bg-[#97979733]' />
		</>
	);
};
