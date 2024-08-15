import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Card from "../Card/Card";

const Form = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()


    if(name.trim().length<3){
      setError(true);
    }else if (color.length < 6) {
      setError(true);
    }else{
      setError(false)
    }
    
  };

  return (
    <>
      <h2>Elige un color</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingresa tu color favorito"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button>ENVIAR</button>
        </form>
        {
          error ? (<Card name={name} color={color}/>): (<ErrorMessage/>)
        }
      </div>
    </>
  );
};

export default Form;
