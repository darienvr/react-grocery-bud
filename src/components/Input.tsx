import React, { useState, useEffect } from "react";
import Lista from './Lista'

import type {IItem} from '../types'

const Input = () => {

    const [name, setName] = useState<string>('')
    const [item, setItem] = useState<IItem[]>([])
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [editId, setEditId] = useState<string>('')
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!name){
            alert('Ingresar alimento')
        }else if(name && isEditing){
            setItem(
                item.map((i)=>{
                    if(i.id === editId){
                        return {...i, name: name}
                    }
                    return i
                })
            )
            setName('')
            setIsEditing(false)
            setEditId('')
        }else{
            agregarItem(name)
            setName('')
        } 
    }

    const agregarItem = (name: IItem['name']) =>{
        setItem([...item, {id:new Date().getTime().toString(), name: name}])
    }

    const editarItem = (id: IItem['id']) => {
        const editItem = item.find(index=>index.id === id)!
        setName(editItem.name)
        setIsEditing(true)
        setEditId(id)
    }

    const eliminarItem = (id: IItem['id']) => {
        const newItem = item.filter(index=>index.id !== id)
        setItem(newItem)
    }

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('items') || '[]');
        setItem(savedItems);
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (loaded) {
          localStorage.setItem("items", JSON.stringify(item));
        }
      }, [item, loaded]);

    return(
        <>
            <h1 className="text-center p-3">Grocery Bud</h1>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='row'>
                    <div className='col-sm-9 mt-1'>
                        <input value={name} autoFocus onChange={(e)=>setName(e.target.value)} type='text' className='form-control' placeholder="Ingrese un alimento.."></input>
                    </div>
                    <div className='col-sm-2 mt-1 d-flex justify-content-center'>
                        <button type="submit" className={isEditing ? `btn btn-info` : `btn btn-success`}>{isEditing ? `Edit`: `Submit`}</button>
                    </div>
                    </div>
                </div>
            </form>
            <Lista items={item} editar={editarItem} eliminar={eliminarItem}/>
        </>
    )
}

export default Input;