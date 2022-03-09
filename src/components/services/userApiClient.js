export const userApiclient = (() => {
    const URL = 'http://localhost:8080/user';

    const myHeader = new Headers();
    myHeader.set('Content-Type', 'application/json');
    myHeader.set('Access-Control-Allow-Origin', '*');

    return {
        getUserByEmail: async email => {
            const response = await fetch(`${URL}/nickname/${email}`, {
                method: 'GET',
                headers: myHeader,
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
            const response = await fetch(`${URL}`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(userDTO),
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },
    };
})();
