import React from 'react'
import RootLayout from './RootLayout'
import LeftSidebar from '../LeftSidebar'

function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <RootLayout>
            <div className="w-full h-full flex">
                <div className="h-full w-64">
                    <LeftSidebar />
                </div>
                <div className="p-8 h-full w-[calc(100%-16rem)]">
                    {children}
                </div>
            </div>
        </RootLayout>
    )
}

export default DashboardLayout
