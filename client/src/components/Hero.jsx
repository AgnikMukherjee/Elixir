import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

function Hero() {

    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars , words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => {
            char.classList.add('text-gradient');
        })

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.04
        })

        gsap.from('.ccc', {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.04,
            delay: 1
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.04,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.right-leaf', {y:200} , 0)
        .to('.left-leaf', {y:-200} , 0)


        const startVal = isMobile ? 'top 50%' : 'center 60%'
        const endVal = isMobile ? '120% top' : 'bottom top'

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startVal,
                end: endVal,
                scrub: true,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, {currentTime : videoRef.current.duration})
        }
    }, [])
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>
                <img src="/images/hero-left-leaf.png" alt="" className='left-leaf' />

                <img src="/images/hero-right-leaf.png" alt="" className='right-leaf' />

                <div className='body'>
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className='ccc'>Cool. Crisp. Classic.</p>
                            <p className='subtitle'>
                                Sip the spirit <br />of summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className='subtitle'>
                                Sip sophistication with our cocktails.Timeless classics to bold innovations, each artfully crafted with premium spirits and fresh ingredients. Elevate your evenings with flavors that dazzle
                                <br />—every glass tells a story. Cheers!
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video ref={videoRef} src="/videos/input.mp4" muted playsInline preload='auto' autoPlay></video>
            </div>
        </>
    )
}

export default Hero