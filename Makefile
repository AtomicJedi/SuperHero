start:
	docker-compose up -d

down:
	docker stop nodecli && docker rm nodecli && docker stop nodeserv && docker rm nodeserv
	docker-compose down

stop:
	docker-compose stop

shellcli:
	docker exec -it --user="1000" nodecli bash	

shellserv:
	docker exec -it --user="1000" nodeserv bash	