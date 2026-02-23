import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Titulo, Campo, BtnSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/task'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={({ target: { value } }) => setTitulo(value)}
          type="text"
          placeholder="Titulo"
          required
        />
        <Campo
          value={descricao}
          onChange={({ target: { value } }) => setDescricao(value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((p) => (
            <Opcao key={p}>
              <input
                value={p}
                type="radio"
                name="prioridade"
                id={p}
                onChange={({ target: { value } }) =>
                  setPrioridade(value as enums.Prioridade)
                }
                defaultChecked={p === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={p}>{p}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BtnSalvar type="submit">Cadastrar</BtnSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
