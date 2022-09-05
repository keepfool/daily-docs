# Tags

## List tags

```bash
git tag
```

List the versions of a certain series, such as the versions of 4.3 series.

```bash
$ git tag -l 'v4.3.*'
v4.3.0
v4.3.1
v4.3.2
v4.3.3
```

## Add tags

The tag is added for the last commit by default.

```bash
git tag v1.0.0
```

You can specify the commit id if you forget to tag a commit.

```bash
# 列出最近的commit信息
$ git log --pretty=oneline --abbrev-commit

3c32499 docs: Redux flow
cec8859 chore: remove pages
e4c72aa feat: redux and todo sample
c398d2c chore: package.json
201cbc4 feat: webpack alias
28cea51 docs: react-app-rewired
```

Add a tag to the commit id `cec8859`

```bash
git tag v1.0.1 cec8859
```

Create a tag with a description

```bash
git tag -a v1.0.0 -m "basic redux todo sample"
```

- The `-a` parameter is the first letter of the word `annotate`, use it to specify the tag name.
- The `-m` parameter specifies the corresponding tag description, which Git will save in the tag object along with it. If this option is not given, Git will launch text editing software for you to enter a tag description.

## View tags

```bash
$ git show v1.0.0
tag v1.0.0
Tagger: keepfool <crmug@outlook.com>
Date:   Wed Jul 4 09:43:12 2018 +0800

basic redux todo sample

commit cec8859f105e6fb8e363d347514a9e96b5b0c691 (tag: v0.1, tag: show)
Author: keepfool <crmug@outlook.com>
Date:   Mon Jul 2 17:57:28 2018 +0800
```

## Push tags to the remote

`git push` does not send tags to the remote server by default. You need to push the tag manually via the command `git push origin {tag_name}`:

```bash
git push origin v1.0.0
```

If you want to push all locally added tags at once, you can use the `--tags` option:

```bash
git push origin --tags
```

### Delete tags

```bash
# remove a local tag
git tag --delete {tag_name}
# remove a remote tag
git push origin :{tag_name}
# another approach of removing a remote tag
git push --delete origin {tag_name}
