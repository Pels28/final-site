import NextProvider from "../NextUIProvider"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </NextProvider>
  )
}
