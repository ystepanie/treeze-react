import axios from 'axios';

// axios 인스턴스 생성
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8181',
    timeout: 1000, // 요청 타임아웃 설정 (ms)
    headers: { 'Content-Type': 'application/json' },
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    config => {
        // 토큰을 로컬 스토리지에서 가져오기
        const accessToken = localStorage.getItem('x-token');
        const refreshToken = localStorage.getItem('x-refresh-token');
        if (accessToken && refreshToken) {
            config.headers['x-token'] = `Bearer ${accessToken}`;
            config.headers['x-refresh-token'] = `${refreshToken}`;   
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
            localStorage.removeItem('accessToken');
            // 리프레시 토큰을 조회하여 엑세스 토큰 재발급 처리
            console.error('Unauthorized, logging out ...');
            // 리프레시 토큰도 만료일 경우 로그아웃 처리 및 로그인 페이지 이동
        }
        return Promise.reject(error);
    }
);

export default instance;
