import React, { useEffect,useContext, useState } from 'react';
import {FirebaseContext,AuthContext} from '../../Store/FirebaseContext'
import Heart from '../../assets/Heart';
import './Post.css';
import  {PostContext}from '../../Store/PostContext'
import {useHistory} from 'react-router-dom'

function Posts() {

const {firebase}=useContext(FirebaseContext)
const {postDetail,setPostDetails}=useContext(PostContext)
const history=useHistory()
const[products,setProducts]=useState([])
  useEffect(()=>{
        firebase.firestore().collection('products').get().then((snapshot)=>{
            const allPost=snapshot.docs.map((product)=>{
              return{
                ... product.data(),
                id:product.id
              }
               
              
            })
            console.log("this is post",allPost)
            setProducts(allPost)
            
        })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
     {
      products.map((data,index)=>{

      return(
          <div key={index}
            className="card"
            onClick={()=>{
              setPostDetails(data)
              console.log("PostUser",data)
              history.push('/view')

            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={data.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {data.price}</p>
              <span className="kilometer">{data.category}</span>
              <p className="name"> {data.name}</p>
            </div>
            <div className="date">
              <span>{data.createdAt}</span>
            </div>
          </div>
        ) }) }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
