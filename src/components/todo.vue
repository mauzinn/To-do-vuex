<template>
    <section class="center">
        <editVue :id="id" :down="editShow" v-show="editShow" />
        <section class="toDo">
            <h2 class="toDo-title">Todo-list</h2>
            <section>
                <form class="form-Todo" @submit="create_task">
                    <h4 class="toDo-title"> - Criar tasks</h4>
                    <input type="date" v-model="date" class="input date" required>
                    <input type="text" v-model="text" maxlength="70" class="input" placeholder="Oque você pensa em fazer?" required><br>
                    <div class="center-item">
                        <button class="button-send">Criar</button>
                    </div>
                </form>

                <section>
                    <h4 class="toDo-title"> - Tasks</h4>
                    <section class="tasks">
                        
                        <article v-for="task in this.$store.state.tasks" :key="task" :class="task.state">
                            <div class="task-1">
                                <small>{{task.date}}</small>
                                <p>{{task.text}}</p>
                            </div>
                            <div class="task-2">
                                <img @click="destroy(task.id)" class="button-state" src="https://github.com/mauzinn/assets-for-future-projects/blob/main/declinio.png?raw=true">
                                <img @click="complete(task.id)" class="button-state" src="https://github.com/mauzinn/assets-for-future-projects/blob/main/aceito.png?raw=true">
                                <img @click="edit(task.id)" class="button-state edit" src="https://github.com/mauzinn/assets-for-future-projects/blob/main/edit.png?raw=true">
                            </div>
                        </article>

                    </section>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
    import editVue from './to-do/edit.vue'

    export default {
        name: 'todo',
        data() {
            return {
                editShow: false,
                id: 0
            }
        },
        components: {
            editVue
        },
        methods: {
            create_task(e) {
                e.preventDefault()

                let data = {
                    date: this.date,
                    text: this.text,
                    id: 0,
                    state: 'Uncompleted'
                }

                //Limpar campos
                    this.date = ''
                    this.text = ''

                this.$store.commit('criar_tasks', data)
            },
            destroy(id) {
                this.$store.commit('delete_task', id)
            },
            complete(id) {
                this.$store.commit('complete_task', id)
            },
            edit(id) {
                this.editShow = !this.editShow
                this.id = id
            }
        }
    }
</script>

<style>
    *{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    :root{
        --colorBackground: rgb(40, 44, 54);
        --colorBackgroundTwo: rgb(53, 58, 71);
        --buttonColor: rgb(124, 235, 124);
        --buttonHover: rgb(97, 207, 97);
        --shadow1: rgb(73, 73, 73);
    }

    .button-state{
        background-color: var(--buttonColor);
        width: 40px;
        height: 40px;
        margin: 2px;
        border-radius: 10px;
        cursor: pointer;
    }

    .Completed {
        background-color: rgb(86, 167, 70);
    }

    .button-state:hover{
        transform: scale(1.1);
        background-color: var(--buttonHover);

        transition: 0.3s;
    }

    .center{
        height: 94vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input{
        padding: 8px;
        border-radius: 13px;
        border: 1px solid grey;
        outline: none;
        width: 260px;
        margin: 5px;
    }

    .button-send{
        background-color: var(--buttonColor);
        padding: 10px 30px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        box-shadow: 1px 2px 4px var(--shadow1);
    }

    .tasks{
        height: 360px;
        overflow: auto;
    }

    article{
        background-color: var(--colorBackgroundTwo);
        padding: 10px;
        color: white;
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        margin-bottom: 10px;
    }

    .task-1{
        width: 60%;
        word-break: break-all;
    }

    .button-send:hover{
        background-color: var(--buttonHover);
        color: rgb(48, 48, 48);
        box-shadow: 1px 3px 6px rgb(83, 83, 83);
        transform: scale(1.1);

        transition: 0.3s;
    }

    .date{
        width: 110px;
    }

    .toDo-title {
        color: white;
    }

    .toDo{
        background-color: var(--colorBackground);
        padding: 20px;
        min-height: 600px;
        width: 430px;
        border-radius: 20px;
    }

    .center-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>