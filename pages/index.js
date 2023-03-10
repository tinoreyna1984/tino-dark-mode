import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className='h-full w-full
          flex flex-col xl:flex-row
          bg-gradient-to-r from-zinc-100 to-zinc-400
          dark:from-stone-800 dark:to-stone-600'
        >
          <div className='flex flex-col items-start justify-center mx-4 sm:max-w-[744px] my-5 xl:my-0'>
            <h1 className='font-bold text-4xl drop-shadow-xl text-black dark:text-stone-200'>Art Studio</h1>
            <p className='my-4 text-black dark:text-stone-200'>Eiusmod amet tempor quis consequat.
              Minim elit eiusmod eiusmod sit dolor sit exercitation incididunt
              irure fugiat ex adipisicing enim in. Nulla occaecat sunt officia non enim deserunt proident. Ea magna
              deserunt dolore id irure proident do voluptate. Ut quis voluptate adipisicing fugiat eiusmod aliquip
              minim aute pariatur laborum.
            </p>
            <button type='button'
              className='btn'>
              Explore more
            </button>
          </div>
          <div className='lg:min-w-[744px] shadow-xl'>
            <img src="./demo.png" alt='demo.png' />
          </div>
        </div>
      </>

    </>
  )
}
