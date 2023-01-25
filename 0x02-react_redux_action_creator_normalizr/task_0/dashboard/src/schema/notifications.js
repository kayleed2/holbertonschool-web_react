const data = require('../../notifications.json');

function getAllNotificationsByUser(userId) {
    const results = [];
    data.forEach((user) => {
        if (user.author.id === userId) {
            results.push(user["context"]);
        }
    })
    return results;
}

module.exports = getAllNotificationsByUser;
