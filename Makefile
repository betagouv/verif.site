
install: install-front install-import

install-import:
	(cd import && npm install)

install-front:
	(cd front && npm install)

test: install lint

lint: lint-front

lint-front:
	(cd front && npm run lint)

import:
	node ./import/index.js

deploy:
	(cd front && ./deploy.sh)

start:
	(cd front && npm start)
