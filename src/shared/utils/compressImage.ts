import { ImageManipulator, SaveFormat } from 'expo-image-manipulator'

export async function compressImage(imageUri: string): Promise<string> {
  const context = ImageManipulator.manipulate(imageUri)
  const image = await context.renderAsync()
  const result = await image.saveAsync({
    compress: 0.5,
    format: SaveFormat.JPEG
  })

  return result.uri
}
