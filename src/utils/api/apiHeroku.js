import { get, post, put } from './base/index';

export default {
    getEmployesById: (data) => {
        const params = { ...data };
        return get('http://localhost/api/employee/company/FGCkznJKzGw178rt0Lcx', { params });
    },
    getEmployesByCompany: url => get('https:/minowells.herokuapp.com/api/employee/company/FGCkznJKzGw178rt0Lcx')
};