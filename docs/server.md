# Server

> These are snippets about server administration.

# Connect to a Remote Server

Login to a remote server instance with a known public address, user, port, and authentication method.

_**Note**: Windows users will have to translate some of these commands._

From the command line shell, tty, or console, send a login command via SSH.
```bash
ssh -i 'path/to/server.pem' user@hostname -p port
```
## SSH Syntax Notes

* `'-p port'` Specifying a port is only required if not using the default port.
* `'-i'` Omitting the identity file will prompt you for a password.
* `'hostname'` Refer to the hostname by its public IP address, a public DNS endpoint, or a domain name.

There are a great deal more options. Type `'man ssh'` for all the details.

# Update Installed yum Packages

Use the `yum` package manager to update the installed packages for the host OS. There are lots of different package managers that often distribute the same code, and I don’t have much to say about which ones are better.

Update installed packages
```bash
sudo yum update -y
```
Review your yum command history.
```bash
sudo yum history
```
The transactions are numbered. Undo an package update via history.
```bash
sudo yum history undo 9 // '9 being the transaction number'
```
## yum Syntax Notes

`-y` is not required, but prevents an interactive prompt from asking if you want to install available updates. Omit if you want to review the available updates.

`'#'` is the transaction number. Ex. `sudo yum history undo 9`.

# t <small>a twitter client</small>
t is a command line tool for Twitter and is easy to install. I've used it for over a year and it makes Twitter tolerable again. [Here is the repository]().

You need Ruby first.
```
ruby -v
```
If you don't get a version number, you need to install Ruby. On my Mac, I installed Ruby via Homebrew.
```
brew install ruby
```
However, you'll need [Homebrew]() first. It's worth it.
```
brew -v
```
You know where this is going. Homebrew is a package manager. To install, type
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Once Ruby is installed, install the `t` gem.
```bash
gem install t
```
You'll need to authenticate your Twitter user by registering `t` as app that can access your user via the API. That's done [here](https://apps.twitter.com/).

## t Syntax Notes
After you install and add access to your Twitter account through the API, you have lots of commands at your disposal.

`t update "Here is my example tweet."` Update is a tweet.

`t stream timeline` view your twitter feed. `t timeline` displays a static list of your feed's most recent tweets.

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
