function Evento({numero}) {
  function meuEvento(){
    console.log(`Opa, fui ativado! ${numero}`)
  }


  return (
    <>
      <p>Clique para disparar um Eventos</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  )
}

export default Evento