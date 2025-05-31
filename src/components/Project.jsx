import project from '../data/project'
import '../App.css'

export default function Project(){

    const projectEntries = project.map((entry) => {
        return (
            <div className='projectCard' key={entry.id}>
                <p className='projectThumbnail'>{entry.thumbnail}</p>
                <div>
                    <a href={entry.link} alt={entry.title}><h3>{entry.title}</h3></a>
                    <p>{entry.desc}</p>
                    <div className="skillsSliderWrapper">
                        <ul className="skillsContainer">
                            {entry.technicalSkills.map((skill, index) => (
                                <li key={index} className="skills" id='technicalSkills'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h2 className="heading">Projects.</h2>
            {projectEntries}
        </div>
    )
}