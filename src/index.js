import renderParallelSets from './modules/parallelSets'
import storeProvider from './modules/redux/reducers'
import renderSidebar from './modules/sidebar'
import readData from './modules/dataReader'
import './assets/app.scss'

const store = storeProvider()

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function() {
    readData()
    renderSidebar()
    renderParallelSets()
  }, 3000)
})