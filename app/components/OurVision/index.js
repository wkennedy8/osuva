export const OurVision = () => {
	const stats = [
		{ number: 12, text: 'Projects delivered', icon: '+' },
		{ number: 5, text: 'Industries served', icon: '+' },
		{ number: 95, text: 'Client retention', icon: '%' }
	];
	return (
		<div className='mt-24 pb-24'>
			<p className='uppercase text-md'>{'/our vision/'}</p>
			<h1 className='mt-24 text-[44px] font-medium leading-[1.1em] tracking-[-.07em]'>
				Whether it's a website, an app, or a complete brand identity - we create
				work that works.
			</h1>
			<p className='mt-12 pr-4 text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
				Good design isn't just about looks. It's about solving real problems and
				getting results. Here’s ours.
			</p>
			<div className='mt-12'>
				{stats.map((stat, i) => {
					return (
						<div key={i} className='my-2'>
							<h3 className='text-[66px] text-[#0048f9] font-medium tracking-[-0.05em]'>
								{stat.number}
								{stat.icon}
							</h3>
							<p className='text-md text-[#8E8E93] leading-2'>{stat.text}</p>
						</div>
					);
				})}
			</div>
			<div className='h-[2px] max-w-[1800px] bg-[#97979733] mt-24' />
		</div>
	);
};
