import ReactDOM from 'react-dom/client'
import App from './app'
import '@fontsource/inter'
import './styles.scss'
import { persistor, store } from './app/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
