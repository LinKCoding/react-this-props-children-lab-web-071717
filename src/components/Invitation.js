import React from 'react';

class Invitation extends React.Component {
  // title = () =>{
  //   return <h1>'You\'ve been invited!'</h1>
  // }

  render(){
    return(
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Invitation;
