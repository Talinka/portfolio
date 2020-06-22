dev:
	npm start

build:
	npm run build

start:
	npm run start

deploy: build deploy/deploy.sh deploy/README.md
	sh deploy/deploy.sh

.PHONY: build start dev deploy