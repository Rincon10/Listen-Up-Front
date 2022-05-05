export const userApiclient = (() => {
    const URL = 'https://listenup-userapi.herokuapp.com';
    /* cosnt URL = heroku*/

    const myHeader = new Headers();

    myHeader.set('Content-Type', 'application/json');
    myHeader.set('Access-Control-Allow-Origin', '*');

    return {
        getUserByEmail: async (email, token) => {
            const authHeader = new Headers({
                Authorization: `Bearer ${token}`,
                Accept: '*/*',
            });

            const response = await fetch(`${URL}/user/email/${email}`, {
                method: 'GET',
                mode: 'cors',
                headers: authHeader,
                redirect: 'follow',
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },

        getToken: async loginDTO => {
            const response = await fetch(`${URL}/auth`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(loginDTO),
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },

        postUser: async userDTO => {
            delete userDTO.password2;

            const response = await fetch(`${URL}/user`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(userDTO),
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },
    };
})();
