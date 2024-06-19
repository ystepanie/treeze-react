import axios from 'axios';

// axios 인스턴스 생성
const instance = axios.create({
    baseURL: 'http://127.0.0.1',
    timeout: 1000, // 요청 타임아웃 설정 (ms)
    headers: { 'Content-Type': 'application/json' },
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    config => {
        // 토큰을 로컬 스토리지에서 가져오기
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken && refreshToken) {
            config.headers.Authorization = `${accessToken}`;
            config.headers.RefreshToken = `${refreshToken}`;   
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
    response => {
        // 응답 데이터를 그대로 반환
        return response;
    },
    error => {
        if (error.response && error.response.status === 401) {
            // 미인증 오류 처리
            // 로그아웃 처리, 로그인 페이지로 리다이렉트
            console.error('Unauthorized, logging out ...');
            // 로그아웃 처리 코드 (예: 토큰 삭제)
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            // 로그인 페이지로 리다이렉트
            navigate('/');
        }
        return Promise.reject(error);
    }
);

export default instance;
