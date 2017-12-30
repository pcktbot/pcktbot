# Server

> These are snippets about server administration.

## Index

* 1
* 2
* 3

# Connect to a Remote Server

Login to a remote server instance with a known public address, user, port, and authentication method.

_**Note**: Windows users will have to translate some of these commands._

From the command line shell, tty, or console, send a login command via SSH.
```bash
ssh -i 'path/to/server.pem' user@hostname -p port
```
## SSH Syntax Notes

* '-p port' Specifying a port is only required if not using the default port.
* '-i' Omitting the identity file will prompt you for a password.
* 'hostname' Refer to the hostname by its public IP address, a public DNS endpoint, or a domain name.

There are a great deal more options. Type 'man ssh' for all the details.

# Update Installed **Yum** Packages

Use the yum package manager to update the installed packages for the host OS. There are lots of different package managers that often distribute the same code, and I don’t have much to say about which ones are better.

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
**Syntax Notes**

-y is not required, but prevents an interactive prompt from asking if you want to install available updates. Omit if you want to review the available updates.

# is the transaction number. Ex. sudo yum history undo 9.
