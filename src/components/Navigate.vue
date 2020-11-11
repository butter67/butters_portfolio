<template>
    <div class="mx-auto w-8/12 md:w-6/12 lg:w-1/4  md:mb-10">
      <ul class="flex text-golden">
        
        <li class="flex-1 font-medium">
          <span class="block h-6"><img src="../assets/image/lady.png" id="anime"  class="hidden hover_anime w-10 sm:w-12 cursor-pointer animate__animated animate__bounceIn animate__slow	2s" alt="burst"></span>
          <a @mouseover="showAnime" @mouseleave="hideAnime" href="#about"  class="block hover:text-loverygreen">ABOUT </a>
        </li>
        
        <li class="flex-1 font-medium">
          <span class="block w-full h-6"><img src="../assets/image/fram.png" id="anime2"  class="hidden hover_anime w-8 sm:w-10 cursor-pointer ml-auto animate__animated animate__tada animate__slow	2s animate__infinite infinite" alt="burst"></span>
          <a @mouseover="showAnime2" @mouseleave="hideAnime2" href="#works" class="block hover:text-loverygreen">WORKS</a>
          </li>
        
        <li class="flex-1 font-medium">
          <span class="block h-6"><img src="../assets/image/watermelon.png" id="anime3"  class="hidden hover_anime w-8 sm:w-10 cursor-pointer ml-auto animate__animated  animate__swing animate__slow	2s animate__infinite infinite" alt="burst"></span>
          <a @mouseover="showAnime3" @mouseleave="hideAnime3" href="#contact" class="block hover:text-loverygreen">CONTACT</a></li> 
      </ul>
    </div>
</template>
<script>
export default {
  methods: {
    //Show Anime when hover
    showAnime: function() {
      var anime = document.getElementById('anime');
      anime.classList.remove("hidden");
    },
    showAnime2: function() {
      var anime = document.getElementById('anime2');
      anime.classList.remove("hidden");
    },
    showAnime3: function() {
      var anime = document.getElementById('anime3');
      anime.classList.remove("hidden");
    },
    hideAnime: function() {
      var anime = document.getElementById('anime');
      anime.classList.add("hidden");
    },
    hideAnime2: function() {
      var anime = document.getElementById('anime2');
      anime.classList.add("hidden");
    },
    hideAnime3: function() {
      var anime = document.getElementById('anime3');
      anime.classList.add("hidden");
    }
  },
  
}
</script>