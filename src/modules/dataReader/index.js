import actions from './actions.js'

export default (store) => {
  const data = [
    {
      status: 200,
      gender: "Male"
    },
    {
      status: 422,
      gender: "Female"
    },
    {
      status: 500,
      gender: "Female"
    },
    {
      status: 200,
      gender: "Female"
    },
    {
      status: 422,
      gender: "Female"
    },
    {
      status: 500,
      gender: "Male"
    },
    {
      status: 200,
      gender: "Male"
    },
    {
      status: 422,
      gender: "Male"
    }
  ]

  store.dispatch(actions.storeDataset(data))
  return data
}