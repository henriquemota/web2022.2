import React from 'react'

function Card(props) {
  const { data } = props

  return (
    <div className="card shadow my-2">
      <img src={data.img} class="card-img-top" alt={data.name} title={data.name} />
      <Body name={data.name} price={data.price} />
      <div className="card-footer d-grid">
        <button className='btn btn-primary my-1'>+</button>
      </div>
    </div>
  )
}

function Body(props) {
  return (
    <div className="card-body">
      <h3>informacoes do produto</h3>
      <p>{props.name}</p>
      <p>{props.price.toLocaleString('pt-BR')}</p>
    </div>
  )
}

export default Card