import React from 'react';
import './Movies.scss';
import './movies';

// const movies =[
//   {
//     id:'1',
//     name:'Avatar',
//     description:'something',
//     price:'20$'},
//   {
//     id:'2',
//     name:'Lord of the Rings',
//     description:'something else',
//     price:'21$'}
// ]



const IndMovie=(props)=>{
  return(
    <li>{props.obj.name}</li>
  )
}

export default function Movies(props){

  return(
    <div id='movieContainer'>
    {
      movies.filter(data => props.name === null? data : data.name.toLowerCase().includes(props.name.toLowerCase())).map((obj,i)=>{
    return <IndMovie obj ={obj} key={i} />})
    }
  </div>)
}