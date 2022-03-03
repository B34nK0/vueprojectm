<template>
  <div class="about">
    <canvas id="myCanvas" style="border:1px solid #000;width:600;height400">
    </canvas>
    <button @click="fullscreen">fullscreen</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFullscreen: false,
    };
  },
  mounted() {
    this.initCancas();
    // window.onresize = () => {
    //   this.initCanvas();
    // };
  },
  methods: {
    initCancas() {
      console.log("初始化canvas");
      let canvas = document.getElementById("myCanvas");
      let ctx = canvas.getContext("2d");

      ctx.winW = window.innerWidth;
      ctx.winH = window.innerHeight;

      this.drawCanvas(ctx);
    },
    drawCanvas(ctx) {
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.lineTo(140, 70);
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = "#cc0000";
      ctx.stroke();
    },

    fullscreen() {
      let canvas = document.getElementById("myCanvas");

      if (this.isFullscreen) {
        this.isFullscreen = false;
        let ctx = canvas.getContext("2d");
        canvas.width = 600;
        canvas.height = 400;
        this.drawCanvas(ctx);
        return;
      }

      this.isFullscreen = true;
      let winW = window.innerWidth;
      let winH = window.innerHeight;
      canvas.width = winW;
      canvas.height = winH;
    },
  },
};
</script>