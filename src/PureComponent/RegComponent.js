import React, { Component } from "react";

class RegComponent extends Component {
  render() {
    console.log("************Reg Comp render");
    return <div>Regular Components {this.props.name}</div>;
  }
}

export default RegComponent;


/* a regular components does not implement
 the shouldComponentUpdate methode . it
  always returns true by default*/

/*A pure component on the other hand implements
 shouldComponentUpdare with a shallow props and state comparaison

 SC of prevState with currentState
                              Differnece   ===> Re-render component
 SC of prevState with currentProps
 */   


 /* 
 Shallow Cmparison (SC):

 Primitive Types => a(SC)b return true if a and b have the same
                    value and are of the same type
                    exmple: String "amine"(SC) String "amine" return true

 Complex Type=> a(SC)b returns true if a and b reference the 
                exact same object. 
                exmple: var a=[1,2,3];
                        var b=[1,2,3];
                        var c=a;
                var ab_eq = (a === b); return false
                var ac_eq = (a === c); return true
 
 */