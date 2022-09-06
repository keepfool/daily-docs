# Git Logs

`git log` is used to view the commit history.
Run the `git log` command without any parameters under a git repo, you will see a commit history similar to the below.

```bash
$ git log
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

    removed unnecessary test

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    first commit
```

::: tip
Use `git log` without any parameters will list all updates by commit time, the latest updates are on the top. As you can see, the `git log` command lists SHA-1 checksum, author's name and email address, commit time, and commit description of each commit.
:::

## Parameters

You can specify some parameters after the `git log` command.

Option<div style="width:160px" />             | Description
--------------- | ------------------------------------------------------------------
-p              | Shows the differences between each commit in patch format.
--stat          | Shows file changes statistics for each commit.
--shortstat     | Shows file changes statistics for each commit in short.
--name-only     | Only show the changed file names.
--name-status   | Shows the changed file names with new, modified or deleted status.
--abbrev-commit | Show the first few characters of SHA-1 commit id, instead of the full commit id which length is 40.
--relative-date | Use a shorter relative time display (eg, "2 weeks ago").
--graph         | Shows the branch merge history in an ASCII graphics.
--pretty        | Display historical commit information in a pretty format.

## Pretty the log

You can specify the `--pretty` parameter to pretify the log output.

```bash
git log --graph --pretty=format:'%C(yellow)%h%Creset -%C(green)%d%Creset %s %Cblue(%cr) %C(bold red)<%an>%Creset' --abbrev-commit --
```

The command is verbose, but you can set a shortcut vai `git config`.

```bash
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"
```

Then you can use the `git lg` to show the pretified logs.

## View logs in a specified date

View logs sinces two weeks ago

```bash
git log --since=2weeks
```

View logs between the date `2018-04-01` and `2018-05-01`

```bash
git log --since="2018-04-01" --before="2018-05-01" --oneline
```
