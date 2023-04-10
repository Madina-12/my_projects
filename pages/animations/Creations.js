import {
  useSpring,
  animated,
  useTransition,
  useSpringRef,
} from "@react-spring/web";
import React from "react";
import Image from 'next/image'
import { useState, useLayoutEffect } from "react";
import styles from './Creations.module.css'
const lineBreak = React.createElement('br');
const RAZA = [
  ['Estimated per year production of food in kg is about' ,'4 million million'],
  ['Estimated number of trees on Earth is about' ,'3 million million'],
  ['Estimated number of animals on Earth is about' ,'20 billion billion'],
  ['Estimated number of mountains on Earth is about' ,'1.187 million'],
  ['Estimated gallons of water on Earth is about' ,'326 billion billion']
]

const IMAGES = [
        '/creations/FOODS.jpg',
        '/creations/FORESTS.jpg',
        '/creations/GOATS.jpg',
        '/creations/MOUNTAIN.jpg',
        '/creations/UNDERWATER.jpg'      ]


const Creations = () => {

    const [activeIndex, setActiveIndex] = useState(0)
  const springApi = useSpringRef();

  const transitions = useTransition(activeIndex, {
    from: { clipPath: "polygon(100% 0, 100% 100%, 100% 100%,100% 0%)", opacity:0 },
    enter: { clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",opacity:1 },
    leave: { clipPath: "polygon(0% 0%, 0% 100%, 0% 100%,0% 0%)",opacity:0 },
    config: { duration: 1000 },
    delay: 3000,
    exitBeforeEnter: true,
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length-1?0:activeIndex+1);
      }
    },

    ref: springApi,
  });
  useLayoutEffect(()=>{
    springApi.start()
  },[activeIndex])

  return (<div className={styles.container}>
    <div className={styles.Creator}>
      <div className={styles.AL_QURAN}>اَللہُ خَاْلِقُ کُلِّ شَیٔ وَھُوَ الْوَاحِدُ الْقََھَّار</div>
      <div className={styles.Translation}>ALLAH IS THE CREATOR OF EVERY THING <br /> AND HE IS THE ONE,<strong> THE SUPREME </strong></div>
    </div>
    <div className={styles.wrapper_outer}>
              {transitions((springs, item)=>(
                <animated.div className={styles.statistics}>{RAZA[item][0]}{lineBreak}{RAZA[item][1]}</animated.div>
              ))}
             {transitions((springs, item) => (
               <animated.div className={styles.img__container} style={springs}>
             <div className={styles.wrapper}>
              <Image src={IMAGES[item]} fill style={{objectFit:'cover'}} sizes="(min-width: 678px) 60vw, 90vw" priority alt='' />
              </div>
           </animated.div>
         ))}
    </div>
  </div>)
};

export default Creations;
