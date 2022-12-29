
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function App() {
   const [picture, setPicture] = useState([])
  useEffect(() => {

    var header = {
      method: 'GET',
      Headers: {
        'Content-Type': 'application/json'
      },
    }


    const load = async () => {
      var pictureData = await fetch('https://random-d.uk/api/random', header)
        .then(Response =>
          Response.json())
        .then(data => {
          setPicture(data)
        })
    }
    load()
  })


  return (
    <div className="App">
      <Container className="col-6">
        <Row className="center">
          <Card className='col-10 m-3 bg-warning'>
            <Card.Img className='p-5 ' src={picture.url} />
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;

