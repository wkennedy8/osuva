export const OurApproach = () => {
	const approaches = [
		{
			id: '01',
			title: 'Deep understanding',
			description:
				'We take the time to truly understand your business, goals, and challenges before proposing any solutions. This foundation helps us truly serve your needs.'
		},
		{
			id: '02',
			title: 'Thoughtful solutions',
			description:
				"We don't believe in one-size-fits-all approaches. Every solution we create is carefully crafted to address your specific challenges and opportunities."
		},
		{
			id: '03',
			title: 'Continuous innovation',
			description:
				"Technology never stands still, and neither do we. We're constantly learning, adapting, and finding better ways to serve our clients."
		}
	];
	return (
		<div className='mt-24'>
			<p className='uppercase text-sm tracking-[-0.02em] leading-[1.4em]'>
				{'/our approach/'}
			</p>
			<div className='mt-12 flex flex-col gap-6'>
				{approaches.map((approach) => {
					return (
						<div key={approach.id} className='space-y-4'>
							<h3 className='text-4xl text-[#0048f9] font-medium tracking-[-0.07em] leading-[1.1em]'>
								{approach.id}
							</h3>
							<h3 className='text-[26px] font-medium tracking-[-0.04em] leading-[1.2em]'>
								{approach.title}
							</h3>
							<p className='text-[16px] font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
								{approach.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
