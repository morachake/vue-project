<template>
    <div>
        <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a class="text-lg font-bold leading-relaxed inline-block mr-4 py-4 whitespace-nowrap uppercase text-white"
                        href="#">
                        Qhala
                    </a>
                    <button
                        class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-white block lg:hidden outline-none focus:outline-none"
                        type="button" @click="toggleNavbar()">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center content-between space-x-4 ">
                    <ul class="flex flex-col lg:flex-row list-none ml-auto justify-evenly">
                        <li class="nav-item">
                            <a class="px-3 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" h ref="">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="px-3 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" h ref="">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="px-3 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" h ref="">Product</a>
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