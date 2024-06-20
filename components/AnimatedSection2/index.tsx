import { useSpring, animated } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import { AnimatedProps } from "../../shared/interface"

 

const AnimatedSection2:React.FC<AnimatedProps>=({children})=>{
 const {ref,inView}=useInView({

threshold:0.1

 })


 const fadefromBottom=useSpring({
    loop: { reverse: true},
    from: { y: 10 },
    to: { y: 0 },
    config: { duration: 2000},
 })
 
return (
    <animated.div ref={ref} style={fadefromBottom}>

        {children}
    </animated.div>
)


}

export default AnimatedSection2