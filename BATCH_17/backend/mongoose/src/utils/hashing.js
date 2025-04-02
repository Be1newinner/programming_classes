const argon2 = require('argon2');

async function hashPassword(text) {
    return await argon2.hash(text);
}

async function verifyPassword(password, hashedpassword) {
    return await argon2.verify(hashedpassword, password)
}

function TextJoiner(text, limit = 10) {
    let splitted = text.toLowerCase().replaceAll(" ", "").split("")
    let nums = splitted.map(e => String(e.charCodeAt()))
    let length = nums.join("").length;
    if (length < limit) throw new Error("text is too short!")

    while (length > limit) {
        let i = 0
        for (; i < nums.length; i++) {
            if (nums[i].length > 1) {
                nums[i] = String(nums[i].split("").reduce((t, e) => t + Number(e), 0));
                break;
            }
        }
        if (i === nums.length) {
            nums[nums.length - 2] += nums.pop()
        }
        length = nums.join("").length;
    }

    return nums.join("");
}




module.exports = { TextJoiner, hashPassword, verifyPassword }