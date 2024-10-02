import '../styles/globals.css'; // Import global styles
import type { AppProps } from 'next/app';
import MainLayout from '../layout/MainLayout'; // Import the main layout

// This function wraps every page of your app with the MainLayout
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}



// https://github.com/bbyc4kes/portfolio/blob/main/src/common/theme/mode-toggler/index.tsx
