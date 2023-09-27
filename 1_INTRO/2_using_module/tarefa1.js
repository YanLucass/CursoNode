const fs = require('fs');
const path = require('path');


function writeTxt(directory, content) { 
    fs.writeFile(directory, content, (err) => {
        if(err) {
            console.log('n consegui escrever');
        }
    })
}

// função para percorrer diretorios

const directoryTravel = (directoryAlvo, extension, content) => {
    fs.readdir(directoryAlvo, (err, files) => {

        if(err) {
            console.log(err);
        }

        files.forEach(file => {
            // criar caminho completo para o file
            const fullPath = path.join(directoryAlvo, file);
            // obter informações
          fs.stat(fullPath, (err, stats)=> {

                if(err) {
                    console.log(err);
                }
                   // se for arquivo o file tiver a extensão .txt 
                if(stats.isFile() && path.extname(file) === extension)  {
                    writeTxt(fullPath, content)

                } else if(stats.isDirectory()) {
                    directoryTravel(fullPath, extension, content);
                }

            });
        });
    });
}

const directoryAlvo = 'C:\\Users\\yanlu\\Music\\Curso Node\\1_INTRO\\2_using_module';
const extension = '.txt';
const content = 'Consegui';;
directoryTravel(directoryAlvo, extension, content);