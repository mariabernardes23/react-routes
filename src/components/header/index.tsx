import { Link } from 'react-router-dom'
import './style.css'

export function Header () {
    return(
        <div className='header'>
            <h1>LOGO</h1>

            <div>
                <Link to='/produto/20' className='links'>Produto</Link>
                <Link to="/contato" className='links'>Contato</Link>
                <Link to="/sobre" className='links'>Sobre Nós</Link>
            </div>
        </div>
    )
}