there are four ways to add dependencies to our angular components.

they work in a hierarchy:

null injector (if all four other services don't have what we are looking for).

platform environment injector (bootstrap multiple applications that need to share a service)

environment injector, module injector

element injector (components reach out here first then work there way up)
