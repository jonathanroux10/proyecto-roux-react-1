import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://us.123rf.com/450wm/angelp/angelp2102/angelp210202097/164649019-carro-de-compras-con-el-icono-de-la-pc-línea-delgada-con-diseño-de-relleno-azul-ilustración.jpg?ver=6";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            <strong> 5 </strong>
        </div>
    )
}

export default CartWidget