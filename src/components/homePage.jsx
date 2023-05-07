import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemProduct from './itemProduct';
import {
    changeListSalesHits,
    changeListSalesSplice
} from '../redux/actionCreators';

function HomePage({globalDataObjs}) {

    const dispatch = useDispatch();
    const listSalesHits = useSelector(state => state.serviceListSalesHits);
    const listSalesSplice = useSelector(state => state.serviceListSalesSplice);
    const listSales = listSalesSplice.spl;

    const handleClick = () => dispatch(changeListSalesSplice('load-product'));
    
    useEffect(() => {
        if (listSalesHits.length === 0) {
            setTimeout(() => {
                const arrRandomIndex = [];
                for (let i = 0; i < 3; i++) {
                    let randomIndex = 1;
                    let checkIndex = true;
                    do {
                        randomIndex = Math.floor(Math.random() * globalDataObjs.length);
                        checkIndex = arrRandomIndex.find(arg => arg === randomIndex);
                    }
                    while (checkIndex)
                    arrRandomIndex.push(randomIndex);
                }
    
                dispatch(changeListSalesHits(arrRandomIndex));
                dispatch(changeListSalesSplice('load-product'));
    
            }, (function (min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            })(1000, 5000));
        }
    }, []);

    return (
        <main className="container">
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                { (listSalesHits.length === 0 &&
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>)
                || <div className="row">
                       {
                           listSalesHits.map((elem, i) => <ItemProduct key={i} elem={elem} globalDataObjs={globalDataObjs} />)
                       }
                   </div>
                }
            </section>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                { (listSalesHits.length === 0 &&
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>)
                ||
                <>
                    <div className="row">
                    {
                        listSales.map((elem, i) => <ItemProduct key={i} elem={elem} globalDataObjs={globalDataObjs} />)
                    }
                    </div>
                    {
                        listSales.length !== globalDataObjs.length &&
                        <div className="text-center">
                            <div><button type="button" className="btn btn-outline-primary" onClick={handleClick}>Показать ещё</button></div>
                            <div>или</div>
                            <div><Link to="/catalog"><button type="button" className="btn btn-outline-primary">Перейти в каталог</button></Link></div>
                        </div>
                    }
                </>
                }
            </section>
        </main>
    );
}

export default HomePage;