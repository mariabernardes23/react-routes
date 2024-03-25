import { Link } from 'react-router-dom'
import './style.css'

export function Header () {
    return(
        <div className='header'>
            <Link to="/" className='links'><h1>LOGO</h1></Link>

            <div>
                <Link to='/produto' className='links'>Produto</Link>
                <Link to="/contato" className='links'>Contato</Link>
                <Link to="/sobre" className='links'>Sobre Nós</Link>
            </div>
        </div>
    )
}