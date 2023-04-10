import { useState } from "react";
import {useSpring, animated} from '@react-spring/web'
import styles from './DevelopedBy.module.css'

const DevelopedBy = () => {

  const [state, setState] = useState(true)
  const {x} = useSpring({
    from: {x:0},
    x:state?1:0,
    config:{duration: 1000}
  })


  return (
    <animated.div onClick={()=>setState(state=>!state)} className={styles.container}
        style={{
          backgroundImage:x.to({range:state?[0,0.8,1]:[0,0.2,1],output:['linear-gradient(225deg, #784BA0 50%,  #2B86C5 100%)',state?'linear-gradient(225deg, #784BA0 50%,  #2B86C5 100%)':'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)','linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)']})
      }}
    >
      <animated.div 
        style={{
                rotateX:x.to({range:[0,0.4,0.7,1], output:[0,0,90,0]}),
                color:x.to({range:[0,1],output:['aqua','rgb(115, 9, 129)']})
      }}
        className={styles.developed}
      >
        Developed by
      </animated.div>
      <animated.div 
        style={{scale:x.to({range:[0,0.2,0.4,0.6,0.8,1],output:[1,0.7,1.3,0.7,1.3,1]}),
                color:x.to({range:[0,1],output:['white','green']}),
      }}
        className={styles.developer}
      >
        MUHAMMAD UMAR
      </animated.div>
      
    </animated.div>
  )
}

export default DevelopedBy