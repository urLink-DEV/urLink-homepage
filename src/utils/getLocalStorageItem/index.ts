export default function getLocalStorageItem(key: string) {
	try {
		return window.localStorage.getItem(key)
	} catch (error) {
		console.warn(`Error reading localStorage key “${key}”:`, error)
	}
}
