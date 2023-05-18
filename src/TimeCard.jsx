import "./TimeCard.css"

function TimeCard(props) {
    return (
        <div className="mb-2 mt-2">
            <div className="card icon rounded-4" style={{ background: `${props.fondo}`, backgroundImage: `${props.icon}`, backgroundRepeat: "no-repeat", backgroundPosition: "right"}}>
            </div>
            <div className="card text-end rounded-4 blue text-white p-3" style={{ zIndex:'2'}}>
                <div className="d-flex justify-content-between">
                <p className="text-start "> {props.title}</p>   
                <img className="hola" src="../img/icon-ellipsis.svg" alt="" />
                </div>
                {/* <p className="text-start "> {props.title} ... </p>    */}
                <h1 className="text-start fz-10"> {props.letra} </h1>
                <p className="text-start"> {props.info} </p>
            </div>
        </div>
    )
}


export default TimeCard 