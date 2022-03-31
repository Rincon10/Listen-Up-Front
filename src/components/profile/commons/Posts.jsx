import React from 'react'

const Posts = ({posts}) => {
  return (
    <div>{posts.map(post => {<h1 key={post.id}>{post}</h1>})}</div>
  )
}

export default Posts