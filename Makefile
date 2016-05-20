gh-pages:
	-git branch -D gh-pages
	git checkout -b gh-pages
	git reset --hard master
	npm install
	npm run build
	git add --all
	git commit -m "Update GH pages [skip ci]"
	git push origin --force gh-pages
