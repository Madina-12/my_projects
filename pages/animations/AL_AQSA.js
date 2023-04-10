import {useState} from 'react'
import {useSpring, animated} from '@react-spring/web'
import styles from './AL_AQSA.module.css'
import Image from 'next/image'

const AL_AQSA = () => {
    const [flipped, set] = useState(false)
    const {opacity, transform} = useSpring({
        opacity:flipped?0:1,
        transform:`perspective(48rem) rotateY(${flipped?180:360}deg)`,
        config:{mass:2, tension: 200, friction:19}
    })
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.pics_wrapper} onClick={()=>set(flipped=>!flipped)}>
          <animated.div className={styles.pic} style={{opacity,transform}} >
            <Image src='/creations/AL_AQSA.jpg' alt='' fill priority style={{objectFit:'cover'}} />
          </animated.div>
          <animated.div className={`${styles.pic} ${styles.pic2}`} style={{opacity:opacity.to(o=>1-o), transform, rotateY:'180deg'}}>
            <Image src='/creations/Al_Quba.jpg'  alt='' fill style={{objectFit:'cover'}} />
          </animated.div>        
            
        </div>
        </div>
    </div>
  )
}

export default AL_AQSA