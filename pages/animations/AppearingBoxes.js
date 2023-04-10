import { useTransition, useChain, useSpring, animated, useSpringRef, Trail } from "@react-spring/web"
import { useState } from "react"
import styles from './AppearingBoxes.module.css'
import data from '../../c_chaining_data'

const AppearingBoxes = () => {

    const [open, set] = useState(false)
    const springRef = useSpringRef()
    const transitionRef = useSpringRef()

    const {size,...rest} = useSpring({
        ref:springRef,
        config:{tension:120, friction:12},
        from:{size:'20%' , backgroundColor:"deeppink"},
        to:{
            size:open?'80%':'20%' , 
            backgroundColor:open?'rgb(173, 211, 212)':'rgb(149, 132, 209)'
        }
    }
    )

    const transition = useTransition(open?data:[], {
        ref:transitionRef,
        trail:30,       // if want to speed up the showing of boxes, then decrease this number, and viceversa. if this number is decreased then last number in usechain is also decreased
        from:{opacity:1, scale:0},
        enter:{opacity:1, scale:1},
        leave:{opacity:0.2, scale:0}
    })

    useChain(open?[springRef, transitionRef]:[transitionRef, springRef],[0, open?0.1:0.6])

  return (
    <div className={styles.wrapper}>
        
        <animated.div onClick={()=>set(open=>!open)} style={{...rest, height:size, width:size}} className={styles.container} >
        {
            transition((style, item)=>(
                <animated.div style={{...style, background:item.css}} className={styles.item} />
            ))
        }
        </animated.div>
        <div className={styles.developer}>Developed by <b>MUHAMMAD UMAR</b></div>
    </div>
  )
}

export default AppearingBoxes