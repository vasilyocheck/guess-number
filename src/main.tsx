import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { createRoot } from 'react-dom/client'

import { App } from './app/ui/app'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
