import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import fbConfig from './config/fbConfig.js';
import firebase from 'firebase/compat';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig),
  )
);

const profileConfig = {
  userProfile: 'user',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const fbProps = {
  firebase,
  config: fbConfig,
  config: profileConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return (
    <div className="white-text">Loading Screen...</div>
  )
  return children
}

ReactDOM.render(
    <Provider store={store} >
      <ReactReduxFirebaseProvider {...fbProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();