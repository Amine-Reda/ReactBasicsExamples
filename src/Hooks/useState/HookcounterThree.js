import React, { useState } from "react";

function HookcounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />

      {/* we should add ...name on setName for chnaging the tow parametre,
          delet it and check the deference*/}

      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default HookcounterThree;
