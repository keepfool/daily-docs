
# Git Branches

## Rename a branch

Rename the current branch name

```bash
git branch -m new_name
```

Or else

```bash
git branch -m old_name new_name
```

The name of the local branch has been changed, but the remote branch name is not changed yet. 
You have to delete the old remote branch first, then push the new branch.

```bash
# delete the old remote branch
git push origin :old_name
# push the new branch
git push origin new_name
```

Reference: [change-a-branch-name-in-a-git-repo](https://stackoverflow.com/questions/3866951/change-a-branch-name-in-a-git-repo)

## Create a branch

Each branch should be created with a base branch, use the `git checkout -b [branch_name]` to create a new branch.

If you are on the main branch, the following command will create a `docs` branch based on the `main` branch.

```bash
git checkout -b docs
```

## Push a branch to the remote

Push your local main branch changes to the remote.

```bash
git push origin main
```

Force push

```bash
git push origin main --force
```

## Delete a branch

delete a local branch

```bash
git branch -d branch_name
git branch -D branch_name
```

:::warning Note
The `-d` option is an alias for `--delete`, which only deletes the branch if it has already been fully merged in its upstream branch. You could also use `-D,` which is an alias for `--delete --force`, which deletes the branch "irrespective of its merged status."
:::

Delete a remote branch

```bash
git push origin --delete {the_remote_branch}
```
