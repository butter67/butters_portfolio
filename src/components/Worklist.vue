<template>
  <div id="works" v-scroll-reveal>
     <h1 class="mt-32 mb-16 font-nothing text-3xl">Works</h1>
      <div class="w-4/5 md:w-3/5 lg:w-7/12 mx-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-32">
            <Singlework v-for="(work,key) in works" :key="key" :work="work" />
      </div>
    </div>
</template>
<script>
import Singlework from '@/components/Singlework.vue'

export default {
     name: 'Worklist',
     props: ["work"],
     components: {
         Singlework,
     },
     data() {
         return {
             works:  [
              {
                id: 1,
                title: "Reataurabt serch web app",
                slug: "sample1",
                image: require("../assets/image/mogu-serch.png"),
                year: "2020",
                stack: "Vue.js Vuetify Netlify",
                info: "Gurunavi apiを使ったレストランサーチapp",
                link: "https://5f0bcf691933c22c0d9d74ef--wonderful-goldberg-ad74ca.netlify.app/",
                glink: "https://github.com/thisisbutter/mogumogu-search",

              },
              {
                id: 2,
                title: "Mogu bear illustration",
                slug: "sample2",
                image: require("../assets/image/mogubear.png"),
                year: "1998",
                stack: "Affinity designer",
                info: "Reataurabt serch web app用のイラストレーション",
                link: "",
                glink: "",
               },
              {
                id: 3,
                title: "Ice cream shop site",
                slug: "sample3",
                image: require("../assets/image/Hi-icecream.jpg"),
                year: "2020",
                stack: "html css Js",
                info: "アイスクリームショップのweb site",
                link: "https://thisisbutter.github.io/LPsample/",
                glink: "https://github.com/thisisbutter/LPsample",
              },
              {
                id: 4,
                title: "This portfolio.",
                slug: "sample4",
                image: require("../assets/image/portfolio.png"),
                year: "2020",
                stack: "Vue.js tailwindcss Netlify",
                info: "現在のポートフォリオ",
                link: "",
                glink: "",
              },
             ]
         }
     },
}
</script>