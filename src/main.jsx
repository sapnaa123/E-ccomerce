import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import './style.css'
import ProductList from './components/ProductList'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>
)