import inquirer from "inquirer";

inquirer.prompt([
    {
        name: 'p1', message: 'Qual a primeira nota?',
        
    }, 
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    },
]).then(response => {
    
    if(isNaN(response.p1) || isNaN(response.p2)) {
        console.log('insira numeros validos');
    }
    
    else {
        const media = (parseInt(response.p1) + parseInt(response.p2)) /2;
        console.log(media);
    }
})
.catch(err => {
    console.log(err);
})