import "./globals.css"
export const metadata = { title: "Corte no Pix" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt"><body>{children}</body></html>
}
