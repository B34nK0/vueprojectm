// <template>
//   <div class="about">
//     <canvas id="myCanvas" style="border:1px solid #000;width:600;height400">
//     </canvas>
//   </div>
// </template>

// <script>
// import PDFJS from "pdfjs-dist";

// export default {
//   data() {
//     return {};
//   },
//   created() {
//     PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.min.js");
//   },
//   mounted() {
//     // this.showPdf();
//   },
//   methods: {
//     showPdf() {
//       var CMAP_URL = "../util/pdfjs/web/cmaps/"; //自己的pdfjs字库的路径
//       pdfjsLib.GlobalWorkerOptions.workerSrc =
//         "../util/pdfjs/build/pdf.worker.js"; //自己的路径
//       var loadingTask = pdfjsLib.getDocument(
//         "https://www.lilnong.top/static/pdf/B-4-RxJS%E5%9C%A8React%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8-%E9%BE%99%E9%80%B8%E6%A5%A0_.pdf"
//       );
//       loadingTask.promise.then(function (pdf) {
//         console.log(pdf);
//         // pdf.getPage(1).then(function (page) {
//         //   var scale = 1.5;
//         //   var viewport = page.getViewport(scale);
//         //   var canvas = document.getElementById("myCanvas");
//         //   var context = canvas.getContext("2d");
//         //   canvas.height = viewport.height;
//         //   canvas.width = viewport.width;
//         //   var renderContext = {
//         //     canvasContext: context,
//         //     viewport: viewport,
//         //   };
//         //   page.render(renderContext);
//         // });
//       });
//     },
//   },
// };
// </script>