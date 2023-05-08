import { useDispatch } from 'react-redux';
import { removeProductOfCartService } from '../redux/actionCreators';

function ItemProductCardInTable({num, id, title, price}) {
    const dispatch = useDispatch();
    const handleClickRemoveOfCart = () => dispatch(removeProductOfCartService(+id));

    return (
        <tr>
            <td>{num}</td>
            <td>{title}</td>
            <td>{price} руб.</td>
            <td><button className="btn btn-outline-danger btn-sm btn_mob" onClick={handleClickRemoveOfCart}>Удалить</button></td>
        </tr>
    );
}

export default ItemProductCardInTable;