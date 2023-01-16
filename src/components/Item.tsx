

interface Props {
    name: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    onClickEditar: React.MouseEventHandler<HTMLButtonElement>
}

const Item = ({ name, onClick, onClickEditar }:Props) => {
    return(
        <>
        <div className='container-sm p-1'>
            <div className='row mx-auto'>
                <div className='col-8'>
                    <p>{name}</p>
                </div>
                <div className="d-flex col-4">
                    <button className="btn btn-item" onClick={onClickEditar}>✎</button>
                    <button className="btn btn-item" onClick={onClick}>🗑</button> 
                </div>      
            </div>
        </div>
        </>
    )
}

export default Item;