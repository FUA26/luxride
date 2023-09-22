import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'></div>

      <div className='flex flex-col items-center'>
        <span className='text-8xl text-gray-700'>🏔</span>
        <h1 className='py-4 text-6xl font-bold'>BandaUI Nextjs</h1>
        <p className='m-auto w-9/12 text-center text-base md:w-2/3'>
          A feature-packed Next.js 13+ boilerplate designed to supercharge your
          development workflow. Crafted with inspiration from Shadcn UI, this
          boilerplate comes equipped with a powerful toolkit of packages to
          simplify your development process.
        </p>
        <Link
          href='https://github.com/FUA26/banda-ui-nextjs'
          className='mt-4 w-fit rounded-lg bg-foreground px-6 py-2 text-background'
        >
          Github Repository
        </Link>
      </div>

      <div className='mb-32 mt-10 grid gap-3 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
        <Link
          href='https://tailwindcss.com/'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>Tailwind CSS </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Modern, Utility-First CSS Framework.
          </p>
        </Link>

        <Link
          href='https://www.radix-ui.com/primitives'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>RadixUI Primitives</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Powerful, Accessible UI Components
          </p>
        </Link>

        <Link
          href='https://ui.shadcn.com/'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>Shadcn UI</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Powerfull NextJs Component Library
          </p>
        </Link>

        <Link
          href='https://react-hook-form.com/'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>React Form Hooks</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Simplified Form Handling in React
          </p>
        </Link>

        <Link
          href='https://jestjs.io/'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>Jest</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            JavaScript Testing Framework
          </p>
        </Link>

        <Link
          href='https://storybook.js.org/'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>Storybook</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Tool for Developing UI Components in Isolation
          </p>
        </Link>

        <Link
          href='https://create.t3.gg/en/usage/env-variables'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>T3 Env</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Streamlined Development Environment Management
          </p>
        </Link>

        <Link
          href='https://create.t3.gg/en/usage/env-variables'
          className='group rounded-lg border-2 border-gray-300 px-5 py-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>React Query</h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Seamless Data Fetching and State Management for React Apps
          </p>
        </Link>
      </div>
    </main>
  );
}
