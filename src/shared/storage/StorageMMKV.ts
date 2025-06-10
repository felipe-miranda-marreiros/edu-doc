import { MMKVLoader } from 'react-native-mmkv-storage'
import { Storage } from './Storage'

const MMKVInstance = new MMKVLoader().initialize()

export const StorageMMKV: Storage = {
  setItem: async (key, value) => {
    await MMKVInstance.setStringAsync(key, JSON.stringify(value))
  },
  getItem: (key) => {
    const item = MMKVInstance.getString(key)
    if (item) {
      return JSON.parse(item)
    }
    return null
  },
  removeItem: async (key) => {
    MMKVInstance.removeItem(key)
  }
}
