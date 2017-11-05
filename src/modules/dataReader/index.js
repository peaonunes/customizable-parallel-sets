import storeUtils from '../redux/storeUtils.js'
import actions from './actions.js'
import * as d3 from 'd3'

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

let fileReader = undefined

export const loadCSV = (file) => {
  readFile(file, parseCSV)
}

export const loadJSON = (file) => {
  readFile(file, parseJSON)
}

const readFile = (file, callback) => {
  fileReader = new FileReader()
  fileReader.addEventListener("load", callback, false)
  fileReader.readAsText(file)
}

const parseCSV = () => {
  const data = d3.csvParse(fileReader.result)
  storeUtils.dispatch(actions.storeDataset(data))
}

const parseJSON = () => {
  const data = JSON.parse(fileReader.result).items
  storeUtils.dispatch(actions.storeDataset(data))
}