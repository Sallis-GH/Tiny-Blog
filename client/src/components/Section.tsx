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
        <Menu.Button as='section' onClick={() => setIsActive(!isActive)} className="px-3 pb-2 text-4xl font-bold cursor-pointer border-b-2 border-black">{tag}</Menu.Button>
        <Transition
          as='article'
          show={isActive}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >

          <div className='flex px-4 gap-3 h-[50vh] overflow-x-scroll scroll-smooth mt-1 mb-4'>
            {filteredBlogs.map(blog => (
              <BlogCard key={blog.title} blogText={blog.body} blogTitle={blog.title} blogTags={blog.tags.join(', ')} />
            ))}
          </div>
        </Transition>
      </Menu>
    </>
  )
}

export default Section
{/* <div className='relative border-4 flex flex-col min-w-[30rem] px-4 pt-3 pb-2 shadow-xl bg-gray-700 border-gray-800'>
<div className='overflow-x-scroll w-full'>
  <h1 className='text-xl font-semibold mb-2 min-h-[4rem] text-center text-ali'>{blog.title}</h1>
</div>
<p className='w-full'>{blog.body}</p>
</div> */}