import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/">Про Гида</Link>
                        </li>
                        <li>
                            <Link to="/">Программа тура</Link>
                        </li>
                        <li>
                            <Link to="/">Стоимость</Link>
                        </li>
                        <li>
                            <Link to="/">Блог</Link>
                        </li>
                        <li>
                            <Link to="#contacts">Контакты</Link>
                        </li>
                        <li>
                            <a href="/">Туры</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </>
    )
};

export default Layout;