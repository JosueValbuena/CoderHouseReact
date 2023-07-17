import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item';

const Categorias = () => {

    const params = useParams();

    const [data, setData] = useState([]);

    const url = "../db.json";

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

    const dataCategory = data.filter((ele) => ele.category == params.nombre);

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className='category-container'>
        {dataCategory.map((ele) => {
            return <Item key={ele.id} data={ele} />
        })}
        </div>
    )
}

export default Categorias