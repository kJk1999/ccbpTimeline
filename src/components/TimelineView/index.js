// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div>
      <h1>My Journey of CCBP 4.0</h1>

      <div className="timeline-container">
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachItem.id}
                  courseTimeline={eachItem}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachItem.id}
                projectTimeline={eachItem}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
