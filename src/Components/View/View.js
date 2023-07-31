import React from 'react';
import { useEffect,useContext,useState } from 'react';
import {PostContext} from '../../Store/PostContext'
import {FirebaseContext} from '../../Store/FirebaseContext'

import './View.css';
function View() {
  const [userDetails,serUserDetails]=useState()
  const {postDetail}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  console.log("postDetail",postDetail)


  useEffect(()=>{
    const {userId} = postDetail
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{
        serUserDetails(doc.data())
        console.log("val",doc.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetail.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetail.price}</p>
          <span>{postDetail.category}</span>
          <p>{postDetail.name}</p>
          <span>{postDetail.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
        <p>SellerDetails</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
          </div>
          }
          
        
      </div>
    </div>
  );
}
export default View;
