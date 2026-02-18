import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

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

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
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
            <S.BtnSalvar onClick={salvarEdicao}>Salvar</S.BtnSalvar>
            <S.BtnCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BtnCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
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
