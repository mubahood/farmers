import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
     Vue.axios.defaults.baseURL = "http://196.43.152.10/COOPERP/Mobile/";
    //Vue.axios.defaults.baseURL = "http://localhost:8080/amry/";
  },

  setHeader() {
    Vue.axios.defaults.headers.common["Authorization"] = `Token null`;
  },

  async query(resource, _params) {
    try {
      return Vue.axios.get(resource, {
        params: _params,
      });
    } catch (error) {
      throw new Error(error);
    }
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch((error) => {
      // console.log(error);
      throw new Error(`[KT] ApiService ${error}`);
    });
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return Vue.axios.delete(resource).catch((error) => {
      // console.log(error);
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  upload_file(resource, _params) {
    let formData = new FormData();
    for (var prop in _params) {
      formData.append(prop, _params[prop]);
    }
    return axios.post(resource, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default ApiService;
