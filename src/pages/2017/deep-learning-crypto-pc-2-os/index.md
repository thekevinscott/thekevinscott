---
path: "/deep-learning-cryptocurrency-pc-2-os/"
date: "2017-10-06T09:00:00.000Z"
title: "Building a Deep Learning / Cryptocurrency PC (#2): The OS"
image: "cover.jpeg"
tags: ["cryptocurrency", "artificial intelligence", "ubuntu", "pc"]
---
Among the buzzwords in the tech world of 2017, two tower above the rest: **deep
learning** and **cryptocurrencies**. It seems that everyone I know (in tech)
wants to learn these things. And guess what — so do I! So much so that I'm
building my own computer in order to facilitate that learning.

What follows are my notes-to-self as I build a computer to learn about deep
learning and cryptocurrency mining. [In the previous installment we discussed
assembling the hardware.
](https://medium.com/@thekevinscott/noobs-guide-to-custom-computer-for-cryptocurrency-and-deep-learning-7caa255adfaf)In
this installment I'll talk about choosing and installing the OS, configuring it
and making sure the hardware is working, and some basic OS security.

<iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/96fcab/?as_embed"></iframe>
<hr />

# The operating system

Last time we left off immediately after assembling our computer. Our computer
came without an operating system, so the next step is to choose and install one.

I chose Ubuntu Desktop. Lots of the tutorials I see for deep learning are
written for Ubuntu, and I'm comfortable with Linux. Windows also seems to have
plenty of support but I'm not nearly as familiar with the MS ecosystem.

[I don't think
it](https://www.quora.com/What-are-the-most-popular-linux-distros-for-deep-learning-research)
[matters a ton which OS you
choose](https://bitcointalk.org/index.php?topic=166986.0); [most of what you'll
be using it for is
platform-agnostic](https://forums.servethehome.com/index.php?threads/best-os-and-software-for-machine-learning-and-deep-learning.15890/).

The big thing to keep an eye out for is CUDA support. [Luckily, most of the
operating systems (Windows, Linux and
Mac)](http://nvidia.custhelp.com/app/answers/detail/a_id/2135/~/which-operating-systems-are-supported-by-cuda?)
are supported. So don't go choosing some crazy new-fangled OS nobody's heard of!

So, the conclusion: Pick a Linux distro, Ubuntu unless you're familiar with
Linux and comfortable with the command line, or pick Windows and go find
yourself [another
tutorial](https://www.lifewire.com/cryptocoin-mining-for-beginners-2483064).

## Installing

Once you've chosen your OS, the first step is to burn an image of the distro to
a USB stick. [Ubuntu provides a very straightforward
tutorial](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0).
Once you've got that, you'll restart your computer and reboot from USB.
Instructions on doing this differ depending on the motherboard so read your
manual; for me, I had to restart holding down F10.

You then will run through the OS installation, of which plenty of guides exist
on the internet.

Now at some point, this being a computer you assembled from scratch, it's likely
you'll run into problems. For me, I had a hell of a time getting my display to
come on and stay on. I'm still not 100% sure why. Assuming your hardware differs
from mine, your problems are likely to be unique to you. Don't panic. Google is
your friend, and it's likely that any problem you run into, others have run into
too.

The problems I struggled with:

* I had a hell of a time getting the display to work. Turning `acpi=off` in the
grub bootloader, [as described
here](https://askubuntu.com/questions/861743/installation-of-ubuntu-16-04-from-a-usb-drive-freezes),
helped me ([here's how to persist settings in the grub
bootloader](https://www.howtogeek.com/196655/how-to-configure-the-grub2-boot-loaders-settings/)).
The computer may struggle to figure out which graphics card (the built-in one,
or one of the GPUs) to use for the monitor as well. [Here's some more info on
](https://ubuntuforums.org/showthread.php?t=1613132)`acpi`[.](https://ubuntuforums.org/showthread.php?t=1613132)
* My ethernet didn't work out of the box. [This guide does a good
rundown](http://www.ubuntugeek.com/ubuntu-networking-configuration-using-command-line.html)
of Ubuntu internet issues, and [this guide by
dataw0lf](https://ubuntuforums.org/showthread.php?t=25557) was a godsend.
* [How to install nvidia
drivers](http://www.linuxandubuntu.com/home/how-to-install-latest-nvidia-drivers-in-linux)
once you have internet.
* Wait, did I install a 32-bit or 64-bit distro? [Here's how to
tell.](https://unix.stackexchange.com/questions/12453/how-to-determine-linux-kernel-architecture)

Just keep at it, and don't hesitate to ask the community if you're wrestling
with a particularly thorny issue. They're plenty friendly, so long as you've
done your homework beforehand!

# System Diagnosis

Now we're booting into Linux and we've got the basics installed. As my next
step, I want to check that the hardware is all running correctly and there's
nothing out of the ordinary. To check that, I learned about a few good tools on
Linux. You may have to install a few of these, if something is missing try
installing it with:

`sudo apt-get install xxxxx`

## System-wide commands

`lshw` is used to **list hardware**. This will dump out a ton of information in
your system.

`inxi` is another good one. Here's my `inxi -Fx` output:

<span class="figcaption_hack">inxi -Fx</span>

Let's step through component by component and run a sanity check to make sure
everything is working.

## CPU

There's a few commands you can use to get more information on your CPU:

`cat /proc/cpuinfo`prints out information on your CPU. [Here's a good Stack
Overflow
thread](https://unix.stackexchange.com/questions/146051/number-of-processors-in-proc-cpuinfo)
going into more detail on what this output means.

<span class="figcaption_hack">cat /proc/cpuinfo</span>

`lshw` will list out all hardware, and the CPU section has some relevant
information:

<span class="figcaption_hack">lshw</span>

`lscpu` will give you some more CPU-specific information, including MHz and
cache information:

<span class="figcaption_hack">lscpu</span>

These commands are great if you're familiar with the ins and outs of hardware,
but I barely have a clue what I'm looking at. I just want to know if the CPU is
working or not.

For that, `top` and `htop` will do the trick.

`top`:

![](https://cdn-images-1.medium.com/max/800/1*zlUXYjZbjuJFbzFwRIxDIQ.png)
<span class="figcaption_hack">Output from `top`</span>

And to get more graphical, use `htop`:

<span class="figcaption_hack">Output from htop</span>

[This
article](http://www.deonsworld.co.za/2012/12/20/understanding-and-using-htop-monitor-system-resources/)
does a pretty deep dive into `htop`. To ensure I'm getting 100% throughput on
each of the cores, this article at
[peteris.rocks](https://peteris.rocks/blog/htop/#load-average) does a good job
explaining how:

> If you run `cat /dev/urandom > /dev/null` which repeatedly generates random
> bytes and writes them to a special file that is never read from, you will see
that there are now two running process.

Running this gets me to 100.0% on all cores. I'm not 100% sure this is a valid
test of the CPU but it seems good enough for me.

## Hard Drive

Running `lsblk` prints information about hard drive partitions and other storage
devices. Running that gives me:

![](https://cdn-images-1.medium.com/max/800/1*7TFaMOHq7OohkB0X-ZW7WQ.png)
<span class="figcaption_hack">lsblk</span>

Which is roughly the size I expect. `df` is another one that gives you
information about hard drive space:

<span class="figcaption_hack">df</span>

## RAM

`free -m` will check the amount of RAM:

![](https://cdn-images-1.medium.com/max/800/1*zlk3wpJnoECxLDDh01e_-A.png)
<span class="figcaption_hack">free -m</span>

That doesn't look so good — I expected 16 GBs! Let's check `lshw`:

<span class="figcaption_hack">lshw</span>

This tells me I installed one of the RAM chips wrong. Time to break out the
screwdriver again.

## GPUs

`lspci` will give you information on PCI buses and devices in your system,
including your GPUs:

<span class="figcaption_hack">lspci</span>

Another command you can use is `nvidia-smi`:

<span class="figcaption_hack">nvidia-smi</span>

This gives you information like fan usage, temperature, memory-usage, and more
goodies.

## Cooling

Check CPU temperature with `sensors` :

<span class="figcaption_hack">sensors</span>

Between this and `nvidia-smi` above you should be able to get a good idea of
whether your cooling supply is adequate or not.

## Power

Is the system getting enough power? Short of [measuring the power between the
computer and the
electrical](https://askubuntu.com/questions/421955/software-to-find-desktop-power-usage),
I don't think there's a 100% software solution to find this out.

`powertop` is a utility that measures consumption. It seems like it's mostly
useful for laptops, but [there's some good info for desktops as Wayne points out
here](http://fsckin.com/2007/10/21/intel-powertop-not-just-for-laptops/).

Ultimately, making sure you have adequate power needs is something you should do
before assembling your system, either by checking
[pcpartpicker.com](https://pcpartpicker.com/) when choosing your parts or
[checking something like this
link](http://www.buildcomputers.net/power-consumption-of-pc-components.html)
(thanks Sean!). And if you can afford it leave yourself plenty of breathing room
in the watts department.

# Security

Having satisfied my worrywart side that everything is running smoothly, the next
step is to make sure we've configured our system following standard Linux
security procedures.

I'm going to be using this machine to practice deep learning (not too worried
about someone hacking this) and for mining cryptocurrencies (more concerned
about something hacking this!)

A good place to start is the [Basic Security guide hosted on Ubuntu
Wiki](https://wiki.ubuntu.com/BasicSecurity):

I assume you're familiar with the general Linux security procedures — strong
passwords, limited root access, that sort of thing. If not, spend some time
c[atching up on that](https://ubuntuforums.org/showthread.php?t=510812).

#### Automatic Security Updates

I'm lazy as sin and if there's one thing I hate it's manual security updates.
Luckily Ubuntu provides an automatic update mechanism:

I followed the “unattended-upgrades” package and it was a straightforward
process.

This will likely cause issues if I'm running deep learning simulations
overnight, but I can tackle that issue in the future. For now I'm erring on the
side of caution.

## Firewall

A firewall will allow you control over which ports are accessible publicly.
Generally you want the most restrictive policy you can stomach.

Here's the [Ubuntu wiki for
firewalls](https://wiki.ubuntu.com/BasicSecurity/Firewall) (*if you're noticing a trend, it's that the Ubuntu wiki has some pretty darn good information!*):

I'm going to use `ufw` because I'm on the terminal. I went with the
recommendations the guide laid out — DHCP, web and mail access — but left out the torrent ports since I don't need them.

[This is an absolutely massive security
guide](https://ubuntuforums.org/showthread.php?t=510812) by bodhi.zazen. It's well worth a read and implementation.

<hr />

If you want to hear about how I tackled the crypto mining and deep learning setups, drop your email below and I'll let you know when I publish those
sections.

<iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/96fcab/?as_embed"></iframe>
<hr />

