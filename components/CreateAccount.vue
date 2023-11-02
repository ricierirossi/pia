<template>
    <div class="w-full max-w-sm flex-col tablet:w-96">
        <form class="flex-col justify-center items-center" method="post">
            <div class="pl-5">Digite seu e-mail</div>
            <input
                @input="validatingForm"
                id="email"
                v-model="email"
                type="email"
                novalidate="true"
                placeholder="Ex: passarinho@email.com"
                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-2 focus:outline-none"
                :class="{ 'border-lime-600 border-1': isValidEmail }"
            />
            <div
                v-if="!isValidEmail && validatingEmail"
                class="h-5 text-xs text-red-600 pb-2 px-5"
            >
                Email inválido.
            </div>
            <div v-else class="h-5"></div>

            <div class="pl-5">Digite sua senha</div>
            <div class="flex relative">
                <input
                    @input="validatingForm"
                    id="password"
                    v-model="password"
                    :type="typePassword"
                    placeholder="Insira sua senha"
                    class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-2 focus:outline-none"
                    :class="{ 'border-lime-600 border-1': isValidPassword }"
                />
                <div @click="showHidePass">
                    <ShowHide :showHide="visiblePass" />
                </div>
            </div>
            <div
                v-if="!isValidPassword && validatingPassword"
                class="text-xs text-red-600 pb-2 px-5"
            >
                Senha deve conter: 8 caracteres, 1 letra minúscula, 1 letra
                maiúscula, 1 número, 1 caracter especial.
            </div>
            <div v-else class="h-5"></div>

            <div class="pl-5">Confirme sua senha</div>
            <div class="flex relative">
                <input
                    @input="validatingForm"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    :type="typeConfirmPassword"
                    placeholder="Confirme sua senha"
                    class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-2 focus:outline-none"
                    :class="{ 'border-lime-600 border-1': equalPassword }"
                />
                <div @click="showHideConfirmPass">
                    <ShowHide :showHide="visibleConfirmPass" />
                </div>
            </div>
            <div
                v-if="!equalPassword && validatingConfirmPassword"
                class="h-5 text-xs text-red-600 pb-2 px-5"
            >
                As senhas não são iguais.
            </div>
            <div v-else class="h-5"></div>

            <div class="flex flex-col items-center">
                <button
                    @click.prevent="submitForm"
                    class="text-xl text-white text-center bg-sky-600 w-full py-3 rounded-20 mt-2 hover:cursor-pointer"
                    :class="{
                        'button-unavailable': !available,
                    }"
                    :disabled="!available"
                >
                    Crie sua conta já
                </button>

                <div>Ou</div>

                <div class="text-green-700 font-extrabold">
                    Continuar com o Google
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

import { ref } from "vue";
import { useUsersStore } from "~/stores/UsersStore";

const usersStore = useUsersStore();

// <!-- ! Limpar Valores de Teste
const email = ref("teste@teste.com");
const password = ref("Aa1@Aa1@");
const confirmPassword = ref("Aa1@Aa1@");

const validatingEmail = ref(false);
const validatingPassword = ref(false);
const validatingConfirmPassword = ref(false);

const visiblePass = ref(false);
const visibleConfirmPass = ref(false);

const typePassword = ref("password");
const typeConfirmPassword = ref("password");

function validatingForm(e) {
    const inputID = e.target.id;

    if (inputID == "email") {
        validatingEmail.value = true;
    } else if (inputID == "password") {
        validatingPassword.value = true;
    } else if (inputID == "confirmPassword") {
        validatingConfirmPassword.value = true;
    }
}

function showHidePass() {
    if (typePassword.value == "password") {
        typePassword.value = "text";
    } else {
        typePassword.value = "password";
    }
}
function showHideConfirmPass() {
    if (typeConfirmPassword.value == "password") {
        typeConfirmPassword.value = "text";
    } else {
        typeConfirmPassword.value = "password";
    }
}

const isValidEmail = computed(() => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
});
const isValidPassword = computed(() => {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
        password.value
    );
});
const equalPassword = computed(() => {
    return (
        password.value == confirmPassword.value && confirmPassword.value != ""
    );
});
const available = computed(() => {
    return isValidEmail.value && isValidPassword.value && equalPassword.value;
});

const submitForm = () => {
    usersStore.createUser({
        email: email.value,
        password: password.value,
    });
};
</script>
