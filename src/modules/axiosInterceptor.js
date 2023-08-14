// axiosInterceptor.js
import axios from 'axios';
import store from '../store';
import { saveResponseData } from './authActions';


const authApi = axios.create({
  baseURL: 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app', // API 기본 URL 설정
  timeout: 5000,
});

// 요청 인터셉터 설정
authApi.interceptors.request.use(async (config) => {
  const accessToken = store.getState().auth.accessToken
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 응답 인터셉터 설정
// 응답 인터셉터 설정
authApi.interceptors.response.use(
    response => response, //그대로 response로 내보냄
    async error => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem('refToken'); // 리프레시 토큰 가져오기
      if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
        originalRequest._retry = true;
  
        try {
          // 리프레시 토큰으로 새로운 엑세스 토큰 발급 받기
          const refreshResponse = await noAuthApi.post('/accounts/auth/refresh/', {
            refresh: refreshToken
          });
          
          // 리덕스 스토어에 엑세스 토큰 저장
          store.dispatch(saveResponseData(refreshResponse.data.access));
          alert(refreshResponse.data)
          // 변경된 토큰을 요청 헤더에 추가하여 재시도
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
          return noAuthApi(originalRequest);
        } catch (refreshError) {
            alert("401 갱신 실패")
          // 리프레시 토큰 갱신 실패 시 로그아웃 등의 처리
          // 예: store.dispatch(logoutAction());
          return Promise.reject(refreshError);
        }
      }
     
      if (error.response.status === 403) {
        try {
          // 리프레시 토큰으로 새로운 엑세스 토큰 발급 받기
          const refreshResponse = await noAuthApi.post('/accounts/auth/refresh/', {
            refresh: refreshToken,
          });
  
          // 리덕스 스토어에 엑세스 토큰 저장
          store.dispatch(saveResponseData(refreshResponse.data.access));
  
          // 변경된 토큰으로 원래 요청 재시도
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
          return noAuthApi(originalRequest);
        } catch (refreshError) {
          alert('403 갱신 실패');
          return Promise.reject(refreshError);
        }
      }
  
      return Promise.reject(error);
    }
  );

const noAuthApi = axios.create({
    baseURL: 'https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app', // API 기본 URL 설정
    timeout: 5000,
  });

noAuthApi.interceptors.response.use(
    response => response,
    async error => {
      // 에러 처리 로직
      return Promise.reject(error);
    }
  );
  
  
export {authApi, noAuthApi};
