import { defineStore } from "pinia";
const User = require("./User");

export const useUsersStore = defineStore("usersStore", {
    state: () => ({
        users: [{ email: "teste1@teste1" }],
    }),

    actions: {
        /*async*/ createUser(user) {
            console.log("Criando conta!");
            return this.users.push(user);

            // const res = await fetch("http://localhost:3001/users", {
            //     method: "POST",
            //     body: JSON.stringify(user),
            //     headers: { "Content-Type": "application/json" },
            // });
            // if (res.error) {
            //     console.log(res.error);
            // }
        },
    },
});
