import React from 'react'
import Header from '../Header/Index'
import Filter from '../../Components/Shop/Filter/Filter'
import FHeader from '../../Components/Shop/Header/Header'
import Main from '../../Components/Shop/Main/Main'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import reducer from '../../Redux/reducer'
import initialState from '../../Redux/initialState'

const Index = () => {
  const data = createStore(reducer, initialState)

  //
  return (
    <Provider store={data}>
      <Header />
      <main className='shopMain'>
        <FHeader />
        <Filter />
        <Main />
      </main>
    </Provider>
  )
}

export default Index
