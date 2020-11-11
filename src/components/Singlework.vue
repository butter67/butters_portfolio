<template>
<div v-scroll-reveal>
        <a v-bind:href="work.link">
            <div class="single-main relative w-full">
            
             <img v-bind:src="work.image" alt="work_image" class="block object-cover w-full h-56 cursor-pointer">
           
             <div class="mask absolute top-0 left-0 w-full h-full bg-navy  cursor-pointer opacity-0 transition duration-500 hover:opacity-75">
                <div class="flex flex-col w-full h-full justify-center">
                    <p class="title block opacity-1 text-xl font-semibold">{{ work.title }}</p>
                    <p class="stack block text-l">{{ work.stack }}</p>
                    <p class="info mt-2 text-sm font-semibold">{{ work.info }}</p>
                </div>     
             </div>
            </div> 
        </a>
            <div class="flex justify-center mt-2 cursor-pointer">
                <a v-bind:href="work.glink"><li class="w-10 list-none m-2 hover:opacity-75 transition duration-300"><img class="rounded-lg" src="../assets/image/github.png" alt="github"></li></a>
                <a v-bind:href="work.link"><li class="w-10 list-none m-2 hover:opacity-75 transition duration-300"><img class="rounded-lg" src="../assets/image/safari 2.png" alt="github"></li></a>
            </div>
    </div>
    
</template>

<script>
// import WorkDetail from '@/components/WorkDetail.vue'

export default {
    name: 'Singlework',
    props: ["work"],
    component: {
        // WorkDetail,
    }
}
</script>
<style scoped>
.title,.stack,.info{
    color: white;
}
</style>

