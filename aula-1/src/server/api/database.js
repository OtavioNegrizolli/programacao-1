import { } from ''

const userTable = new Map();

userTable.set('otavio', {
    pwd: '$2b$10$WDLTHuh5xBWV2AQz7zC8aOZ.V7wzz/f.YfVdwuLhvxnaF..ALJU7y'
});


export default class Db {
    static getUser(userName) {
        const user = userTable.get(userName);
        if ( user != undefined)
            return {
                ...user,
                name: userName
            };
        return null;
    }

    static addUser(user) {
        const { pwd, name } = user;
        userTable.set(name, { pwd });
    }
}
