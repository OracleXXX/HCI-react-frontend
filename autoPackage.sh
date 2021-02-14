docker build -t hci-frontend:1.0 .
docker images
id=$(docker images |grep "hci-frontend" |awk '{print $3}')
docker tag "$id" registry-intl.us-west-1.aliyuncs.com/oralcex/mypro:30.0.0
docker push  registry-intl.us-west-1.aliyuncs.com/oralcex/mypro:30.0.0
