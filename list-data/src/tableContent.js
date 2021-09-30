import React, { useState } from "react";
import './tableContent.css'


const DemographicAgeInfoForItems = ({usersDetails ,userNameAndAgeInfo, itemsListForDropdown}) =>{
 
   const [selectItemFromDropDown, setSelectItemFromDropDown] = useState("");
   const [userDemographicInfo, setUserDemographicInfo] = useState([]);
    const onChange = (e) =>{
      
       const filteredDemoGraphicData = Object.values(userNameAndAgeInfo.filter((value)=>Object.keys(usersDetails).filter((value)=>usersDetails[value].includes(e.target.value)).includes(value.username)).reduce( (acc, current) => {
        const ageDetails = `${current.age}`;
        !acc[ageDetails] ? acc[ageDetails] = {...current, count: 1} :acc[ageDetails].count += 1;
        return acc;
      }, {}))
      setUserDemographicInfo(filteredDemoGraphicData);
      setSelectItemFromDropDown(e.target.value);
    }


    return(
        <div className="users-age-item-wrapper">
            <h1>Age Demographic of Users with __</h1>
            <select
            placeholder="users"
            value={selectItemFromDropDown}
            onChange={onChange}>
                {itemsListForDropdown && itemsListForDropdown.map((item,index) =>
                <option value={item.item} key={index}>{item.item}</option>
                )}
            </select>
            <div>
                <table>  
                <thead>
                    <tr>
                        <th>AGE</th>
                        <th>COUNT</th>
                    </tr>
                    </thead>
                    <tbody>
                        {userDemographicInfo && userDemographicInfo.map((value,index) =>{
                        return(<tr key={index}>
                                <td>{value.age}</td>
                                <td>{value.count}</td>
                                </tr>
                )})}
                 </tbody>
                </table>
            </div>
        </div>
    );
}
export default DemographicAgeInfoForItems;