intro and basics of next :

all the pages which will be made afterwards should be in pages folder, the page made can be accessed by the url for eg:- localhost:3000/about ; the 'about.js' is the new file made in pages section
it can also be like 'localhost:3000/about/first-intro' , in this example the pages folder will contain a subfolder named about which will contain a file named 'first-intro'

[DOCUMENTATION-BELOW]

Dynamic Routes
Defining routes as shown in the Nested Routes section above is not always enough for complex applications. In Next.js you can add brackets to a page ([sno]) to create a dynamic route (or URL slugs).

Consider the following page pages/blog/[sno].js:
`
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
`
 

This page will render Post: 1 when you visit http://localhost:3000/blog/1 and the same page will render Post: 34 when you visit http://localhost:3000/blog/34


head component is used to change or provide meta description just like html , it can also be used to add scripts to the app but it is not a goood practice

script component is used to add external JS scripts to the app with very useful attributes

