import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Fort Kent Cinema</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;