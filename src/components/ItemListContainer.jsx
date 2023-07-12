import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {

  const [data, setData] = useState([]);

  const url = "./db.json";

  const getData = async () => {
    try {
      const data = await fetch(url);
      const res = await data.json();
      setData(res);
      return res;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <div className='ItemListContainer'>
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer