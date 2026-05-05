import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import PostDetails from './PostPage'
import Header from '../components/Header';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import { ThemeProvider } from '../context/ThemeContext';

const BlogApp = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
                <BrowserRouter>
                    <div className="flex flex-col min-h-screen">
                        <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                            <div className="max-w-6xl mx-auto px-4">
                                <Header />
                            </div>
                        </header>

                        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10">
                            <div className="prose prose-lg dark:prose-invert mx-auto">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/create" element={<CreatePost />} />
                                    <Route path="/edit/:id" element={<EditPost />} />
                                    <Route path="/posts/:id" element={<PostDetails />} />
                                </Routes>
                            </div>
                        </main>

                        <footer className="w-full border-t border-gray-200 dark:border-gray-800">
                            <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                                © {new Date().getFullYear()} • Your Blog • Built with React
                            </div>
                        </footer>
                    </div>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    )
}

export default BlogApp