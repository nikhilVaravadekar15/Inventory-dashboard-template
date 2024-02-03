import React from 'react'
import { ThemeProvider } from '../provider/ThemeProvider'
import ReactQueryClientProvider from '../provider/ReactQueryClientProvider'
import { Toaster } from '../ui/toaster'
import AuthContextProvider from '../provider/AuthContextProvider'

function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ReactQueryClientProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

                <AuthContextProvider>
                    <AuthContextProvider>
                        <main className="h-screen w-screen antialiased overflow-hidden relative z-0">
                            {children}
                        </main>
                        <Toaster />
                    </AuthContextProvider>
                </AuthContextProvider>

            </ThemeProvider>
        </ReactQueryClientProvider>
    )
}

export default RootLayout
