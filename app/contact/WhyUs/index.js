export const WhyUs = () => {
	const trustPoints = [
		{
			title: "We've been around",
			description:
				"Over the past decade, we've built dozens of websites and applications that continue driving value for our clients."
		},
		{
			title: 'We listen carefully',
			description:
				'Every project begins by understanding your unique vision, and we ensure your goals remain at the heart of our work.'
		},
		{
			title: 'We keep you informed',
			description:
				"You'll never wonder about your project's status, as we provide detailed updates and maintain open dialogue throughout."
		},
		{
			title: 'We drive results',
			description:
				'While we create beautiful designs, our primary focus is delivering solutions that generate real business impact.'
		}
	];
	return (
		<div className='mt-12'>
			<h1 className='text-[44px] font-medium leading-[1.1em] tracking-[-.07em]'>
				Why you can trust us
			</h1>
			<div className='mt-12'>
				{trustPoints.map((point, i) => {
					return (
						<div key={i}>
							<div className='flex gap-4'>
								<div className='w-[4px] bg-blue-600' />
								<h3 className='text-[26px] tracking-[-0.04em] leading-[1.2ems] font-medium'>
									{point.title}
								</h3>
							</div>
							<p className='my-4 font-medium text-sm text-[#8E8E93] tracking-[-0.02em] leading-[1.4em]'>
								{point.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
