import axios from "axios";

const instance = axios.create({
    baseURL: "https://rqdata.ricequant.com/",
    timeout: 3000,
});

// instance.interceptors.request.use(res => {
//     return res;
// }
// )


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
//获取ricequant的token
const TestRiceQuantToken = async () => {
    let reqData = { "user_name": "license", "password": "GOaEJvu5VDRW3RoUUOnfPkLaHV5B2UGwfr-u_wH-DfmA59-IcwUaSJF6fArIyOAWqaP753b-uwV3ejO9njYpzXWDR6ywLtmfVq-ESV1coYUKrYDw_gvGNRbFZUSJQ6Oj6UoZQr5-DHxaqrrIsdZ0TK2f5j0S6y8PK5XJaGCpI_Q=YPLuF9SMAb9AvjJO28kQkFiW1MVniPSbHPT1G1ePX_DszbY0qwdptVA5H0xw1xmFdlfuWnM8oUiN6Vikxl232LnowQ4VEBluqFFAZW38iYEvVhkn3_ylYMaRFJ3829tebLbgQU-szvqtNePhHPfo6WcxPVi0sQWJ80oocGVSVbM=" }

    const { data } = await instance.post(`/auth`, reqData);
    return data;
}


//获取ricequant的数据
const TestRiceQuant = async (token) => {
    let reqData = { "method": "get_price", "order_book_ids": ["000001.XSHE"], "start_date": "20220302", "end_date": "20220302", "frequency": "1m" }

    const { data } = await instance.post(`/api`, reqData, { headers: { 'token': token } });
    return data;
}

export default {
    TestRiceQuantToken,
    TestRiceQuant
}