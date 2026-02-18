import * as enums from './utils/enums/task'

const tarefasJS = [
  {
    id: 1,
    titulo: 'Estudar TypeScript',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE,
    descricao: 'Ver a aula 3 da EBAC'
  },
  {
    id: 2,
    titulo: 'Pagar a conta de internet',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA,
    descricao: 'Baixar a fatura do Gmail'
  },
  {
    id: 3,
    titulo: 'Ir para a academia',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Fazer treino de flexão'
  },
  {
    id: 4,
    titulo: 'Ir para a lanchonete',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Se arrumar e pôr o uniforme para trabalhar na lanchonete às 19h'
  }
]

export default tarefasJS
