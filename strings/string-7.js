// String encoding and decoding 
//  1. URL Encoding/Decoding

let message = "Today & tomorrow will be a good day!"

// Encoded for url
const encoded = encodeURIComponent(message);
console.log("Encoded : " , encoded);

// Decode it back
const decoded = decodeURIComponent(encoded);
console.log("Decoded : " , decoded);

console.log("--------------------")
// 2. Base64 Encoding/Decoding

let password = "Secret@123";

// Encode to Base64
const b64Encoded = btoa(password);
console.log("Encoded : " , b64Encoded);

// decode it back
const b64Decoded = atob(b64Encoded);
console.log("Decoded : " , b64Decoded);