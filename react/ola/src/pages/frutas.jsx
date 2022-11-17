import axios from 'axios'
import { useEffect, useState } from 'react'

function Frutas() {
  const [frutas, setFrutas] = useState([])
  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    // axios.get('http://localhost/php/api.php')
    //   .then(({ data }) => setPessoas(data))
    //   .catch(error => console.log(error))
  }, [])

  function fetchData(tipo) {
    axios.get(`http://localhost/php/api.php?tipo=${tipo}`)
      .then(({ data }) => tipo === 'pessoas' ? setPessoas(data) : setFrutas(data))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <button type='button' onClick={fetchData.bind(this, 'pessoas')}>listar pessoas</button>
      <button type='button' onClick={fetchData.bind(this, 'frutas')}>listar frutas</button>

      <hr />
      <h1>{frutas.length} Frutas</h1>
      <ul>
        {frutas.map((el, ix) => {
          return <li key={ix}>{el}</li>
        })}
      </ul>

      <hr />
      <h1>{pessoas.length} Pessoas</h1>
      <ul>
        {pessoas.map(({ nome, idade }, ix) => {
          return <li key={ix}>{nome} - {idade}</li>
        })}
      </ul>
    </div>
  )
}

export default Frutas