import { v4 as uuid } from 'uuid'
import {
  UPDATE_FILTER,
  RESET_FILTER,
  UPDATE_STORE,
  ADDTOBAG,
  REMOVEITEM,
  INCREMENT,
  DECREMENT,
} from './actions'
import data from './initialState'

const reducer = (state, action) => {
  const oldFilter = [...state.filter]
  //
  switch (action.type) {
    // Dispatch Filter
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

    // Dispatch Store
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

    // Dispatch Bag
    case ADDTOBAG:
      const { name, imgSrc, price } = {
        imgSrc: action.ProductImg,
        name: action.ProductName,
        price: action.ProductPrice,
      }

      if (!state.bag.length) {
        const newBag = [{ id: uuid(), name, price, imgSrc, quantity: 1 }]
        return {
          store: [...state.store],
          filter: [...state.filter],
          bag: newBag,
        }
      }
      let newBag = [...state.bag]
      let isExist = false
      newBag.forEach((e) => {
        if (e.name == name) isExist = true
      })
      if (!isExist) {
        newBag.push({ id: uuid(), name, price, imgSrc, quantity: 1 })
        return {
          store: [...state.store],
          filter: [...state.filter],
          bag: newBag,
        }
      }
      return state
    case REMOVEITEM:
      let newBag2 = [...state.bag]
      const newBag3 = []
      console.log(action.Id, newBag3)
      newBag2.map((e) => {
        if (e.id === action.Id) return
        newBag3.push(e)
      })
      console.log(newBag3)
      return {
        store: [...state.store],
        filter: [...state.filter],
        bag: newBag3,
      }
    case INCREMENT:
      let incBag = [...state.bag]
      let incBag2 = []
      incBag.map((e) => {
        if (e.id !== action.Id) incBag2.push(e)
        else {
          const quantity = e.quantity + 1
          const newproduct = {
            id: e.id,
            imgSrc: e.imgSrc,
            name: e.name,
            price: e.price,
            quantity,
          }
          incBag2.push(newproduct)
        }
      })
      return {
        store: [...state.store],
        filter: [...state.filter],
        bag: incBag2,
      }
    case DECREMENT:
      let decBag = [...state.bag]
      let decBag2 = []
      decBag.map((e) => {
        if (e.id !== action.Id) decBag2.push(e)
        else {
          const quantity = e.quantity === 1 ? e.quantity : e.quantity - 1
          const newproduct = {
            id: e.id,
            imgSrc: e.imgSrc,
            name: e.name,
            price: e.price,
            quantity,
          }
          decBag2.push(newproduct)
        }
      })
      return {
        store: [...state.store],
        filter: [...state.filter],
        bag: decBag2,
      }

    // Default
    default:
      return state
  }
}

export default reducer
