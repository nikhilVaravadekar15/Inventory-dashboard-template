import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function ReactQueryClientProvider({ children }: Props) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryClientProvider
