<template>
    <div class="font-lato tablet:flex">
        <div
            class="h-40 w-full bg-pia bg-cover bg-no-repeat bg-top-20 tablet:h-auto tablet:w-1/2"
        ></div>
        <div
            class="text-base text-zinc-800 flex flex-col items-center tablet:w-1/2"
        >
            <h1 class="text-4xl text-center my-5 px-2 tablet:mt-14">
                Venha fazer parte do Piá!
            </h1>
            <div class="w-full flex flex-col items-center px-5">
                <CreateAccount class="w-full" />
            </div>
            <div class="px-7 py-2">
                <p class="max-w-sm text-xs text-center">
                    Ao se inscrever, você concorda com os
                    <span class="underline hover:cursor-pointer"
                        >Termos de Serviço</span
                    >
                    e a
                    <span class="underline hover:cursor-pointer"
                        >Política de Privacidade</span
                    >, incluindo o
                    <span class="underline hover:cursor-pointer"
                        >Uso de Cookies</span
                    >.
                </p>
            </div>

            <hr class="h-0.5 w-96 bg-gray-400 mt-3 mb-3" />

            <p class="mb-3">
                Já possui conta?
                <NuxtLink to="/login">
                    <span class="text-sky-600 font-bold hover:cursor-pointer"
                        >Iniciar sessão</span
                    ></NuxtLink
                >
            </p>
        </div>
    </div>
</template>

<script setup>
import { useUsersStore } from "~/stores/UsersStore";
import { ref } from "vue";

const usersStore = useUsersStore();
</script>
