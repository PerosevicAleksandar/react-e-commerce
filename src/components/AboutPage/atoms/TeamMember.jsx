function TeamMember(props) {
    return(
        <div className="flex flex-col h-full">
            <img src={props.image} alt={props.name} className="w-full h-96 object-bottom"/>
            <h2 className="text-xl font-semibold mt-4">{props.name}</h2>
            <span className="text-sm text-secondary mt-1">{props.position}</span>
            <p className="text-left md:text-justify leading-7 mt-4 mb-6">{props.description}</p>
            <button className="btn-dark w-48 mt-auto self-center">Contact</button>
        </div>
    )
}

export default TeamMember;