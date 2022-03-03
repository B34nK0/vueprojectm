
import axios from "axios";
import * as CryptoJS from "crypto-js";

const instance = axios.create({
    baseURL: "https://online2.digquant.com",
    timeout: 3000,
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ECONNABORTED") {
            // Message({
            //   type: "error",
            //   message: `${error.config.timeout}ms 请求${error.config.url}超时，请查看操作是否已成功或刷新重试`,
            //   showClose: true,
            // });
        }
        if (
            error.response &&
            (typeof error.response.data !== "string" ||
                error.response.data.startsWith("<html>"))
        ) {
            error.response.data = error.message;
        }
        return Promise.reject(error);
    }
);


function Encrypt(data, key = "OpenApi@2022&Request$Token^0222-") {
    key = CryptoJS.enc.Utf8.parse(key);
    var data = CryptoJS.enc.Utf8.parse(data);
    var encrypted = CryptoJS.AES.encrypt(data, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    var encryptedPwd = encrypted.toString();
    return encryptedPwd;
};

const GetCoursePlayUrl = async (reqData) => {
    const { data } = await instance.post(`/mall-server/course/getOpenVideoPlayUrl`, reqData);
    return data;
};


const GetTrainingCampVideoPlayUrl = async (reqData) => {
    const { data } = await instance.post(`/training-camp-server/api/anchor/getOpenVideoPlayUrl`, reqData);
    return data;
};


///////////////////test////////////////////////////////////////////////


//获取特训营课程播放地址
function TestGetTrainingCampVideoPlayUrl() {
    let param = {"campPeriodId":122,"subCourseId":1943};
    let jsonParam = JSON.stringify(param);
    let encrypted = Encrypt(jsonParam);
    let req = {
        token: encrypted,
        agencyCode: "DigQuant",
    }
    let data = GetTrainingCampVideoPlayUrl(req);
    console.log(data);
};

//获取在线课程播放地址
function TestGetCourseVideoPlayUrl() {
    let param = {"courseId":517,"sectionId":679};
    let jsonParam = JSON.stringify(param);
    let encrypted = Encrypt(jsonParam);
    let req = {
        token: encrypted,
        agencyCode: "DigQuant",
    }
    let data = GetCoursePlayUrl(req);
    console.log(data);
}




export default {
    GetCoursePlayUrl,
    GetTrainingCampVideoPlayUrl,
    TestGetTrainingCampVideoPlayUrl,
    TestGetCourseVideoPlayUrl
}
