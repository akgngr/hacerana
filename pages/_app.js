import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return(
    <Auth0Provider
      domain="dev-3n0fvfs6.us.auth0.com"
      clientId="3BRLBrKPsyQZ1iPBamwR2AlTyyVvPRFQ"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
