
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

//Store
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { loadBlog } from './store/Blog'

const store = configureStore()
store.dispatch(loadBlog())

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'))
registerServiceWorker()