'use client'
import "./wrapper.css"

const WrapperComponent = ({children, setLoading} : {children?: React.ReactNode, setLoading: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return(
        <div>
            <div className="margenesColor">
                 {children}
            </div>
        </div>
    )
};


export default WrapperComponent;