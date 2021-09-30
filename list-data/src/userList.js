

import React, { useState, useEffect } from 'react';
import DemographicAgeInfoForItems from "./tableContent";
import './userList.css'

const UsersAgeInfo = () => {

  // local state to the user info to store the data in after fetching.
  const [userNameAndAgeInfo, setUserNameAndAgeInfo] = useState(null);
  const [usersDetails, setusersDetails] = useState(null);

  // data for the options of select items dropdown
  const itemsListForDropdown = [
    { item: "tv" },
    { item: "crackers" },
    { item: "chips" },
    { item: "item " },
    { item: "carrot" },
    { item: "apple" },
    { item: "grapes" },
    { item: "cake" },
    { item: "ham" }
  ];

  // fetching the users and their age as well as the info related to the items

  const fetchUsersList = () => {
    fetch('/users/age', {
      method: "GET"
    }).then(res => res.json())
      .then(res => setusersDetails(res));
    fetch('/users', {
      method: "GET"
    }).then(res => res.json())
      .then(res => setUserNameAndAgeInfo(res))
  }

  // fetching the users information on the mounting the app

  useEffect(() => {
    fetchUsersList()
  }, [])

  return (
    <div className="users-section">
      {userNameAndAgeInfo && userNameAndAgeInfo.length &&
        <div className='users-age'>
          <h3>ALL USERS</h3>
          <h5>Users and their age</h5>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {userNameAndAgeInfo.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.username}</td>
                    <td>{val.age}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      }
      <DemographicAgeInfoForItems userNameAndAgeInfo={userNameAndAgeInfo} usersDetails={usersDetails} itemsListForDropdown={itemsListForDropdown} />
    </div>
  );
}

export default UsersAgeInfo;


