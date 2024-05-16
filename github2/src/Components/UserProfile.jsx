import React from 'react'

const UserProfile = ({data}) => {

    const { login, avatar_url, html_url, name, bio, public_repos, followers, following } = data;

    return (
        <div className="main">
            <img className="img" src={avatar_url} alt={`${login} avatar`} />
            <div className="section">
                <div className="user_details">
                <p className="username">{login}</p>
                <p className="username">{name}</p>
                </div>
                
            <p className="bio">{bio || 'User has no bio'}</p>
            
            <div className="acctDetails">
                <div className="repos">
                <p className="repo">public Repos: {public_repos}</p>
                </div>
                <div className="followers">
                <p className="followersList">Followers: {followers}</p>
                </div>
                <div className="following">
                <p className="followingList">Following: {following}</p>
                </div>
            </div>

          <div className="a">
          <a  href={html_url} target="_blank">
               <p className="bottomtext"> view profile on Github</p>
            </a>
          </div>

            </div>
        </div>
    )
}

export default UserProfile
