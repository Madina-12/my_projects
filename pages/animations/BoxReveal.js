// from Animating_auto

import { useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import styles from './BoxReveal.module.css'

const BoxReveal = () => {
        const [open, toggle] = useState(false)
        
        const [spring] = useSpring(()=>({
            reverse:open,
            from:{width:0,height:0},
            to:{width:313, height:155},
            config:{duration:313}
        }),[open])
        //-----------------------------

        function handleClick(){
            toggle(open => !open)
        }
  return (
    <div className={styles.main}>
        <button className={styles.button}  onClick={handleClick} >Click Me</button>
        <animated.div className={styles.container} onClick={handleClick} >
            <animated.div className={styles.fill1} style={spring}></animated.div>
            <animated.div className={styles.fill2} style={spring}></animated.div>
            <animated.div className={styles.fill3} style={spring}></animated.div>
            <animated.div className={styles.fill4} style={spring}></animated.div>
            <animated.div className={styles.number}>{spring.width.to(x=>x.toFixed(0))}</animated.div>
        </animated.div>
        <div className={styles.develop}>Developed by <b>MUHAMMAD UMAR </b></div>
    </div>

  )
}

export default BoxReveal