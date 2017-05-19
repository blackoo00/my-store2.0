async function getUserInfo(ctx) {
    ctx.body = {
        name: 'Chikara Chan',
        gender: 'male',
        age: 21
    }
}

export default {getUserInfo}
