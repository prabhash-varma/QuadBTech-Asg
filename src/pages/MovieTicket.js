import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './css/MovieTicket.css'

function MovieTicket() {


    const [summary, setSummary] = useState("");
    const [name, setName] = useState(localStorage.getItem("name"));

    const [uname,setUname]=useState("");
    const [uemail,setEmail] = useState("");
    const [num,setNum]=useState(1);

    const submitDetails = (e)=>{
        e.preventDefault();

        let obj = {
            name:uname,
            email:uemail,
            numberofTickets:num
        }

        localStorage.setItem("userDetails",JSON.stringify(obj));

        setEmail("");
        setNum(0);
        setUname("");

        alert("Your Ticket is Booked");

        return false;
    }

    useEffect(() => {

        setName(localStorage.getItem("name"));
        Axios.get(`https://api.tvmaze.com/search/shows?q=${name}`).then((res) => {
            console.log(res.data[0])
            setSummary(res.data[0]);
        })

    }, [])



    return (
        <div>

            <div >
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Book Your Ticket</h1>
                </div>
                <hr></hr>
                <div style={{display:"flex",justifyContent: 'center',alignItems: 'center'}}>
                    {summary.show == null ? "loading..." :

                        <form style={{ border: "1px solid black" ,marginBottom:"20px",marginTop:"30px" }} onSubmit={submitDetails}>

                            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <label style={{marginRight:"20px"}} className="formlabel">
                                    <h3 >Name:</h3>
                                </label>
                                <input type="text" name="name" value={summary.show.name == null ? " NA" : summary.show.name} />
                            </div>
                            <br></br>
                            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <label style={{marginRight:"26px"}} className="formlabel">
                                    <h3>Type:</h3>
                                </label>
                                <input type="text" name="name" value={summary.show.type == null ? " NA" : summary.show.type} />
                            </div>
                            <br></br>
                            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <label style={{marginRight:"5px"}} className="formlabel">
                                    <h3>Language:</h3>
                                </label>
                                <input type="text" name="name" value={summary.show.language==null ? " NA": summary.show.language} />
                            </div>
                            <br></br>
                            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <label className="formlabel" >
                                    <h3>User name:</h3>
                                </label>
                                <input type="text" name="uname" value={uname} required="true" onChange={(e)=>{
                                    setUname(e.target.value);
                                }}/>
                            </div>
                            <br></br>
                            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <label style={{marginRight:"28px"}} className="formlabel" >
                                    <h3>Email:</h3>
                                </label>
                                <input type="email" name="email" value={uemail} required="true" onChange={(e)=>{
                                    setEmail(e.target.value);
                                }} />
                            </div>
                            <br></br>
                            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <label className="formlabel" >
                                    <h3>No. of Tickets:</h3>
                                </label>
                                <input type="number" name="tickets" value={num} required="true" onChange={(e)=>{
                                    setNum(e.target.value);
                                }}/>
                            </div>
                            <br></br>
                          
                            <br></br>
                                
                            <div style={{display: 'flex', justifyContent: 'center',alignItems:'center'}}>
                            <button id="btnn" type="submit" style={{borderRadius:"10px"}} >Book Ticket</button>
                            </div>
                            <br></br>
                            




                        </form>
                    }

                </div>

            </div>

        </div>
    )
}

export default MovieTicket
