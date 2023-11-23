import React, { useState } from 'react';
import Ajouterconc from '../compenete/ajouter';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Calculatris() {
  const [estimation, setEstimation] = useState(0);
  const [concurrent, setConcurrent] = useState([]);
  const [isDivVisible, setDivVisibility] = useState(false);
  var [ref,setref]=useState(0)

  const changeValue = (e) => {
    setEstimation(e.target.value);
    document.getElementById('estimation').setAttribute('disabled', '');
    
  };
  const spr = (e) => {
    setEstimation(0);
    setConcurrent([])
    setref(0)
    document.getElementById('estimation').removeAttribute('disabled');
  };



  const handleAddConcurrent = () => {
    const newNom = document.getElementById('nom').value;
    const newPrix = document.getElementById('prix').value;
    if( newNom!='' && newPrix != ''){
      setConcurrent([...concurrent, { nom: newNom, prix: newPrix }]);

    }
    setDivVisibility(true);
  };



  function sommeDereference (){

      

        const somme=concurrent.map( a =>parseFloat( a.prix) )
        var moyenne =  somme.reduce((a,b)=>a+b,0)/somme.length
        setref (( moyenne + parseFloat(estimation)) /2)
       

  }

  return (
    <>
      <div className="container mt-4">
        <label>Estimation:</label>
        <p className='h2 text-success'>{estimation}</p>
        <input
          type="number"
          id="estimation"
          name="e"
          className="form-control"
          onBlur={changeValue}
         
        />
        <button className='btn btn-success mt-3' onClick={spr}>initialiser</button>
        <br />
        <br />

        <label>Prix Reference : </label>
        <span id="ref" className='text-danger'> {ref}</span>
        <br />
        <br />

       <div className='row container-sm'>
          <button className="btn btn-primary col col-md-3 " style={{'margin-right':'10px'}} onClick={handleAddConcurrent}>
              Ajouter Concurrent
            </button>
            <button className="btn btn-primary col col-md-3" onClick={sommeDereference}>
            calculer Reference
            </button>
       </div>

        <div className="mt-3" style={{ display: isDivVisible ? 'block' : 'none' }}>
          <label>Ajouter un candidat:</label>
          <input
            type="text"
            id="nom"
            className="form-control mb-3"
            placeholder="Entre le nom du candidat"
          />
          <input
            type="text"
            id="prix"
            className="form-control"
            placeholder="Entre le prix"
          />
        </div>

        <div className="mt-3">
          {concurrent.map((e, index) => (
            <React.Fragment key={index}>
              {e.nom} - {e.prix}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Calculatris;
