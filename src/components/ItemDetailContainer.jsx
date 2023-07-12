import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    const itemParam = useParams();

    const getData = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setData(res);
            setLoader(false);
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    const item = data.find((ele) => ele.id == itemParam.id);

    return (
        <div className='itemDetailContainer'>
        {loader ? "cargando" : <ItemDetail data={item} />}
        </div>
    )
}

export default ItemDetailContainer