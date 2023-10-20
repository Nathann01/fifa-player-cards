import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'


const Player = () => {
    return (
    <div className='vart'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/haaland.jpg" />
            <Card.Body>
            <Card.Title>Erling Haaland</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Number: 9</ListGroup.Item>
            <ListGroup.Item>Nationality: Norway</ListGroup.Item>
            <ListGroup.Item>Age: 23</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./public/images/Messi.jfif" />
            <Card.Body>
            <Card.Title>Lionel Messi</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Number: 10</ListGroup.Item>
            <ListGroup.Item>Nationality: Argentina</ListGroup.Item>
            <ListGroup.Item>Age: 36</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./public/images/Bellingham.webp" />
            <Card.Body>
            <Card.Title> Jude Bellingham</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Number: 5</ListGroup.Item>
            <ListGroup.Item>Nationality: British </ListGroup.Item>
            <ListGroup.Item>Age: 20</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./public/images/pedri.jpg" />
            <Card.Body>
            <Card.Title>Pedro González</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Number: 8</ListGroup.Item>
            <ListGroup.Item>Nationality: Spain</ListGroup.Item>
            <ListGroup.Item>Age: 21</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
    </div>

    )
}

export default Player