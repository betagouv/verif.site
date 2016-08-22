
install: install-front install-import

install-import:
	(cd import && npm install)

install-front:
	(cd front && npm install)

test: install lint test-front

lint: lint-front

lint-front:
	(cd front && npm run lint)

importData:
	(node ./import/index.js)

deploy:
	(cd front && ./deploy.sh)

start:
	(cd front && npm start)

test-front:
	(cd front && npm test)
