import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

function HeaderOption({ isAvatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {isAvatar && <Avatar className="headerOption__icon avatar" src={user?.photoURL}>
        {user?.email[0]}

      </Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption