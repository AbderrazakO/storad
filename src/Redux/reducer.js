import { UPDATE, ISCHECKED, ISNOTCHECKED } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE:
      const { title, id, status } = {
        title: action.title,
        id: action.id,
        status: action.status,
      }
      //
      const newFilter = [...state.filter]
      newFilter.map((el) => {
        if (el.title === title) {
          el.options.map((e) => {
            if (e.id === id) {
              e.isChecked = status
            }
          })
        }
      })
      return {
        bag: [...state.bag],
        store: [...state.store],
        filter: newFilter,
      }
    default:
      return state
  }
}

export default reducer
