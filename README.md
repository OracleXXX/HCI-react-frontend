### 安装 
```npm install```

### 运行
```npm run start```

### 部署

#### 1. 登录远程docker仓库

```bash
$ docker login --username=xueguanxiong@gmail.com registry-intl.us-west-1.aliyuncs.com

# <username>xueguanxiong@gmail.com</username>
# <password>TalentisTF313</password>
```

#### 2. 打包并且上传到远程docker仓库

```bash
npm auto-package
# 运行脚本和package json已经写好auto-package
```

#### 3. ec2操作

```bash
$ sudo su
$ docker-compose pull
$ docker-compose down  
$ docker-compose up -d 
```
