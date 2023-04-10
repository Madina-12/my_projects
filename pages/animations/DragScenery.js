// from card 

import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { useRef } from "react";
import styles from "./DragScenery.module.css";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 6;  // Here istead of 6, if we want lower numbers then card will tilt more, and if large numbers, then card will tilt less.
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 6;

const DragScenery = () => {

  const target = useRef(null);   
  const [{ x, y, rotateX, rotateY,rotateZ, zoom, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    config: { mass: 5, tension: 100, friction: 20 },
    
  }));

  useGesture(
    {
      onDrag: ({ down, active, movement: [x, y] }) =>
        api({ x:down?x:0, y:down?y:0, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.2 ,}),

      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),  // calcX function is defined above. if we want specific tilt, then instead of px, x.get(),etc we can give specific numbers.
          rotateY: calcY(px, x.get()),
          scale: 1.2,
        }),

      onHover: ({ hovering }) =>  // this is used to scale back to 1, when we stop hovering the scenery.
        !hovering &&
        api({rotateX: 0,rotateY: 0,scale: 1,}),
    },

    { target, eventOptions: { passive: false }, } , // target is by useref, this will be reference of animation, and when we will provide it to animation.div below, then this animation will be applied to that animation.div
    
  );

  return (
    <div className={styles.container}>
      <animated.div
      className={styles.card}
      ref={target}
      style={{       
        transform: "perspective(60rem)",
          x,
          y,
          scale,
          rotateX,
          rotateY,
          bounds:{top:10, bottom:100, left:100, right:100}
      }}
    >
     
    </animated.div>
    <div className={styles.actions}>move it, hover it, drag it </div>
    <div className={styles.developer}>Developed by <b>MUHAMMAD UMAR</b></div>
    </div>
  );
};

export default DragScenery;

