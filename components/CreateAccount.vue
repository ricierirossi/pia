<template>
    <div class="w-full max-w-sm flex-col tablet:w-96">
        <form class="flex-col justify-center items-center">
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
            <div class="pl-5">Confirme seu e-mail</div>
            <input
                @input="validatingForm"
                id="confirmEmail"
                v-model="confirmEmail"
                type="email"
                novalidate="true"
                placeholder="Ex: passarinho@email.com"
                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-2 focus:outline-none"
                :class="{ 'border-lime-600 border-1': equalEmail }"
            />
            <div
                v-if="!equalEmail && validatingConfirmEmail"
                class="h-5 text-xs text-red-600 pb-2 px-5"
            >
                Os emails não são iguais.
            </div>
            <div v-else class="h-5"></div>
            <div class="pl-5">Digite sua senha</div>
            <div>
                <input
                    @input="validatingForm"
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="Insira sua senha"
                    class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-2 focus:outline-none"
                    :class="{ 'border-lime-600 border-1': isValidPassword }"
                />
                <!-- <div
                    class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                >
                    visibility_off
                </div> -->
                <div
                    v-if="!isValidPassword && validatingPassword"
                    class="text-xs text-red-600 pb-2 px-5"
                >
                    Senha deve conter: 8 caracteres, 1 letra minúscula, 1 letra
                    maiúscula, 1 número, 1 caracter especial.
                </div>
                <div v-else class="h-5"></div>
            </div>
            <div class="pl-5">Confirme sua senha</div>
            <input
                @input="validatingForm"
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-2 focus:outline-none"
                :class="{ 'border-lime-600 border-1': equalPassword }"
            />
            <div
                v-if="!equalPassword && validatingConfirmPassword"
                class="h-5 text-xs text-red-600 pb-2 px-5"
            >
                As senhas não são iguais.
            </div>
            <div v-else class="h-5"></div>

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
        </form>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const email = ref("");
const confirmEmail = ref("");
const password = ref("");
const confirmPassword = ref("");

const validatingEmail = ref(false);
const validatingConfirmEmail = ref(false);
const validatingPassword = ref(false);
const validatingConfirmPassword = ref(false);

function validatingForm(e) {
    const inputID = e.target.id;

    if (inputID == "email") {
        validatingEmail.value = true;
    } else if (inputID == "confirmEmail") {
        validatingConfirmEmail.value = true;
    } else if (inputID == "password") {
        validatingPassword.value = true;
    } else if (inputID == "confirmPassword") {
        validatingConfirmPassword.value = true;
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
const equalEmail = computed(() => {
    return email.value == confirmEmail.value && confirmEmail.value != "";
});
const equalPassword = computed(() => {
    return (
        password.value == confirmPassword.value && confirmPassword.value != ""
    );
});
const available = computed(() => {
    return (
        isValidEmail.value &&
        equalEmail.value &&
        isValidPassword.value &&
        equalPassword.value
    );
});

const submitForm = computed(() => {
    console.log("Criando sua conta Piá!");
});
</script>
