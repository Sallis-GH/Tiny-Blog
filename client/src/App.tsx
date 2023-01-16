import './App.css';
import { IBlogData } from './interface';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [blogs, setBlogs] = useState<IBlogData[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.posts.map((ele: IBlogData) => ({
          id: ele.id,
          body: ele.body,
          tags: ele.tags,
          title: ele.title
        })))
      });
  }, [])

  return (
    <>
      <Header />
      <main className='min-h-footer'>
        <h1>Hello World</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
