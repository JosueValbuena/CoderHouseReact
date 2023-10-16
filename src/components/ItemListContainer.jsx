import React, { useCallback, useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "./Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const params = useParams();

  const getData = useCallback(async () => {
    try {
      const productosCollection = collection(db, "productos");
      const data = await getDocs(productosCollection);
      const res = data.docs.map(doc => {
        const producto = doc.data();
        producto.id = doc.id;
        return producto
      })
      setData(res);
      setLoader(false);
    } catch (error) {
      console.error(error)
    }
  }, [])


  const getDataByCategory = useCallback(async () => {
    try {
      const productosCollection = collection(db, "productos");
      const filterQuery = query(productosCollection, where("categoria", "==", params.nombre));
      const data = await getDocs(filterQuery);
      const res = data.docs.map(doc => {
        const producto = doc.data();
        producto.id = doc.id;
        return producto
      })
      setData(res);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  }, [params.nombre])

  useEffect(() => {
    params.nombre ? getDataByCategory() : getData();
  }, [params.nombre, getDataByCategory, getData]);

  return (
    <div className='ItemListContainer'>
      {
        loader ? "Cargando..." : <ItemList data={data} />
      }
    </div>
  )
}

export default ItemListContainer