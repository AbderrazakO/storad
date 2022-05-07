import { BehaviorSubject } from 'rxjs'

let dragAria = { min: 0, max: 200 }

export const trackAria = new BehaviorSubject(dragAria)

export const updateAria = (mi, ma) => {
  dragAria.min = mi
  dragAria.max = ma
  trackAria.next(dragAria)
}
