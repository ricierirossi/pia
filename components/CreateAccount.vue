<template>
    <div class="w-full max-w-sm flex-col tablet:w-96">
        <form
            class="flex-col justify-center items-center"
            @submit.prevent="handleSubmit"
        >
            <div>
                <div class="pl-5">Digite seu e-mail</div>
                <input
                    id="email"
                    type="email"
                    placeholder="Ex: passarinho@gmail.com"
                    required
                    v-model="email"
                    class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-3 focus:outline-none"
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
                        class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-3 focus:outline-none"
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
                    class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-3 focus:outline-none"
                />
                <!-- <div
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
                </div> -->
                <div>
                    <div class="pl-5">Confirme sua senha</div>
                    <input
                        id="confirmPassword"
                        :type="typeConfirmPassword"
                        placeholder="Confirme sua senha"
                        minlength="8"
                        required
                        v-model="confirmPassword"
                        class="text-gray-600 border rounded-20 top-2 border-gray-400 w-full py-2 px-5 mb-3 focus:outline-none"
                    />
                    <!-- <div
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
                    </div> -->
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
                    class="text-xl text-white text-center bg-sky-600 w-full py-3 rounded-20 hover:cursor-pointer"
                />
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>
