# Git Basics

## Install git on macOS

```bash
brew install git
```

Verify the installation

```bash
git version
```

## Generate SSH Key

### Command

Default usage

```bash
ssh-keygen -t rsa -C "xxx@domain.com"
```

Can specify the following paramters

- `-f`: file name
- `-t`: encryption algorithm
- `-b`: key size
- `-C`: comment

```bash
# file name is github_id_rsa
# encrypted with rsa
# key size is 4096
# use the email as comment
ssh-keygen -f ~/.ssh/github_id_rsa -t rsa -b 4096 -C "xxx@domain.com"
```

### Set SSH Key in Github

Copy the public key to github, the pbcopy command is available under mac OS.

```bash
cat ~/.ssh/github_id_rsa.pub | pbcopy
```

### Multiple identity files

If you are using multiple git hosts, such as github.com and bitbucket.org, then you can set different hosts in the `~/.ssh/config` file.

```bash
host github.com
  User git
  Hostname github.com
  IdentityFile ~/.ssh/github_id_rsa

host bitbucket.org
  User git
  Hostname bitbucket.org
  IdentityFile ~/.ssh/bitbucket_id_rsa
```

## References

To know about ssh-keygen, you can read the docs here: [ssh-keygen](https://www.ssh.com/ssh/keygen/)
