const ResponseService = (obj, type, description) => {
  let response = JSON.parse(JSON.stringify(obj)).response
  return !navigator.onLine ? new Error('Sem acesso à internet, por favor, tente mais tarde') : (!response ? new Error('Servidor indisponivel, tente mais tarde') : verifyStatusResponse(response, type, description))
}

const verifyStatusResponse = (response, type, description) => {
  let data = response.data
  let status = response.status
  let typesStatus = {
    400: { error: verifyErrorsData(data) },
    401: { error: new Error('Sessão expirada, por favor , logue novamente') },
    404: { error: new Error('Endereço de acesso não encontrado') },
    500: { error: verifyTypeAction(type, description) },
    503: { error: new Error(`Servidor indisponivel, tente mais tarde`) }
  }
  let action = typesStatus[status]
  return action.error
}
const verifyErrorsData = (data) => {
  return !data.errors ? new Error(!data[0] ? '' : data[0].ErrorMessage) : new Error(!data.errors ? '' : data.errors[0].ErrorMessage)
}

const verifyTypeAction = (action, description) => {
  let typesAction = {
    'list': { error: new Error(`Não foi possível realizar a listagem, tente mais tarde`) },
    'get': { error: new Error(`Não foi possível realizar a consulta de ${description}, tente mais tarde`) },
    'create': { error: new Error('Não foi possível realizar o cadastro, tente mais tarde') },
    'update': { error: new Error('Não foi possível realizar a edição, tente mais tarde') },
    'remove': { error: new Error('Não foi possível realizar a exclusão, tente mais tarde') }
  }
  return typesAction[action].error
}

export {
  ResponseService
}
