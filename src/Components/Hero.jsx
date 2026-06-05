import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";



const Hero = () => {
    useGSAP(() => {
    /* Con la siguiente linea divido el texto letra por letra.*/

        const heroSplit = new SplitText('.title', { type: 'chars, words' });

        /*con la siguiente linea divido el texto en linea por linea */

        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });


        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars, {
            yPercent:400,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });

        gsap.timeline({
            ScrollTrigger: {
                trigger: '#hero',
                start : 'top top',
                end : 'bottom top',
                scrub: true,
            }
        })
            .to('right-leaf', { y : 200}, 0)
            .to('left-leaf', { y : -200}, 0)

    },[])

    return (
        <section id ="hero" className="noisy">
            <h1 className="title"> MOJITO </h1>

            <img
                src="public/images/hero-left-leaf.png"
                alt="left-leaf"
                className="left-leaf"
            />

            <img
                src="public/images/hero-right-leaf.png"
                alt="right-leaf"
                className="right-leaf"
            />
            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic</p>
                        <p className="subtitle"> Sip the Spirit <br/> of Summer</p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients,
                            creative flair, and timeless recipes - designed to delight your senses
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;