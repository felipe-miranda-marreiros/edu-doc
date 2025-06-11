import * as FileSystem from 'expo-file-system'

export async function uriToFile(fileUri: string, filename: string, mimeType = 'image/jpeg') {
  try {
    const base64 = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64
    })

    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i))
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], { type: mimeType })

    const file = {
      uri: fileUri,
      name: filename,
      type: mimeType,
      blob: blob
    }

    return file
  } catch (error) {
    console.log(error)
  }
}
