import Item from './Item'
import type {IItem} from '../types'

interface Props {
    items: IItem[]
    eliminar: (i: string) => void
    editar: (i: string)=> void
}

const Lista = ( {items, eliminar, editar}: Props ) => {
    return(
        <div className='container-sm pt-4'>
            {items.map((item:IItem)=>{
                const { id, name} = item;
                return(
                    <Item key={id} name={name} onClickEditar={()=>editar(id)} onClick={()=>eliminar(id)} />
                )
            })}
        </div>
    )
}

export default Lista;