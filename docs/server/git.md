# Generate SSH Key to Use with Github

To use Github to deploy files to a remote server, you need to configure it for secure access. This method covers generating a new ssh key rather than using an existing one. These directions from Github cover starting down that path.

Note: You will need a Github account and know the email associated with it.

## Generate a new SSH key

```bash
ssh-keygen -t rsa -b 4096 -C "email@domain.com"
```
- Enter an identity name (if different than default).
- Enter a passphrase (optional?).
- You’ll get a formal response including a little piece of art.

Start the `ssh-agent`.
```bash
eval "$(ssh-agent -s)"
```
Add access for your new identity (its name, not .pub file).
```bash
ssh-add ~/.ssh/key_name
```
Copy the public key to your clipboard (or use the app that Github covers).
```bash
cat ~/.ssh/your-id.pub
```
- Select the text and copy (command C on the Mac).
- In a browser, navigate to your settings after logging into your Github account.
- Go to SSH and GPG Keys then add new SSH key.
- Add a descriptive name and paste the text you copied.

?> Success!

## Other git Links

[Using Git to Manage a Live Site]()

[Generating a new SSH Key]()

[Adding a new SSH to Your Github account]()

# Basic git Commands

Commit the current state of repository to the configured branch.

!> _**Note**: I am still learning the terms and workflows._

## Add, Commit, Push

From the local project root directory, add the current contents to the repository.
```bash
git add .
```
When you are staging a commit, you can add all files (like above) or you can add specific files or directories. I have found this useful if I am in the middle of reworking something, but need to make a quick change to an existing file.

Then commit the changes to the repository with comment.
```bash
git commit -am "Commit Description"
```
Then push the updated repository to the branch.
```bash
git push
```
Compare the uncommitted versions of the file to the committed ones.
```bash
git diff {{filename(optional)}}
```
Pull the current version of the repository to your local cloned one.
```bash
git pull
```

## Also try these

Copy repository files to your local system.

`git clone {{http://path/to/repo.git}}`

Show a history of activity.

`git log`

See uncommitted changes, current branch, etc.

`git status`

## Branch, Origin, Merge
Change how you connect to remote repository. From HTTPS to SSH and back again.
```bash
git remote set-url origin {{git@github.com:path/to/repo.git}}
```
This sets the urls for both fetch and push. View the current settings with just `git remote origin`.
