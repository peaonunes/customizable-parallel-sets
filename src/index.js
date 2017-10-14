import './assets/app.scss'
import readData from './modules/dataReader'
import renderSidebar from './modules/sidebar'
import renderParallelSets from './modules/parallelSets'

document.addEventListener('DOMContentLoaded', () => {
  const data = readData()
  renderSidebar(data)
  renderParallelSets(data)
})