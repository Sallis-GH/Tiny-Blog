import './App.css';
import { IBlogData } from './interface';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  const [blogs, setBlogs] = useState<IBlogData[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.posts.map((ele: IBlogData) => ({
          id: ele.id,
          body: ele.body,
          tags: Object.values(ele.tags),
          title: ele.title
        })))
      });
  }, [])


  return (
    <>
      <Header />
      <main className='flex flex-col min-h-footer'>
        <Section tag='History' blogs={blogs} />
        <Section tag='Magical' blogs={blogs} />
        <Section tag='Fiction' blogs={blogs} />
        <Section tag='Crime' blogs={blogs} />
        <Section tag='Classic' blogs={blogs} />
      </main>
      <Footer />
    </>
  );
}

export default App;
