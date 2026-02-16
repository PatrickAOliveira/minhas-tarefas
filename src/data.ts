import Tarefa from './models/Tarefa'
import * as enums from './utils/enums/task'

const tarefas: Tarefa[] = [
  new Tarefa(
    'Estudar Typescript',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    'Ver a aula 3 da EBAC',
    1
  ),
  new Tarefa(
    'Pagar a conta de internet',
    enums.Prioridade.URGENTE,
    enums.Status.CONCLUIDA,
    'Baixar a fatura do Gmail',
    2
  ),
  new Tarefa(
    'Ir para a academia',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    'Fazer treino de flexão',
    3
  ),
  new Tarefa(
    'Ir para a lanchonete',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    'Se arrumar e pôr o uniforme para trabalhar na lanchonete às 19h',
    4
  )
]

export default tarefas
