## Setup express
`yarn global add express-generator` 

## Setup ejs and views
`express --view=ejs --git`

## Setup nodemon and add to path
`yarn add nodemon`
``` add this to user/xxx/.bash_profile where xxx is user name 
export PATH="$(yarn global bin):$PATH"
``` 
## Git commands
### setup repository in github.com
```
1. on github.com, click on "+" (right corner) for a new repository 
2. name the repository
3. leave the default "public" radio button checked
4. skip the "initialize this repository with a README"
5. press "CREATE REPOSITORY" button
6. copy the HTTPS link which in this case is https://github.com/vsprakash2003/Nodejs_playground.git
```

### to create develop branch
```git commands
git init
git checkout -b origin/develop
git add .
git commit -m "first commit"
git push -u origin origin/develop
```
### to commit to develop branch
```git commands
git init
git add .
git commit -m "second commit"
git remote add origin https://github.com/vsprakash2003/Nodejs_playground.git
git push -u origin develop 
```
### for approving pull request and merging to master branch
``` PR instructions
click on Pull requests tab in github. If there is a PR waiting for approval you will see one
If there are merge conflicts, tell the committer(s) to pull develop again and review from beginning when they are finished
merge pull request via GitHub online interface. select "squash and merge" in the dropdown
```

### for merging develop branch to master
```git commands
git rebase origin/master
perform the pull request steps from develop branch as detailed above to merge to master
