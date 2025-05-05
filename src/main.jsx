import { createRoot } from 'react-dom/client';
import App from './app'
import Nav from './components/navBar.jsx'
import Main from './components/mainContent.jsx'


const root = createRoot(document.getElementById('root'))

function MainContent(){
    return (
        <>
            <App />
            <Nav />
            <Main />
        </>
    )
}

root.render(
    <MainContent />
)