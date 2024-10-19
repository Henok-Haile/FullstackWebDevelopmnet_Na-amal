const users = [
    {
        name: "John",
        yearJoined: 2017,
    },
    {
        name: "Rachael",
        yearJoined: 2020,
    },
    {
        name: "Ben",
        yearJoined: 2016,
    },
];

// const summaries = users.map((user, i) => {
//     return `[${i + 1}] ${user.name} joined in ${user.yearJoined}`
// });

// users.forEach(user => {
//     summaries.push(`${user.name} joined in ${user.yearJoined}`);
// });

// console.log(summaries);

users.forEach(user => {
    alert(JSON.stringify(user));
});