import { Card, Badge, Button, Row, Col } from 'react-bootstrap'
import '../styles/Contact.css'

export default function Contact() {

    const contacts = [
        { title: 'Email', link: 'mailto:chupengxiong@gmail.com', icon: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.width-500.format-webp.webp'},
        { title: 'Instagram', link: 'https://instagram.com/chupengxiong1', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/3840px-Instagram_icon.png'},
        { title: 'Discord', link: 'https://discord.com/users/chupingu', icon: 'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ'},
        { title: 'Facebook', link: 'https://facebook.com/Chupeng.Xiong', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/250px-Facebook_f_logo_%282019%29.svg.png'},
    ]

    return (
        <div className='contact'>
            <h1 className='page-header'>Get in touch</h1>
            <Card className='job-card'>
                <Card.Body className='job-status'>
                    <div className='availability-dot'></div>
                    <div>
                        <Card.Title className='job-title'>Open to internship and job opportunities</Card.Title>
                        <Card.Text className='job-text'>Currently looking for computer science related jobs</Card.Text>
                    </div>
                </Card.Body>
            </Card>

            <Row className='contact-grid' xs={2}>
                {contacts.map((contact) => (
                    <Col>
                        <Card className='contact-card' key={contact.title} xs={6} onClick={() => window.open(contact.link, '_blank')}>
                            <Card.Body className='contact-body'>
                                <img src={contact.icon} alt={contact.title} className='contact-icon'/>
                                <div>
                                    <Card.Title className='contact-title'>{contact.title}</Card.Title>
                                    <Card.Text className='contact-link'>
                                        <a href={contact.link} target='_blank' rel='noreferrer'>{contact.link}</a>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )) }
            </Row>

            <Card className='info-card'>
                <Card.Body className='info-body'>
                    <Card.Text className='info-text'>Phone Number: +1 (608) 293-1274</Card.Text>
                    <Card.Text className='info-text'>Address: 5125 Hazelcrest Dr. Madison, WI, 53704</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}