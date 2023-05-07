function ItemCatalogNav({id, classN, title, hanclick}) {
    return (
        <li className="nav-item" onClick={hanclick} >
            <span className={classN} data-id={id}>{title}</span>
        </li>
    );
}

export default ItemCatalogNav;