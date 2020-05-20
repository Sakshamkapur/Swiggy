import React,{useState, useEffect, useRef} from 'react';
import SideBar from './components/sidebar';
import Card from './components/card';
import restaurants from './reactTask.json';
import './App.css';


function Cards(props){
  var {data,isSeeAll} = props;
  const [number,setNumber] = useState(data.length>6 && !isSeeAll? 5: data.length);

  return(<div className="row">
    {data.map((item,index)=>{
      if(index < number) return <Card data={item} />
    })}
    {!!(data.length > number) &&<div className="more" onClick={()=>setNumber((data.length-(number+6))<0?data.length:(number+6) )}> +{data.length - number} More</div>}
  </div>)
}

function Section(props){
  var {data,index,isSeeAll} = props;

  return(<div className="section" id={"section"+index}>
    {!isSeeAll &&<div className="sectiontitle">{data.category||"Only On Swiggy"}</div>}
    <Cards data={data.restaurantList||data} isMore={isSeeAll? false:data.isMore} isSeeAll={isSeeAll} />
  </div>)
}

function App() {
  const [data,setData] = useState(restaurants);
  const [isSeeAll,setIsSeeAll] = useState(false)

  const exclusive = data.reduce(function(acc, value) {
    return [...acc,...value.restaurantList]
  },[]).filter(obj=>obj.isExlusive);

  const all = data.reduce(function(acc, value) {
    return [...acc,...value.restaurantList]
  },[]);
  return (
    <React.Fragment>
      <div className="container">
        <SideBar data={data} exclusive={exclusive.length} all={all.length} isSeeAll={isSeeAll} setIsSeeAll={setIsSeeAll} />
        {!isSeeAll&&<div className="sections">
          {data.map((item,index)=>{
            return <Section data={item} key={index} index={index} />
          })}
          <Section data={exclusive} index={data.length} />
        </div>}
        {isSeeAll&&<div className="sections">
          <Section data={all} index={-1} isSeeAll={true} />
        </div>}
      </div>
    </React.Fragment>
  );
}

export default App;
