
export const ItemListContainer = (props) => {


    return (
        <>
            <h2> Listado de productos del rubro {props.rubro}</h2>
            <ul class="list-group">
                <li class="list-group-item">Pantalón {props.talle1}</li>
                <li class="list-group-item">Pantalón {props.generoV} {props.talle2}</li>
                <li class="list-group-item">Remera {props.generoM} {props.talle1}</li>
                <li class="list-group-item">Remera</li>
                <li class="list-group-item">Buzo</li>
            </ul>
        </>
    )
}