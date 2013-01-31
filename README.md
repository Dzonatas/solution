Solution by way of submodules:<br/>

-> mono<br/>
-> monodevelop<br/>
-> openjpeg<br/>

---

Goals:<br/>
Rewrite JP3D into C#.<br/>
Include Debian package build (from base).<br/>
Less dependency on specific version(s).<br/>
Unmanaged GNU IL CC (LSB interface aware) and allow OpenCL optimizations.<br/>
Use virtual network interfaces (minus ICE buffer bloat) or [lsb] AF_BUS.<br/>
Replace sticky "code guidelines" with obvious purpose for assembly and XML.<br/>
<br/>
More submodules:<br/>
github.com/github/gollum<br/>
(CLI wrapper...)<br/>

---

Directories:<br/>
Documentation/ -- ECMA, JPEG 2000, OpenCL/SPIR, COLLADA/DAE, Drafts, MathML, Entities and indexes.<br/>

---

Limitations:<br/>
Vendors implemented proprietary solutions in hardware and software, and some provided OpenCL libraries. That means there is now less need for complete higher-level software implementations with unsecure processes. Software implementations of Jpeg2000/JP3D, demonstrated elsewhere, made security issues more appearant, and this repository reflects such changes needed in the CLI for that solution with concern. The IL and awarness of interfaces is significant.<br/>
<br/>
In CLI assembly, the ".class" instruction may be disabled in favor of ".unix", ".unixcall", and ".syscall" instructions. See ECMA-335 with type modifiers as one default access option.<br/>
<br/>
.unix: Replaces ".class" for unmanged interface access. (i.e. [lsb] instead of [mscorlib])<br/>
.unixcall: Similar to managed calls for NaCl, LLVM, and C++. (Optional mangled optimization)<br/>
.syscall: Optimization for UNIX systems. <br/>
<br/>
In mathematical expressions, they must be derived from base types or calculated from primitive real numbers. When in doubt, use MathML and wrap such expressions in DAE. Real-time math expressions are not accurate unless it uses real time scale factors and handles skew exceptions. When in doubt about time scales, wrap your expressions in MathML semantics and DAE (with optional descriptive tyoes), or the compiler may throw exceptions upon undefined semantic values.

---

Various:<br/>
It would be logical to add ".post", ".get", ".put", ".delete", and like-wise ReSTful instructions for API simplification to access resources or replace APIs with device based resource interfaces. Pragmatically, it would require definite set of protocols; however, it may be applicable for low-level DAE access and manipulation without HTTP classes. If implemented, it allows more distinct separation between BSD and other licenses.

The presence of ".connect [resource] [protocol]", instead, may enable "post", "get", "put", "delete" instructions such that they work with resources simular to ".module" and assemblies. Note that XML (as resource) without CSS is non-ambiguous for low-level ReSTful protocols, like XHTML spread-sheet tables with cells.

See [Wiki Home Page](https://github.com/Dzonatas/solution/wiki)  for more.
