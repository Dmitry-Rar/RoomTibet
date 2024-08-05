import '../styles/LayoutPage.css'
import { Outlet, Link } from 'react-router-dom';
import logo_image from '../assets/svg/image/logo-image.svg'

const Layout = () => {
    return (
        <>
            <header className="header-section">
                <svg id='header-section__logo-image' src={logo_image} alt='logo-image'></svg>
                <nav>
                    <ul>
                        <li>
                            <Link className='link' to="/">Главная</Link>
                        </li>
                        <li>
                            <Link className='link' to="/">Про Гида</Link>
                        </li>
                        <li>
                            <Link className='link' to="/">Программа тура</Link>
                        </li>
                        <li>
                            <Link className='link' to="/">Стоимость</Link>
                        </li>
                        <li>
                            <Link className='link' to="/">Блог</Link>
                        </li>
                        <li>
                            <Link className='link' to="#contacts">Контакты</Link>
                        </li>
                    </ul>
                </nav>
                <button id='header-section__consultation-button' type='button'>Консультация</button>
            </header>

            <Outlet />
        </>
    )
};

export default Layout;