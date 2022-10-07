import React from 'react'
import styles from '../styles/Blogs.module.css'
import { useState,useEffect } from 'react';
import Link from 'next/link';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
      console.log("useeffect is running");
      fetch('http://localhost:3000/api/blogs').then((a) => {
          return a.json();
      })
          .then((parsed) => {
              console.log(parsed)
              setBlogs(parsed)
          })
  }, [])

  return(
<main className={styles.main}>
          <div className={styles.grid}>
            {blogs.map((blogitem) => {
              return <div key={blogitem.slug}>
                
            <div className={styles.card}>
                  <Link href={`/blogpost/${blogitem.slug}`}>
                      <h2 className={styles.blogItemh3}>{blogitem.title}&rarr;</h2></Link>
                  <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
              </div>
              </div>
          })}
                        </div>
                        </main>

  )

}

export default Blogs;