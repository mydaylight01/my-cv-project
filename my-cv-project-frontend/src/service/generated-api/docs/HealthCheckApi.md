# HealthCheckApi

All URIs are relative to *api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthCheck**](HealthCheckApi.md#healthcheck) | **GET** /health/health-check |  |



## healthCheck

> HealthCheckResponse healthCheck()



### Example

```ts
import {
  Configuration,
  HealthCheckApi,
} from '';
import type { HealthCheckRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthCheckApi();

  try {
    const data = await api.healthCheck();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

