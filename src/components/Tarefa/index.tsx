import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da tarefa</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea officiis quae
      aliquam aut aperiam, iusto aliquid eveniet libero perspiciatis blanditiis
      iure in veritatis id, hic ullam. Laudantium accusantium blanditiis
      exercitationem?
    </S.Descricao>
    <S.ActionBar>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.ActionBar>
  </S.Card>
)

export default Tarefa
