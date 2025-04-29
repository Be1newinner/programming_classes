const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, 10);
    return hash;
}

async function verifyPassword(plainPassword, hashedPassword) {
    const hash = await bcrypt.compare(plainPassword, hashedPassword);
    return hash;
}

module.exports = { hashPassword, verifyPassword }