import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
    state: () => ({
        users: [
            { id: 1, email: "user1@user", password: "12345678" },
            { id: 2, email: "user2@user", password: "87654321" },
        ],
    }),
    actions: {
        addUser(newUser) {
            this.users.push(newUser);
        },
    },
    getters: {
        countUsers: (state) => {
            return state.users.length;
        },
    },
});
