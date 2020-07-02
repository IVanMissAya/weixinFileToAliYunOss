var fileHost = "阿里云OSS地址"
var config = {
  //aliyun OSS config
  uploadImageUrl: `${fileHost}`, //默认存在根目录，可根据需求改
  OSSAccessKeyId: 'AccessKey ID',
  AccessKeySecret: 'AccessKey Secret',
  timeout: 87600 //这个是上传文件时Policy的失效时间
};
module.exports = config