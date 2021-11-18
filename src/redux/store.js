import {createStore, applyMiddleware} from 'redux'
import rooreducers from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
	rooreducers,
  	applyMiddleware(thunk)
  )

export default store;