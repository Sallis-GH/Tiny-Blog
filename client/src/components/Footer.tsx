const Footer = () => {
  return (

    <footer className=' bottom-0 w-full p-4 rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>Made by <a href='#' className='hover:underline'>Salamon R.</a>
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/Sallis-GH' className='mr-4 hover:underline md:mr-6'>Github</a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/salamon-rorvik/' target='_blank' rel='noreferrer' className='hover:underline'>LinkedIn</a>
        </li>
      </ul>
    </footer>

  )
}

export default Footer