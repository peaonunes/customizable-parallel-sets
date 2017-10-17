export const STORE_DATASET = 'STORE_DATASET'

export const storeDataset = (data) => {
  return () => {
    return {
      type: STORE_DATASET,
      payload: { data }
    }
  }
}

export default { storeDataset }