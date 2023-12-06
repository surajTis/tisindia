import "../styles/index.scss";

import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  const handleStart = () => {
   setProgress(60);
  }

  const handleComplete = () => {
    setProgress(100);
   }

  useEffect(() => {
    router.events.on('routeChangeStart', (handleStart))
    router.events.on('routeChangeComplete', (handleComplete))
  })

  return (
    <>
    <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <Component {...pageProps} />
   </>
  )
}

export default MyApp
