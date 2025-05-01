export const OurServices = () => {
	const services = [
		{
			id: '01',
			type: 'Website Design',
			description:
				'Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return.'
		},
		{
			id: '02',
			type: 'Product Design',
			description:
				'Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return.'
		},
		{
			id: '03',
			type: 'Branding',
			description:
				'Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return.'
		},
		{
			id: '04',
			type: 'Motion Graphics',
			description:
				'Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return.'
		},
		{
			id: '05',
			type: 'Development',
			description:
				'Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return.'
		}
	];
	return (
		<div>
			<h3 className='mt-24 text-[36px] font-medium leading-[1.1em] tracking-[-.07em]'>
				This is how we help ambitious companies succeed.
			</h3>
			<div className='mt-24'>
				{services.map((service) => {
					return (
						<div key={service.id} className='mt-8'>
							<div className='flex items-center gap-12'>
								<p className='text-2xl font-medium text-[#0048f9]'>
									{service.id}
								</p>
								<h3 className='text-[40px] font-medium leading-[1.1em] tracking-[-.07em]'>
									{service.type}
								</h3>
							</div>
							<div className='mt-4'>
								<p className='pr-4 text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
									{service.description}
								</p>
							</div>
							<div
								className={`${
									service.id != '05' &&
									'h-[2px] max-w-[1800px] bg-[#97979733] mt-8 '
								}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
