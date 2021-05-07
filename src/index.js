import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import RoorStore from './store'

const store = RootStore.create({})

const StoreContent = createContext(store)

ReactDOM.render(
  <React.StrictMode>
    <StoreContent.Provider value={store}>
      <App />
    </StoreContent.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
