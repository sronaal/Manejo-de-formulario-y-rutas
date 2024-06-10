export const NavBar = () => {

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a href="#" className="logo">
                        <h1>Shop</h1>
                    </a>
                    <ul className="menu nav-item">

                        <li className="menu-link">
                            <a href="/agregar-producto">Agregar Producto</a>
                        </li>
                    
                        <li className="menu-link">
                            <a href="/productos">Productos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

}