import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box"> Description </div>
              <div className="descriptionbox-nav-box fade"> Reviews (122) </div>
            </div>
            <div className="descriptionbox-description">
              <p>An e-commerce website that facilitates buying and selling of products or services over the internet.</p>
              <p>typically displays products or services a detailed descriptions, images, prices, and any available.</p>
            </div>
        </div>
    )
}
