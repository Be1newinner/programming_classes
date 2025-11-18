// Encryption and Decryption
const crypto = require("crypto");

// NOTE: If 'key' is a user-provided password string, a Key Derivation Function (KDF) like PBKDF2 or scrypt
// MUST be used to derive a secure cryptographic key from the password and a unique salt.
// Direct use of a password string as a key is highly insecure.

function encryptData(text, key) {
  //   Step 1. Iv create (12 bytes for AES-GCM)
  const iv = crypto.randomBytes(12);

  //   step 2. Create a cipher
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  //   step 3. add the actual text
  let enc = cipher.update(text, "utf8", "base64");

  //   step 4. execute the cipher
  enc += cipher.final("base64");

  //   step 5. return enc, iv (in hex), and tag (in hex)
  return [enc, iv.toString("hex"), cipher.getAuthTag().toString("hex")];
}

// Example usage (uncomment and replace "YOUR_KEY_BUFFER" with an actual 32-byte key buffer):
// const encryptionKey = crypto.randomBytes(32); // For a random key, or derive from password using a KDF
// console.log("Encryption Key (hex):", encryptionKey.toString("hex"));
// const encryptedResult = encryptData("This is a secret message.", encryptionKey);
// console.log("Encrypted Data:", encryptedResult);

// Remember to store/transmit iv, authTag, and the actual encrypted data (enc) along with the key to decrypt.

const decrypt = (enc, iv, authTag, key) => {
  //  step 1. create Decipher
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);

  //   step 2. add the tag
  decipher.setAuthTag(authTag);

  //   step 3. add the encrypted text
  let str = decipher.update(enc, "base64", "utf8");

  //   step 4. execute the decypher
  str += decipher.final("utf8");
  return str;
};

const encBytes = Buffer.from("mYQs4FG+Gx97", "base64");
const ivBytes = Buffer.from("f6c61ea1f44bf53292ec765b", "hex");
const authTagBytes = Buffer.from("22b709db2ec42a5472ffc547f0320c9d", "hex");
const keyInBytes = Buffer.from(
  "6a7d0ea27768a1b3b2ef027050c818130a7e1c5f636a10d82ce67fcc84dbe3d5",
  "hex"
);

console.log(encBytes);
console.log(ivBytes);
console.log(authTagBytes);
console.log(keyInBytes);

console.log(decrypt(encBytes, ivBytes, authTagBytes, keyInBytes));
