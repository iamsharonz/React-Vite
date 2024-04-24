import ListGroup from './components/ListGroup'

function App()
{
  let items = ['Africa', 'Antartica', 'Anasthesia'];
  return <div><ListGroup items = {items} heading = "Cities" /></div>
}

export default App;