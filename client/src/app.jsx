import { Link } from 'react-router-dom'
export default function App() {
    return (
        <>
            <ul className="space-x-10 text-primary">
                <ui>
                    <Link to="/login" className="link">
                        SignUp/LogIn
                    </Link>
                </ui>
                <ui>
                    <Link to="/" className="link">
                        link2
                    </Link>
                </ui>
                <ui>
                    <Link to="/" className="link">
                        link3
                    </Link>
                </ui>
            </ul>
        </>
    )
}
