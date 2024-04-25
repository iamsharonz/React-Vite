import ListGroup from './components/ListGroup'

function App()
{
  const handSelectItems = (item: string) =>
  {
    console.log(item);
  }

  let items = ['Africa', 'Antartica', 'Anasthesia'];
  return <div><ListGroup items = {items} heading = "Cities" onSelectItem={handSelectItems}/></div>
}

export default App;