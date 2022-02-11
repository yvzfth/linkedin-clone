import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import './Widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        {<FiberManualRecordIcon />}
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA React is back", "Top news - 9912 readers")}
      {newsArticle("Coronavirus: UK updates", "Top news - 812 readers")}
      {newsArticle("Tesla hits new high", "Top news -300 readers")}
      {newsArticle("Bitcoin breaks $22k", "Top news - 8822 readers")}
      {newsArticle("Is Redux too good?", "Top news - 123 readers")}
    </div>
  )
}

export default Widgets