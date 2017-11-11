import { elementsProvider } from '../../utils/domUtils.js'
import * as d3 from 'd3'

export default () => {
  bindFaqButton(elementsProvider.OPEN_FAQ)
}
const bindFaqButton = (selector) => {
  $('.modal').modal();
}