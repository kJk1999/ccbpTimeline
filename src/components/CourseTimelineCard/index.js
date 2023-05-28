// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimeline} = props
  const {title, courseTitle, description, tagsList} = courseTimeline

  return (
    <div>
      <div className="card">
        <h1>{courseTitle}</h1>
        <div className="inner-card">
          <AiFillClockCircle className="icon" />
          <h1 className="duration">{title}</h1>
        </div>
      </div>
      <p>{description}</p>
      <ul className="list-container">
        {tagsList.map(eachList => (
          <li className="list-element" key={eachList.id}>
            <p>{eachList.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
