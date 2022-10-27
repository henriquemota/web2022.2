import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='d-flex flex-column vh-100' style={{ flex: 1 }}>
      <header className='mb-5 shadow'>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link to='/' className="navbar-brand"> Meus apps </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/home' className="nav-link" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/cep' className="nav-link" aria-current="page">CEP</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/posts' className="nav-link" aria-current="page">Posts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main className='d-flex flex-column' style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer className='mt-5'>
        <div className="container">
          <p>Desenvolvido na disciplina de DevWeb</p>
          <p>&copy; 2022 - Estácio</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout