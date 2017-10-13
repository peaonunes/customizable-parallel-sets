import './assets/app.scss'
import renderSidebar from './modules/sidebar'

document.addEventListener('DOMContentLoaded', () => {
  readData((data) => {
    renderSidebar(data)
  })
})

function readData(callback) {
  const data = [
    {
      status: 200,
      gender: "Male"
    },
    {
      status: 422,
      gender: "Female"
    }
  ]

  if(callback) {
    callback(data)
  }
}