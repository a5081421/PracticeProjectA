# 使用 Docker 建立 json-server

##### 使用步驟

1. 新增 Dockerfile

        FROM node:latest

        RUN npm install -g json-server

        WORKDIR /data
        VOLUME /data

        EXPOSE 3000
        ADD run.sh /run.sh
        ENTRYPOINT ["bash", "/run.sh"]
        CMD []

2. 新增 run.sh（用來執行 json-server 指令 ）

        #!/bin/bash

        args="$@"

        args="$@ -p 3000"

        file=/data/db.json
        if [ -f $file ]; then
            echo "Found db.json, trying to open"
            args="$args -w db.json"
        fi

        file=/data/routes.json
        if [ -f $file ]; then
            echo "Found routes.json, trying to open"
            args="$args -r routes.json"
        fi

        json-server $args
        # running in background
        # json-server $args >> ./json-server.log 2>&1 </dev/null &
        # /bin/bash

3. 建立Docker images

        docker build -t json-server/server:latest .

4. 在 Docker 中執行 json-server

        docker run -d -ti --name rest-server -p 3000:3000 -v [要分享的資料夾的絕對路徑]:/data json-server/server

##### Tips.

1. 查詢、停止及移除 Docker process

        docker ps
        docker stop rest-server
        docker rm -v $(docker ps -a -q)

2. 查詢、移除 Docker images

        docker images
        docker rmi $(docker images -q)

3. 更改標籤

        docker images
        docker tag [IMAGE ID 或是 舊的REPOSITORY:TAG] json-server/server:latest
