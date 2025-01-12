import { useEffect, useRef, useState} from "react"
import Context from "./ContextInit"
import { useLocation } from "react-router"


const ContextState = (props) => {
    const loc = useLocation();
    const ref = useRef(null)
    const textareaRef = useRef(null)
    const navRef = useRef(null)
    const [NavFlag, setNavFlag] = useState(false);
    const [DMode, setDMode] = useState(false)
    const decideNavOpenClose = () => {
        if (ref.current) {
            ref.current.style.transition = "none";
            if (window.innerWidth < 360) {
                ref.current.style.transform = "translateY(-8rem)"
                if (localStorage.getItem("mode")==="light") {
                    ref.current.style.boxShadow = "inset 0 4px 6px rgba(0, 0, 0, 0.2)"
                }
                else{
                    ref.current.style.boxShadow = "inset 0 4px 6px rgba(255, 255, 255, 0.2)"
                }
            }
            else {
                ref.current.style.transform = "translateY(0rem)"
                ref.current.style.boxShadow = "none"
            }
        }
    }
    window.addEventListener('resize', () => {
        decideNavOpenClose();
    })
    useEffect(() => {
        if (window.innerWidth < 360 && ref.current) {
            if (NavFlag) {
                ref.current.style.transition = "transform 0.2s";
                ref.current.style.transform = "translateY(0rem)"
                ref.current.style.boxShadow = "none"
            }
            else {
                ref.current.style.transition = "transform 0.2s";
                ref.current.style.transform = "translateY(-8rem)"
                if (localStorage.getItem("mode")==="light") {
                    ref.current.style.boxShadow = "inset 0 4px 6px rgba(0, 0, 0, 0.2)"
                }
                else{
                    ref.current.style.boxShadow = "inset 0 4px 6px rgba(255, 255, 255, 0.2)"
                }
            }
        }
    }, [NavFlag])
    useEffect(() => {
        if (localStorage.getItem("mode") === "dark") {
            document.body.style.background = "black"
            if (ref.current) {
                ref.current.style.background = "black"
                ref.current.style.color = "white"
            }
            if (navRef.current) {
                navRef.current.style.background = "black"
                navRef.current.style.color = "white"
                navRef.current.style.boxShadow = "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)";
            }
            if (textareaRef.current) {
                textareaRef.current.style.background = "transparent";
            }
        }
        else {
            document.body.style.background = "white"
            if (ref.current) {
                ref.current.style.background = "white"
                ref.current.style.color = "black"
            }
            if (navRef.current) {
                navRef.current.style.background = "white"
                navRef.current.style.color = "black"
                navRef.current.style.boxShadow = "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.1)";
            }
            if (textareaRef.current) {
                textareaRef.current.style.background = "white";
            }
        }
    }, [loc.pathname,DMode])


    return (
        <Context.Provider value={{ ref, NavFlag, setNavFlag, DMode, setDMode, navRef, textareaRef }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState