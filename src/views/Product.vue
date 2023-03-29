<template>
    <div id="App" class="z-0 relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
            <source src="../assets/hero-video-remote.mp4" type="video/mp4">
        </video>
        
        <div
            class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div class="mx-auto max-w-md  ">
                <div class=" divide-gray-300/50  ">
                    <p class="">The Heart beat of your privacy Starts with you</p>
                    <div v-if="inputVisible" class="space-y-6 py-8 text-base leading-7 text-gray-600 items-center">
                        <div class="center space-y-4" >
                            <input class="placeholder:italic 
                            placeholder:text-slate-400 block bg-white w-full 
                            border border-slate-300 rounded-md py-2 pl-9 
                            pr-3 shadow-sm focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                             sm:text-sm" placeholder="Enter the Url to search..." type="text" name="search" />
                            <button type="submit" 
                              class="transition rounded-full w-full text-white-200 ease-in-out 
                              delay-150 bg-blue-500 hover:-translate-y-1
                              hover:scale-110 hover:bg-indigo-500 duration-300 "
                              @click="showModal"
                             >Submit</button>
                             
                        </div>
                        <modal v-if="modalVisible" @close="modalVisible = false">
                          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <!-- <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> -->
                            <div class="fixed inset-0 z-10 overflow-y-auto">
                              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 class="text-base  <h1>Homepage</h1>font-semibold leading-6 text-gray-900" id="modal-title">Latest cookies</h3>
                                        <ul class="mt-2">
                                          <li>Domain</li>
                                          <li>Name</li>
                                          <li>Expires</li>
                                          <li>Secure</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button 
                                      type="button" class="inline-flex w-full
                                       justify-center rounded-md bg-red-600 px-3 
                                       py-2 text-sm font-semibold text-white shadow-sm 
                                       hover:bg-red-500 sm:ml-3 sm:w-auto">Clear</button>
                                    <button 
                                     @click="showModal"
                                      type="button" class="mt-3 inline-flex w-full 
                                      justify-center rounded-md bg-white px-3 py-2 text-sm 
                                      font-semibold text-gray-900 shadow-sm ring-1 ring-inset 
                                      ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </modal>
                    </div>
                    
                    <div class="pt-8 text-base font-semibold leading-7">                       
                        <button @click="showInput"
                        class="w-full rounded-full transition ease-in-out delay-150 bg-blue-500 
                        hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 animate-bounce" 
                        >{{inputVisible ?'Close' :'Get started' }}
                    </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script >
export default{
    data(){
        return{
            inputVisible : false,
            modalVisible:false
        }
    },
    methods:{
        showModal (){
            this.modalVisible = !this.modalVisible
        },
        showInput(){
            this.inputVisible = ! this.inputVisible
        }
    }
}
</script>
