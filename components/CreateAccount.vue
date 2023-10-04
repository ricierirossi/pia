<template>
    <div class="w-full max-w-sm flex-col tablet:w-96">
        <form class="flex-col justify-center items-center">
            <div class="pl-5">Digite seu e-mail</div>
            <input
                v-model="email"
                type="email"
                novalidate="true"
                placeholder="Ex: passarinho@email.com"
                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-4 focus:outline-none"
                :class="{ 'border-lime-600 border-2': isValidEmail }"
            />
            <div class="pl-5">Confirme seu e-mail</div>
            <input
                v-model="confirmEmail"
                type="confirmEmail"
                novalidate="true"
                placeholder="Ex: passarinho@email.com"
                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-4 focus:outline-none"
                :class="{ 'border-lime-600 border-2': equalEmail }"
            />
            <div class="pl-5">Digite sua senha</div>
            <input
                v-model="password"
                type="password"
                placeholder="Insira sua senha"
                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-4 focus:outline-none"
                :class="{ 'border-lime-600 border-2': isValidPassword }"
            />
            <div class="pl-5">Confirme sua senha</div>
            <input
                v-model="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-1 focus:outline-none"
                :class="{ 'border-lime-600 border-2': equalPassword }"
            />
            <div class="text-xs text-gray-600 pb-2 px-5">
                A senha deve incluir ao menos:
                <ul class="px-6">
                    <li>8 dígitos</li>
                    <li>1 letra minúscula</li>
                    <li>1 letra maiúscula</li>
                    <li>1 dígito</li>
                    <li>1 caractere especial</li>
                </ul>
            </div>
            <button
                class="text-xl text-white text-center bg-sky-600 w-full py-3 rounded-20 hover:cursor-pointer"
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
</script>
