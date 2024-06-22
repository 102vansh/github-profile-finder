import React from 'react'
import './user.css'

const User = ({ data }) => {
  const { avatar_url, following, followers, public_repos, bio, login, created_at } = data
  return (
    <div className='user'>
      <img src={avatar_url} alt='avatar' className='avatar' />
      <h2>{login}</h2>
      <p>{bio}</p>
      <div className='stats'>
        <h4>Repositories: {public_repos}</h4>
        <h4>Followers: {followers}</h4>
        <h4>Following: {following}</h4>
      </div>
      <p>User joined on: {new Date(created_at).toDateString()}</p>
    </div>
  )
}

export default User
