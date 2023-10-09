import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
    state: () => ({
        users: [
            { email: "user1@user", password: "Aa1!Bb2@" },
            { email: "user2@user", password: "Bb2@Aa1!" },
            { email: "user3@user", password: "Aa1!Bb2@" },
        ],
    }),
    getters: {
        count() {
            return this.users.length;
        },
        // Usando Arrow Function
        // count: (state) => {
        //     return state.users.length;
        // },
    },
    actions: {
        addUser(user) {
            this.users.push(user);
        },
    },
});
