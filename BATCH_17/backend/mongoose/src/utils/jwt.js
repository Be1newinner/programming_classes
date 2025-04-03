const jwt = require("jsonwebtoken");

async function generateToken({
    id,
    email,
    role,
    expiry
}) {
    const Secret = process.env.SECRET_TOKEN;
    if (!Secret) throw new Error("JWT SECRET NOT FOUND!")

    const token = await jwt.sign({
        id,
        email,
        role,
    }, Secret, { expiresIn: expiry });

    return token;
}

async function generateAccessToken({ id,
    email,
    role }) {
    return await generateToken({
        id,
        email,
        role,
        expiry: 60 * 60 * 24 // "1d", "24h"
    })
}

async function generateRefreshToken({ id,
    email,
    role }) {
    return await generateToken({
        id,
        email,
        role,
        expiry: 60 * 60 * 24 * 30 // "1d", "24h"
    })
}

async function generateLoginTokens({ id,
    email,
    role }) {
    return {
        accessToken: await generateAccessToken({
            id,
            email,
            role
        }),
        refreshToken: await generateRefreshToken({
            id,
            email,
            role
        }),
    }
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateLoginTokens
}