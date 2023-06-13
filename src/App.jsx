import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Tienda Gammer, Mejores juegos, mejores precios"} />
      
    </>

  )
}

export default App
