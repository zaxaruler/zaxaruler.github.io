import styled from 'styled-components';
import Menu from './Menu';
import { useState } from 'react';
import GalleryCarousel from './GalleryCarousel';

const PageContainer = styled('div')`
background-color: #161616;
display: inline-block; 
padding-bottom: 80px;

@media (min-width: 1159px) {
  width: 1060px;
}
`;

const Title = styled('h1')`
color: white;
font-family: 'Caveat', cursive;
`;

const Subtitle = styled('div')`
color: darkgray;
margin-bottom: 80px;
`;

const ImageContainer=styled('div')`display:flex`;

const Images = styled('div')`

img {
  cursor: pointer;
  margin: 20px;
  max-width: 300px;
  width: auto;
  height: auto;
  border: 1px solid #161616;
  border-radius: 5px;

  &:hover {
   border: 1px solid #D3D3D3;
  }
}
`;

var nightmare = require('../images/nightmare_thumb.png').default;
var party = require('../images/party_thumb.png').default;
var mardi_gras = require('../images/mardi gras_thumb.png').default;
var ice_cream = require('../images/ice cream_thumb.png').default;
var pretty_girl = require('../images/pretty girl_thumb.png').default;
var witches = require('../images/witches den_thumb.png').default;
var cloud = require('../images/riding on a cloud_thumb.png').default;
var marianne = require('../images/marianne_thumb.png').default;
var princesses = require('../images/princesses_thumb.png').default;

function MainPage() {
  const imageList= [nightmare, party, mardi_gras, ice_cream, pretty_girl, witches, cloud, marianne, princesses];
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openCarousel = (index) => {
    setIsCarouselOpen(true);
    setSelectedImage(index);
  };

    return (
      <PageContainer>
        <Title>Riding on a cloud</Title>
        <Subtitle>by Zacharoula</Subtitle>
        <Menu />
        <ImageContainer>
          <Images>
          {imageList.map((image,index) =>
            <img key={index} alt="" src={imageList[index]} onClick={() => {openCarousel(index)}} />
          )}
          </Images>
          {isCarouselOpen && <GalleryCarousel isCarouselOpen={isCarouselOpen} setIsCarouselOpen={setIsCarouselOpen} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </ImageContainer>
        

      </PageContainer>
    );
  }
  
  export default MainPage;