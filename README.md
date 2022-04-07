# werdle

# A Kernel Seedling

## Description

A Kernel Module that add a file to /proc/count to show the number
of the current running processes.

## Building

The Kernel Module is built with C. Given the skeleton source code,
the kernel module has been inserted with module_init() and exit with
module_exit(). Since the data is output into /proc filesystem,
a proc_create_single() macro is used to create an instance of
proc_dir_entry during which the kernel module is inserted. Such
entry should then be removed using proc_remove() when the module
is unloaded. Regarding proc_remove(), only a single char pointer is
allowed as an argument, therefore, a pointer of type proc_dir_entry
should be created within the souce code in reference to the entry
that was created so that it be properly removed. A proc_count
function is defined and call during which the entry is created to
count the number of running processes or tasks. In order to count
the number of current running processes, a pointer of type task_struct
is created to be refered to in the for_each_process() loop so that
a 0 initialized variable is increment for each processes running.
To output the result, a seq_printf() is used to output the integer
along with a newline into the /proc/count file.

## Running

### Ensure you're in the correct repository directory:

##### `cd cs111`

##### `cd lab0`

### To run the Kernel Module (proc_count):

Given proc_count.c being the source code of our kernel module, we need
to compile the file using make command.

##### `make`

After the source code is compiled along with its dependencies,
We need to insert our module into the kernel.  

##### `sudo insmod proc_count.ko`

Now that the kernel module is up and running, we can use "cat" command
to show the number of the current running processes on your machine.

##### `cat /proc/count`

The command above should output an integer showing the number of running
processes following a new line.

## Cleaning Up

Execute the following commands in the terminal.

### Remove your module from the kernel:

##### `sudo rmmod proc_count`

### To check whether the module is properly removed:

##### `lsmod | grep "proc_count"`

***lsmod is a command used to display status of modules in Linux kernel.

### To clean up the compiled program:

##### `make clean`

## Testing

Kernel: Linux release 5.14.8-arch1-1

Testing is done with the given test_lab0.py source code with common test