// import {useState,useEffect } from 'react';
import React, { Component } from "react";


function Numerlist(props){
    const numbers=numbers.props;
    const render_number=numbers.map((number)=>{
<h1>{number}</h1>

    })
    return render_number

  
}



const ListItems=()=>{

    return(

        <>
<Numerlist numbers={numbers}/>


        </>
    )


}

const numbers=[1,2,4,5,6,8,9,10]
export default ListItems;
