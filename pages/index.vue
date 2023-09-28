<template>
    <div class="h-screen font-lato md:flex">
        <div
            class="h-40 w-full bg-pia bg-cover bg-top-2 md:h-auto md:w-1/2"
        ></div>
        <div class="text-base text-zinc-800 flex flex-col items-center">
            <h1 class="text-4xl my-5 md:mt-14">Venha fazer parte do Piá!</h1>
            <div>
                <div class="flex-col pb-8" v-for="field in formFields">
                    <p class="pl-5">{{ field[0] }}</p>
                    <input
                        :placeholder="field[1]"
                        class="text-gray-600 border rounded-20 border-gray-400 w-96 py-2 px-5"
                    />
                </div>
                <!-- TODO Corrigir os olhinhos :D -->
                <span
                    v-if="!visible"
                    @click="visible = !visible"
                    class="material-symbols-outlined absolute text-gray-400"
                >
                    visibility
                </span>
                <span
                    v-if="visible"
                    @click="visible = !visible"
                    class="material-symbols-outlined relative right-10 top-2 text-gray-400"
                >
                    visibility_off
                </span>
            </div>
            <div
                class="text-xl text-white text-center bg-sky-600 w-96 py-3 px-20 rounded-20 hover:cursor-pointer"
            >
                Crie sua conta já
            </div>
            <p class="text-xs pt-2 pb-2 text-center">
                Ao se inscrever, você concorda com os
                <span>Termos de Serviço</span> e a
                <span>Política de Privacidade</span>, incluindo o
                <span>Uso de Cookies</span>.
            </p>
            <hr />

            <p>
                Já possui conta?
                <span class="text-sky-600 hover:cursor-pointer pb-7"
                    >Iniciar sessão</span
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            formFields: [
                ["Digite seu e-mail", "Ex: passarinho@gmail.com", false],
                ["Confirme seu e-mail", "Ex: passarinho@gmail.com", false],
                ["Digite sua senha", "Informe sua senha", false],
                ["Confirme sua senha", "Informe sua senha", false],
            ],
            visible: false,
        };
    },
};
</script>

<style></style>
