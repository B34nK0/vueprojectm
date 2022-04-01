<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <iframe :src="openVideo"></iframe> -->
    <Survey></Survey>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import digquantServer from "../api/digquantServer";
import riceQuantServer from "../api/riceQuantServer";
import Survey from "erl_packages_lib";
import * as CryptoJS from "crypto-js";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      openVideo:
        "https://digquant.com/openCourseVideoView?courseId=57&sectionId=205",
    };
  },
  mounted() {
    this.GetTrainingCampVideoPlayUrl();
    // this.GetCourseVideoPlayUrl();

    // digquantServer.TestGetTrainingCampVideoPlayUrl();
    // digquantServer.TestGetCourseVideoPlayUrl();
    // digquantServer.TestRiceQuant();
  },
  methods: {
    Encrypt(data, key) {
      key = CryptoJS.enc.Utf8.parse(key);
      var data = CryptoJS.enc.Utf8.parse(data);
      var encrypted = CryptoJS.AES.encrypt(data, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
			var encryptedPwd = encrypted.toString();
      return encryptedPwd;
    },
    //获取特训营课程播放地址
    GetTrainingCampVideoPlayUrl() {
      let param = {
        campPeriodId: 1,
        subCourseId: 36,
      };
      let jsonParam = JSON.stringify(param);
      console.log(jsonParam);
      let encrypted = this.Encrypt(jsonParam, "OpenApi@2022&Request$Token^0222-");
      let req = {
        token: encrypted,
        agencyCode: "DigQuant",
      }
      let data = digquantServer.GetTrainingCampVideoPlayUrl(req);
      console.log(data);
    },
    //获取在线课程播放地址
    GetCourseVideoPlayUrl() {
      let param = {
        courseId: 459,
        sectionId: 678,
      };
      let jsonParam = JSON.stringify(param);
      console.log(jsonParam);
      let encrypted = this.Encrypt(jsonParam, "OpenApi@2022&Request$Token^0222-");
      let req = {
        token: encrypted,
        agencyCode: "DigQuant",
      }
      let data = digquantServer.GetCoursePlayUrl(req);
      console.log(data);
    }
  },
};
</script>
