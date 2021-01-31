import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root.reducer'
import createSagaMiddleware from 'redux-saga'
import { UserLoginPage, UserJoinPage, UserDetailPage, UserUpdatePage, UserListPage } from './uss/pages/index'
import { Blog } from './cmm/pages/index'

const store = createStore(rootReducer, applyMiddleware(createSagaMiddleware))
const App = () =>  (<>
  <Provider store={ store }>
    <Router>
      <Switch>
          <Route exact path='/' component={ Blog }/>
          <Route path='/user-login' component={ UserLoginPage }/>
          <Route path='/user-join' component={ UserJoinPage }/>
          <Route path='/user-detail' component={ UserDetailPage }/>
          <Route path='/user-list' component={ UserListPage }/>
          <Route path='/user-update' component={ UserUpdatePage }/>
          <Route component={ Error }/> 
      </Switch>
    </Router>
  </Provider>
</>)

export default App