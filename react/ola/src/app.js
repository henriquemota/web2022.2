import Card from './components/Card'
import Container from './components/Container'
import { products } from './data'

function App() {
  return (
    <Container>
      <h1>Bem vindo à minha loja virtual</h1>
      <div className="row">
        {products.map((el, ix) => {
          return (
            <div className='col-3' key={ix}>
              <Card data={el} />
            </div>
          )
        })}
      </div>
    </Container>
  )
}


export default App
