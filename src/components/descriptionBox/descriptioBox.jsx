import React from 'react'
import './descriptioBox.css'

export default function DescriptioBox(){
  return (
    <div className='descriptioBox'>
        <div className="descriptioBox-navigator">
            <div className="descriptioBox-nav-box">Description</div>
            <div className="descriptioBox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionBox-description">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
        </div>
        
    </div>
  )
}
