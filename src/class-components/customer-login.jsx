import React from "react";

export class CustomerLogin extends React.Component
{
      constructor(){
          super();
          this.state = {
              title: "Class Components",
              msg: ""
          }
          this.handleInsertClick = this.handleInsertClick.bind(this);
      }
      componentDidMount(){
         this.setState({title: "Select Category"})
      }

      handleInsertClick(e){
         this.setState({msg: `${e.target.value} Clicked`});
      }
      handleDeleteClick(e){
         this.setState({msg: `${e.target.value} Clicked`});
      }

      render(){
         return(
            <div className="container-fluid p-4">
                <h2>{this.state.title}</h2>
                <button onClick={this.handleInsertClick} value='Insert'>Insert</button>
                <button onClick={this.handleDeleteClick.bind(this)} value='Delete'>Delete</button>
                <p>{this.state.msg}</p>
            </div>
         )
      }
}