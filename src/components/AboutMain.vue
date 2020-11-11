<template>
 <div id="about" class="about mt-24 mb-20" v-scroll-reveal>
       <h1 class="mb-16 font-nothing text-3xl">About</h1>
        <img src="../assets/image/myimg-bk.jpg" alt="myself" class="rounded-full w-40 mx-auto">

        <div class="w-11/12 sm:w-3/4 mx-auto">
            <h2 class="text-gray-800 mt-10 font-poppins text-xl">オイカワ エリ<span class="m-6">|</span>Eri Oikawa</h2>
            <p class="mt-6 font-poppins text-sm md:text-base font-light leading-6 text-pinkgray">神奈川県横浜市生まれ<br>
            昔から絵を描くのが好きだったのもあり、学生時代にネイルアーティストを目指し就職。<br>
            都内サロンの店長の役職を7年つとめ、渋谷区で独立。<br>
            もともとWeb関係のもの創りにも興味がつよく、サロンと並行してweb•アプリ制作のフロントエンドを勉強。<br>
            マークアップからアプリケーションなど創る楽しさに目覚めました。とくに細かいエフェクトやアニメーションなどが好きです。<br>
            この技術をもっと深め、何かもの創りにおいて、自分が貢献できるようなことを常に探しています。
            </p>
        </div>

        <!-- TimeLine -->
        <div class="w-4/5 md:w-3/6 mx-auto mt-16">
         <light-timeline :items='items'></light-timeline>
        </div>   
        <!-- w-4/5 sm:w-3/6 -->
  </div>
</template>

<script>
export default {
      data() {
        return {
          items: [
           {
            tag: '~2009-4',
            color: '#dcdcdc',
            type: 'circle',
            htmlMode: true,
            content: `<p class="text-left ml-4 font-poppins text-sm">海外留学を経て、新宿区のNail salonに勤めていました。</p>`
           },
           {
            tag: '2009-05',
            color: '#ded997',
            type: 'circle',
            htmlMode: true,
            content: `<p class="text-left ml-4 font-poppins text-sm"><span class="text-base mr-4">Nail salon Embellir</span>店長として立ち上げから7年間努めました。</p>`
           },  
           {
            tag: '2016-01~',
            color: '#deb897',
            type: 'circle',
            htmlMode: true,
            content: `<p class="text-left ml-4 font-poppins text-sm"><span class="text-base mr-4">Nail salon ink</span>都内で小さなサロンをOpenしました。現在も営業中です。</p>`
           },
           {
            tag: '2018-10~',
            color: '#d1ca97',
            type: 'circle',
            htmlMode: true,
            content: `<p class="text-left ml-4 font-poppins text-sm">並行して独学でHTML,css,javascript,PHPの勉強を始めました。主に本やUdemy、勉強会などにも参加していました。</p>`
           },
           {
            tag: '2020-9~',
            color: '#cf9793',
            type: 'star',
            htmlMode: true,
            content: `<p class="text-left ml-4 font-poppins text-sm font-light">業務委託としてお仕事をstartしました。</p>`
           }
          ],      
         }
      }
}
</script>