import { motion} from 'framer-motion';


const FadeInDiv = ({children}) => {
   return (
         <motion.div
         initial={{opacity:0,x:-500}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:2}}
         viewport={{once:true}}
         >
            {children}
         </motion.div>
   );
}

export default FadeInDiv;