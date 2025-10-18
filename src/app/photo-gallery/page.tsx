import React from 'react'

async function PhotoGallery() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
}

export default PhotoGallery
