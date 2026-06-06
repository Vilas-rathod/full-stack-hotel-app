const FooterComponent = () => {
    return (
        <footer className="my-footer">
            <div className="footer-inner">
                <strong>Hotel Silver9</strong>
                <span>All Rights Reserved &copy; {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};

export default FooterComponent;
