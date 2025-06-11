import { Camera } from '@/src/features/Camera/Camera'
import { PermissionManager } from '@/src/features/PermissionManager/PermissionManager'
import { compressString } from '@/src/shared/utils/compressString'
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
      description="Permite o acesso a câmera pra continuar"
    >
      <Camera onTakePicture={onTakePicture} />
    </PermissionManager>
  )
}
