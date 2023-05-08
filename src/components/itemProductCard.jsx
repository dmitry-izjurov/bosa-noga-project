import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
    addProductInCartService,
    removeProductOfCartService
} from '../redux/actionCreators';

function ItemProductCard({globalDataObjs}) {
    const dispatch = useDispatch();

    const { id } = useParams();
    const data = globalDataObjs.find(a => a.id === +id);
    const productsInCart = useSelector(state => state.serviceProductsInCart);
    const isProductInCart = productsInCart.find(a => a.id === +id);

    const handleClickAddInCart = () => dispatch(addProductInCartService(+id));
    const handleClickRemoveOfCart = () => dispatch(removeProductOfCartService(+id));

    return (
        <>
        <main className="container">
            <div className="row">
                <div className="col">
                {   data ?
                    <section className="catalog-item">
                        <h2 className="text-center">{data.title}</h2>
                        <div className="row row-cards_mob">
                            <div className="col-5">
                                <img src={data.images[0]} className="img-fluid" alt="" />
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Артикул</td>
                                            <td>{data.sku}</td>
                                        </tr>
                                        <tr>
                                            <td>Производитель</td>
                                            <td>{data.manufacturer}</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет</td>
                                            <td>{data.color}</td>
                                        </tr>
                                        <tr>
                                            <td>Материалы</td>
                                            <td>{data.material}</td>
                                        </tr>
                                        <tr>
                                            <td>Сезон</td>
                                            <td>{data.season}</td>
                                        </tr>
                                        <tr>
                                            <td>Повод</td>
                                            <td>{data.reason}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <p>Цена: {data.price} руб.</p>
                                </div>
                                {
                                    isProductInCart ?
                                    <button className="btn btn-danger btn-block btn-lg btn-rem" onClick={handleClickRemoveOfCart}>Убрать из корзины</button>
                                    :
                                    <button className="btn btn-danger btn-block btn-lg" onClick={handleClickAddInCart}>Добавить в корзину</button>
                                }
                            </div>
                        </div>
                    </section>
                    :
                    <section className="top-sales">
                        <h2 className="text-center">Товар не найден</h2>
                    </section>
                }
                </div>
            </div>
        </main>
        </>
    );
}

export default ItemProductCard;