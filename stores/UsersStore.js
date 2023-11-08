import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
    state: () => ({
        users: [],
    }),

    actions: {
        async createUser(user) {
            this.users.push(user);
            await fetch("http://localhost:3001/users", {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json" },
            });
        },
    },
});
