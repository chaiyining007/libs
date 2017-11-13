# Libs
>     零散的工具函数，独立业务场景，几乎不可能用到全部的函数
>     建议：单独引用，import 函数名 from 'libs/src/文件名'

## queryString
```js
import queryString from 'libs/src/queryString'

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
```js
import cookie from 'libs/src/cookie'

//写入cookie
cookie("key","value");

//取值
cookie("key");

//取一堆值
cookie(["key1","key2","key3"]);//{key1:"value",key2:"value",key3:"value"}
```

## localStorage，sessionStorage
> sessionStorage用法与 localStorage一致

```js
import
{
  local_storage,
  remove_local_storage_item,
  clear_local_storage
} from 'libs/src/localStorage'

//写入
local_storage("key","value");

//取值
local_storage("key");

//删除某一项
remove_local_storage_item("key");

//清空
clear_local_storage();
```

## imgLoad
> 图片加载回调
```js
import imgLoad from 'libs/src/imgLoad'

imgLoad('URL',()=>{
  console.log(this)
});
```

## XMLToJson


```js
import {Create} from 'libs/src/XMLToJson'

const xmlstr=`
<?xml version="1.0" encoding="UTF-8"?>
<PostResponse>
  <Bucket>Bucket</Bucket>
  <Location>Location</Location>
  <Key>Key</Key>
  <ETag>ETag</ETag>
</PostResponse>`;

const xmlstr2=`
<?xml version="1.0" encoding="UTF-8"?>
<PostResponse>
  <Bucket>Bucket2</Bucket>
  <Location>Location2</Location>
  <Key>Key2</Key>
  <ETag>ETag2</ETag>
</PostResponse>`;
const xml = Create(xmlstr);
/*
{
  xmlstr:`同xmlstr`,
  jsonObj:{
    PostResponse:{
      Bucket:{
        'text':'Bucket'
      },
      ETag:{
        'text':'ETag'
      },
      Key:{
        'text':'Key'
      },
      Location:{
        'text':'Location'
      },
    }
  }
}
*/

console.log(xml.jsonObj);

xml.xmlstr = xmlstr2;

/*
{
  xmlstr:`同xmlstr`,
  jsonObj:{
    PostResponse:{
      Bucket:{
        'text':'Bucket2'
      },
      ETag:{
        'text':'ETag2'
      },
      Key:{
        'text':'Key2'
      },
      Location:{
        'text':'Location2'
      },
    }
  }
}
*/

console.log(xml.jsonObj);
```

## OSSAjax
> oss上传文件用的ajax

```js
import ajax from 'libs/src/OSSAjax'

/**
 * 往oss上传用的ajax
 *
 * @param      {String}     action      上传地址，默认//cyn-test.oss-cn-hangzhou.aliyuncs.com
 * @param      {String}     filename    默认："file"
 * @param      {File}       file        文件域
 * @param      {Object}     data        参数{
 *                                          key:"保存到oss的文件名",
 *                                          OSSAccessKeyId:"",
 *                                          policy:"",
 *                                          Signature:""
 *                                         }
 * @param      {Function}   onProgress  进度回调
 * @param      {Function}   onError     异常回调
 * @param      {Function}   onSuccess   成功回调
 * @param      {Object}     headers     不解释
 */
ajax({
  data: oss_config,
  action: action,
  file: file,
  filename: this.file_key,
  onSuccess: (data) => {
    
  },
  onError: (error, data) => {
    
  },
  onProgress: (e) => {
   
  }
});
```

## fileToBase64
> 文件转base64
```js
import file_to_base64 from 'libs/src/fileToBase64'

file_to_base64(document.getElementById('input_file'),base64 => {
  console.log(base64);
});
```

## dealImage
> 处理图像：等比降低图像质量 未裁剪

```js
import file_to_base64 from 'libs/src/fileToBase64'
import deal_image from 'libs/src/dealImage'

const max_size = 1024; //假设限制最大1M
const img_size = 2048; //假设当前图片2M，一般是file.size / 1024 除以1024是为了转成k

//先将上传域的图片base64
file_to_base64(document.getElementById('input_file'),base64 => {
  deal_image(base64 , max_size / img_size , base64 => {
    //压缩后的base64
    console.log(base64);
  });
});
```
## base64ToBlob
> base64编码转Blob
```js
// 一系列处理 可以 实现 前端压缩图片（仅压缩）,然后上传

import file_to_base64 from 'libs/src/fileToBase64'
import deal_image from 'libs/src/dealImage'
import base64ToBlob from 'libs/src/base64ToBlob'

const max_size = 1024; //假设限制最大1M
const img_size = 2048; //假设当前图片2M，一般是file.size / 1024 除以1024是为了转成k

//先将上传域的图片base64
file_to_base64(document.getElementById('input_file'),base64 => {
  deal_image(base64 , max_size / img_size , base64 => {
    //压缩后的base64
    console.log(base64);
    const block = base64.split(";");
    const contentType = block[0].split(":")[1];
    const realData = block[1].split(",")[1];
    const blob = b64toBlob(realData, contentType);
    console.log(blob);
    const formData = new FormData();
    formData.append('file_key',blob);
    const xhr = new XMLHttpRequest();
    xhr.open('post', '上传地址', true);
    xhr.send(formData);
  });
});
```
## emoji
> 包含2个方法：is_emoji_character，utf16_to_entities

## turnTime
> 时间差拆分
```js
import turnTime from 'libs/src/turnTime'

//这段创建时间的代码是demo，别模仿，渣渣浏览器可能new不出来的
const d1 = +new Date('2017-11-11 10:00:00');
const d2 = +new Date('2017-11-11 12:01:01');

/*
{
  d:0,
  h:2,
  m:1,
  millisecond:0,
  s:1
}
*/
turnTime(d2 - d1);

```
## base64
> base64加密解密

```js
import {encode,decode} from 'libs/src/base64'

encode('abcd');      // YWJjZA==
decode('YWJjZA==');  // abcd

encode(encodeURIComponent('加密中文'));   //JUU1JThBJUEwJUU1JUFGJTg2JUU0JUI4JUFEJUU2JTk2JTg3
decodeURIComponent(decode('JUU1JThBJUEwJUU1JUFGJTg2JUU0JUI4JUFEJUU2JTk2JTg3')) //加密中文
```

## getStrLength
> 中文2个字符，其他1个字符，计算字符串长度

```js
import getStrLength from 'libs/src/getStrLength'

getStrLength('中文');      // 4

getStrLength('English');  // 7
```

