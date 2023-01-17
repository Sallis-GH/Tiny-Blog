import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import { IBlogData } from '../interface'

import BlogCard from "./BlogCard"

const Section = ({ tag, blogs }: { tag: string, blogs: IBlogData[] }) => {
  const [isActive, setIsActive] = useState(false)
  const filteredBlogs = blogs.filter(blog => blog.tags.includes(tag.toLowerCase()))


  return (
    <>
      <Menu>
        <Menu.Button onClick={() => setIsActive(!isActive)} className="px-3 pb-2">{tag}</Menu.Button>
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
          <div className='flex px-4 gap-3 h-[50vh] overflow-x-scroll scroll-smooth'>
            {filteredBlogs.map(blog => (
              <div className='relative border flex flex-col min-w-[30vw] px-4 pt-3'>
                <h1 className='text-xl font-semibold mb-2 min-h-[4rem] text-center text-ali'>{blog.title}</h1>
                  <p>{blog.body}</p>
              </div>
            ))}
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