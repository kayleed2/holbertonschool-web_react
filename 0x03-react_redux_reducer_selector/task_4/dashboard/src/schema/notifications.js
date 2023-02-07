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

export function getAllNotificationsByUser(userId) {
    const results = Object.values(normData.entities.notifications).filter((user) => user.author == userId)
    .map((user) => normData.entities.messages[user.context]);
    return results;
}

export const notificationNormalizer = (data) => normalize(data, [notification]);

console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'));
