

const validator = {
    isValid (numerosIngresados){
        numerosIngresados.split('').map(Number);
        //console.log(numerosIngresados);
        let sum=0;
        let validCard=false;
        let numerosImpares=[];
        let numerosPares=[];
        let arregloFinal=undefined;

       if (numerosIngresados.length === 16 || numerosIngresados.length === 10){
           for(let i=numerosIngresados.length - 1; i>=0; i--){
               if(i % 2 !== 0){
                   numerosImpares.push(numerosIngresados[i]);
               }else{
                   numerosPares.push((numerosIngresados[i]*2).toString());
               }
            }
        }
        numerosPares=numerosPares.join('').split('').map(Number);
        arregloFinal=numerosPares.concat(numerosImpares);

            for(let j=0; j<arregloFinal.length; j++){
            sum+=parseInt(arregloFinal[j], 10);
            }
        
        if (sum % 10 === 0){
            console.log(sum);
            validCard=true;
            //console.log(validCard);
        }
        return validCard;
    },
    
    maskify(numerosIngresados){
        return numerosIngresados.split('').map((Number, idx) => idx < numerosIngresados.length - 4 ? '#':Number).join('');
    }
};

export default validator;