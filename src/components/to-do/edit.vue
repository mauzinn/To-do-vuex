<template>
    <section class="alert">
        <section class="form">
            <h2>Editar task</h2>

            <form @submit="Editar_task">
                <input type="text" class="input" maxlength="70" v-model="text" placeholder="Insira um texto" required><br>
                <div class="center-item">
                    <button class="btn">Editar</button>
                </div>
            </form>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'edit',
        props: {
            id: Number
        },
        methods: {
            Editar_task(e) {
                e.preventDefault()

                let data = {
                    id: this.id,
                    text: this.text
                }

                this.$store.commit('edit_tasks', data)

                //Limpar campos
                this.text = ''
            }
        }
    }
</script>

<style scoped>
    :root{
        --colorBackground: rgb(40, 44, 54);
        --colorBackgroundTwo: rgb(53, 58, 71);
        --buttonColor: rgb(124, 235, 124);
        --buttonHover: rgb(97, 207, 97);
        --shadow1: rgb(73, 73, 73);
    }

    .alert{
        position: absolute;
        top: 0%;
    }

    .form{
        background-color: var(--colorBackground);
        color: white;
        padding: 20px;
        border-radius: 0px 0px 20px 20px;
        border: 2px solid grey;
        border-top: none;
    }

    .btn{
        background-color: var(--buttonColor);
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        margin-top: 10px;
    }

    .btn:hover{
        background-color: var(--buttonHover);
        transform: scale(105%);
        
        transition: 0.3s;
    }

    .input{
        padding: 8px;
        border-radius: 13px;
        border: 1px solid grey;
        outline: none;
        width: 260px;
        margin: 5px;
    }

    .center-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes alert-down {
        0% {
            top: -30%;
        }

        100% {
            top: 0%;
        }
    }
</style>