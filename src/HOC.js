import React, { Component } from 'react';


const HOC = (PassedComponent)=>{
    return class Test extends Component{
        render(){
            var user  = {
                name:"testuser",
                claims:[{},{}]
            }
            return(
                <div>
                    <div> this is from Higher order Component</div>
                    <PassedComponent {...this.props} {...user}/>
                </div>
            )
        }
    }
}

export default HOC;