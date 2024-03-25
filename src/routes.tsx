import { createBrowserRouter } from "react-router-dom"
import { Home } from './pages/home'
import { Contato } from "./pages/contato";
import { Sobre } from "./pages/sobre"
import { NotFound } from "./pages/notfound";
import { Produto } from "./pages/produto"
import { Layout } from "./components/layout";
import { Login } from "./pages/login";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/contato',
                element: <Contato />
            },
            {
                path: '/sobre',
                element: <Sobre />
            },
            {
                path: '/produto',
                element: <Produto />
            },
            {
                path: '/produto/:id',
                element: <Produto />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export { router}