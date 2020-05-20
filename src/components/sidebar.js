import React,{useState,useEffect} from 'react';

export default function SideBar(props){
    
    var [scroll,setScroll] = useState(0)
    
    
    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            if(!timer){
                var timer = setTimeout(()=>setScroll(window.scrollY),500)
            }
        }) 
    },[])

    const {data,exclusive,all,setIsSeeAll,isSeeAll} = props;

    function handleClick(index){
        var div = document.getElementById('section'+index);
        if(div){
            div.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    }

    function isOnTop(index){
        var div = document.getElementById('section'+index);
        if(div && (scroll >= div.offsetTop && scroll <= (div.offsetTop+div.offsetHeight))){
            return true;
        }else{
            return false
        }
    }

    return(
        <ul className="sidebar">
            {data.map((row,index)=>(
                <li onClick={()=>{handleClick(index); setIsSeeAll(false)}} className={isOnTop(index)&& !isSeeAll &&"active"}>
                    <a className="bold">{row.category}</a>
                    <p className="light">{row.restaurantList.length} OPTIONS</p>
                </li>
            ))}

            <li onClick={()=>{handleClick(data.length); setIsSeeAll(false)}} className={isOnTop(data.length) && !isSeeAll &&"active"}>
                <a className="bold">Only On Swiggy</a>
                <p className="light">{exclusive} OPTIONS</p>
            </li>
            <li onClick={()=>{setIsSeeAll(!isSeeAll); handleClick(-1);}} className={isSeeAll&&"active"}>
                <a className="bold">SEE ALL</a>
                <p className="light">{all} OPTIONS</p>
            </li>
        </ul>
    )
}