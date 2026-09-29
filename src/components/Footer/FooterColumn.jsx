function FooterColumn(props) {
    return (
        <div className="footer-column">
            <h3>{props.title}</h3>
            <ul>
                {props.links.map((link) => (
                    <li key={link}>{link}</li>
                ))}
            </ul>
        </div>
    );
}

export default FooterColumn;
