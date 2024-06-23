import React        from 'react'
import ReactDOM     from 'react-dom/client'
import Router       from '@/site/Router.jsx'
import SiteContext  from '@/site/Context.jsx'
import SiteTheme    from '@/site/Theme.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@abw/react-night-and-day'
import './styles/badger-react-ui.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteTheme>
      <ThemeProvider storageKey="theme">
        <SiteContext.Provider>
          <RouterProvider router={Router} />
        </SiteContext.Provider>
      </ThemeProvider>
    </SiteTheme>
  </React.StrictMode>,
)
