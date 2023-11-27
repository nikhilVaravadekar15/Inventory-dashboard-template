import React from 'react'
import { ThemeProvider } from '../provider/ThemeProvider'

function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main className="h-screen w-screen antialiased overflow-hidden relative z-0">
                {children}
            </main>
        </ThemeProvider>
    )
}

export default RootLayout
