const Item = ({ id, value, del, edit }) => {


    return (
        <div className="item">
            <p id={id} > {value}</p>
            <div className="icons">
            <i class="fa-solid fa-pen-to-square" onClick={() => { edit(id) }}></i>
            <i class="fa-solid fa-trash" onClick={() => { del(id) }}></i>
            </div>
        </div>
    )
}

export default Item;