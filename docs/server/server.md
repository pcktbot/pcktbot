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

# Configure Finder to Support bash
In macOS you have ready access to a bash shell through the Terminal app. However, it is often handy to have a GUI to organize lots of files. Finder is your goto, of course, but most command line files are hidden by default.

!> The OS will protect its system files, but installed packages for your user are fair game, and you could break an application by moving a directory.

Anyway, you can show all hidden files in Finder by updating its plist.
```bash
defaults write com.apple.finder AppleShowAllFiles YES
```
Then you need to relaunch Finder to the see the change. Option click the Finder icon in the dock or type `killall Finder` in Terminal. Finder is always running, so quitting it will immediately reload it.

## Syntax Notes
`defaults` is macOS's user preferences manager and it has a very flexible syntax. review `man defaults` for some detail.

`com.apple.finder` is the domain and you can usually find the key/value pair you write to it added to the `~/library/preferences/com.apple.finder.plist` file. In previous versions of the OS "Finder" needed to be capitalized.

`AppleShowAllFiles` this has been the flag for this setting for a long time. It accepts a boolean value, so takes `true` or `false` or `yes` or `NO` and maybe `1` and `0`. The capitalization does seem to matter here.

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
