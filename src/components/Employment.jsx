import '../App.css'
import employment from '../data/employment'

export default function Employment(){

    const employmentEntries = employment.map((entry) => {
        return (
            <>
                <div>
                    <div style={{display: 'flex'}}>
                        <p>{entry.dates}</p>
                        <div>
                            <h3>{entry.title}</h3>
                            <p>{entry.company}</p>
                            <p>{entry.desc}</p>
                            <p>{entry.skills}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <div>
            <h2 className="heading">Employment.</h2>
            {employmentEntries}
        </div>
    )
}