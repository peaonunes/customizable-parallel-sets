import './assets/app.scss'
import readData from './modules/dataReader'
import renderSidebar from './modules/sidebar'

document.addEventListener('DOMContentLoaded', () => {
  const data = readData()
  renderSidebar(data)
})