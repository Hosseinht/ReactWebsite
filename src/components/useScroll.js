//Animation
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold:0.5});
    console.log(view)
    // Element is a reference and view shows it's true or false.
    //threshold:0.5: when it's true? when we are in halfway in.
    if(view) {
        //if our element is in view
        controls.start('show');
    }else{
        controls.start('hidden');
    }
    return [element, controls];
};