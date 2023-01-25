import { normalize, schema } from 'normalizr';
import data from '../notifications.json' assert { type: 'json' };

const user = new schema.Entity('users')

const message = new schema.Entity('messages', {}, {
    idAttribute: "guid"
})

const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
})

function getAllNotificationsByUser(userId) {
    const results = [];
    data.forEach((user) => {
        if (user.author.id === userId) {
            results.push(user["context"]);
        }
    })
    return results;
}

export const normData = normalize(data, [notification]);
