/* eslint-disable @typescript-eslint/no-require-imports */
import { Asset } from 'expo-asset'
import * as FileSystem from 'expo-file-system'
import { dataMock } from '../mocks/DataMock'

const files = [
  {
    file: require('../../../assets/docs/declaracao_matricula.pdf'),
    originalFileName: 'declaracao_matricula.pdf'
  },
  {
    file: require('../../../assets/docs/comunicado.html'),
    originalFileName: 'comunicado.html'
  },
  {
    file: require('../../../assets/docs/boletim_escolar.png'),
    originalFileName: 'boletim_escolar.png'
  },
  {
    file: require('../../../assets/docs/historico_escolar.docx'),
    originalFileName: 'historico_escolar.docx'
  }
]

const uriMap: Record<string, string> = {}

export async function loadAndSaveFiles() {
  console.log('Begining to save mock files in local memory')
  for (const { file, originalFileName } of files) {
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
    uriMap[originalFileName] = localUri
  }

  const availableDocuments = [
    {
      id: '1',
      title: 'Histórico Escolar Completo',
      type: 'docx',
      category: 'historico',
      url: uriMap['historico_escolar.docx'],
      date: '2024-02-15',
      size: '2.3 MB',
      description: 'Histórico escolar completo com todas as disciplinas cursadas.',
      pages: 4
    },
    {
      id: '2',
      title: 'Boletim 1º Bimestre 2024',
      type: 'png',
      category: 'boletim',
      url: uriMap['boletim_escolar.png'],
      date: '2024-04-10',
      size: '856 KB',
      description: 'Boletim de notas do primeiro bimestre de 2024.',
      pages: 2
    },
    {
      id: '3',
      title: 'Declaração de Matrícula',
      type: 'pdf',
      category: 'declaracao',
      url: uriMap['declaracao_matricula.pdf'],
      date: '2024-05-20',
      size: '45 KB',
      description: 'Declaração oficial de matrícula para o ano letivo de 2024.'
    },
    {
      id: '5',
      title: 'Comunicado - Reunião de Pais',
      type: 'html',
      category: 'comunicado',
      url: uriMap['comunicado.html'],
      date: '2024-05-25',
      size: '32 KB',
      description: 'Comunicado sobre reunião de pais e mestres.'
    }
  ]
  console.log('Assigning mocks to local server', JSON.stringify(availableDocuments, null, 2))
  dataMock.availableDocuments = availableDocuments
  console.log('Finished saving mock files in local memory')
}
