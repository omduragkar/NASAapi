import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [like, setLike] = useState(false);
    useEffect( () => {
        (async function(){
            let mdata = localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')):null;
            if(!mdata){
                try{
                    
                    let dat = await axios.get("https://api.nasa.gov/planetary/apod?api_key=mec791AJl4e40INQ9Wh2lCZGgs91hISDiivn2PCb&count=20");
                    setLoading(false);
                    mdata = dat.data.filter(v=>{
                        v.like = false;
                        return v.media_type === "image"
                    });
                    setData(mdata);
                    mdata = JSON.stringify(mdata);
                    localStorage.setItem('data', mdata);
                    console.log(mdata);
                }
                catch(err){
                    console.log(err);
                }   
            }else{
                setLoading(false);
                setData(mdata);
            }
        })();
    },[])
    useEffect(()=>{
        let mdata = localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')):null;
        setData(mdata);
    },[like]);
    const likedd = (e)=>{
        let  i =(e.target.parentNode.getAttribute("id"));
        data[i].like = true;
        let l = JSON.stringify(data);
        localStorage.setItem('data', l);
        if(like === true){
            setLike(false);
        }else{
            setLike(true);
        }
    }
    const unlikedd = (e)=>{
        let  i =(e.target.parentNode.parentNode.getAttribute("id"));
        data[i].like = false;
        let l = JSON.stringify(data);
        localStorage.setItem('data', l);
        if(like === true){
            setLike(false);
        }else{
            setLike(true);
        }
    }
    
    return (
        <div className='my-3'>
            {console.log(data)}
            {loading?
            <div style={{"height":"100rem", "width":"100%", "textAlign":"center", "margin":"35% auto"}}>
                <div class="spinner-border text-primary " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            :
                <>
                    
                    {data && data.length>1 && data.map((cdata, i)=>(
                        <div className="card my-3">
                            <img src={cdata.url} height={"300rem"} width={"30rem"} className="card-img-top" alt="..."/>
                            <div className="card-body" id={i}>
                                <h5 className="card-title">{cdata.title}</h5>
                                <p className="card-text">
                                    {cdata && cdata.date}
                                </p>
                                <p className="card-text">
                                    {cdata && cdata.explanation.length>500?
                                    <ReadMoreReact text={cdata.explanation}/>  
                                    :
                                    cdata.explanation   
                                    }                              
                                </p>
                                {
                                    (cdata && cdata.like)? 
                                    
                                    <p>
                                        <button className="btn btn-danger" onClick={e=>unlikedd(e)}><i class="far fa-thumbs-down"></i> Unlike</button>
                                        <span className='mx-2'>You have Liked this image!</span>
                                    </p>
                                    :
                                    <button className="btn btn-primary mx-2" onClick={e=>likedd(e)}><i class="far fa-thumbs-up"></i> Like</button>
                                }
                            </div>
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default Home
