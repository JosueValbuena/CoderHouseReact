import React, { useContext, useRef, useState } from 'react'
import { CartProvider } from '../context/CartProvider'
import CartItem from './CartItem';
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from 'firebase/firestore';
import Message from './Message';

const Cart = () => {

    const { shoppingCart, setShoppingCart, totalQty, totalPrice } = useContext(CartProvider);

    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState(false);
    const [userDataAdded, setUserDataAdded] = useState(false)

    const handleEmptyCart = () => {
        setShoppingCart([]);
    }

    const nombreRef = useRef();
    const emailRef = useRef();
    const calleRef = useRef();
    const numeroHabitacionRef = useRef();
    const numeroTelefonoRef = useRef();

    const purchaseOrder = {
        products: shoppingCart,
        userData: null,
        totalPaymend: totalPrice,
        fecha: serverTimestamp()
    };

    const handleSubmint = (e) => {
        e.preventDefault();
        purchaseOrder.userData = {
            nombre: nombreRef.current.value,
            email: emailRef.current.value,
            direccion: calleRef.current.value,
            numeroHabitacional: numeroHabitacionRef.current.value,
            telefono: numeroTelefonoRef.current.value
        }
        setUserDataAdded(true);
    }

    const handlePostPurchaseOrder = () => {
        if (!purchaseOrder.userData || !purchaseOrder.products) {
            setError(true);
        } else {
            setError(false);
            postPurchaseOrder();
            handleEmptyCart();
        }
    }

    const postPurchaseOrder = async () => {
        const ordernesCollection = collection(db, "ordenes");
        const res = await addDoc(ordernesCollection, purchaseOrder);
        setOrderId(res.id);
    }

    return (
        <div className='container-CartItem'>
            <div className='container-CartItem-left'>
                {shoppingCart.length === 0 ? <h3>"Tu carrito esta vacio"</h3> : shoppingCart.map(ele => <CartItem key={ele.id} data={ele} />)}
            </div>
            <div className='container-CartItem-right'>
                <div>
                    <h3>Datos de envio</h3>
                    <form onSubmit={handleSubmint}>
                        <label>
                            Nombre:
                            <input type='text' ref={nombreRef} required />
                        </label>
                        <br />
                        <label>
                            email:
                            <input type='text' ref={emailRef} required />
                        </label>
                        <br />
                        <label>
                            Calle:
                            <input type='text' ref={calleRef} required />
                        </label>
                        <br />
                        <label>
                            Numero Casa/Departamento/Oficina:
                            <input type='text' ref={numeroHabitacionRef} required />
                        </label>
                        <br />
                        <label>
                            Numero Telefono:
                            <input type='text' ref={numeroTelefonoRef} />
                        </label>
                        <br />
                        <button type='submit'>Agregar datos de envio</button>
                    </form>
                    {userDataAdded && <Message message={"datos agregados correctamente"} />}
                </div>
                <div>
                    <h3>Resumen de compra</h3>
                    <p>Total de productos: {totalQty}</p>
                    <p>Total a Pagar: ${totalPrice.toLocaleString("es")}</p>
                    <button onClick={handlePostPurchaseOrder}>Realizar Pedido</button>
                    <button onClick={handleEmptyCart}>Vaciar Carrito</button>
                </div>
                {error && 
                <div>
                    <Message message={"Revisa existencia de productos en el carrito o haber agregado los datos de envio"} />
                </div>}
                {orderId && <Message message={`Felicitaciones! tu compra fue realizada con exito bajo el codigo de orden: ${orderId}. Gracias por comprar con nosotros`} />}
            </div>
        </div>
    )
}

export default Cart