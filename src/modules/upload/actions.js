export const LOAD_CSV = 'LOAD_CSV'

export const loadCSV = (file) => {
  return () => {
    return {
      type: LOAD_CSV,
      payload: { file }
    }
  }
}

export default { loadCSV }