import React, { useState } from 'react'
import { FiLoader } from 'react-icons/fi'

// style
import { Container } from './styles'

export default function ButtonSubmit({ title, time, type }) {

    const [ load, setLoad ] = useState('')

    function handleload() {
        setLoad(!load)
        setTimeout(() => {
            setLoad(load)
        }, time)
    }

    return (
        <Container 
            type={type} 
            onClick={handleload} >
            <FiLoader 
                size={20}
                className={ load ? 'loader' : load } />

            <p className={ load ? 'text' : load }>
                {title}
            </p>
        </Container>
    )
}
