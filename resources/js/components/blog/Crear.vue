<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Crear lista de tareas</h4></div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <label>Titulo</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="blog.titulo"
                                />
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea
                                        class="form-control"
                                        id="floatingTextArea2"
                                        v-model="blog.contenido"
                                        style="height: 100px"
                                    ></textarea>
                                    <label for="floatingTextArea2"></label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button
                                    type="submit"
                                    class="btn btn-success"
                                    style="background-color: #7d9d9c"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "crear-blog",
    data() {
        return {
            blog: {
                titulo: "",
                contenido: "",
            },
        };
    },
    methods: {
        async crear() {
            await this.axios
                .post("/api/blog", this.blog)
                .then((response) => {
                    this.$router.push({ name: "mostrarBlog" });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
