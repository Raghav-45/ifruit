import Frame from '../components/frame'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  )
}

export default MyApp
