<template>
    <transition
        appear
        enter-active-class="animated jackInTheBox"
    >
        <div style='width: 80%; max-width: 500px;'>
            <q-card class='my-card light'>
                <q-card-section class='bg-primary text-white row q-mb-md'>
                    <div class="text-h5 col self-center q-pl-md">{{ modoActual.titulo }}</div>
                        <q-btn
                            :to='{name: modoActual.siguiente}'
                            color='dark'
                            style='top:30px; font-size: 0.7rem'
                            @click="toggleLogin()"
                        >
                            {{ modoActual.mensajeCambio }}
                        </q-btn>
                </q-card-section>
                <router-view/>
            </q-card>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'AuthComponent',
    data(){
        return {
            modos:{
                login:{
                    titulo: 'Log In',
                    siguiente: 'signup',
                    mensajeCambio: "I don't have an account"
                },
                signup:{
                    titulo: 'Sign Up',
                    siguiente: 'login',
                    mensajeCambio: 'I have an account'
                }
            },
            tieneCuenta: this.$route.name === 'login',
        }
    },
    methods:{
        toggleLogin: function(){
            this.tieneCuenta = !this.tieneCuenta
        }
    },
    computed: {
        modoActual: function(){
            return (this.tieneCuenta)?  this.modos.login: this.modos.signup
        }
    }
}
</script>