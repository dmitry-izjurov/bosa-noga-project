import { Link } from "react-router-dom";

function ItemProduct({elem, globalDataObjs}) {
    return (
        <div className="col-4">
            <div className="card">
                <img src={globalDataObjs[elem].images[0]} className="card-img-top img-fluid" alt={globalDataObjs[elem].title} />
                <div className="card-body">
                    <p className="card-text">{globalDataObjs[elem].title}</p>
                    <p className="card-text">{globalDataObjs[elem].price} руб.</p>
                    <Link to={`/bosa-noga-project/products/${globalDataObjs[elem].id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;