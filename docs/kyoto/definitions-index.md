 Index

- [Variables](<#variables>)
- [func Action(c *Context, name string, action func(args ...any)) bool](<#func-action>)
- [func ActionFlush(ctx *Context, state any)](<#func-actionflush>)
- [func ActionPreload[T any](c *Context, state T)](<#func-actionpreload>)
- [func ActionRedirect(ctx *Context, location string)](<#func-actionredirect>)
- [func Await(component any) any](<#func-await>)
- [func ComponentName(component any) string](<#func-componentname>)
- [func ComposeFuncMap(fmaps ...template.FuncMap) template.FuncMap](<#func-composefuncmap>)
- [func HandleAction[T any](component Component[T], ctx ...*Context)](<#func-handleaction>)
- [func HandlePage[T any](pattern string, page Component[T])](<#func-handlepage>)
- [func HandlerAction[T any](component Component[T], _ctx ...*Context) func(w http.ResponseWriter, r *http.Request)](<#func-handleraction>)
- [func HandlerPage[T any](page Component[T]) http.HandlerFunc](<#func-handlerpage>)
- [func MarshalState(state any) string](<#func-marshalstate>)
- [func Serve(addr string)](<#func-serve>)
- [func Template(c *Context, name string)](<#func-template>)
- [func TemplateInline(c *Context, tmplsrc string)](<#func-templateinline>)
- [func TemplateRaw(c *Context, tmpl *template.Template)](<#func-templateraw>)
- [func UnmarshalState(state string, target any)](<#func-unmarshalstate>)
- [type ActionConfiguration](<#type-actionconfiguration>)
- [type ActionParameters](<#type-actionparameters>)
  - [func (p *ActionParameters) Parse(r *http.Request) error](<#func-actionparameters-parse>)
- [type Component](<#type-component>)
- [type ComponentF](<#type-componentf>)
  - [func Use[T any](c *Context, component Component[T]) *ComponentF[T]](<#func-use>)
  - [func (f *ComponentF[T]) MarshalJSON() ([]byte, error)](<#func-componentft-marshaljson>)
  - [func (f *ComponentF[T]) UnmarshalJSON(data []byte) error](<#func-componentft-unmarshaljson>)
- [type Context](<#type-context>)
- [type TemplateConfiguration](<#type-templateconfiguration>)


## Variables

```go
var ActionClient = "<script>(()=>{var z=11;function ae(e,r){var t=r.attributes,n,a,i,d,p;if(!(r.nodeType===z||e.nodeType===z)){for(var c=t.length-1;c>=0;c--)n=t[c],a=n.name,i=n.namespaceURI,d=n.value,i?(a=n.localName||a,p=e.getAttributeNS(i,a),p!==d&&(n.prefix===\"xmlns\"&&(a=n.name),e.setAttributeNS(i,a,d))):(p=e.getAttribute(a),p!==d&&e.setAttribute(a,d));for(var b=e.attributes,f=b.length-1;f>=0;f--)n=b[f],a=n.name,i=n.namespaceURI,i?(a=n.localName||a,r.hasAttributeNS(i,a)||e.removeAttributeNS(i,a)):r.hasAttribute(a)||e.removeAttribute(a)}}var C,ie=\"http://www.w3.org/1999/xhtml\",h=typeof document==\"undefined\"?void 0:document,oe=!!h&&\"content\"in h.createElement(\"template\"),le=!!h&&h.createRange&&\"createContextualFragment\"in h.createRange();function se(e){var r=h.createElement(\"template\");return r.innerHTML=e,r.content.childNodes[0]}function de(e){C||(C=h.createRange(),C.selectNode(h.body));var r=C.createContextualFragment(e);return r.childNodes[0]}function ue(e){var r=h.createElement(\"body\");return r.innerHTML=e,r.childNodes[0]}function fe(e){return e=e.trim(),oe?se(e):le?de(e):ue(e)}function P(e,r){var t=e.nodeName,n=r.nodeName,a,i;return t===n?!0:(a=t.charCodeAt(0),i=n.charCodeAt(0),a<=90&&i>=97?t===n.toUpperCase():i<=90&&a>=97?n===t.toUpperCase():!1)}function ce(e,r){return!r||r===ie?h.createElement(e):h.createElementNS(r,e)}function ve(e,r){for(var t=e.firstChild;t;){var n=t.nextSibling;r.appendChild(t),t=n}return r}function G(e,r,t){e[t]!==r[t]&&(e[t]=r[t],e[t]?e.setAttribute(t,\"\"):e.removeAttribute(t))}var j={OPTION:function(e,r){var t=e.parentNode;if(t){var n=t.nodeName.toUpperCase();n===\"OPTGROUP\"&&(t=t.parentNode,n=t&&t.nodeName.toUpperCase()),n===\"SELECT\"&&!t.hasAttribute(\"multiple\")&&(e.hasAttribute(\"selected\")&&!r.selected&&(e.setAttribute(\"selected\",\"selected\"),e.removeAttribute(\"selected\")),t.selectedIndex=-1)}G(e,r,\"selected\")},INPUT:function(e,r){G(e,r,\"checked\"),G(e,r,\"disabled\"),e.value!==r.value&&(e.value=r.value),r.hasAttribute(\"value\")||e.removeAttribute(\"value\")},TEXTAREA:function(e,r){var t=r.value;e.value!==t&&(e.value=t);var n=e.firstChild;if(n){var a=n.nodeValue;if(a==t||!t&&a==e.placeholder)return;n.nodeValue=t}},SELECT:function(e,r){if(!r.hasAttribute(\"multiple\")){for(var t=-1,n=0,a=e.firstChild,i,d;a;)if(d=a.nodeName&&a.nodeName.toUpperCase(),d===\"OPTGROUP\")i=a,a=i.firstChild;else{if(d===\"OPTION\"){if(a.hasAttribute(\"selected\")){t=n;break}n++}a=a.nextSibling,!a&&i&&(a=i.nextSibling,i=null)}e.selectedIndex=t}}},E=1,pe=11,Y=3,Q=8;function y(){}function he(e){if(e)return e.getAttribute&&e.getAttribute(\"id\")||e.id}function ge(e){return function(t,n,a){if(a||(a={}),typeof n==\"string\")if(t.nodeName===\"#document\"||t.nodeName===\"HTML\"||t.nodeName===\"BODY\"){var i=n;n=h.createElement(\"html\"),n.innerHTML=i}else n=fe(n);var d=a.getNodeKey||he,p=a.onBeforeNodeAdded||y,c=a.onNodeAdded||y,b=a.onBeforeElUpdated||y,f=a.onElUpdated||y,w=a.onBeforeNodeDiscarded||y,M=a.onNodeDiscarded||y,K=a.onBeforeElChildrenUpdated||y,L=a.childrenOnly===!0,N=Object.create(null),H=[];function U(s){H.push(s)}function X(s,l){if(s.nodeType===E)for(var o=s.firstChild;o;){var u=void 0;l&&(u=d(o))?U(u):(M(o),o.firstChild&&X(o,l)),o=o.nextSibling}}function D(s,l,o){w(s)!==!1&&(l&&l.removeChild(s),M(s),X(s,o))}function q(s){if(s.nodeType===E||s.nodeType===pe)for(var l=s.firstChild;l;){var o=d(l);o&&(N[o]=l),q(l),l=l.nextSibling}}q(t);function F(s){c(s);for(var l=s.firstChild;l;){var o=l.nextSibling,u=d(l);if(u){var g=N[u];g&&P(l,g)?(l.parentNode.replaceChild(g,l),x(g,l)):F(l)}else F(l);l=o}}function te(s,l,o){for(;l;){var u=l.nextSibling;(o=d(l))?U(o):D(l,s,!0),l=u}}function x(s,l,o){var u=d(l);u&&delete N[u],!(!o&&(b(s,l)===!1||(e(s,l),f(s),K(s,l)===!1)))&&(s.nodeName!==\"TEXTAREA\"?re(s,l):j.TEXTAREA(s,l))}function re(s,l){var o=l.firstChild,u=s.firstChild,g,m,S,_,A;e:for(;o;){for(_=o.nextSibling,g=d(o);u;){if(S=u.nextSibling,o.isSameNode&&o.isSameNode(u)){o=_,u=S;continue e}m=d(u);var B=u.nodeType,T=void 0;if(B===o.nodeType&&(B===E?(g?g!==m&&((A=N[g])?S===A?T=!1:(s.insertBefore(A,u),m?U(m):D(u,s,!0),u=A):T=!1):m&&(T=!1),T=T!==!1&&P(u,o),T&&x(u,o)):(B===Y||B==Q)&&(T=!0,u.nodeValue!==o.nodeValue&&(u.nodeValue=o.nodeValue))),T){o=_,u=S;continue e}m?U(m):D(u,s,!0),u=S}if(g&&(A=N[g])&&P(A,o))s.appendChild(A),x(A,o);else{var $=p(o);$!==!1&&($&&(o=$),o.actualize&&(o=o.actualize(s.ownerDocument||h)),s.appendChild(o),F(o))}o=_,u=S}te(s,u,m);var W=j[s.nodeName];W&&W(s,l)}var v=t,R=v.nodeType,J=n.nodeType;if(!L){if(R===E)J===E?P(t,n)||(M(t),v=ve(t,ce(n.nodeName,n.namespaceURI))):v=n;else if(R===Y||R===Q){if(J===R)return v.nodeValue!==n.nodeValue&&(v.nodeValue=n.nodeValue),v;v=n}}if(v===n)M(t);else{if(n.isSameNode&&n.isSameNode(v))return;if(x(v,n,L),H)for(var V=0,ne=H.length;V<ne;V++){var k=N[H[V]];k&&D(k,k.parentNode,!1)}}return!L&&v!==t&&t.parentNode&&(v.actualize&&(v=v.actualize(t.ownerDocument||h)),t.parentNode.replaceChild(v,t)),v}}var be=ge(ae),Z=be;function I(e){let r=e.starter;if(e.id){let t=document.getElementById(e.id);if(!t)throw new Error(`Error while locating root with id: can't find direct with ${e}`);r=t}else{let t=0;for(;;){if(!r.parentElement)throw new Error(`Error while locating root: can't find parent with ${e}`);if(!r.getAttribute(\"state\"))r=r.parentElement;else if(e.depth&&t!=e.depth)r=r.parentElement,t++;else break}}return r}function me(e){return e.includes(\":\")&&(e=e.split(\":\")[1]),e.includes(\"$\")&&(e=e.replaceAll(\"$\",\"\")),e}function Ae(e){e.querySelectorAll(\"[ssa\\\\:oncall\\\\.display]\").forEach(t=>{let n=t.getAttribute(\"ssa:oncall.display\");n!=\"\"&&t.setAttribute(\"style\",\"display: \"+n)})}function Te(){document.querySelectorAll(\"[ssa\\\\:onload]\").forEach(e=>{let r=e.getAttribute(\"ssa:onload\");r&&r!=\"\"&&O(e,r)})}function we(){document.querySelectorAll(\"[ssa\\\\:poll]\").forEach(e=>{let r=e.getAttribute(\"ssa:poll\")||\"\",t=e.getAttribute(\"ssa:poll.interval\");r&&r!=\"\"&&t&&t!=\"\"&&setInterval(()=>{O(e,r)},parseInt(t))})}function ye(){document.querySelectorAll(\"[ssa\\\\:onintersect]\").forEach(e=>{let r=e.getAttribute(\"ssa:onintersect\")||\"\",t=e.getAttribute(\"ssa:onintersect.threshold\")||\"1.0\";r!=\"\"&&new IntersectionObserver(a=>{a.forEach(i=>{i.intersectionRatio>=parseFloat(t)&&O(e,r,parseFloat(t))})},{threshold:parseFloat(t)}).observe(e)})}function ee(e,r,t){let n=new Array,a={};t&&(a=t),a.onBeforeElUpdated=function(i,d){if(i.getAttribute(\"ssa:morph.ignore.attr\")!=null){let p=i.getAttribute(\"ssa:morph.ignore.attr\");if(p)if(p==\"innerHTML\")d.innerHTML=i.innerHTML;else{let c=i.getAttribute(p);c&&d.setAttribute(p,c)}}return i.getAttribute(\"ssa:morph.ignore\")!=null?!1:i.getAttribute(\"ssa:morph.ignore.this\")!=null&&i!=e?(n.push({fromEl:i,toEl:d}),!1):!0},Z(e,r,a),n.length>0&&n.forEach(i=>{ee(i.fromEl,i.toEl,{childrenOnly:!0})})}function O(e,r,...t){return new Promise((n,a)=>{let i=I({starter:e,depth:r.split(\"\").filter(w=>w===\"$\").length,id:r.includes(\":\")?r.split(\":\")[0]:void 0});Ae(i);let d=actionpath;d.endsWith(\"/\")||(d+=\"/\"),d+=`${i.getAttribute(\"name\")}`,d+=`/${me(r)}`;let p=new FormData;p.set(\"State\",i.getAttribute(\"state\")),p.set(\"Args\",JSON.stringify(t));var c=new XMLHttpRequest;c.open(\"POST\",d,!0);let b=0,f=\"\";c.onprogress=function(){let w=c.responseText.length;if(b==w)return;if(f+=this.responseText.substring(b,w),f.endsWith(actionterminator)){if(f=f.slice(0,-actionterminator.length),f.startsWith(\"ssa:redirect=\")){window.location.href=f.replace(\"ssa:redirect=\",\"\");return}switch(i.getAttribute(\"ssa:render.mode\")||\"morph\"){case\"replace\":i.outerHTML=f;break;case\"morph\":try{ee(i,f)}catch(L){console.log('Fallback from \"morphdom\" to \"replace\" due to an error:',L),i.outerHTML=f}break;default:console.log('Render mode is not supported, fallback to \"replace\"'),i.outerHTML=f;break}f=\"\"}b=w},c.onload=function(){n()},c.onerror=function(){a()},c.onabort=function(){a()},c.send(p)})}function Ne(e,r){let t=I({starter:e,depth:r.split(\"\").filter(a=>a===\"$\").length,id:r.includes(\":\")?r.split(\":\")[0]:void 0});if(!t.getAttribute(\"state\"))throw new Error(\"Bind call error: component state is underfined\");let n=JSON.parse(decodeURIComponent(atob(t.getAttribute(\"state\"))));n[r]=e.value,t.setAttribute(\"state\",btoa(encodeURIComponent(JSON.stringify(n))))}function Se(e,r){r.preventDefault();let t=I({starter:e});if(!t.getAttribute(\"state\"))throw new Error(\"Bind call error: component state is underfined\");let n=JSON.parse(decodeURIComponent(atob(t.getAttribute(\"state\")))),a=new FormData(r.target),i=Object.fromEntries(a.entries());return Object.entries(i).forEach(d=>{n[d[0]]=d[1]}),t.setAttribute(\"state\",btoa(encodeURIComponent(JSON.stringify(n)))),O(t,\"Submit\"),!1}window._root=I;window.Action=O;window.Bind=Ne;window.FormSubmit=Se;document.addEventListener(\"DOMContentLoaded\",Te);document.addEventListener(\"DOMContentLoaded\",ye);document.addEventListener(\"DOMContentLoaded\",we);})();</script>"
```

ActionConf is a global configuration that will be used during actions handling. See ActionConfiguration for more details.

```go
var ActionConf = ActionConfiguration{
    Path:       "/internal/actions/",
    Terminator: "=!EOC!=",
}
```

FuncMap holds a library predefined template functions. You have to include it into TemplateConf.FuncMap \(or your raw templates\) to use kyoto properly.

```go
var FuncMap = template.FuncMap{
    "await":  Await,
    "state":  actionFuncState,
    "client": actionFuncClient,
}
```

TemplateConf is a global configuration that will be used during template building. Feel free to modify it as needed.

```go
var TemplateConf = TemplateConfiguration{
    ParseGlob: "*.html",
    FuncMap:   FuncMap,
}
```

## func [Action](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L93>)

```go
func Action(c *Context, name string, action func(args ...any)) bool
```

Action is a function that handles an action request. Returns an execution flag \(true if action was executed\). You can use a flag to prevent farther execution of a component.

Example:

```
func Foo(ctx *kyoto.Context) (state FooState) {
	// Handle action
	bar := kyoto.Action(ctx, "Bar", func(args ...any) {
		// Do something
	})
	// Prevent further execution
	if bar {
		return
	}
	// Default non-action behavior
	// ...
}
```

## func [ActionFlush](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L147>)

```go
func ActionFlush(ctx *Context, state any)
```

ActionFlush allows to push multiple component UI updates during single action call. Call it when you need to push an updated component markup to the client.

Example:

```
func CompFoo(ctx *kyoto.Context) (state CompFooState) {
	...
	// Handle example action
	kyoto.Action(ctx, "Bar", func(args ...any) {
		// Do something with a state
		state.Content = "Bar"
		// Push updated UI to the client
		kyoto.ActionFlush(ctx, state)
		// Do something else with a state
		state.Content = "Baz"
		// Push updated UI to the client
		kyoto.ActionFlush(ctx, state)
	})
	...
```

\}

## func [ActionPreload](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L118>)

```go
func ActionPreload[T any](c *Context, state T)
```

ActionPreload unpacks a component state from an action request. Executing only in case of an action request.

Example:

```
func CompFoo(ctx *kyoto.Context) (state CompFooState) {
	// Preload state
	kyoto.ActionPreload(ctx, &state)
	// Handle actions
	...
}
```

## func [ActionRedirect](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L188>)

```go
func ActionRedirect(ctx *Context, location string)
```

ActionRedirect is a function to trigger redirect during action handling.

Example:

```
func CompFoo(ctx *kyoto.Context) (state CompFooState) {
	...
	// Handle example action
	kyoto.Action(ctx, "Bar", func(args ...any) {
		// Redirect to the home page
		kyoto.ActionRedirect(ctx, "/")
	})
	...
}
```

## func [Await](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L83>)

```go
func Await(component any) any
```

Await accepts any awaitable component and returns it's state. It's a function supposed to be used as a template function.

Template example:

```
{{ template "CompBar" await .Bar }}
```

Go example:

```
barf = kyoto.Use(ctx, CompBar) // Awaitable *kyoto.ComponentF[CompBarState]
...
bar = kyoto.Await(barf) // CompBarState
```

## func [ComponentName](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L110>)

```go
func ComponentName(component any) string
```

ComponentName takes a component function and tries to extract it's name. Be careful while using this function, may lead to undefined behavior in case of wrong value.

Example:

```
func CompBar(ctx *kyoto.Context) (state CompBarState) {
	...
}

func main() {
	fmt.Println(kyoto.ComponentName(CompBar)) // "CompBar"
}
```

## func [ComposeFuncMap](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/template.go#L39>)

```go
func ComposeFuncMap(fmaps ...template.FuncMap) template.FuncMap
```

Deprecated: use mapx.Merge from zen library instead.

## func [HandleAction](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L230>)

```go
func HandleAction[T any](component Component[T], ctx ...*Context)
```

HandleAction registers a component action handler with a predefined pattern in the DefaultServeMux. It's a wrapper around http.HandleFunc, but accepts a component instead of usual http.HandlerFunc.

Example:

```
kyoto.HandleAction(CompFoo) // Register a usual component
kyoto.HandleAction(CompBar("")) // Register a component which accepts arguments and returns wrapped function
```

## func [HandlePage](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/nethttp.go#L26>)

```go
func HandlePage[T any](pattern string, page Component[T])
```

HandlePage registers the page for the given pattern in the DefaultServeMux. It's a wrapper around http.HandlePage, but accepts a page instead of usual http.HandlerFunc.

Example:

```
func PageFoo(ctx *kyoto.Context) (state PageFooState) { ... }

func main() {
	...
	kyoto.HandlePage("/foo", PageFoo)
	...
}
```

## func [HandlerAction](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L243>)

```go
func HandlerAction[T any](component Component[T], _ctx ...*Context) func(w http.ResponseWriter, r *http.Request)
```

HandlerAction returns a http.HandlerFunc that handles an action request for a specified component. Pattern still must to correspond to the provided component. It's recommended to use HandleAction instead.

Example:

```
http.HandleFunc("/internal/actions/Foo/", kyoto.HandlerAction(Foo))
```

## func [HandlerPage](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/nethttp.go#L42>)

```go
func HandlerPage[T any](page Component[T]) http.HandlerFunc
```

HandlerPage returns a http.HandlerPage that renders the page.

Example:

```
func PageFoo(ctx *kyoto.Context) (state PageFooState) { ... }

func main() {
	...
	http.HandleFunc("/foo", kyoto.HandlerPage(PageFoo))
	...
}
```

## func [MarshalState](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L130>)

```go
func MarshalState(state any) string
```

MarshalState encodes components' state for a client. Supposed to be used as a template function.

Template example:

```
{{ state . }}
```

Go example:

```
compStateEnc := kyoto.MarshalState(compState)
```

## func [Serve](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/nethttp.go#L74>)

```go
func Serve(addr string)
```

Serve is a simple wrapper around http.ListenAndServe, which will log server starting and will panic on error.

Example:

```
func main() {
	...
	kyoto.Serve(":8000")
}
```

## func [Template](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/template.go#L61>)

```go
func Template(c *Context, name string)
```

Template creates a new template with a given name, using global parameters stored in kyoto.TemplateConf. Stores template in the context.

Example:

```
func PageFoo(ctx *kyoto.Context) (state PageFooState) {
	// By default uses kyoto.FuncMap
	// and parses everything in the current directory with a .ParseGlob("*.html")
	kyoto.Template(ctx, "page.foo.html")
	...
}
```

## func [TemplateInline](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/template.go#L90>)

```go
func TemplateInline(c *Context, tmplsrc string)
```

TemplateInline creates a new template with a given template source, using global parameters stored in kyoto.TemplateConf. Stores template in the context.

Example:

```
func PageFoo(ctx *kyoto.Context) (state PageFooState) {
	// By default uses kyoto.FuncMap
	// and parses everything in the current directory with a .ParseGlob("*.html")
	kyoto.TemplateInline(ctx, `<html>...</html>`)
	...
}
```

## func [TemplateRaw](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/template.go#L118>)

```go
func TemplateRaw(c *Context, tmpl *template.Template)
```

TemplateRaw handles a raw template. Stores template in the context.

Example:

```
func PageFoo(ctx *kyoto.Context) (state PageFooState) {
	tmpl := MyTemplateBuilder("page.foo.html") // *template.Template
	kyoto.TemplateRaw(ctx, tmpl)
	...
}
```

## func [UnmarshalState](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L146>)

```go
func UnmarshalState(state string, target any)
```

UnmarshalState decodes components' state from a client. Supposed to be used internaly only, exposed just in case.

## type [ActionConfiguration](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L18-L21>)

ActionConfiguration holds a global actions configuration.

```go
type ActionConfiguration struct {
    Path       string // Configure a path prefix for action calls
    Terminator string // Configure a terminator sequence which responsible for chunk separation
}
```

## type [ActionParameters](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L35-L43>)

ActionParameters is a Go representation of an action request.

```go
type ActionParameters struct {
    Component string
    Action    string
    State     string
    Args      []any
    // contains filtered or unexported fields
}
```

### func \(\*ActionParameters\) [Parse](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/actions.go#L46>)

```go
func (p *ActionParameters) Parse(r *http.Request) error
```

Parse extracts action data from a provided request.

## type [Component](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L20>)

Component represents a kyoto component, defined as a function.

```go
type Component[T any] func(*Context) T
```

## type [ComponentF](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L24>)

ComponentF represents a future for a component work result. Under the hood it wraps zen.Future\[T\].

```go
type ComponentF[T any] async.Future[T]
```

### func [Use](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L65>)

```go
func Use[T any](c *Context, component Component[T]) *ComponentF[T]
```

Use is a function to use your components in your code. Triggers component execution and returns a future for a component work result \(ComponentF\).

Example:

```
func CompBar(ctx *kyoto.Context) (state CompBarState) {
	...
}

func PageFoo(ctx *kyoto.Context) (state PageFooState) {
	...
	state.Bar = kyoto.Use(ctx, CompBar)  // Awaitable *kyoto.ComponentF[CompBarState]
	...
}
```

### func \(\*ComponentF\[T\]\) [MarshalJSON](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L27>)

```go
func (f *ComponentF[T]) MarshalJSON() ([]byte, error)
```

MarshalJSON implements future marshalling.

### func \(\*ComponentF\[T\]\) [UnmarshalJSON](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/components.go#L32>)

```go
func (f *ComponentF[T]) UnmarshalJSON(data []byte) error
```

UnmarshalJSON implements future unmarshalling.

## type [Context](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/context.go#L10-L21>)

Context is the context of the current request. It is passed to the pages and components.

```go
type Context struct {
    // Handler
    ResponseWriter http.ResponseWriter
    Request        *http.Request

    // Rendering
    Template     *template.Template
    TemplateConf *TemplateConfiguration

    // Action
    Action ActionParameters
}
```

## type [TemplateConfiguration](<https://github.com/kyoto-framework/kyoto/blob/master/var/folders/w_/bcyvf0m57xd0vz70_g7hbgvm0000gn/T/kyoto/template.go#L17-L21>)

TemplateConfiguration holds template building configuration.

```go
type TemplateConfiguration struct {
    ParseGlob string
    ParseFS   *embed.FS
    FuncMap   template.FuncMap
}
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
