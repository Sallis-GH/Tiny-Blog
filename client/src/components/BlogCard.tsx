const BlogCard = ({ blogText, blogTitle, blogTags }: { blogText: string, blogTitle: string, blogTags: string }) => {
  return (
    <div className='min-w-[280px] relative border-4 flex flex-col md:min-w-[30rem] mt-4 px-4 pt-3 pb-2 shadow-xl bg-gray-700 border-gray-800'>
      <h1 className='text-xl font-semibold mb-2 min-h-[4rem] text-center text-ali'>{blogTitle}</h1>
      <div className="overflow-y-scroll mt-3">
        <p className='w-full'>{blogText}</p>
        <p className="absolute bottom-2 capitalize">{blogTags}</p>
      </div>
    </div>
  )
}

export default BlogCard