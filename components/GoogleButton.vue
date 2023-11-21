<template>
    <div>
        <div
            id="g_id_onload"
            :data-client_id="clientId"
            data-login_uri="http://localhost:3000/login"
            data-auto_prompt="false"
            data-context="signin"
            data-ux_mode="redirect"
        ></div>
        <div
            class="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="filled_blue"
            data-text="sign_up_with"
            data-shape="pill"
            data-logo_alignment="left"
        ></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clientId: process.env.GOOGLE_CLIENT_ID,
        };
    },
    mounted() {
        this.loadGoogleScript();
    },
    methods: {
        loadGoogleScript() {
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            script.onload = this.initializeGoogleSignIn;
            document.head.appendChild(script);
        },
        initializeGoogleSignIn() {},
    },
};
</script>
