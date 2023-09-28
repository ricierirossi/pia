<template>
    <div class="h-screen font-lato md:flex">
        <div
            class="h-40 w-full bg-pia bg-cover bg-top-2 md:h-auto md:w-1/2"
        ></div>
        <div
            class="text-base text-zinc-800 flex flex-col items-center md:w-1/2"
        >
            <h1 class="text-4xl my-5 md:mt-14">Venha fazer parte do Piá!</h1>
            <div>
                <div class="flex-col pb-8" v-for="(field, index) in formFields">
                    <p class="pl-5">{{ formFields[index].label }}</p>
                    <input
                        :id="formFields[index].id"
                        :placeholder="formFields[index].placeholder"
                        :type="formFields[index].type"
                        :minlength="formFields[index].minlength"
                        required
                        class="text-gray-600 border rounded-20 top-2 border-gray-400 w-96 py-2 px-5"
                    />
                    <div class="h-0" v-if="index > 1">
                        <label
                            :for="formFields[index].id"
                            :index="index"
                            v-if="!formFields[index].visibility"
                            @click="
                                formFields[index].visibility =
                                    !formFields[index].visibility;
                                showPassword(index);
                            "
                            class="material-symbols-outlined relative -top-8 left-88 text-gray-400 hover:cursor-pointer"
                        >
                            visibility
                        </label>
                        <label
                            v-if="formFields[index].visibility"
                            @click="
                                formFields[index].visibility =
                                    !formFields[index].visibility;
                                showPassword(index);
                            "
                            class="material-symbols-outlined relative -top-8 left-88 text-gray-400 hover:cursor-pointer"
                        >
                            visibility_off
                        </label>
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
                {
                    id: "email",
                    label: "Digite seu e-mail",
                    placeholder: "Ex: passarinho@gmail.com",
                    type: "email",
                    minlength: null,
                    visibility: null,
                },
                {
                    id: "confirmEmail",
                    label: "Confirme seu e-mail",
                    placeholder: "Ex: passarinho@gmail.com",
                    type: "email",
                    minlength: null,
                    visibility: null,
                },
                {
                    id: "password",
                    label: "Digite sua senha",
                    placeholder: "Informe sua senha",
                    type: "password",
                    minlength: "8",
                    visibility: false,
                },
                {
                    id: "confirmPassword",
                    label: "Confirme sua senha",
                    placeholder: "Confirme sua senha",
                    type: "password",
                    minlength: "8",
                    visibility: false,
                },
            ],
        };
    },
    methods: {
        showPassword(index) {
            if (this.formFields[index].type == "password") {
                this.formFields[index].type = "text";
            } else {
                this.formFields[index].type = "password";
            }
        },
    },
};
</script>
