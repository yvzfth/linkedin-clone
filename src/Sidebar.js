import React from 'react';
import './Sidebar.css';

import { Avatar } from '@mui/material'

function Sidebar() {

  const recentItem = (topic) => (
    <div class="sidebar__recentItem">
      <span class="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )


  return (
    <div className="sidebar">
      <div class="sidebar__top">
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="background_image" />
        <Avatar className="sidebar__avatar" />
        <h2>fatih yavuz</h2>
        <h4>yvzfth@yandex.com</h4>
      </div>
      <div class="sidebar__stats">
        <div class="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div class="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,110</p>
        </div>

      </div>
      <div class="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar;