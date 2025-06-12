import { Camera } from '@features/Camera'
import { PermissionManager } from '@features/PermissionManager'
import { compressString } from '@shared/utils'
import { useRouter } from 'expo-router'

export default function CameraScreen() {
  const router = useRouter()

  function onTakePicture(newUri: string) {
    router.replace({
      pathname: '/private/camera/preview/[uri]',
      params: {
        uri: compressString.encodePathToUrlParam(newUri)
      }
    })
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o acesso a câmera para continuar"
    >
      <Camera onTakePicture={onTakePicture} />
    </PermissionManager>
  )
}
