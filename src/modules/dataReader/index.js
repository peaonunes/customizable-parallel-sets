import storeUtils from '../redux/storeUtils.js'
import actions from './actions.js'

export default (store) => {
  const data = [
    {
      status: 200,
      gender: "Male",
      credit: "Yes"
    },
    {
      status: 422,
      gender: "Female",
      credit: "Yes"
    },
    {
      status: 500,
      gender: "Female",
      credit: "Yes"
    },
    {
      status: 200,
      gender: "Female",
      credit: "Yes"
    },
    {
      status: 422,
      gender: "Female",
      credit: "Yes"
    },
    {
      status: 500,
      gender: "Male",
      credit: "Yes"
    },
    {
      status: 200,
      gender: "Male",
      credit: "Yes"
    },
    {
      status: 422,
      gender: "Male",
      credit: "Yes"
    }
  ]

  storeUtils.dispatch(actions.storeDataset(data))
}