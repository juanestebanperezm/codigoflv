import jwt from 'jsonwebtoken';

const generateJWT = async (uid) => {
    try {
        return jwt.sign({uid}, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
    } catch (error) {
        console.log(error);
    }
}

export {
    generateJWT
}