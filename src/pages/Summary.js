import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './css/Summary.css'
import { useNavigate } from 'react-router-dom';

function Summary() {

    const navigate = useNavigate();
    const [summary, setSummary] = useState("");
    const [name, setName] = useState(localStorage.getItem("name"));

    useEffect(() => {

        setName(localStorage.getItem("name"));
        Axios.get(`https://api.tvmaze.com/search/shows?q=${name}`).then((res) => {
            console.log(res.data[0])
            setSummary(res.data[0]);
        })

    }, [])



    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <h1>Summary</h1>
            </div>
            <hr></hr>
            <div>

                <div>

                    {summary.show === undefined ? <div>loading...</div> :

                        <div style={{ display: 'flex'}}>
                            <div style={{ width: "800px", marginLeft: "200px" }}>
                                <div style={{ display: 'flex' }}><h3>Show Name:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.name==null ? " NA": summary.show.name}</p></div>
                                <div style={{ display: 'flex' }}><h3>Type:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.type==null ? " NA": summary.show.type}</p></div>
                                <div style={{ display: 'flex' }}><h3>Language:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.language==null ? " NA": summary.show.language}</p></div>
                                <div style={{ display: 'flex' }}><h3>Genre:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.genres.map((val) => {
                                    return (
                                        <>{val} </>
                                    )
                                })==null ? " NA": summary.show.genres.map((val) => {
                                    return (
                                        <>{val} </>
                                    )
                                })}</p></div>

                                <div style={{ display: 'flex' }}><h3>Status:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.status==null ? " NA":summary.show.status}</p></div>
                                <div style={{ display: 'flex' }}><h3>Runtime:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.averageRuntime == null ? " NA" : summary.show.averageRuntime}</p></div>
                                <div style={{ display: 'flex' }}><h3>Rating:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.rating.average == null ? "  NA" : summary.show.rating.average}</p></div>
                                <div style={{ display: 'flex' }}><h3>Country:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.network == null ? " NA" : summary.show.network.country.name}</p></div>
                                <div style={{ display: 'flex' }}><h3>Summary:</h3> <p style={{ fontSize: "19px", marginLeft: "10px" }}>{summary.show.summary==null ? " NA":summary.show.summary.replace(/<[^>]*>/g, '')}</p></div>


                            </div>

                            <div style={{ marginRight: "200px", marginBottom: "210px", marginTop:"20px" , width: "500px", height: "500px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center' }}>
                                <img style={{ width: "400px", height: "400px" }} src={summary.show.image != null ? summary.show.image.original : "Image not available"} alt="Image not available" />
                                
                                <br></br>
                                <button id="btnn" style={{borderRadius:"10px"}} onClick={()=>{
                                    navigate("/bookticket")
                                }}>Book Ticket</button>
                            </div>

                        </div>
                    }
                </div>




            </div>


        </div>
    )
}

export default Summary
