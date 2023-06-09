import { useDispatch, useSelector } from 'react-redux';
import ItemProductCardInTable from './itemProductCardInTable';
import {
    changeListSalesHits,
    changeListSalesSplice,
    changeClassMenuCatalogService,
    changeListSalesSpliceAllCatalogService,
    changeActiveIdCatalogService,
    removeProductOfCartService
} from '../redux/actionCreators';

function Cart() {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.serviceProductsInCart);
    let totalPrice = 0;
    productsInCart.forEach(a => totalPrice += a.price);

    const handleClick = (e) => {
        if (productsInCart.length !== 0) {
            dispatch(changeListSalesHits());
            dispatch(changeListSalesSplice());
            dispatch(changeActiveIdCatalogService());
            dispatch(changeClassMenuCatalogService());
            dispatch(changeListSalesSpliceAllCatalogService());
            dispatch(removeProductOfCartService());
            e.preventDefault();
            alert('Все товары были успешно оформлены!');
            e.target.closest('form').reset();
        } else {
            alert('Корзина пуста!');
        }
    }

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <section className="cart">
                        <h2 className="text-center">Корзина</h2>
                        {
                            productsInCart.length ?
                            <table className="table table-bordered table_mob">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Название</th>
                                    <th>Стоимость</th>
                                    <th>Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsInCart.map((a,i) => <ItemProductCardInTable key={i} num={i+1} id={a.id} title={a.title} price={a.price} />)}
                                <tr>
                                    <td colSpan="3" className="text-right">Общая стоимость</td>
                                    <td>{totalPrice} руб.</td>
                                </tr>
                          </tbody>
                        </table> :
                        <div>Здесь пока ничего нет</div>
                        }
                        
                    </section>
                    <section className="order">
                        <h2 className="text-center">Оформить заказ</h2>
                        <div className="card card-cart">
                            <form className="card-body">
                                <div className="form-group">
                                    <label htmlFor="phone">Телефон</label>
                                    <input className="form-control" id="phone" placeholder="Ваш телефон" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Адрес доставки</label>
                                    <input className="form-control" id="address" placeholder="Адрес доставки" required />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="agreement" required />
                                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                                </div>
                                <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Оформить</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Cart;