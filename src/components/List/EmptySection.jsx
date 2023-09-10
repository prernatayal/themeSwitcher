import React from "react"
const EmptySection = ({handleClick,heading})=>{
    return(
        <React.Fragment>
         <div className="emptySectionWrapper" onClick={handleClick}>
            <div className="sectionRow">
                {/* <PlusIcon /> */}
                <div className={"textWrapper"}>
                    <h3 className={"textHeading"}>{heading}</h3>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default EmptySection