const cripto = require('brseclabcriptojs');

var text = 'hello world';
const key = Uint8Array.from(Buffer.from("09d4d25caa46a1e355c68470231b079c6e92ade95aa6e560b11dc5c18fbe6eba", 'hex'));
var encrypted = cripto.encrypt_gcm(text, key);
var decrypted = cripto.decrypt_gcm(encrypted, key);

console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);