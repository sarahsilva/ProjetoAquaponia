<template>
    <v-layout justify-center align-center fill-height wrap>
        <v-flex xs12>
            <v-alert
                v-model="alert"
                dismissible
                :type="cor"
            >
                {{mensagem}}
            </v-alert>
        </v-flex>
        <v-flex xs12 sm4 md3 lg3>
            
            <v-card>
                <v-img
                    src="https://s.profissionaisti.com.br/wp-content/uploads/2018/11/seguranca-dados-dois-fatores-2FA-autenticacao.jpg"
                    aspect-ratio="2.75"
                >              
                </v-img>
                <v-card-title>
                    <v-text-field 
                        label="E-mail" 
                        type="email"
                        v-model="email"
                    ></v-text-field>
                    <v-text-field 
                        label="Senha"
                        type="password"
                        v-model="senha"
                    ></v-text-field>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat block color="blue" @click="realizarLogin">Logar</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default{
        data(){
            return{
                alert: false,
                cor: "",
                email: "",
                mensagem: "",
                senha: ""
            }
        },
        methods:{
            realizarLogin(){
                
                
            }
        }
    }
</script>
<style>
    .layout{
        background-image: url('https://s.profissionaisti.com.br/wp-content/uploads/2018/11/seguranca-dados-dois-fatores-2FA-autenticacao.jpg');
    }
</style>