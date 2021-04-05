start:
	docker-compose up -d

down:
	docker stop nodecli && docker rm nodecli && docker stop nodeserv && docker rm nodeserv
	docker-compose down

stop:
	docker-compose stop

shellCli:
	docker exec -it --user="1000" nodecli bash

shellServ:
	docker exec -it --user="1000" nodeserv bash

upCli:
	docker-compose up nodecli

stopCli:
	docker-compose stop nodecli

upCli123:
	docker-compose run --rm --user="1000" nodecli npm run start

startBash:
	docker-compose run --rm --user="1000" -p 4000:4000 nodeserv bash
startBnE:
	docker-compose up mongo && docker-compose up mongo-express
