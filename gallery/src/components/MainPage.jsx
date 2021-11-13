import styled from 'styled-components';
import Menu from './Menu';
import { useState } from 'react';
import GalleryCarousel from './GalleryCarousel';

const PageContainer = styled('div')`
background-color: #161616;
width: 1060px;
display: inline-block; 
`;

const Title = styled('h1')`
color: white;
`;

const ImageContainer=styled('div')`display:flex`;

const Images = styled('div')`
img {
  cursor: pointer;
  margin: 20px;
  max-width: 300px;
  width: auto;
  height: auto;
}
`;

var nightmare = require('../images/nightmare_thumb.png').default;
var party = require('../images/party_thumb.png').default;
var mardi_gras = require('../images/mardi gras_thumb.png').default;
var ice_cream = require('../images/ice cream_thumb.png').default;
var pretty_girl = require('../images/pretty girl_thumb.png').default;
var witches = require('../images/witches den_thumb.png').default;

function MainPage() {
  const imageList= [nightmare, party, mardi_gras, ice_cream, pretty_girl, witches];
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openCarousel = (index) => {
    setIsCarouselOpen(true);
    setSelectedImage(index);
  };

    return (
      <PageContainer>
        <Title>Hello</Title>
        <Menu />
        <ImageContainer>
          <Images>
          {imageList.map((image,index) =>
            <img key={index} alt="Sharona" src={imageList[index]} onClick={() => {openCarousel(index)}} />
          )}
          </Images>
          {isCarouselOpen && <GalleryCarousel isCarouselOpen={isCarouselOpen} setIsCarouselOpen={setIsCarouselOpen} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </ImageContainer>
        

      </PageContainer>
    );
  }
  
  export default MainPage;