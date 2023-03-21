import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Self Tax Assessment Tool</span></h1>
            </header>
            <main className="public__main">
                <p>Welcome to a comprehensive Self Tax Assessment Tool.</p>
                <address className="public__addr">
                    Self Tax Assessment<br />
                    123 The Street<br />
                    The City, AB12 3CD<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Self Tax Assessment</p>
            </main>
            <footer>
                <Link to="/login">User Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public