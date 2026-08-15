import axios from "axios";

export const axiosInstance = axios.create({
  // url은 데이터 요청을 할 때 사용될 기본 URL을 설정하는 속성 값이다.
  baseURL: "http://localhost:3000",
  // 5초동안 끝나지 않으면 자동으로 에러를 발생시키는 속성이다.
  timeout: 5000,

  // axios는 기본 content-type이 application/json이다.
  headers: {
    "Content-Type": "application/json",
  },
});
