import React from 'react'
import styles from '../../styles/Home.module.css'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

const Slug = () => {
    const [blog, setblog] = useState();
    const router = useRouter();

    useEffect(() => {
      if(!router.isReady) return;
      const { slug } = router.query;

      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
        return a.json();
      }).then((parsed) => {
        setblog(parsed)
      })
    }, [router.isReady]);

  return (

    <div >

        <h3>{blog && blog.title}</h3>
        <hr />
        <p>{blog && blog.content}</p>
    </div>
   

  )
}

export default Slug;