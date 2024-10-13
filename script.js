var fields = document.querySelectorAll('[data-js="field"]');

fields.forEach(function(field){
  field.addEventListener('change',handleChange,false);
});

var fieldValues = {
  ddd1:null,
  ddd2:null,
  tempo:null,
  plano:null
}

function handleChange(e){
  var fieldID = e.target.dataset.id;
  var fieldValue = +e.target.value;
  fieldValues[fieldID] = fieldValue;
  
  //console.log(calcular(fieldValues));
  
  var result = calcular(fieldValues);
  console.log(result);
  
  //chamando a função render
  render(result);
  
}
  function calcular(fieldValues){
        
        var total = {comPlano:0,
                     semPlano:0}
        console.log(total);
    
        if ((ddd1 !== null) && (ddd2 !== null) && (tempo !== null)) {
         total.comPlano = 2;
         console.log(fieldValues);
        } 
        return total;
    }

  function render(total){
    document.querySelector("#cplano").textContent = total.comPlano;
    document.querySelector("#splano").textContent = total.semPlano;
  }
