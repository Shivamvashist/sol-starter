import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WalletConnectionProvider } from './wallet.tsx'
import  App  from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletConnectionProvider>
      <App />
    </WalletConnectionProvider>
  </StrictMode>,
)