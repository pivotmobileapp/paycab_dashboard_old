import ApiService from "./apiService";

async function updateConfig(token, configObj) {
  const apiObject = {};
  apiObject.method = "POST";
  apiObject.authentication = token;
  apiObject.endpoint = "api/admin/serverConfig";
  apiObject.body = configObj;
  const response = await ApiService.callApi(apiObject);
  return response;
}
async function getConfig(token) {
  const apiObject = {};
  apiObject.method = "GET";
  apiObject.authentication = token;
  apiObject.endpoint = "api/admin/serverConfigObj";
  const response = await ApiService.callApi(apiObject);
  return response;
}
export default {updateConfig, getConfig};
