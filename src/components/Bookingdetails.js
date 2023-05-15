import React, { useEffect, useState } from 'react'



export default function Bookingdetails() {

 
      const [Users, setUsers] = useState(null)

  
      useEffect(()=>{
          fetch("http://localhost:8000/ticket").then((res)=>{
              return res.json();
          }).then((resp)=>{
              setUsers(resp);
          }).catch((err)=>{
              alert("Userdetails Failed due to : " + err.message)
          })
      },[]);
  

  return (
    <div> <table className="table  ">
    <thead><tr><td colSpan={'2'}></td><td colSpan={'4'}><center><h1>Customer Booking Details</h1></center></td>
    
    </tr><br/>
        <tr>
            <td>Ticket Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Adults</td>
            <td>child's</td>
            <td>Start-Date</td>
            <td>End-Date</td>
        </tr>
    </thead>
    <tbody>
        { Users && Users.map((Item)=> {return(<tr><td>{Item.update}</td>
                                                    <td>{Item.username}</td>
                                                    <td>{Item.id}</td>
                                                    <td>{Item.phone}</td>
                                                    <td>{Item.adult}</td>
                                                    <td>{Item.child}</td>
                                                    <td>{Item.start}</td>
                                                    <td>{Item.end}</td>
                                                   
                                                    </tr>)})}
    </tbody>
    </table></div>
  )
}



