import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CEP() {
  const defaultAddress = { address: '', district: '', state: '', lat: '', lng: '' }
  const [cep, setCEP] = useState('')
  const [endereco, setEndereco] = useState(defaultAddress)

  async function getAddress() {
    const { data, status } = await axios.get(`https://cep.awesomeapi.com.br/json/${cep}`)
    status === 200 ? setEndereco(data) : setEndereco(defaultData)
  }

  return (
    <main>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-header'>
            Busca endereço
          </div>
          <div className='card-body'>
            <label className='form-label'>
              Informe o CEP para pesquisa
            </label>
            <input
              type='tel'
              className='form-control'
              placeholder='informe seu cep'
              onChange={({ target: { value } }) => setCEP(value)}
            //onChange={(obj) => setCEP(obj.target.value) }
            />
          </div>
          <div className='card-footer'>
            <input
              type='button'
              value='pesquisar'
              className='btn btn-primary'
              onClick={getAddress}
            />
          </div>
        </div>

        {endereco.address && (
          <fieldset className='my-5'>
            <legend>Endereço</legend>
            <code>
              {`${endereco.address}, ${endereco.district} - ${endereco.state}`}
              <br />
              {`https://www.google.com/maps/@${endereco.lat},${endereco.lng}`}
              <br />
              <a
                href={`https://www.google.com/maps/@${endereco.lat},${endereco.lng},17z`}
                target='_blank'
              >
                Endereço no google maps
              </a>
            </code>
          </fieldset>
        )}

        <Link to='/' className='btn btn-secondary my-5'>Home</Link>

      </div>
    </main>
  )
}
