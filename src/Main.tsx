import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/Index.css'
import { Provider } from 'react-redux'
import { Store } from './infrastructure/reducers/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
