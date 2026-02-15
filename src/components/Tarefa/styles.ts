import styled from 'styled-components'
import _var from '../../styles/var'
import * as enums from '../../utils/enums/task'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCor(props: TagProps): string {
  if (props['parametro'] === 'status') {
    switch (props['status']) {
      case enums.Status.PENDENTE:
        return _var['amarelo']
      case enums.Status.CONCLUIDA:
        return _var['verde']
    }
  } else {
    switch (props['prioridade']) {
      case enums.Prioridade.URGENTE:
        return _var['vermelho']
      case enums.Prioridade.IMPORTANTE:
        return _var['amarelo2']
    }
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCor(props)};
  margin-right: 16px;
  border-radius: 8px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BtnSalvar = styled(Botao)`
  background-color: ${_var.verde};
`

export const BtnCancelarRemover = styled(Botao)`
  background-color: ${_var.vermelho};
`
