import { Link } from 'react-router-dom'
export default function App() {
    return (
        <>
            <ul className="space-x-10 text-primary">
                <ui>
                    <Link to="/login">SignUp/LogIn</Link>
                </ui>
                <ui>
                    <Link to="/">link2</Link>
                </ui>
                <ui>
                    <Link to="/">link3</Link>
                </ui>
            </ul>
        </>
    )
}
