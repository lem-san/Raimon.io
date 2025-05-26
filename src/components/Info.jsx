import './Info.css'
import '../App.css'
import Employment from './Employment'
import Education from './Education'

export default function Information() {
    return (
        <div className='information'>
            <h2 className='heading'>About Me.</h2>
            <p className="description">
                I'm an ESL English teacher based in Japan with an ICT and software development background. 
                I'm passionate about interactive classroom tools and language games that boost student engagement and learning. 
                I’m excited to bring my hands-on experience and tech skills to a role where 
                I can help build meaningful solutions in a motivated team that makes a real impact.
                <br />
                <br />
                I'm an ESL English teacher in Japan with an ICT and software development background. 
                I'm passionate about interactive classroom tools and language games that boost student engagement and learning. 
                I’m excited to bring my hands-on experience and tech skills to a role where 
                I can help build meaningful solutions in a motivated team that makes a real impact.
            </p>
            <Employment />
            <Education />            
        </div>
    )
}