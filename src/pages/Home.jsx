import { Card, Badge, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className='home'>
            <Card className='profile'>
                <Card.Body className='profile-body'>
                    <Card.Title className='profile-title'>Chupeng Xiong</Card.Title>
                    <Card.Text className='profile-text'>I am a CS student at The University of Madison-Wisconsin</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}