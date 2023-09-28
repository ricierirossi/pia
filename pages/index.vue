<template>
    <div class="h-screen font-lato tablet:flex">
        <div
            class="h-40 w-full bg-pia bg-cover bg-top-2 tablet:h-auto tablet:w-1/2"
        ></div>
        <div
            class="text-base text-zinc-800 flex flex-col items-center tablet:w-1/2"
        >
            <h1 class="text-4xl my-5 tablet:mt-14">
                Venha fazer parte do Piá!
            </h1>
            <div class="flex-col pb-8">
                <div>
                    <div class="pl-5">Digite seu e-mail</div>
                    <input
                        id="email"
                        type="email"
                        placeholder="Ex: passarinho@gmail.com"
                        required
                        class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 mb-3"
                    />
                </div>
                <div>
                    <div class="pl-5">Confirme seu e-mail</div>
                    <input
                        id="confirmEmail"
                        type="email"
                        placeholder="Ex: passarinho@gmail.com"
                        required
                        class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 mb-3"
                    />
                </div>
                <div>
                    <div class="pl-5">Digite sua senha</div>
                    <input
                        id="password"
                        type="password"
                        placeholder="Informe sua senha"
                        required
                        class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 mb-3"
                    />
                    <div
                        v-if="visiblePassword"
                        @click="showPassword()"
                        class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                    >
                        visibility_off
                    </div>
                    <div
                        v-if="!visiblePassword"
                        @click="showPassword()"
                        class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                    >
                        visibility
                    </div>
                </div>
                <div>
                    <div class="pl-5">Confirme sua senha</div>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirme sua senha"
                        required
                        class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5 mb-3"
                    />
                    <div
                        v-if="visibleConfirmPassword"
                        @click="showConfirmPassword()"
                        class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                    >
                        visibility_off
                    </div>
                    <div
                        v-if="!visibleConfirmPassword"
                        @click="showConfirmPassword()"
                        class="material-symbols-outlined relative top-2 -left-9 text-gray-400 hover:cursor-pointer"
                    >
                        visibility
                    </div>
                </div>
            </div>

            <div
                class="text-xl text-white text-center bg-sky-600 w-96 py-3 px-20 rounded-20 hover:cursor-pointer"
            >
                Crie sua conta já
            </div>
            <p class="w-96 text-xs pt-2 pb-2 text-center">
                Ao se inscrever, você concorda com os
                <span class="underline">Termos de Serviço</span> e a
                <span class="underline">Política de Privacidade</span>,
                incluindo o <span class="underline">Uso de Cookies</span>.
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
            visiblePassword: false,
            visibleConfirmPassword: false,
        };
    },
    methods: {
        showPassword() {
            this.visiblePassword = !this.visiblePassword;
            this.visiblePassword
                ? (document.getElementById("password").type = "text")
                : (document.getElementById("password").type = "password");
        },
        showConfirmPassword() {
            this.visibleConfirmPassword = !this.visibleConfirmPassword;
            this.visibleConfirmPassword
                ? (document.getElementById("confirmPassword").type = "text")
                : (document.getElementById("confirmPassword").type =
                      "password");
        },
    },
};
</script>
