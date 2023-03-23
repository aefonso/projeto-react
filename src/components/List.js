import Item from "./Item"
function List () {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Fiat" ano_lancamento={1999}/>
        <Item marca="Audi" ano_lancamento={1888}/>
        <Item marca="Audi" ano_lancamento={1888}/>
        <Item/>
      </ul>
    </>
  )
}

export default List