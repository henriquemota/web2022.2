import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { BASE_URL } from '../constants'

function PostList() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${BASE_URL}/posts`)
      .then(({ data, status }) => status === 200 ? setPosts(data) : setPosts([]))
      .catch((err) => alert(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className='container'>
      {loading && <div>Carregando...</div>}
      <h3>Lista de posts</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th colSpan={100}>
              <Link to='/posts/new' className='btn btn-primary'>Novo post</Link>
            </th>
          </tr>
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
                <td><Link to={`/posts/${el.id}`}>{el.id}</Link></td>
                <td><Link to={`/posts/${el.id}`}>{el.title}</Link></td>
                <td><Link to={`/posts/${el.id}`}>{el.body}</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

function PostForm() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    axios
      .post(`${BASE_URL}/posts`, form)
      .then(({ status, data }) => status === 201 && alert(`Operação realizada com sucesso. ID: ${data.id}`))
      .catch((err) => alert(err))
      .finally(setLoading(false))
  }

  return (
    <section className="container">
      {loading && <div>Carregando...</div>}
      <h1>Post</h1>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <label htmlFor="title" className='form-label my-3'>Title</label>
        <input type="text" name="title" id="title" className='form-control' onChange={({ target: { value } }) => setForm({ ...form, title: value })} />
        <label htmlFor="body" className='form-label my-3'>Body</label>
        <textarea rows={5} name="body" id="body" className='form-control' onChange={({ target: { value } }) => setForm({ ...form, body: value })} />
        <input type="submit" value="gravar" className='btn btn-success my-3' />
      </form>
    </section>
  )
}

function Post() {
  const route = useRoutes()
  const { id } = route.params

  useEffect(() => {
    console.log(id)
  }, [id])

  return (
    <h1>Post</h1>
  )
}
export { PostList, PostForm, Post }
