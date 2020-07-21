import React from 'react'
import Today from '../containers/Today'

const TodayChecklist = (props) => {
    return (
        <div>
           { props.medication.name_route}
        </div>
    )
}

export default TodayChecklist