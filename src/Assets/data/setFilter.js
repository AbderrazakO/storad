import { BehaviorSubject } from 'rxjs'

let filter = []

export const trackFilter = new BehaviorSubject(filter)

export const addToFilter = (product) => {
  filter = [product, ...filter]
  trackFilter.next(filter)
}

export const removeFromBag = (id) => {
  filter = filter.filter((product) => product.id !== id)
  trackFilter.next(filter)
}
