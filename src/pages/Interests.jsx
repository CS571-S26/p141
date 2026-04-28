import { useState } from 'react'
import { Card } from 'react-bootstrap'
import GundamBuilder from '../components/GundamBuilder.jsx'
import lotm from '../assets/Interests/lotm.png'
import lotm_b1 from '../assets/Interests/lotm_B1.png'
import lotm_b2 from '../assets/Interests/lotm_B2.png'
import ss_b from '../assets/Interests/ss_b.png'
import ss_b2 from '../assets/Interests/ss_b2.png'
import ss_b3 from '../assets/Interests/ss_b3.png'
import '../styles/Interests.css'

export default function Interests() {
    const [isOpen, setIsOpen] = useState(false)

    const lotm_book_img = [lotm, lotm_b1, lotm_b2];
    const ss_book_img = [ss_b, ss_b2, ss_b3];

    return (
        <div className='interests'>
            <h1 className='page-header'>Interests</h1>
            <h2 className='sub-header'>Gundam Model Kits:</h2>
            <p className='interest-text'>
                Gundam Model Kits, also known as Gunpla, are are snap-fit, articulated, and customizable plastic models of mecha robots 
                from the Mobile Suit Gundam anime franchise. I first become interest in this hobby through YouTube shorts. At the time 
                there was a lot of ASMR videos involving cutting and creating Gunpla which looked a lot of fun. So around that time I 
                got my first Gudam Model Kit and that was when I became hooked onto the hobby. What really pulled me in is how relaxing 
                it can be cutting the pieces and putting them all together. As time went on, I increasing got harder and harder kits and 
                began with simple custization like panel lining. I hope that in the future I would be able to learn how to airbrush so that 
                I can take this hobby to the next level.
            </p>
            <div className='gundam-section'>
                <div className='gundam-header' onClick={() => setIsOpen(prev => !prev)}>
                    <h2 className='gundam-title'>Gunpla Building</h2>
                    <span className='gundam-toggle'>{isOpen ? '▲' : '▼'}</span>
                </div>
                {isOpen && <GundamBuilder />}
            </div>
            <h2 className='sub-header'>Fiction Reading:</h2>
            <p className='interest-text'>
                One of my favorite pass time either when I am about to go to bed or just in the best going to and from class is reading fiction books. 
                Here are some of my favorite books I have read so far and a brief description of what they are about.
            </p>
            <div className='book-section'>
                <h3 className='reading-sub-header'>Lord of Mysteries:</h3>
                <p className='reading-text'>
                    Lord of Mysteries is a Chinese web novel written by Yuan Ye or Cuttlefish. The story is about a the character named Zhou Mingrui who was 
                    transported into the body of Klein Moretti in a fictional steampunk world. The story involves potions, rituals, and Lovecraftian gods where 
                    the main character pushes to find the truth of this world and why he ended up in it. What really pulled me into this story is the amazing world 
                    building with twist and turns and complicated links of madness and betryal. If you are interested in a dense story revolving around ocult themes 
                    then this is a story for you.
                </p>
                <div className='image_container'>
                    {lotm_book_img.map((img) => 
                        <img src={img} alt='lotm Image' className='book_images'/>
                        )}
                </div>
            </div>
            <div className='book-section'>
                <h3 className='reading-sub-header'>Shadow Slave:</h3>
                <p className='reading-text'>
                    Shadow Slave is a novel by GuiltyThree. The story takes place in a dsytopian world where people are infected by a something called the "Nightmare 
                    Spell". This causes them to enter a magical dream world called a "nightmare" where they are force to fight magical monster in order to escape to the 
                    real world. The book main character is named Sunny. He is a boy raised off the streets when he was infected by the Nightmare Spell and forced to enter 
                    the nightmare. The story main drive is Sunny himself and how he navigates this world and through deception but not lies. If you are interested in fantasic 
                    books about survival the this is a story for you.
                </p>
                <div className='imag_container'>
                    {ss_book_img.map((img) =>
                        <img src={img} alt='Shadow Slave Image' className='book_images'/>
                    )}
                </div>
            </div>
        </div>
    )
}