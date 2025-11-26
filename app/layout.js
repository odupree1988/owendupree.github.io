import './globals.css'

export const metadata = {
  title: 'Owen Dupree | Shopify Developer',
  description: 'Shopify Developer with 4+ years of experience specializing in custom themes, Shopify Functions, checkout extensions, and headless commerce.',
  keywords: 'Shopify Developer, Frontend Developer, Shopify Functions, Headless Commerce, React, Vue.js',
  authors: [{ name: 'Owen Dupree' }],
  openGraph: {
    title: 'Owen Dupree | Shopify Developer',
    description: 'Shopify Developer with 4+ years of experience building custom solutions',
    url: 'https://your-domain.com',
    siteName: 'Owen Dupree Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}