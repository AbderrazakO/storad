import { BehaviorSubject } from 'rxjs'

let bag = []

export const trackBag = new BehaviorSubject(bag)

export const addToBag = (product) => {
  bag = [product, ...bag]
  trackBag.next(bag)
}

export const removeFromBag = (id) => {
  bag.filter((product) => product.id !== id)
  trackBag.next(bag)
}
