import React from "react";

export class Nav extends React.PureComponent
{
     constructor(){
         super();
     }
     render(){
        return(
            <nav className="d-flex justify-content-between p-2 border border-1">
                <div className="fs-3 fw-bold">{this.props.title}</div>
                <div>
                    {
                        this.props.navItems.map(item=><span className="mx-3" key={item}>{item}</span>)
                    }
                </div>
                <div>
                    <span className="bi bi-person"></span>
                    <span className="bi bi-cart mx-2"></span>
                </div>
            </nav>
        )
     }
}