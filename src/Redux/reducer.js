import { UPDATE_FILTER, RESET_FILTER, UPDATE_STORE } from './actions'
import data from './initialState'

const reducer = (state, action) => {
  const oldFilter = [...state.filter]
  //
  switch (action.type) {
    case UPDATE_FILTER:
      const { title, id, status } = {
        title: action.title,
        id: action.id,
        status: action.status,
      }
      //

      oldFilter.map((el) => {
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
        filter: oldFilter,
        // filterAction: newFilterAction,
      }
    case RESET_FILTER:
      return {
        bag: [...data.bag],
        store: [...data.store],
        filter: [...data.filter],
      }
    case UPDATE_STORE:
      let oldStore // Initial Store That Will handle Every Last Change
      let newStore = [] // Empty Array Tha we will push our objects
      oldFilter.map((fel) => {
        // console.log('From the Top', oldStore, newStore)
        oldStore = newStore.length ? [...newStore] : [...data.store] // Impo
        newStore = [] // Impo
        //
        fel.options.map((fe) => {
          console.log('From the Bottom', oldStore, newStore)
          if (fe.isChecked) {
            oldStore.forEach((element) => {
              if (element[fel.title] === fe.name) {
                newStore.push(element)
              }
            })
          }
        })

        newStore = newStore.length ? [...newStore] : [...oldStore] // Impo
      })

      //
      return {
        bag: [...state.bag],
        store: newStore,
        filter: [...state.filter],
      }
    default:
      return state
  }
}

export default reducer
