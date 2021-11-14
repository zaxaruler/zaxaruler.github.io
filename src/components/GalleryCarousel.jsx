// import Carousel from 'nuka-carousel';
import styled ,{css} from 'styled-components';
import Modal from 'react-modal';
import { CaretRight, CaretLeft } from "phosphor-react";
import { useRef, useEffect } from 'react';

var nightmare = require('../images/nightmare.jpg').default;
var party = require('../images/party.jpg').default;
var mardi_gras = require('../images/mardi gras.png').default;
var ice_cream = require('../images/ice cream.jpg').default;
var pretty_girl = require('../images/pretty girl.jpg').default;
var witches = require('../images/witches den.png').default;
var cloud = require('../images/riding on a cloud.jpg').default;
var marianne = require('../images/marianne.png').default;
var princesses = require('../images/princesses.png').default;

const Carousel = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height:100%;
    img {
        max-height: 80%;
        max-width: 100%;
        object-fit: contain
    }
`;

const customStyles = {
    // overlay: {
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   backgroundColor: 'rgba(255, 255, 255, 0.75)'
    // },
    content: {
    //   position: 'absolute',
    //   top: '40px',
      left: '200px',
      right: '200px',
    //   bottom: '40px',
    //   border: '1px solid #ccc',
      background: '#161616',
      overflow: 'hidden',
    //   WebkitOverflowScrolling: 'touch',
    //   borderRadius: '4px',
    //   outline: 'none',
       padding: '40px'
    }
  };

  const ButtonWrapper = styled('div')`
    position: absolute;
    height: 100%;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
  `;

  const Button = styled('button')`
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    margin: 5px;

    &:hover{
      background-color: rgba(255, 255, 255, 0.34);
    }
  `;

  const Description = styled('div')`
    color: darkgray;
    font-family: 'Caveat', cursive;
    text-align: center;
    margin-top: 30px;
    font-size: 1.7rem;
  `;

function GalleryCarousel({isCarouselOpen, setIsCarouselOpen, selectedImage, setSelectedImage}) {

  const imageList= [{icon: nightmare, description:"It was a beautiful moonlit night. Too bad Wolfgang was having a terrible nightmare." },
  {icon: party, description: "They said that when the world would come to an end, they would all celebrate."},
  {icon: mardi_gras, description: "My father was one of many that went missing that day."},
  {icon: ice_cream, description: "Nothing better than a cold ice cream on a burning hot day!"},
  {icon: pretty_girl, description: "The party was in a few hours. She still had time to apply some finishing touches."},
  {icon: witches, description: "It was always nice to return home, after a long day."},
  {icon: cloud, description: "While riding his bicycle the world would become peaceful and quiet."},
  {icon: marianne, description: "It was at night that Marianne would become very aware of the fact that she lived inside a box... next to other boxes."},
  {icon: princesses, description: "The oldest sister went to her bed and knocked on it. It immediately sank beneath the floor, and they all climbed down through the opening, one after the other, the oldest one leading the way."}];

    const closeCarousel = () => {
        setIsCarouselOpen(false);
    } 

    const ShowNextImage = () => {
      if(selectedImage === imageList.length - 1) {
          setSelectedImage(0);
      }
      else {
          setSelectedImage(selectedImage + 1);
      } 
    }

    const ShowPreviousImage = () => {
      if( selectedImage === 0) {
        setSelectedImage(imageList.length - 1);
      }
      else {
        setSelectedImage(selectedImage - 1);
      }
    }

    const useKey = (key, cb) => {
      const callbackRef = useRef(cb);
    
      useEffect(() => {
        callbackRef.current = cb;
      });

      useEffect(() => {
        function handle(event) {
          if (event.code === key) {
            callbackRef.current(event);
          }
        }
        document.addEventListener("keydown", handle);
        return () => document.removeEventListener("keydown", handle);
      }, [key]);
    }
    
    const handleArrowLeft =() => {
      ShowPreviousImage();
    }

    const handleArrowRight = () => {
      ShowNextImage();
    }

    useKey("ArrowLeft", handleArrowLeft);
    useKey("ArrowRight", handleArrowRight);

    return (
      <Modal
      isOpen={isCarouselOpen}
      style={customStyles}
      onRequestClose={closeCarousel}
      >
        <Carousel>
            <img alt="" src={imageList[selectedImage].icon} />
            <Description>{imageList[selectedImage].description}</Description>
          <ButtonWrapper>
              <Button onClick= {()=>{ShowPreviousImage()}}>
                <CaretLeft color="#AE2983" weight="fill" size={40} />
              </Button>
              <Button onClick= {()=>{ShowNextImage()}}>
                <CaretRight color="#AE2983" weight="fill" size={40} />
              </Button>
          </ButtonWrapper>
        </Carousel>
      </Modal>
    );
  }

  export default GalleryCarousel;