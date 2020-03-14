const STORAGEKEY = 'mall'
export default {
  setItem (key, value, modulename) {
    if (modulename) {
      const val = this.getItem(modulename)
      val[key] = value
      this.setItem(modulename, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGEKEY, JSON.stringify(val))
    }
  },
  getItem (key, modulename) {
    if (modulename) {
      const val = this.getItem(modulename)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGEKEY) || '{}')
  },
  clear (key, modulename) {
    const val = this.getStorage()
    if (modulename) {
      if (!val[modulename]) return
      delete val[modulename][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGEKEY, JSON.stringify(val))
  }
}
