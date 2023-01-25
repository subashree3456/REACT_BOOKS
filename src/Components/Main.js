import React ,{useState} from "react";
import Card from "./Card";
import axios from "axios";
const Main =() =>{
const [ search , setSearch]=useState("");
const [bookData , setData]=useState([]);
const searchBook =(evt) =>{
if(evt)
{

    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
    // .then(res=>console.log(res))
    // .then(res=>console.log(res.data))
    // .then(res=>console.log(res.data.items))
    .then(res=>setData(res.data.items))
    .catch(err=>console.log(err))
    // console.log("Hello");
}
}
// MY API KEY  :    AIzaSyCaCyfNtODP25zF0869iNhiovEMauSe2aE
    return(
        <>
        <div className="header">
           <div className="row1">
<h1>A room without books is like <br/> a body without soul.</h1>
            </div>
            <div className="row2">
                <h2>Find your Book</h2>
                <div className="search">
            <input type="text" placeholder="Enter your Book Name" value={search} onChange={e=>setSearch(e.target.value)}
            onClick={searchBook}/>
            <button><i className="fas fa-search"></i></button>
                </div>
                <img src="./images/bg2.png" alt="" />
            </div>
        </div>
        <div className="container">
      {
          <Card book={bookData}/>
      }
        </div>
        </>
    )
}

export default Main;