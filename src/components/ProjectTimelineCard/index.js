// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimeline} = props
  const {
    categoryId,

    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimeline

  return (
    <div>
      <img src={imageUrl} alt={categoryId} className="image" />
      <div className="card">
        <h1>{projectTitle}</h1>
        <div className="inner-card">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
