export const LOAD_CSV = 'LOAD_CSV'
export const LOAD_JSON = 'LOAD_JSON'

export const loadCSV = (file) => {
  return () => {
    return {
      type: LOAD_CSV,
      payload: { file }
    }
  }
}

export const loadJSON = (file) => {
  return () => {
    return {
      type: LOAD_JSON,
      payload: { file }
    }
  }
}

export default { loadCSV, loadJSON }