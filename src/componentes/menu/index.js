import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import ButtonLink from '../componentes/ButtonLink'

function Menu(){
    return(
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Logo JVTUBE'/>
            </a>

            <ButtonLink className='ButtonLink' href='/'>
                Carregar Novo Vídeo
            </ButtonLink>
        </nav>
    )
}
export default Menu