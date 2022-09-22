# Multiple github accounts

## Create SSH keys

As Github no longer support SHA1 keys, we have to generate a new key with a different algorithm.

Create SSH Key with `ED25519` algorithm

```bash
ssh-keygen -t ed25519 -C "user1 email"
ssh-keygen -t ed25519 -C "user2 email"
```

## Edit SSH config

Open `~/.ssh/config`

```bash
# user1 account
Host github.com-user1
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_ed25519_user1
   IdentitiesOnly yes

# user2 account
Host github.com-user2
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_ed25519_user2
   IdentitiesOnly yes
```

Replace `user1` or `user2` with your GitHub usernames.

## Clone repos

```bash
# clone the repo under the user1 account
git clone git@github.com-user1:user1/your-repo-name.git
# clone the repo of the organization where user1 is located 
git clone git@github.com-users:org/org-repo-name.git
```

## References

- [Improving Git Protocol Security Github](https://github.blog/2021-09-01-improving-git-protocol-security-github/)
- [Handling Multiple Github Accounts on MacOS](https://gist.github.com/Jonalogy/54091c98946cfe4f8cdab2bea79430f9)