const bcrypt = require("bcrypt");

const hashPass = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if(result) {
        console.log("logged in")
    } else {
        console.log("incorrect")
    }
}

//hashPass("monkey");

login('monkey!', '$2b$12$biTrMKNCVPXQ0LzSAipqo.QggmaTF8dng9YVg0FpWvbNkRe9Im6TS')