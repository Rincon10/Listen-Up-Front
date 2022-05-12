export const forumApiClient = (() => {
    const URL = 'https://listenup-forumapi.herokuapp.com';

    const myHeader = new Headers();

    myHeader.set('Content-Type', 'application/json');

    myHeader.set('Access-Control-Allow-Origin', '*');

    return {
        getAllForums: async () => {
            const response = await fetch(`${URL}/forum`, {
                method: 'GET',
                headers: myHeader,
            });

            if (!response.ok) throw new Error('The response failed');

            return response.json();
        },

        postForum: async forumDTO => {
            const response = await fetch(`${URL}/forum`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(forumDTO),
            });

            if (!response.ok) throw new Error('The response failed');

            return response.json();
        },

        getForumById: async idForum => {
            const response = await fetch(`${URL}/forum/${idForum}`, {
                method: 'GET',
                headers: myHeader,
            });
            if (!response.ok) throw new Error('The response failed');

            return response.json();
        },
    };
})();
