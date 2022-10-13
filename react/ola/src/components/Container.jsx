function Container(props) {
  return (
    <main className='min-vh-100' >
      <section className='container'>
        {props.children}
      </section>
    </main>
  )
}

export default Container