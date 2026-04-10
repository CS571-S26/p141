import { useState } from 'react'
import GundamBuilder from '../components/GundamBuilder.jsx'
import '../styles/Interests.css'

export default function Interests() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='interests'>
            <h1 className='page-header'>Interests</h1>

            <div className='interest-section'>
                <div className='interest-header' onClick={() => setIsOpen(prev => !prev)}>
                    <h2 className='interest-title'>Gunpla Building</h2>
                    <span className='interest-toggle'>{isOpen ? '▲' : '▼'}</span>
                </div>
                {isOpen && <GundamBuilder />}
            </div>
        </div>
    )
}