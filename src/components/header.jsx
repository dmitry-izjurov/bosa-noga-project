import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ItemNavMenu from './itemNavMenu';

function Header({headerLogo, banner}) {

    const currentLocation = useLocation().pathname;
    const listNavMenu = useSelector(state => state.serviceListNavMenu);
    const productsInCart = useSelector(state => state.serviceProductsInCart);

    listNavMenu.forEach((o,i) => {
        if (o.classN === "nav-item active") {
            listNavMenu[i].classN = "nav-item";
        }
    });
    
    if (currentLocation !== '/bosa-noga-project/') {
        const currentLocationArr = currentLocation.split('/');
        const currentLocationStr = '/bosa-noga-project/' + currentLocationArr[2];
        listNavMenu.forEach((o,i) => {
            if (o.path === currentLocationStr) {
                listNavMenu[i].classN = "nav-item active";
            }
        });
    } else {
        listNavMenu[0].classN = "nav-item active";
    }
    
    const dispatch = useDispatch();

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Link className="navbar-brand" to="/bosa-noga-project/">
                            <img src={headerLogo} alt="Bosa Noga" />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                {listNavMenu.map((o,i) => <ItemNavMenu key={i} id={o.id} clName={o.classN} pathTo={o.path} textElem={o.title} dispatch={dispatch} />)}
                            </ul>
                            <Link to="/bosa-noga-project/cart">
                                <div className="header-controls-pics">
                                    <div className="header-controls-pic header-controls-cart">
                                        {
                                            productsInCart.length !== 0 &&
                                            <div className="header-controls-cart-full">{productsInCart.length}</div>
                                        }
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </nav>
                    <div className="banner">
                        <img src={banner} className="img-fluid" alt="К весне готовы!" />
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;