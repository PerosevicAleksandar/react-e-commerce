import FooterColumn from './FooterColumn';
import FooterBottom from './FooterBottom';
import './footerStyle.css';

const footerColumns = [
    {
        title: 'Shop',
        links: ['Dresses', 'Jackets', 'Skirts', 'Shoes & Bags', 'Gift Cards', 'Sales & Offers']
    },
    {
        title: 'Information',
        links: ['About', 'Terms and Conditions', 'Privacy Policy', 'Delivery and Return']
    },
    {
        title: 'Customer Support',
        links: ['Contact', 'Help', 'FAQ']
    }
];

function Footer() {
    return (
        <footer>
            <div className='footer-columns'>
                {footerColumns.map((column) => (
                <FooterColumn
                    key={column.title}
                    title={column.title}
                    links={column.links}
                />
                ))}
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;