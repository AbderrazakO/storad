import { BehaviorSubject } from 'rxjs'

let filter = { Brand: [], Category: [], Size: [], Color: [], Width: [] }

export const trackFilter = new BehaviorSubject(filter)

export const addToFilter = (key, value) => {
  filter[key].push(value)
  trackFilter.next(filter)
}

export const removeFromFilter = (key, value) => {
  filter[key] = filter[key].filter((product) => product !== value)
  trackFilter.next(filter)
}

export const resetFilter = () => {
  filter = { Brand: [], Category: [], Size: [], Color: [], Width: [] }
  trackFilter.next(filter)
}
