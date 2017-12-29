# t <small>a twitter client</small>
**t** is a command line tool for Twitter and is easy to install. I've used it for over a year and it makes Twitter tolerable again. [Here is the repository]().

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
Once Ruby is installed, install the t gem.
```
gem install t
```
You'll need to authenticate your Twitter user by registering t as app that can access your user via the API. That's done [here](https://apps.twitter.com/).
