export const postApiclient = (() => {
    const URL = 'http://localhost:8080';

    const myHeader = new Headers();

    myHeader.set('Content-Type', 'application/json');
    myHeader.set('Access-Control-Allow-Origin', '*');

    return {
        getAllPost: async () => {

            const response = await fetch(`${URL}/v1/post/`, {
                method: 'GET',
                headers: myHeader,
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },

        postPost: async postDTO => {

            const response = await fetch(`${URL}/v1/post`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(postDTO),
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },
    };
})();
