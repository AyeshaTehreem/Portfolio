import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
       
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Chatting Applications</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Event Management</li>
        <li className="sidenavLi">Sports Club</li>
        <li className="sidenavLi">POS & Inventory</li>
        <li className="sidenavLi">Event Management</li>
        <li className="sidenavLi">Crowd Funding DApp</li>
        <li className="sidenavLi">Attendance Portal</li>
        <li className="sidenavLi">FTA TIMES</li>
      </ul>
      
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+923088899273</li>
        <li className="sidenavLi">ayeshatehreem.info@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav