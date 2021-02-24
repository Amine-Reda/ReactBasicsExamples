import React from "react";

function Columns() {
  return (
    <React.Fragment>
      <td>name</td>
      <td>age</td>
    </React.Fragment>
  );
}

export default Columns;

/*<td> cannot appear as a child of <div>*/
/* you can replace <React.Fragment>;<React.Fragment/> by <>:</> 
but you cant pass key attribut;
exmple

const items=[];

map.items((item)=>(
    <React.Fragment  Key={item.id}>

       <p>{item.name}<p/>
    
    <React.Fragment/>
))

*/
