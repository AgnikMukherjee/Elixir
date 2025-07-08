import React from 'react'
import { navLinks } from '../../constants/index.js'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

export default function Navbar() {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
                // scrub: true
            }
        })

        navTween.fromTo(
                "nav",
                {backgroundColor: "transparent"},
                {backgroundColor: '#00000050',
                backgroundFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut"
                }

            )
    })

    return (
        <nav>
            <div className='px-[5vw]'>
                <a href="#home" className='flex items-center gap-2'>
                    <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-600 font-bold'>Elixir</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href="#{link.id}">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        
    )
}
