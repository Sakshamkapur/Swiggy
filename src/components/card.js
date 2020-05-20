import React,{ useState } from 'react';

const images = [
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"
]

function Rating({value}){
    if(value.length === 0){ 
        return(<React.Fragment> <span> <i class="fa fa-star"></i> </span> <span>--</span></React.Fragment>)
    }else{
        return(<div class="ratingnumber" style={{backgroundColor: value <3?"#db7c38" :"#48c479"}}><span> <i class="fa fa-star"></i></span><span>{value}</span></div>)
    }
}

export default function Card(props){
    var {data} = props;
    let randomValue = images[Math.floor(Math.random() * images.length)];
    return(
        <div className="card">
            <div class="cardbody">
                <div class="media">
                    <img alt="Bakery 24X7" width="254" height="160" src={randomValue} />
                </div>
                <div class="about">
                    <div class="title">{data.name}</div>
                    <div class="type">{data.food_types.join(", ")}</div>
                </div>
                <div class="details">
                    <div class="review">
                        <Rating value={data.ratings} />
                    </div>
                    <div>•</div>
                    <div>35 MINS</div>
                    <div>•</div>
                    <div class="price">₹200 FOR TWO</div>
                </div>
            </div>
            <div class="cardfooter">
                <span role="button" aria-label="Open" class="acion">Quick View</span>
            </div>
        </div>
    )
}