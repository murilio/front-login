import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom'

import { getUser } from '../../services/auth'
import api from '../../services/api'

import Logo from '../../assets/images/logo512.png'

export default function Header({ valueCart }) {

    const USER_ID = getUser()

    const [ cart, setCart ] = useState(0)
    const [ menuOpen, setMenuOpen ] = useState('')
    const [ botaoMenu, setBotaoMenu ] = useState('')
    const [ className, setClassName ] = useState('')

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

    async function loadCart(user_id) {
        const res = await api.get(`/cart/${user_id}`)
        setCart(res.data.count)
    }

    useEffect(() => {
        window.onscroll = () => handleScroll()
        loadCart(USER_ID)
    }, [USER_ID])

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
                        <li><Link to="/products">Produtos</Link></li>
                        <li><Link to="/carrinho">Carrinho ({valueCart ? valueCart : cart })</Link></li>
                        <li><Link to="#">Perfil</Link></li>
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
