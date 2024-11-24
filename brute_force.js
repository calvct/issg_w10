const crypto = require('crypto');

// Target MD5 hash (replace this with the hash you want to reverse)
const targetHash = '5531a5834816222280f20d1ef9e95f69';  // Replace with your hash

// Function to compute MD5 hash
function md5Hash(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

// Brute-force all 4-digit combinations
function bruteForce() {
    for (let i = 0; i <= 9999; i++) {
        let pin = i.toString().padStart(4, '0'); // Ensure it is 4 digits (e.g., 0001)
        if (md5Hash(pin) === targetHash) {
            console.log(`Found the original string: ${pin}`);
            return;
        }
    }
    console.log('Could not find a match.');
}

bruteForce();
