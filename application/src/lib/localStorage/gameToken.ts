export const getToken = () => {
    const token = localStorage.getItem('gameToken');
    if (!token) {
        throw new Error('No token found');
    }
    return token;
};

export const setToken = (token: string) => {
    localStorage.setItem('gameToken', token);
};

export const deleteToken = () => {
    localStorage.removeItem('gameToken');
};
