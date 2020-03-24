import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo512.png'

import api from '../../service/api'
import { profile } from '../../service/auth'

export default function Header() {

    const [ menuOpen, setMenuOpen ] = useState('')
    const [ botaoMenu, setBotaoMenu ] = useState('')
    const [ className, setClassName ] = useState('')
    const [ cart, setCart ] = useState(0)

    async function loadCart() {
        try {
            const response = await api.get(`/cart/${user_id}`)
            setCart(response.data.length)
        } catch (error) {
            if(error) {
                setCart(0)
            }
        }
    }

    function handleOpenMenu() {
        setMenuOpen(!menuOpen)
    }

    function handleBotaoMenu() {
        setBotaoMenu(!botaoMenu)
    }

    function handleClick() {
        handleOpenMenu()
        handleBotaoMenu()
    }

    const user_id = profile().id

    useEffect(() => {
        window.onscroll = () => handleScroll()
        loadCart()
    })

    function handleScroll () {
        if (document.documentElement.scrollTop > 150) {
            setClassName('rgb(255, 255, 255)')
        } else {
            setClassName('rgba(255, 255, 255, 0.2)')
        }
    }

  return (
    <Container style={{ backgroundColor: className }}>
        <div className="content">
            <div className="logoImg">
                <Link to="/">
                    <img src={ Logo } alt="Logo do site" />
                </Link>
            </div>
            <div className={ menuOpen ? 'menu menuOpen' : 'menu' }>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Produtos</Link></li>
                        <li><Link to="/#">Carrinho ({cart})</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={ botaoMenu ? 'btnMenu closeBtnMenu' : 'btnMenu' } onClick={ handleClick }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Container>
  );
}
