export const TOGGLE_SIDEBAR_FILTER = 'TOGGLE_SIDEBAR_FILTER'

export const toggleSidebarFilter = (featureName) => {
  return {
    type: TOGGLE_SIDEBAR_FILTER,
    payload: { featureName }
  }
}

export default { toggleSidebarFilter }