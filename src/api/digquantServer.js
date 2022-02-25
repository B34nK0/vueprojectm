import instance from "./axios";

const service = "";

const GetCoursePlayUrl = async (reqData) => {
  const { data } = await instance.post(`${service}/mall-server/course/getOpenVideoPlayUrl`, reqData);
  return data;
};


const GetTrainingCampVideoPlayUrl = async (reqData) => {
    const { data } = await instance.post(`${service}/training-camp-server/api/anchor/getOpenVideoPlayUrl`, reqData);
    return data;
    // const { data } = await axios.post(`${service}/training-camp-server/`, {
    //     reqData
    // });
    // return data;
  };

  export default{
      GetCoursePlayUrl,
      GetTrainingCampVideoPlayUrl
  }