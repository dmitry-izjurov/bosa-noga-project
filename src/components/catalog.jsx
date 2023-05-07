import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeClassMenuCatalogService,
    changeListSalesSpliceAllCatalogService,
    changeActiveIdCatalogService
} from '../redux/actionCreators';
import ItemCatalogNav from './itemCatalogNav';
import ItemProduct from './itemProduct';

function Catalog({globalDataObjs}) {
    const dispatch = useDispatch();
    const activeId = useSelector(state => state.serviceActiveIdCatalog);
    const products = useSelector(state => state.serviceListSalesSpliceAllCatalog);

    useEffect(() => {
        if (products.spl.length === 0) {
            dispatch(changeListSalesSpliceAllCatalogService('load-product', activeId));
        }
    }, []);

    const listMenuCatalog = useSelector(state => state.serviceListMenuCatalog);
    const handleClickMenu = e => {
        const id = e.target.dataset.id;
        if (activeId !== +id) {
            dispatch(changeActiveIdCatalogService(id));
            dispatch(changeClassMenuCatalogService(id));
            dispatch(changeListSalesSpliceAllCatalogService('load-product', id));
        }
    }

    const listSalesSplice = useSelector(state => state.serviceListSalesSpliceAllCatalog);
    const listSales = listSalesSplice.spl;

    const handleClick = () => dispatch(changeListSalesSpliceAllCatalogService('load-product', activeId));

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        <ul className="catalog-categories nav justify-content-center">
                            {listMenuCatalog.map((li,i) => <ItemCatalogNav key={i} classN={li.classN} title={li.title} id={li.id} hanclick={handleClickMenu} />)}
                        </ul>
                        <div className="row">
                        {
                            listSales.map((elem, i) => <ItemProduct key={i} elem={elem} globalDataObjs={globalDataObjs} />)
                        }
                        </div>
                        {
                            listSalesSplice.global.length !== 0 &&
                            <div className="text-center">
                                <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Показать ещё</button>
                            </div>
                        }
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Catalog;