# Libs

## queryString
```
import queryString from 'queryString'

//单个参数
queryString("param");

//以哈希取，以哈希返回
queryString({
	param1:"默认值",
	param2:"默认值",
	param3:"默认值"
});

//以数组取，以数组希返回
queryString(["param1","param2","param3"]);
```

## cookie
```
import cookie from 'cookie'

//写入cookie
cookie("key","value");

//取值
cookie("key");
//取一堆值
cookie(["key1","key2","key3"]);//{key1:"value",key2:"value",key3:"value"}
```