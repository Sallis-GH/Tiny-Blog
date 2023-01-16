import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'

import BlogCard from "./BlogCard"

const Section = ({ tag }: { tag: string }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <Menu>
        <Menu.Button onClick={() => setIsActive(!isActive)}>{tag}</Menu.Button>
        <Transition
          as='div'
          show={isActive}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='flex gap-4 overflow-x-scroll scroll-smooth px-2'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </Transition>
      </Menu>
    </>
  )
}

export default Section
  // <div className="mx-2 border-2 border-black p-2 text-3xl cursor-pointer transition-[height] ease-in duration-500">
  //   <div onClick={() => setIsActive(!isActive)} >
  //     <p>{tag}</p>
  //   </div>
  //   {isActive && <BlogCard />}
  // </div>