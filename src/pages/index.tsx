
export default function Index() {
    console.log('index')
    return(
        <div className="bg-gray-100 h-full">
            <header className="bg-blue-500 text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold">Welcome to Our Documentation</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">About</h2>
                    <p>
                        This documentation contains information and guides for using our product/service.
                        Whether you are a developer or user, you will find helpful resources here.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
                    <p>
                        To get started, navigate through the documentation sections on the left sidebar.
                        If you have any questions or need further assistance, do not hesitate to reach out.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-2">Resources</h2>
                    <p>
                        Explore the API reference, tutorials, FAQs, and more to learn all about our product/service.
                    </p>
                </section>
            </main>
            <footer className="bg-gray-300 text-gray-600 py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Your Company Name</p>
                </div>
            </footer>
        </div>

    )
}