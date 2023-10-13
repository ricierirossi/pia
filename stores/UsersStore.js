import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
    state: () => ({
        users: [],
    }),

    actions: {
        async createUser(user) {
            this.users.push(user);

            const res = await fetch("http://localhost:3000/users/", {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json" },
            });

            if (res.error) {
                console.log(res.error);
            }
        },
    },
});
