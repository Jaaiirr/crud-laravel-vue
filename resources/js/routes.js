const Home = () => import("./components/Home.vue");
const Contacto = () => import("./components/Contacto.vue");

// Importando los componente para el blog
const Mostrar = () => import("./components/blog/Mostrar.vue");
const Editar = () => import("./components/blog/Editar.vue");
const Crear = () => import("./components/blog/Crear.vue");

export const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "contacto",
        path: "/contacto",
        component: Contacto,
    },
    {
        name: "mostrarBlog",
        path: "/blogs",
        component: Mostrar,
    },
    {
        name: "editarBlog",
        path: "/editar/:id",
        component: Editar,
    },
    {
        name: "crearBlog",
        path: "/crear",
        component: Crear,
    },
];
