import Layout from '@/components/Layout'
import MuiNavbar from '@/components/Navigation/MuiNavbar'
import store, { persistor } from '@/store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  const navitmelist = [
    { ScreenName: "Home", Path: "/" },
    { ScreenName: "contactus", Path: "/contactus" },
    { ScreenName: "localposts", Path: "/localposts" },
    { ScreenName: "blog", Path: "/blog" },
    { ScreenName: "localposts", Path: "/localposts" },
    { ScreenName: "Contact Us", Path: "/contactus" },

  ];
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

{/* <Provider store={store}>
<PersistGate persistor={persistor} loading={null}>
     <MuiNavbar navitems={navitmelist} />
     <Component {...pageProps} />
     </PersistGate>
     </Provider> */}