import './ws.css'
import { useHistory } from "react-router-dom";
import {Alert} from 'antd'
import logo from "../../logo.svg";
import {
  SubmitButton,
} from "../../components/accountBox/common";
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from "react";
import { Spin} from "antd";
import Password from '../../components/Password/Password';

const workspaceForm = () => {
    const [email, setEmail] = useState("");
    const [workspace, setWorkspace] = useState("");
    const [fullname,setFullName]=useState("");
    const [loading,setLoading]=useState(false);

   

    const workspaceForm= async(e)=>{
            e.preventDefault();
        
          setLoading(true)
        const WORKSPACE_URL =
          "hhttps://mymanapinode.herokuapp.com/api/api/workspace/createttps://mymanapinode.herokuapp.com/api/api/auth/signup";

           const res = await fetch(WORKSPACE_URL, {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               fullname,
               email,
               workspace,
               roles: ["admin", "moderator"],
             }),
           });

           const data = await res.json();

           if (res.status !== 200 || !data) {
             setLoading(false);
             window.alert("INVALID REGISTRATION");
             console.log("INVALID REGISTRATION");
           } else {
             setLoading(false);
             console.log("REGISTRATION SUCCESSFUL");
               history.push("/login");
           }
    

    }
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    
     const handleWorkspaceChange = (event) => {
        setWorkspace(event.target.value);
     };
    
      const handleFullNameChange = (event) => {
        setFullName(event.target.value);
      };
    
    return (
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <img src={logo} height={300} width={300} alt="" />

          <form className="workspaceForm" onSubmit={workspaceForm}>
            <input
              value={fullname}
              type="text"
              onChange={handleFullNameChange}
              placeholder="FullName"
              required
            />
            <input
              value={email}
              type="email"
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
            <input
              value={workspace}
              type="workspace"
              onChange={handleWorkspaceChange}
              placeholder="Workspace Name"
              required
            />
           

            <SubmitButton>Submit</SubmitButton>

            <h2>&nbsp;</h2>
          </form>
          {loading && <Spin />}
        </div>
      </div>
    );
}

export default workspaceForm