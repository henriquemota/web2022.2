import axios from 'axios'
import { useEffect, useState } from 'react'

function Frutas() {
  const [frutas, setFrutas] = useState([])
  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    axios.get('http://localhost/php/api.php')
      .then(({ data }) => setPessoas(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>Frutas</h1>
      <ul>
        {frutas.map((el, ix) => {
          return <li key={ix}>{el}</li>
        })}
      </ul>

      <h1>Pessoas</h1>
      <ul>
        {pessoas.map(({ nome, idade }, ix) => {
          return <li key={ix}>{nome} - {idade}</li>
        })}
      </ul>
    </div>
  )
}

export default Frutas