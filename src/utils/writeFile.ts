import fs from 'fs'
import { makeDirectory } from './makeDirectory'
import console from 'console'

export async function writeLog(json: any) {
  try {
    const folder = await makeDirectory()
    const now = new Date()
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')
    const date = now.toISOString().slice(0, 10).replace(/-/g, '')
    const fileName = `${date}-${hour}-${minute}.json`
    const filePath = `${folder}/${fileName}`

    try {
      await fs.promises.access(filePath)
      await fs.promises.appendFile(filePath, JSON.stringify(json))
      console.log(`Dados foram anexados ao arquivo ${fileName} em ${folder}`)
    } catch (err) {
      await fs.promises.writeFile(filePath, JSON.stringify(json))
      console.error(`ERRO: Arquivo ${fileName} foi criado em ${folder}`)
    }
  } catch (err) {
    console.error('ERRO: ' + err)
    console.log(`Erro ao criar o diretório ou o arquivo: ${err.message}`)
  }
}
