<template>
    <div class="h-auto font-lato tablet:flex">
        <div
            class="h-40 w-full bg-pia bg-cover bg-top-20 tablet:bg-left-top tablet:h-auto tablet:w-1/2"
        ></div>
        <div
            class="text-base text-zinc-800 flex flex-col items-center tablet:w-1/2"
        >
            <h1 class="text-4xl my-5 tablet:mt-14">
                Venha fazer parte do Piá!
            </h1>
            <!-- ! FIX -->
            <p>{{ usersStore.countUsers }}</p>
            <div class="flex-col pb-8">
                <form @submit.prevent="handleSubmit">
                    <div>
                        <div class="pl-5">Digite seu e-mail</div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Ex: passarinho@gmail.com"
                            required
                            v-model="email"
                            class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 mb-3 focus:outline-none"
                        />
                    </div>
                    <div>
                        <div class="pl-5">Confirme seu e-mail</div>
                        <div>
                            <input
                                id="confirmEmail"
                                type="email"
                                placeholder="Ex: passarinho@gmail.com"
                                required
                                v-model="confirmEmail"
                                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 focus:outline-none"
                            />
                            <div
                                v-if="!equalEmail"
                                class="text-xs text-red-600 px-5 font-extrabold"
                            >
                                E-mails não correspondem
                            </div>
                            <div v-else class="h-4"></div>
                        </div>
                    </div>
                    <div>
                        <div class="pl-5">Digite sua senha</div>
                        <input
                            id="password"
                            :type="typePassword"
                            placeholder="Informe sua senha"
                            minlength="8"
                            required
                            v-model="password"
                            class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 mb-3 focus:outline-none"
                        />
                        <div
                            v-if="!(typePassword == 'text')"
                            @click="showPassword()"
                            class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                        >
                            visibility_off
                        </div>
                        <div
                            v-if="typePassword == 'text'"
                            @click="showPassword()"
                            class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                        >
                            visibility
                        </div>
                        <div>
                            <div class="pl-5">Confirme sua senha</div>
                            <input
                                id="confirmPassword"
                                :type="typeConfirmPassword"
                                placeholder="Confirme sua senha"
                                minlength="8"
                                required
                                v-model="confirmPassword"
                                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 focus:outline-none"
                            />
                            <div
                                v-if="!(typeConfirmPassword == 'text')"
                                @click="showConfirmPassword()"
                                class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                            >
                                visibility_off
                            </div>
                            <div
                                v-if="typeConfirmPassword == 'text'"
                                @click="showConfirmPassword()"
                                class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                            >
                                visibility
                            </div>
                            <div
                                v-if="!equalPassword"
                                class="text-xs text-red-600 px-5 font-extrabold mb-3"
                            >
                                Senhas não correspondem
                            </div>
                            <div v-else class="h-7"></div>
                        </div>

                        <input
                            id="submit"
                            type="submit"
                            value="Crie sua conta já"
                            :disabled="!validatedForm"
                            :class="{ 'disabled-button': !validatedForm }"
                            class="text-xl text-white text-center bg-sky-600 w-96 py-3 px-20 rounded-20 hover:cursor-pointer"
                        />
                    </div>
                </form>
            </div>

            <p class="w-96 text-xs pt-2 pb-2 text-center">
                Ao se inscrever, você concorda com os
                <span class="underline">Termos de Serviço</span> e a
                <span class="underline">Política de Privacidade</span>,
                incluindo o <span class="underline">Uso de Cookies</span>.
            </p>

            <hr class="h-0.5 w-96 bg-gray-400 my-8" />

            <p>
                Já possui conta?
                <NuxtLink to="/login">
                    <span class="text-sky-600 hover:cursor-pointer pb-7"
                        >Iniciar sessão</span
                    ></NuxtLink
                >
            </p>
        </div>
    </div>
</template>

<script>
import { useUsersStore } from "~/stores/UsersStore";
import { ref } from "vue";

export default {
    setup() {
        const usersStore = useUsersStore();

        const email = ref("");
        const password = ref("");

        const handleSubmit = () => {
            usersStore.addUser({
                id: Math.floor(Math.random() * 1000000),
                email: email.value,
                password: password.value,
            });
        };

        return { handleSubmit, email, password };
    },

    data: function () {
        return {
            confirmEmail: "",
            confirmPassword: "",
            equalEmail: "",
            equalPassword: "",
            validatedForm: "",
            typePassword: "password",
            typeConfirmPassword: "password",
        };
    },
    methods: {
        validateEmail() {
            if (this.email == "" || this.confirmEmail == "") {
                this.equalEmail = false;
            } else if (this.email == this.confirmEmail) {
                this.equalEmail = true;
            } else {
                this.equalEmail = false;
            }
            this.validatedForm = this.equalEmail && this.equalPassword;
        },
        validatePassword() {
            if (this.password == "" || this.confirmPassword == "") {
                this.equalPassword = false;
            } else if (this.password == this.confirmPassword) {
                this.equalPassword = true;
            } else {
                this.equalPassword = false;
            }
            this.validatedForm = this.equalEmail && this.equalPassword;
        },
        showPassword() {
            if (this.typePassword == "password") {
                this.typePassword = "text";
            } else if (this.typePassword == "text") {
                this.typePassword = "password";
            }
        },
        showConfirmPassword() {
            if (this.typeConfirmPassword == "password") {
                this.typeConfirmPassword = "text";
            } else if (this.typeConfirmPassword == "text") {
                this.typeConfirmPassword = "password";
            }
        },
    },
    watch: {
        email() {
            this.validateEmail();
        },
        confirmEmail() {
            this.validateEmail();
        },
        password() {
            this.validatePassword();
        },
        confirmPassword() {
            this.validatePassword();
        },
    },
};
</script>
