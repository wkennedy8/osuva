import Image from 'next/image';
import Link from 'next/link';

export const RecentProjects = () => {
	const projects = [
		{
			id: 1,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Branding', 'Web Design', 'Motion Graphics']
		},
		{
			id: 2,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Branding', 'Product Design', 'Motion Graphics']
		},
		{
			id: 3,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Branding', 'Web Design', 'Development']
		},
		{
			id: 4,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Product Design']
		}
	];
	return (
		<div className='mt-24'>
			<h1 className='text-[44px] font-medium leading-[1.1em] tracking-[-.07em]'>
				Our recent projects
			</h1>
			<div className='mt-12 w-11/12'>
				<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					Dive into our diverse collection of innovative projects, where
					creativity meets cutting-edge technology to solve real-world
					challenges.
				</p>
			</div>
			<div className='mt-12'>
				<Link
					href='#'
					className='text-lg font-medium underline underline-offset-8 flex items-center gap-2'
				>
					All projects
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
			<div className='mt-12 flex flex-col px-2'>
				{projects.map((project, i) => {
					return (
						<div key={i} className='mb-12'>
							<Image
								className='object-contain mx-auto w-full rounded-xl'
								src={project.image}
								alt={project.title}
								height={200}
								width={200}
							/>
							<h1 className='text-[26px] my-4 font-medium leading-[1.1em] tracking-[-.07em]'>
								{project.title}
							</h1>
							<div className='flex flex-wrap gap-2'>
								{project.services_provided.map((service, i) => {
									return (
										<span
											key={i}
											className='text-[#8E8E93] tracking-[-.04em] leading-[1.4em] border py-2 px-4  rounded-2xl'
										>
											{service}
										</span>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
