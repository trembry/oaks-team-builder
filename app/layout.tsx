import NavBar from './components/NavBar'
import './globals.css'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
