<<<<<<< HEAD
export function formatarData(data) {
  if (data instanceof Date) {
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()
    const hora = String(data.getHours()).padStart(2, '0')
    const minutos = String(data.getMinutes()).padStart(2, '0')
    const segundos = String(data.getSeconds()).padStart(2, '0')
    const novaData = `${dia}.${mes}.${ano} ${hora}:${minutos}:${segundos}`
    return novaData
  } else {
    return null
  }
=======
function padZero(valor: number): string {
  return valor.toString().padStart(2, '0')
}

/** @description Format date to format yyyy-mm-dd */
export function formatDate(data: Date): string {
  const ano = data.getFullYear()
  const mes = padZero(data.getMonth() + 1)
  const dia = padZero(data.getDate())

  return `${ano}-${mes}-${dia}`
>>>>>>> 7bf6c5064265e26d9bf3b1f0b38bd6aa0d3ca644
}
