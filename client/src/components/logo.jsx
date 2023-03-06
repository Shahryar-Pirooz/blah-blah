import { Link } from 'react-router-dom'

export function Logo({ className }) {
    return (
        <div className={`logo ${className}`}>
            <Link to="/">
                <p>
                    blah
                    <br />
                    blah
                </p>
            </Link>
        </div>
    )
}
