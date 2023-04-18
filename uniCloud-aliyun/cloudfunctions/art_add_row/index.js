const db = uniCloud.database();
exports.main = async (event, context) => {
    let { detail } = event;
    return await db.collection("article").add({
        ...detail,
        posttime: Date.now(),
    });
};
