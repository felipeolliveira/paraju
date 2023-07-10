import './styles.css'

export const metadata = {
  title: 'para Ju ❤️',
  description: 'Dinossauros',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
