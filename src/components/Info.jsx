import Employment from './Employment'
import Project from './Project'

export default function Information({className = ''}) {
    return (
        <div className={`font-light ${className} font-family-source text-stone-950/80`}>
            <h2 className='font-family-playfair text-4xl pt-4 pb-6'>About Me.</h2>
            <p className="pb-5 leading-6 text-sm">
                I'm an aspiring Edtech Developer based in Japan, aiming to ESL English teacher based in Japan with an ICT and software development background. 
                I'm passionate about interactive classroom tools and language games that boost student engagement and learning. 
                I’m excited to bring my hands-on experience and tech skills to a role where 
                I can help build meaningful solutions in a motivated team that makes a real impact.
                <br />
                <br />
                In my free time, I enjoy
            </p>
            <Employment />
            <Project />            
        </div>
    )
}