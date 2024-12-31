const fs = require('fs');

// TODO: Write the message "Hello, World!" to the file "output.txt"
fs.writeFile('./output.txt', 'Hello, World!', (err) => {
    if(err){
        throw new Error('Error occured while writing in file');
        console.log(err);
        return;
    }
    console.log('Written in the file successfully');
})
