import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [editar, setEditar] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao>{descricao}</S.Descricao>
      <S.ActionBar>
        {editar ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEditar(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditar(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
