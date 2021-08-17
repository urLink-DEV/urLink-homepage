export default function getLocalStorageItem(key: string) {
  return window.localStorage.getItem(key) || ''
}
