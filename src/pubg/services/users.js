const repo = require('../repositories/users')

module.exports.userDetails = async (id) => {
    const user = await repo.getById(id);
    const source = user._source;
    return source;
}

module.exports.userUpdate = async (id, data) => {
    const user = await repo.getById(id);

    user._source.email = "diogomainardes@gmail.com";
    user._source.password = "123";

    const updated = await repo.updateUser(user);
    return updated;
}

module.exports.userInsert = async (user) => {

    return await repo.insert(user);

}

