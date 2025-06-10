/* eslint-disable @typescript-eslint/no-require-imports */
import { Asset } from 'expo-asset'
import * as FileSystem from 'expo-file-system'

const files = [
  require('../../../assets/docs/declaracao_matricula.pdf'),
  require('../../../assets/docs/comunicado.html'),
  require('../../../assets/docs/boletim_escolar.png'),
  require('../../../assets/docs/historico_escolar.docx')
]

export async function loadAndSaveFiles() {
  console.log('Begining to save mock files in local memory')
  for (const file of files) {
    const asset = Asset.fromModule(file)
    await asset.downloadAsync()

    const fileName = asset.name
    const localUri = `${FileSystem.documentDirectory}${fileName}.${asset.type}`

    const fileExists = await FileSystem.getInfoAsync(localUri)
    if (!fileExists.exists) {
      await FileSystem.copyAsync({
        from: asset.localUri!,
        to: localUri
      })
      console.log(`File saved: ${fileName}`)
    } else {
      console.log(`File already exists: ${fileName}`)
    }
  }

  if (FileSystem?.documentDirectory) {
    const savedFiles = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
    console.log('Current saved files: ', savedFiles)
  }
}
