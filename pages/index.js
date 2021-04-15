import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">

     <h1>
       Read{' '}
       <Link href="/posts/my-first-post"> 
       <a>Link</a></Link>
       </h1>
    
    </div>
  )
}
