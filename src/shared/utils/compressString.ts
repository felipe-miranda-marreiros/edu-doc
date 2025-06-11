import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'

function encodePathToUrlParam(input: string): string {
  return compressToEncodedURIComponent(input)
}

function decodePathFromUrlParam(encoded: string): string {
  return decompressFromEncodedURIComponent(encoded)
}

export const compressString = {
  encodePathToUrlParam,
  decodePathFromUrlParam
}
