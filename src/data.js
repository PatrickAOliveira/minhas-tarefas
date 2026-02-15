import * as enums from './utils/enums/task'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar a fatura do Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino de flexão',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Ir para a lanchonete',
    descricao:
      'Se arrumar e pôr o uniforme para trabalhar na lanchonete às 19h',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

export default tarefas
