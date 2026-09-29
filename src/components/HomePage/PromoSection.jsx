import { Link } from "react-router-dom";

function PromoSection() {
    return(
        <div className="promo-section">
            <div className="banners grid grid-cols-2 w-full">
                <img src="/images/banner-1.png" alt="banner1" className="w-full h-fit object-cover"/>
                <img src="/images/banner-2.png" alt="banner2" className="w-full h-fit object-cover"/>
            </div>
             <div className="promo bg-brand-dark flex flex-col sm:flex-row justify-around items-center gap-4 py-4 px-4">
                <p className="text-red-500 text-2xl sm:text-4xl font-bold text-center sm:text-left">Enjoy 20% Of This Season's Styles</p>
                <Link to="/products">
                    <button className="w-36 sm:w-48 btn-dark">Show All</button>
                </Link>
            </div>
        </div>
    )
}

export default PromoSection;