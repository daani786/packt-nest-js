# packt-nest-js

run docker
add 192.168.139.129 packt_nest_js.local in hosts file in windows system
open packt_nest_js.local in browser
output will be "Hello World from Node.js!"

open its terminal
install nest cli 
/packt_nest_js # npm i -g @nestjs/cli
check nest version
/packt_nest_js # nest -v
11.0.23

remove index.js and package.json before install nest project
that is only for making docker work and its checking

install nest project in current folder which is code folder on host machine
/packt_nest_js # nest new .


------------------------

Add new controller
/packt_nest_js # nest g controller products --no-spec

Add new provider / service
/packt_nest_js # nest g service products --no-spec

Add new module
/packt_nest_js # nest g module products --no-spec