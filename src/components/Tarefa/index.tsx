import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/task'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [editar, setEditar] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.ActionBar>
        {editar ? (
          <>
            <S.BtnSalvar>Salvar</S.BtnSalvar>
            <S.BtnCancelarRemover onClick={() => setEditar(false)}>
              Cancelar
            </S.BtnCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditar(true)}>Editar</S.Botao>
            <S.BtnCancelarRemover>Remover</S.BtnCancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
