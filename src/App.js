
import Boton from './componentes/boton';
import PokeApi from './componentes/Otro';
import './App.css';
import { fetchData } from './componentes/fetchData';
import { Suspense } from 'react';
import { Card,Button, Container,Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' ;

const apiData = fetchData( 'https://fakestoreapi.com/products/category/jewelery');

function App() {
  const data = apiData.read()
  return (
    <div className="App">
    {/* <Boton/>
    <PokeApi/> */}
     <Suspense fallback={<di>Loading...</di>}>
     <div className="container">
          <div className="row">
    <div className='col-lg-5' >
        {data?.map((e) => (
        <div className="container">
        <div className="row">
  <div className='col-lg-5' >
        <Card className="Card" style={{ width: '18rem' }}>
             <Card.Img variant="top" src={e.image} />
             <Card.Body>
               <Card.Title>{e.title}</Card.Title>
               <Card.Text>
                 ${e.price}
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>         
           </div>
      </div>
         </div>
        )
        )}
      </div>
      </div>
         </div>
     </Suspense>
     
            
    </div>

  );
}

export default App;
