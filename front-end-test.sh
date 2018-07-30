#!/bin/sh
#
# Note runlevel 2345, 86 is the Start order and 85 is the Stop order
#
# chkconfig: 2345 86 85
# description: Description of the Service
# sudo cp universob-salao.sh /etc/init.d/universob-salao
# chmod a+x /etc/init.d/universob-salao
# chkconfig --add universob-salao
#
# Below is the source function library, leave it be
. /etc/init.d/functions

# result of whereis forever or whereis node
export PATH=$PATH:/usr/local/bin
# result of whereis node_modules
export NODE_PATH=$NODE_PATH:/usr/local/lib/node_modules


start(){
        NODE_ENV=production forever start /home/projetos/universob/universo-b-salao/server.js
}

stop(){
        forever stop /home/projetos/universob/universo-b-salao/server.js
}

restart(){
        NODE_ENV=production forever restart /home/projetos/universob/universo-b-salao/server.js
}

case "$1" in
        start)
                echo "Start service SERVICE_NAME"
                start
                ;;
        stop)
                echo "Stop service SERVICE_NAME"
                stop
                ;;
        restart)
                echo "Restart service SERVICE_NAME"
                restart
                ;;
        *)
                echo "Usage: $0 {start|stop|restart}"
                exit 1
                ;;
esac