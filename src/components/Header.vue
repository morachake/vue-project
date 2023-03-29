<template>
    <div class="fixed inset-x-0  z-20">
        <nav class="relative flex flex-wrap items-center justify-between  bg-transparent ">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div class="w-full relative flex items-center justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <div class="flex items-center justify-center px-2 py-1 sm:px-4 sm:py-2">                
                    <img 
                        class="h-12 sm:h-16 md:h-20 lg:h-24 max-w-full"
                         src="https://qhala.com/wp-content/uploads/2021/07/qhala-logo-light.png" alt="Qhala"
                        >
                    </div>
                    <div
                        class="cursor-pointer text-xl  leading-none px-3 py-1  color block lg:hidden outline-none focus:outline-none"
                         @click="toggleNavbar()">
                        <Icon icon="uil:bars" class="stroke-purple-500 h-8"/>
                    </div>
                   
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
import { Icon } from '@iconify/vue';

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
    },
    components:{
        Icon,
    }
}
</script>

<style  scoped></style>