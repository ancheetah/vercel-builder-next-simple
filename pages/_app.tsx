import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)


export default function MyApp({ Component, pageProps }: AppProps) {
  // useEffect( () => {
  //   if (Builder.isBrowser) {
      // Builder.set({ 
      Builder.register('editor.settings', {
        customInsertMenu: false,
        hideABTab: false, 
      })
  //     console.log('Settings changed 2!')
  //   }
  // }, [])
  return <Component {...pageProps} />
}
