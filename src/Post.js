import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import InputOption from './InputOption'
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div class="post__header">
        <Avatar src={photoUrl} />
        <div class="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div class="post__body">
        <p>{message}</p>
      </div>

      <div class="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon}
          title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon}
          title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon}
          title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon}
          title="Send" color="gray" />
      </div>
    </div>
  )
}

export default Post