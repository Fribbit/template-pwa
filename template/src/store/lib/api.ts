// import { BaseURLBackEnd } from '../../utils/settings'

// export const api = <T, K>(method: string, path: string, body: any = null, fileupload: boolean = false, absoluteURL: boolean = false): Promise<T & ApiErrorResult<K> & ApiWarningResult<K>> => {
//     const baseAddress = BaseURLBackEnd;

//     const headers = new Headers();
//     headers.append('Accept', 'application/json');
//     // headers.append('Authorization', `Bearer ${getAccessToken()}`);
//     if (!fileupload) headers.append('Content-Type', 'application/json');

//     return fetch(absoluteURL ? path : baseAddress + "/" + path, {
//         method: method,
//         headers,
//         body: body !== null ? (fileupload ? formData(body) : JSON.stringify(body)) : undefined
//     })
//         .then(response => {
//             return new Promise<T & ApiErrorResult<K> & ApiWarningResult<K>>((resolve, reject) => {
//                 if (response.status < 400) {
//                     setTimeout(() => {
//                         resolve(response.json());
//                     }, process.env.NODE_ENV === 'production' ? 0 : 500)
//                 } else {
//                     response.text().then(errorMessage => {
//                         try {
//                             const s = JSON.parse(errorMessage);
//                             if (s.message)
//                                 reject(s.message);
//                             else
//                                 reject(errorMessage);
//                         } catch (e) {
//                             reject(errorMessage);
//                         }
//                     })
//                 }
//             })
//         })
// }

// const formData = (file: File): FormData => {
//     let formData = new FormData();
//     formData.append('file', file);
//     return formData;
// }

// interface ApiErrorResult<T> {
//     error: string,
//     result: T
// }

// interface ApiWarningResult<T> {
//     warning: string,
//     result: T
// }