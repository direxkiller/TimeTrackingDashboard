import "./UserCard.css"

function UserCard() {
    return (
        <div>
            <div className="card azul p-3" style={{ zIndex: "4" }}>
                <img className='imm' src="./img/image-jeremy.png" alt=""  {`${props.man}`}/>
                <div class="card-body writ text-start">
                    <p className='writ text-start bn'>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>

            <div className="card text-start morado" style={{ marginTop: "-20px", }}>
                <div className='par'>
                    <p className='let'>Daily</p>
                    <p className='let'>Weekly</p>
                    <p className='let bn'>Monthly</p>
                </div>
            </div>
        
        </div>
    )
}


export default UserCard