export default {
  get: (k) => localStorage.getItem(k) || '',

  set: (k, v) => localStorage.setItem(k, v),

  remove: (k) => localStorage.removeItem(k),

  clear: () => localStorage.clear()
}
