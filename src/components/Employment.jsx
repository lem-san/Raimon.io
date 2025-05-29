import employment from '../data/employment'
import '../App.css'
import './Employment.css'

export default function Employment(){

    const employmentEntries = employment.map((entry) => {
        return (
            <div className='employmentCard' key={entry.id}>
                <p className='employmentDates'>{entry.dates}</p>
                <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.company}</p>
                    <p>{entry.desc}</p>
                    <div className="skillsSliderWrapper">
                        <ul className="skillsContainer">
                            {entry.softSkills.map((skill, index) => (
                                <li key={index} className="skills" id='softSkills'>{skill}</li>
                            ))}
                        </ul>
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
            <h2 className="heading">Employment.</h2>
            {employmentEntries}
        </div>
    )
}