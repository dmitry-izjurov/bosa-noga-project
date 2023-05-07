import { Link } from "react-router-dom";
import { changeService } from '../redux/actionCreators';

function ItemNavMenu({id, clName, pathTo, textElem, dispatch}) {
    const handleChangeClassMenu = e => {
        const value = e.target.dataset.id;
        dispatch(changeService(value));
    }
    return (
        <li className={clName} onClick={handleChangeClassMenu}>
            <Link data-id={id} className="nav-link" to={pathTo}>{textElem}</Link>
        </li>
    );
}

export default ItemNavMenu;