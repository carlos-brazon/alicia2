import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import present from "../assets/inicio.jpeg";
import Form from './Form';
import Invitation from './invitation';
import  imgFelix  from "../assets/felix.jpg";

const Layout = () => {
    const [control, setControl] = useState(true)
    const [control2, setControl2] = useState(true)
    const [list, setList] = useState([]);
    const felix= ['felix', 'thais']
    const felixText='hola tio felix'
    console.log(list);
    
    useEffect(() => {
// setControl(true)
    }, [])

    return (
        <div className='w-screen h-screen bg-red-300 flex flex-col items-center gap-4 p-2'>
            <div>¡Hola!</div>
            <div>Soy Alicia</div>
            <img className='rounded-full w-60 h-40 bg-cover' src={present} alt="" />
            <div className='flex flex-col'>
                <p>Tengo una pregunta importante para tí</p>
                <button className='p-2 border bg-red-500 rounded-md' onClick={() => setControl(prev => false)}>Click me</button>
            </div>
            <div className={` flex items-center flex-col ${control ? 'hidden' : ''}`}>
                <p>Pero primero tienes que darme tu nombre</p>
                <Form setList={setList} setControl2={setControl2} />
            </div>
            <Invitation text={felix.includes(list[0]?.nombre) ? felixText : null} url={felix.includes(list[0]?.nombre) ? imgFelix : null} control2={control2} />
            <Outlet />
        </div>
    )
}

export default Layout