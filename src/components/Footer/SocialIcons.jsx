const socialIcons = [
    {
        name: 'Instagram',
        image: '/images/instagram.png'
    },
    {
        name: 'Facebook',
        image: '/images/facebook.png'
    },
    {
        name: 'Tik Tok',
        image: '/images/tik-tok.png'
    }
]

function SocialIcons () {
    return (
    <div className="social-icons">
        {socialIcons.map((icon) => (
            <img key={icon.name} src={icon.image} alt={icon.name} />
        ))}
    </div>
    );
}

export default SocialIcons;