import { products } from './data'

function App() {
  return (
    <main className='min-vh-100' >
      <section className='container'>
        <h1>Bem vindo à minha loja virtual</h1>
        <div className="row">
          {products.map((el, ix) => {
            return (
              <div className='col-3' key={ix}>
                <div className="card shadow my-2">
                  <img src={el.img} class="card-img-top" alt={el.name} title={el.name} />
                  <div className="card-body">
                    <h3>informacoes do produto</h3>
                    <p>{el.name}</p>
                    <p>{el.price.toLocaleString('pt-BR')}</p>
                  </div>
                  <div className="card-footer d-grid">
                    <button className='btn btn-primary my-1'>+</button>
                    <button className='btn btn-primary my-1'>+</button>
                    <button className='btn btn-primary my-1'>+</button>
                    <button className='btn btn-primary my-1'>+</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
