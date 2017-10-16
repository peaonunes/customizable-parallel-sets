import renderParallelSets from './modules/parallelSets'
import storeProvider from './modules/redux/reducers'
import renderSidebar from './modules/sidebar'
import readData from './modules/dataReader'
import './assets/app.scss'

const store = storeProvider()

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function() {
    const data = readData()
    renderSidebar(data, store)
    renderParallelSets(data)
  }, 3000)
})