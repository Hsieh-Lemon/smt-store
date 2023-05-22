import {motion} from 'framer-motion'

function Scroll(){
    return(
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}
        >
            <Box/>
            <Box/>
            <Box/>
            <Box/>
        </div>
    )
}

function Box(){
    return(
        <motion.div
            style={{
                margin:"200px 0px",
                width:"100px",
                height:"100px",
                background:"blue"
            }}
            initial={{opacity:0,x:500}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
        >

        </motion.div>
    )
}

export default Scroll;