import { Credentials } from '@entities/Auth'
import { storage } from '@shared/storage'

const CREDENTIAL_KEY = '@Auth'

async function set(credentials: Credentials): Promise<void> {
  await storage.setItem(CREDENTIAL_KEY, credentials)
}

async function get(): Promise<Credentials | null> {
  const credentials = await storage.getItem<Credentials>(CREDENTIAL_KEY)
  return credentials
}

async function remove(): Promise<void> {
  await storage.removeItem(CREDENTIAL_KEY)
}

export const credentialStorage = {
  set,
  get,
  remove
}
