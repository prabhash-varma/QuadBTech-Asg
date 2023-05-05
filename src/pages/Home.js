import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import icon from '../images/export.png'
import './css/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

const navigate=useNavigate();

const [data,setData]=useState([]);

const [search,setSearch]=useState("");

useEffect(()=>{
    Axios.get("https://api.tvmaze.com/search/shows?q=all").then((res)=>{
        setData(res.data);
    })
},[])



useEffect(()=>{

  if(search!==""){
    Axios.get(`https://api.tvmaze.com/search/shows?q=${search}`).then((res)=>{
        setData(res.data);
    })
  }
  else{
    Axios.get("https://api.tvmaze.com/search/shows?q=all").then((res)=>{
        setData(res.data);
    })
  }
},[search])




  return (
    <div>
      <div style={{display:"flex",justifyContent: 'center',alignItems: 'center'}}>
        <h1>MovieSite</h1>
       
      </div>
      <hr></hr>
      <div style={{display:"flex",flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>

        <div style={{display:"flex",marginBottom:"40px",marginTop:"60px"}}>
            <input style={{border:"1px solid black"}} type="text" onChange={(e)=>{setSearch(e.target.value)}} placeholder="🔍︎ Search your favorite show"/>
            {/* <div style={{height:"20px",width:"20px"}}>🔍︎</div> */}
        </div>
            <div classname="tableclass">
            {/*Table */}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Language</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Status</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr key={item.show.id}>
                                <td>{item.show.name}</td>
                                <td>{item.show.language}</td>
                                <td>{item.show.genres}</td>
                                <td>{item.show.status}</td>
                                <td>{item.show.rating.average>0 ? item.show.rating.average: "-"} </td>
                                <td><img style={{width:"12px",height:"12px"}} src={icon} alt="" onClick={()=>{
                                    localStorage.setItem("name",item.show.name);
                                    navigate("/summary");
                                }}/></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

                
            </div>
      </div>
    </div>
  )
}

export default Home
