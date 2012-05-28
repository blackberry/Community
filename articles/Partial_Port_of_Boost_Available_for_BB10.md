---
layout: basic
title: Partial Port of Boost Available for BlackBerry 10
---
{% include articles-defs.md %}
_Author_: [Clifford Hung]  
_Date_: May 21, 2012  

Selected parts of the <a href="http://www.boost.org/">Boost</a> C++ libraries (version 1.48.0)
have been ported to run on BB 10.
The following libraries have been ported using the default
[Dinkum](http://www.dinkum.com/)
C++ libraries and pass Boost's test suite.

* Boost.Date_Time
* Boost.Filesystem
* Boost.Program_options
* Boost.Random
* Boost.Regex
* Boost.System
* Boost.Thread

The headers listed [here](files/2012_05_14-Boost-headers.txt)
have also been ported and pass Boost's tests.

These headers and libraries also work with the GNU C++ libraries although there a few unresolved test
failures involving `Boost.Date_Time` and `Boost.Regex`.
See the [Known issues with tests](#known-issues) section for details.

Since future changes to port the rest of Boost for Dinkum and GNU libraries may not be compatible and to accommodate differences in the build and test scripts, there are branches for each port
([1_48_0-dinkum](http://github.com/blackberry/Boost/tree/1_48_0-dinkum) and
[1_48_0-gnu](http://github.com/blackberry/Boost/tree/1_48_0-gnu)).

##Building Boost

Both Dinkum and GNU ports can be built using Boost's own build system which uses
[bjam](http://www.boost.org/boost-build2/doc/html/bbv2/jam.html)
and Jamfiles.
For the Dinkum port,
a second (and recommended) approach is to use the recursive makefile (`rmake`) setup.
The rmake build is recommended to build the Dinkum port as the script to build
the test suite will require the rmake build of the libraries.
The two build setups use slightly different flags so the output libraries will not be exactly the same.

Ensure that you source the BlackBerry Native SDK environment variables.
From your NDK installation directory (e.g. `~/bbndk-2.0.1`) run `. ./bbndk-env.sh`.

###Building with bjam

Change to the rim-build directory. Run the build.sh script using this command:

        ./build.sh install

This will build the libraries in subdirectories of bin.v2 as well as copy them to a staging directory
(under `rim-build/boost-stage`).

For the GNU port, all the libraries are compiled, not just the ported ones.
The `Boost.Python` library can be enabled by setting the
`PYTHON_SRC_DIR` variable in `build.sh` to the Python source location.

Use `./build.sh clean` to clean the build.

###Building with rmake (Dinkum port only)

From the top-level directory, run `make`.
This will create libraries under each library's build directory, for example,
the filesystem library is built under libs/filesystem/build for ARM and X86.
For building the tests, the libraries need to be copied to a staging directory using the
following command:

        make install INSTALL_ROOT_nto=<Path to boost repo>/rim-build/boost-stage

Partial builds can be accomplished using the LIST tag found in the makefiles. For example, you could build debug ARM libraries by running this command:

        make CPULIST=arm VARIANTLIST=g

Use `make clean` to clean the build.

##Testing Boost

Under the `rim-test` directory are scripts to build and run Boost's test suite.
The `build-tests.sh` script will invoke `bjam` on each test directory read from the `test.list` file.
You can choose to skip some tests by commenting them out with a "#".
The build script will build and attempt to run the tests.
The test failures can be ignored since they aren't being run on a BB 10 device.

The test binaries can either be copied over to a device in development mode (using `scp`)
or the top-level boost directory can be NFS-mounted on the device.
It will be easier to recompile and rerun tests with the latter setup but some of the
filesystem tests may fail due to issues with NFS.

###NFS setup for Ubuntu Linux and PlayBook over USB

On your Linux machine, obtain the packages to install the NFS server:

        sudo apt-get install nfs-kernel-server nfs-common portmap

Edit the NFS exports file as follows:

        sudo vi /etc/exports

Add the following line:

        <Path to boost repo> 169.254.0.1(rw,all_squash,async,insecure,no_subtree_check,anonuid=<UID>,anongid=<GID>

Make the NFS server reread the configuration:

        sudo service nfs-kernel-server reload

On the PlayBook, issue the following command to mount the NFS-exported directory:

        fs-nfs3 169.254.0.2:<Path to boost repo on server> /accounts/devuser/boost

###Running the tests

Change to `/accounts/devuser/boost/rim-test`.
To run the test script capturing both stderr and stdout, use the following command:

        ./run-tests.sh 2> run.err > run.out &

You may then use the tail command to observe the progress of the tests, e.g. `tail -f run.out`.

<a id="known-issues">
<h3>Known issues with tests</h3>
</a>

&bull; Some of the filesystem tests may fail when run from an NFS mount
(e.g. `bin.v2/libs/filesystem/test/v3_operations_test.test/qcc/debug/architecture-arm/target-os-qnxnto/threading-multi/v3_operations_test`)

&bull; `bin.v2/libs/date_time/test/teststreams.test/qcc/debug/architecture-arm/target-os-qnxnto/threading-multi/teststreams` (see
[stdout](files/2012_05_14-Boost-stdout1.txt),
[stderr](files/2012_05_14-Boost-stderr1.txt); the test failure involves type `std::wistringstream`)

&bull; `bin.v2/libs/regex/test/regex_regress_recursive.test/qcc/debug/architecture-arm/target-os-qnxnto/threading-multi/regex_regress_recursive`
(see
[stdout](files/2012_05_14-Boost-stdout2.txt),
[stderr](files/2012_05_14-Boost-stderr2.txt)).
In the test case "test_recursion", there are many failures related to expected regex matches not being found;
see this [example](files/2012_05_14-Boost-regex.txt).

&bull; `bin.v2/libs/regex/test/regex_regress_threaded.test/qcc/debug/architecture-arm/target-os-qnxnto/threading-multi/regex_regress_threaded`
(see
[stdout](files/2012_05_14-Boost-stdout3.txt),
[stderr](files/2012_05_14-Boost-stderr3.txt)). Failures are similar to regex_regress_recursive.

&bull; `bin.v2/libs/regex/test/regex_regress.test/qcc/debug/architecture-arm/target-os-qnxnto/threading-multi/regex_regress`
(see
[stdout](files/2012_05_14-Boost-stdout4.txt),
[stderr](files/2012_05_14-Boost-stderr4.txt)). Failures are similar to regex_regress_recursive.

