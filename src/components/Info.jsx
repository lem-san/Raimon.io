import Employment from './Employment'
import Project from './Project'

export default function Information({className = ''}) {
    return (
        <div className={`font-light font-family-ibx text-stone-950/80 ${className}`}>
            <h2 className='font-family-playfair text-4xl pt-4 pb-8'>About Me.</h2>
            <p className="pb-10 leading-7 text-sm">
            I'm an aspiring Edtech Developer passionate about building interactive classroom tools and language games that boost student engagement and motivate students to use English. 
            I'm currently an ESL English Teacher in Nagano, Japan. I facilitate exciting English lessons by leveraging my knowledge of front-end web apps together with my teaching experience.  
            I am continually inspired by my students accompishing new things and reaching their goals. They inspire me to continue on my EdTech journey and it is incredibly fulfilling to see my students use technology I made in the classroom. 
            My goal is to make learning fun and impactful, so I'm constantly trialling new, interactive ways for my students to approach their learning. 
            Additionally, I am constantly assessing where ICT solutions can produce the most effective result in my students' learning journey, both within the English classroom and for other subjects.
            <br />
            <br />
            In my free time, I enjoy travelling around Japan. I love finding new places to see and delicious foods to eat. For when I'm stuck at home, you can find me playing video games, trying to learn to cook, and tinkering with some new tech.
            </p>
            <Employment />
            <Project />            
        </div>
    )
}