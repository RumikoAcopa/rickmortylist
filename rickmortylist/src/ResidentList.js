// import React, { Component } from "react";

// class ResidentList extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount() {

//     fetch('https://rickandmortyapi.com/', {

//       method: 'POST',

//       headers: {
//         'Content-Type': 'application/json'
//       },

//       body: JSON.stringify({
//         name: "Resident 1"
//       })

//         .then((res => {
//           res.json()
//         }))
//         .then(data => console.log(data))
    
//     })
    
//     render() { 
//       return (
//         <div></div>
//       )
//     };
  
//   };

// export default ResidentList;