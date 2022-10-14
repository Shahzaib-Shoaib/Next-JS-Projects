import React from 'react'
import styles from '../styles/Blogs.module.css'
import { useState,useEffect } from 'react';
import Link from 'next/link';

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
      
  // }, [])

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

// export async function getServerSideProps(context) {
//       let data = await fetch('http://localhost:3000/api/blogs')
//       let allBlogs = await data.json()
      


export async function getStaticProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()
  

  return {
    props: {allBlogs},
  }
}


export default Blog;