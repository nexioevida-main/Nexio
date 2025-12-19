import React from 'react'
import ProfilePage from './ProfilePage'
import ProfileDetails from './ProfileDetails'

const Profile = () => {
  return (
     <div className="w-full min-h-screen bg-gray-100">
      <ProfilePage />
      <ProfileDetails />
    </div>
  )
}

export default Profile
