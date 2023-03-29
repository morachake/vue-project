<template>
    <div class="fixed inset-x-0 top-0 left-0 right-0 z-20">
        <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <div class="flex flex-shrink-0 items-center">                
                    <img 
                        class=" h-120 w-auto lg:block" src="https://qhala.com/wp-content/uploads/2021/07/qhala-logo-light.png" alt="Qhala">
                    </div>
                    <!-- <RouterLink to="/" class="text-xl font-bold leading-relaxed inline-block mr-4 py-4 whitespace-nowrap uppercase text-white"
                        href="#">
                        Qhala
                    </RouterLink> -->
                    <button
                        class="text-white cursor-pointer text-xl  leading-none px-3 py-1 border border-solid border-transparent rounded bg-white block lg:hidden outline-none focus:outline-none"
                        type="button" @click="toggleNavbar()">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center content-between space-x-4 ">
                    <ul class="flex flex-col lg:flex-row list-none ml-auto gap-3 justify-evenly">
                        <li class="nav-item">
                            <RouterLink 
                                to="/"  class="rounded-full border-1 bg-purple-600  px-3 py-1 
                                flex items-center text-xl  focus:outline-none focus:ring uppercase font-bold leading-snug
                                 text-white hover:opacity-75" 
                                 >
                                 Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/team"
                                class="rounded-full border-1 bg-purple-600  px-3 py-1 flex items-center 
                                text-xl uppercase font-bold leading-snug text-white hover:opacity-75" 
                                >
                                Team</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink  to="/product"
                                class="rounded-full border-1 bg-purple-600  px-3 py-1 flex items-center 
                                text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                                >
                                Product</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>


export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu
        }
    }
}
</script>

<style  scoped></style>