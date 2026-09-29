
import { useEffect, useState } from "react";

function ShippingInformationForm() {
    const [firstName, setFirstName] = useState(sessionStorage.getItem("firstName") || "");
    const [lastName, setLastName] = useState(sessionStorage.getItem("lastName") || "");
    const [address, setAddress] = useState(sessionStorage.getItem("address") || "");
    const [apartment, setApartment] = useState(sessionStorage.getItem("apartment") || "");
    const [country, setCountry] = useState(sessionStorage.getItem("country") || "");
    const [city, setCity] = useState(sessionStorage.getItem("city") || "");
    const [zipcode, setZipcode] = useState(sessionStorage.getItem("zipcode") || "");

    useEffect(() => {
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("apartment", apartment);
        sessionStorage.setItem("country", country);
        sessionStorage.setItem("city", city);
        sessionStorage.setItem("zipcode", zipcode);
    }, [firstName, lastName, address, apartment, country, city, zipcode]);


    return (
        <form className="mx-auto border-2 border-secondary rounded-lg p-6 w-full max-w-150">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label className="block mb-2 mt-4 text-lg">First Name</label>
                    <input type="text" className="w-full border border-black rounded-lg px-4 py-3"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div>
                    <label className="block mb-2 mt-4 text-lg">Last Name</label>
                    <input type="text" className="w-full border border-black rounded-lg px-4 py-3"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)} />
                </div>
            </div>
            <div>
                <label className="block mb-2 mt-4 text-lg">Address</label>
                <input type="text" className="w-full border border-black rounded-lg px-4 py-3"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)} />
            </div>
            <div>
                <label className="block mb-2 mt-4 text-lg">Apartment, suite, etc.</label>
                <input type="text" className="w-full border border-black rounded-lg px-4 py-3"
                    value={apartment}
                    onChange={(event) => setApartment(event.target.value)} />
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div>
                    <label className="block mb-2 mt-4 text-lg">Country</label>
                    <select className="w-full border border-black rounded-lg px-4 py-3"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}>
                        <option></option>
                        <option>Serbia</option>
                        <option>Montenegro</option>
                        <option>Bosnia & Herzegovina</option>
                        <option>Croatia</option>
                        <option>Macedonia</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 mt-4 text-lg">City</label>
                    <select className="w-full border border-black rounded-lg px-4 py-3"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}>
                        <option></option>
                        <option>Belgrade</option>
                        <option>Podgorica</option>
                        <option>Sarajevo</option>
                        <option>Zagreb</option>
                        <option>Skopje</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 mt-4 text-lg">Zipcode</label>
                    <select className="w-full border border-black rounded-lg px-4 py-3"
                        value={zipcode}
                        onChange={(event) => setZipcode(event.target.value)}>
                        <option></option>
                        <option>1101</option>
                        <option>1102</option>
                        <option>1103</option>
                        <option>1104</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center gap-1 mt-6">
                <input type="checkbox" className="h-5 w-5" />
                <span>Save contact information</span>
            </div>
        </form>
    )
}

export default ShippingInformationForm