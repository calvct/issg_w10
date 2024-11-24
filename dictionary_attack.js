const axios = require('axios');

const crypto = require('crypto');

const url = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/500-worst-passwords.txt';
// The target MD5 hash (replace with the hash you want to reverse)
const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';  // Replace with your target MD5 hash

// Function to generate MD5 hash of a string
function md5Hash(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

axios.get(url).then(response =>{
const words = response.data.split('\n');


for (const word of words) {
    const cleanWord = word.trim();  

    if (cleanWord && md5Hash(cleanWord) === targetHash) {
        console.log(`Password found: ${cleanWord}`);
        return;  
    }
}

console.log('Password not found in the dictionary.');
});


