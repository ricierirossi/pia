<template>
    <div class="h-screen font-lato md:flex">
        <img
            src="~/assets/images/pia.png"
            alt="Mascote do Piá"
            class="object-cover w-full h-40 md:w-6/12 md:h-full"
        />
        <div class="text-base text-zinc-800 flex flex-col items-center">
            <h1 class="text-4xl my-5 md:mt-14">Venha fazer parte do Piá!</h1>
            <div class="flex-col pb-8" v-for="field in formFields">
                <p class="pl-5">{{ field[0] }}</p>
                <input
                    :placeholder="field[1]"
                    class="text-gray-600 border rounded-20 border-gray-400 w-96 py-2 px-5"
                />
            </div>
            <div class="text-xl">Crie sua conta já</div>
            <p class="text-xs">
                Ao se inscrever, você concorda com os
                <span>Termos de Serviço</span> e a
                <span>Política de Privacidade</span>, incluindo o
                <span>Uso de Cookies</span>.
            </p>
            <hr />
            <p>Já possui conta? <span>Iniciar sessão</span></p>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            formFields: [
                ["Digite seu e-mail", "Ex: passarinho@gmail.com"],
                ["Confirme seu e-mail", "Ex: passarinho@gmail.com"],
                ["Digite sua senha", "Informe sua senha"],
                ["Confirme sua senha", "Informe sua senha"],
            ],
        };
    },
};
</script>

<style>
@import "../dist/output.css";
</style>
