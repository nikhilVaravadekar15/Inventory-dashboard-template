
function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-full w-full flex items-center justify-center">
            <div className="w-[28%] p-8 flex gap-2 flex-col border rounded-md shadow-sm dark:shadow-white">
                {children}
            </div>
        </section>
    )
}

export default AuthLayout
