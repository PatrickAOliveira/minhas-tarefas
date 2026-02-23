import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar, alterarStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BtnSalvar } from '../../styles'

import * as enums from '../../utils/enums/task'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: desc_orig,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (desc_orig.length > 0) {
      setDescricao(desc_orig)
    }
  }, [desc_orig])

  function cancelarEdicao() {
    setEditando(false)
    setDescricao(desc_orig)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        descricao,
        prioridade,
        status,
        titulo,
        id
      })
    )
    setEditando(false)
  }

  function alterarStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alterarStatus({
        id,
        finalizado: e['target']['checked']
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enums.Status.CONCLUIDA}
          onChange={alterarStatusTarefa}
          id={titulo}
        />
        <S.Titulo>
          {editando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!editando}
        value={descricao}
        onChange={({ target: { value } }) => setDescricao(value)}
      />
      <S.ActionBar>
        {editando ? (
          <>
            <BtnSalvar onClick={salvarEdicao}>Salvar</BtnSalvar>
            <S.BtnCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BtnCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEditando(true)}>Editar</Botao>
            <S.BtnCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BtnCancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
