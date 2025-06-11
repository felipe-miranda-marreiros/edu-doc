import { ImageZoom } from '@likashefqet/react-native-image-zoom'

interface ImageViewerProps {
  source: string
}

export function ImageViewer({ source }: ImageViewerProps) {
  return <ImageZoom source={{ uri: source }} className="flex-1 bg-black" />
}
