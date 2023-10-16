import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from "./Firebase";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    const itemParam = useParams();

    const getData = async () => {
        try {
            const productosCollection = collection(db, "productos");
            const productoDoc = doc(productosCollection, itemParam.id);
            const data = await getDoc(productoDoc);
            const res = data.data();
            res.id = itemParam.id
            setData(res);
            setLoader(false);
        } catch (error) {
            console.error(error)
        }
    }

    // eslint-disable-next-line
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='itemDetailContainer'>
            {loader ? "Cargando..." : <ItemDetail data={data} />}
        </div>
    )
}

export default ItemDetailContainer