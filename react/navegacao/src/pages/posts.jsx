import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants'

function PostList(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/posts`)
      .then(({ data, status }) => status === 200 ? setPosts(data) : setPosts([]))
      .catch((err) => alert(err))
  }, [])

  return (
    <section className='container'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>post</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((el, ix) => {
            return (
              <tr key={ix}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.body}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

function Post(props) {
  return (
    <h1>Post</h1>
  )
}

export { PostList, Post }
