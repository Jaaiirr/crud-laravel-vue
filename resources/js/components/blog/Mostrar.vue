<template>
    <div class="row">
        <div class="col-12 mb-2">
            <router-link
                :to="{ name: 'crearBlog' }"
                class="btn btn-success"
                style="background-color:  #7D9D9C"
                >Agregar</router-link
            >
        </div>
        <div class="col-12 mt-4">
            <div class="table-responsive">
                <table class="table table-bordered" style="background-color:#7D9D9C">
                    <thead class="bg-dark text-white">
                        <tr>
                            <th style="background-color:#7D9D9C">ID</th>
                            <th style="background-color:#7D9D9C">Título</th>
                            <th style="background-color:#7D9D9C">Contenido</th>
                            <th style="background-color:#7D9D9C">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td>{{ blog.id }}</td>
                            <td>{{ blog.titulo }}</td>
                            <td>{{ blog.contenido }}</td>
                            <td>
                                <router-link
                                    :to="{
                                        name: 'editarBlog',
                                        params: { id: blog.id },
                                    }"
                                    class="btn btn-info"
                                    >Editar</router-link
                                >
                                <a
                                    type="button"
                                    @click="eliminarBlog(blog.id)"
                                    class="btn btn-danger"
                                    >Eliminar</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "blogs",
    data() {
        return {
            blogs: [],
        };
    },
    created() {
        this.mostrarblogs();
    },
    methods: {
        async mostrarblogs() {
            await this.axios
                .get("/api/blog")
                .then((res) => {
                    this.blogs = res.data;
                })
                .catch((error) => {
                    this.blog = [];
                });
        },
        eliminarBlog(id) {
            if (confirm("Desea eliminar el registro")) {
                this.axios
                    .deleted(`/api/blog/${id}`)
                    .then((res) => {
                        this.mostrarblogs();
                    })
                    .catch((error) => {
                        console;
                    });
            }
        },
    },
};
</script>
