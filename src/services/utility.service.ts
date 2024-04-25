import jwt from 'jsonwebtoken';


export const parseJwt = async (token) => {
    // token = jwt.verify(token, jwtSecretKey);
    token = token.substring(7);
    token = jwt.decode(token);

    return token;
};
