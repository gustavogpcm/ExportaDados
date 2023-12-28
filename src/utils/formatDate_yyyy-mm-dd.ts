export function formatarData(data) {
  if (data instanceof Date) {
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()
    const hora = String(data.getHours()).padStart(2, '0')
    const minutos = String(data.getMinutes()).padStart(2, '0')
    const segundos = String(data.getSeconds()).padStart(2, '0')

    return `${dia}.${mes}.${ano} ${hora}:${minutos}:${segundos}`
  }
  return data
}

export function formatarDatas(objeto) {
  const objetoFormatado = {}
  for (const chave in objeto) {
    if (Object.prototype.hasOwnProperty.call(objeto, chave)) {
      objetoFormatado[chave] = chave.includes('DATA')
        ? formatarData(objeto[chave])
        : objeto[chave]
    }
  }
  return objetoFormatado
}
