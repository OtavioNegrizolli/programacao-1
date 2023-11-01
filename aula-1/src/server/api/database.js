
const userTable = new Map();

userTable.set('user@email.com', {
    // pwd: sopa
    pwd: '$2b$10$M/lYcbwsq3y3QW0qgTM/Bu3E4GRIJ1qE2Lgtlhpxf7RK3CHsG8IVW'
});


export default class Db {
    static getUser(login) {
        const user = userTable.get(login);
        if ( user != undefined)
            return {
                ...user,
                login: login
            };
        return null;
    }

    static addUser(user) {
        const { pwd, name } = user;
        userTable.set(name, { pwd });
    }
}
