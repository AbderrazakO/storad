import { BehaviorSubject } from 'rxjs'

//
let filterOptions = [
  {
    id: 0,
    title: 'Brand',
    options: [
      { id: 0, name: 'Nike', isChecked: false },
      { id: 2, name: 'Converse', isChecked: false },
      { id: 3, name: 'DrScholls', isChecked: false },
      { id: 4, name: 'Adidas', isChecked: false },
      { id: 5, name: 'Vans', isChecked: false },
      { id: 6, name: 'Crocs', isChecked: false },
      { id: 7, name: 'Teva', isChecked: false },
      { id: 8, name: 'Native', isChecked: false },
    ],
  },
  {
    id: 1,
    title: 'Category',
    options: [
      { id: 0, name: 'Sneaker', isChecked: false },
      { id: 1, name: 'Sandal', isChecked: false },
      { id: 2, name: 'Loafer', isChecked: false },
      { id: 3, name: 'Boot', isChecked: false },
      { id: 4, name: 'Heel', isChecked: false },
    ],
  },
  {
    id: 2,
    title: 'Size',
    options: [
      { id: 0, name: '35', isChecked: false },
      { id: 1, name: '36', isChecked: false },
      { id: 2, name: '37', isChecked: false },
      { id: 3, name: '38', isChecked: false },
      { id: 4, name: '39', isChecked: false },
      { id: 5, name: '40', isChecked: false },
      { id: 6, name: '41', isChecked: false },
      { id: 7, name: '42', isChecked: false },
      { id: 8, name: '43', isChecked: false },
      { id: 9, name: '44', isChecked: false },
      { id: 10, name: '45', isChecked: false },
    ],
  },
  {
    id: 3,
    title: 'Color',
    options: [
      { id: 0, name: 'White', isChecked: false },
      { id: 1, name: 'Gray', isChecked: false },
      { id: 2, name: 'Black', isChecked: false },
      { id: 3, name: 'Green', isChecked: false },
      { id: 4, name: 'Yellow', isChecked: false },
      { id: 5, name: 'Purple', isChecked: false },
    ],
  },
  {
    id: 4,
    title: 'Width',
    options: [
      { id: 0, name: 'Very Small', isChecked: false },
      { id: 1, name: 'Small', isChecked: false },
      { id: 2, name: 'Medium', isChecked: false },
      { id: 3, name: 'Large', isChecked: false },
      { id: 4, name: 'Very Large', isChecked: false },
    ],
  },
]

export const trackFilterOptions = new BehaviorSubject(filterOptions)
