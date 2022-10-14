import React from "react";
import styles from "../../styles/Home.module.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Slug = (props) => {
  const [blog, setblog] = useState(props.myBlog);

  return (
    <div>
      <h3>{blog && blog.title}</h3>
      <hr />
      <p>{blog && blog.content}</p>
    </div>
  );
  
};
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'how-to-learn-css' } }, { params: { slug: 'how-to-learn-html' } }, { params: { slug: 'how-to-learn-js' } }, { params: { slug: 'how-to-learn-next' } }],
    fallback: true, // can also be true or 'blocking'
  }
}


export async function getStaticProps(context) {

  const { slug } = context.params;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  
  return {
    props: { myBlog },
  };
}
export default Slug;
