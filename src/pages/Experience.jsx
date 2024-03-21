import { School } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
const Experience = () => {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2014' iconStyle={{background:"#3e497a",color:"#ffff"}} icon={<School></School>}>
            <h3>My Random high School,Random Place,Radnom State</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2014' iconStyle={{background:"#3e497a",color:"#ffff"}} icon={<School></School>}>
            <h3>My Random high School,Random Place,Radnom State</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2014' iconStyle={{background:"#3e497a",color:"#ffff"}} icon={<School></School>}>
            <h3>My Random high School,Random Place,Radnom State</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2014' iconStyle={{background:"#3e497a",color:"#ffff"}} icon={<School></School>}>
            <h3>My Random high School,Random Place,Radnom State</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
