montageDefine("3d983b5","docs/montage-serialization-format.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Montage serialization format - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Montage serialization format<a class=anchor id=Montage-serialization-format href="#Montage-serialization-format"></a>\n</h1>\n\n<p>This document explains the serialization format used by Montage to serialize, and later deserialize, an <em>object graph</em>. A serialized object graph describes the objects, components, properties, component data bindings, and DOM relationships involved in a Montage application. Montage uses JavaScript Object Notation (JSON) as the serialization format. At runtime, Montage parses the JSON structure and deserializes its contents into JavaScript that is then evaluated and executed in the browser.</p>\n\n<h2>JSON overview<a class=anchor id=JSON-overview href="#JSON-overview"></a>\n</h2>\n\n<p>JSON, a text format designed for serializing structured data, can represent six types:</p>\n\n<ul>\n<li>Four primitive types: strings, numbers, booleans, and null</li>\n<li>Two structured types: objects and arrays</li>\n</ul><p>In JSON, an object is represented as an unordered collection of zero or more name/value pairs. A name is a string, and a value is one of the primitive JSON data types—string, number, boolean, or null. An array structure is represented as square brackets surrounding zero or more values (or elements). Elements are separated by commas.</p>\n\n<p>For example, the following JSON content defines an object named <code>anObject</code> that contains three properties:</p>\n\n<ul>\n<li>A string named <code>id</code>\n</li>\n<li>An array named <code>colors</code>\n</li>\n<li>A boolean named <code>readyState</code>\n</li>\n</ul><p></p><div class=highlight><pre><span class=s2>"anObject"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"id"</span><span class=p>:</span> <span class=s2>"123asd"</span><span class=p>,</span>\n    <span class=nt>"colors"</span><span class=p>:</span> <span class=p>[</span> <span class=s2>"red"</span><span class=p>,</span> <span class=s2>"green"</span><span class=p>,</span> <span class=s2>"blue"</span><span class=p>],</span>\n    <span class=nt>"readystate"</span><span class=p>:</span> <span class=kc>false</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>In addition to these standard data types, Montage supports a few special types to enable serialization of more complex objects. These types include references to other objects in the same serialization, DOM references, functions, and regular expressions.</p>\n\n<h2>Example of serialization<a class=anchor id=Example-of-serialization href="#Example-of-serialization"></a>\n</h2>\n\n<p>The following simple (yet complete) Montage application is defined in a single HTML document. This example gives you a sense of what serialization in Montage is about and why it’s useful.</p>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;html&gt;</span>\n   <span class=nt>&lt;script </span><span class=na>src=</span><span class=s>"../../montage.js"</span><span class=nt>&gt;&lt;/script&gt;</span>\n   <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n   <span class=p>{</span>\n       <span class=s2>"firstName"</span><span class=o>:</span> <span class=p>{</span>\n           <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/textfield.reel"</span><span class=p>,</span>\n           <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n               <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"fName"</span><span class=p>}</span>\n           <span class=p>}</span>\n        <span class=p>}</span>\n   <span class=p>}</span>\n   <span class=nt>&lt;/script&gt;</span>\n   <span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;input</span> <span class=na>id=</span><span class=s>"fName"</span><span class=nt>&gt;&lt;/input&gt;</span>\n   <span class=nt>&lt;body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<p>Important things to note:</p>\n\n<ul>\n<li>The HTML body contains a single <code>&lt;input&gt;</code> tag that has the ID “fName”.</li>\n<li>The document head contains a <code>&lt;script&gt;</code> block of type <code>text/montage-serialization</code>. This block contains all serialized Montage objects used in the document.</li>\n<li>The serialization block declares a Montage Textfield component with an object label of “firstName”. The component’s module ID (“montage/ui/textfield.reel”) and its name (“Textfield”) allow Montage to re-create the component from its serialized form at runtime.</li>\n<li>The “properties” object assigns initial values to the component’s properties. One of the most important properties of a Montage component is its <code>element</code> property, which corresponds to the associated HTML element on which the component operates on. In this case, the Textfield component’s element property is set to the <code>&lt;input&gt;</code> tag that has the ID “fName”. The Montage serialization format provides a special JSON object representation to refer to an element. This special object’s name is a hash mark (“#”) and its value is the ID of the element.</li>\n<li>Montage can load components from a directory that has a .reel extension. The module system redirects <code>require("x.reel")</code> to <code>require("x.reel/x")</code>.</li>\n</ul><h2>Serialization owner<a class=anchor id=Serialization-owner href="#Serialization-owner"></a>\n</h2>\n\n<p>A Montage serialization can declare an optional object named “owner”. The specified owner acts as the controller for the document. For example, the following code creates a new module (main.js) that exports a <code>Main</code> prototype object.</p>\n\n<p></p><div class=highlight><pre><span class=c1>// Module: main.js</span>\n<span class=c1>// Exported object name: Main</span>\n<span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=o>&amp;</span><span class=nx>quot</span><span class=p>;</span><span class=nx>montage</span><span class=o>/</span><span class=nx>core</span><span class=o>/</span><span class=nx>core</span><span class=o>&amp;</span><span class=nx>quot</span><span class=p>;).</span><span class=nx>Montage</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>Component</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=o>&amp;</span><span class=nx>quot</span><span class=p>;</span><span class=nx>montage</span><span class=o>/</span><span class=nx>ui</span><span class=o>/</span><span class=nx>component</span><span class=o>&amp;</span><span class=nx>quot</span><span class=p>;).</span><span class=nx>Component</span><span class=p>;</span>\n<span class=c1>//</span>\n<span class=nx>exports</span><span class=p>.</span><span class=nx>Main</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Component</span><span class=p>,</span> <span class=p>{</span>\n<span class=c1>// Prototype methods and properties</span>\n<span class=p>})</span>\n<span class=o>&lt;</span><span class=nx>script</span> <span class=nx>type</span><span class=o>=</span><span class=s2>"text/montage-serialization"</span><span class=o>&gt;</span>\n<span class=p>{</span>\n   <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n       <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"main"</span><span class=p>,</span>\n       <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n           <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"main"</span><span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n<span class=o>&lt;</span><span class=err>/script&gt;</span>\n</pre></div>\n\n<h2>Serialization formats<a class=anchor id=Serialization-formats href="#Serialization-formats"></a>\n</h2>\n\n<p>The following sections explain serialization for different objects.</p>\n\n<h3>Object serialization<a class=anchor id=Object-serialization href="#Object-serialization"></a>\n</h3>\n\n<p>To serialize custom JavaScript objects, including Montage components, define a JSON object with two properties: <code>module</code> and <code>name</code>. These properties correspond, respectively, to the ID of the module that defines (or exports) the object with the specified name.</p>\n\n<p>The following serialization fragment declares a Montage Button component:\n</p><div class=highlight><pre><span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n<span class=p>{</span>\n    <span class=s2>"loginButton"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Button"</span><span class=p>,</span>\n        <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"montage/ui/button"</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n<span class=nt>&lt;/script&gt;</span>\n</pre></div>\n\n<p>At runtime Montage parses this serialization and evaluates it as the following JavaScript:\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Button</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/button"</span><span class=p>).</span><span class=nx>Button</span><span class=p>;</span>\n</pre></div>\n\n<p>Note that object labels in a serialization (such as “loginButton” in the above example) are only used internally by Montage during the deserialization process. For example, the object label does not translate into a JavaScript variable at runtime. You <strong>can</strong> reference objects within a serialization using a special JSON representation.</p>\n\n<p>You can assign initial values to an object’s properties in a serialization by adding a <code>properties</code> object to the serialization. For example, the Montage Button component has a <code>value</code> property that contains the string to display as the button’s label. The following assigns the value “Click me” to the Button component’s <code>value</code> property.\n</p><div class=highlight><pre><span class=s2>"loginButton"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"name"</span><span class=p>:</span> <span class=s2>"Button"</span><span class=p>,</span>\n    <span class=nt>"module"</span><span class=p>:</span> <span class=s2>"montage/ui/button"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n       <span class=nt>"value"</span><span class=p>:</span> <span class=s2>"Click me"</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<h2>Referencing DOM elements in a serialization<a class=anchor id=Referencing-DOM-elements-in-a-serialization href="#Referencing-DOM-elements-in-a-serialization"></a>\n</h2>\n\n<p>You can reference DOM elements from a Montage serialization using a special JSON object representation. This is commonly used to assign an HTML element to a component’s <code>element</code> property, or anytime you need a reference to a DOM element.</p>\n\n<p>To reference an element by ID, use the following JSON syntax where <em>elementID</em> is the ID of an element in the document that contains the serialization.</p>\n\n<p><code>{"#": "elementID"}</code></p>\n\n<p>For example, this serialization block declares a Montage Button component whose <code>element</code> property is assigned the </p><div> with the ID of <code>loginButton</code>:\n<div class=highlight><pre>// index.html\n<span class=nt>&lt;html&gt;</span>\n <span class=nt>&lt;script </span><span class=na>src=</span><span class=s>"../../montage.js"</span><span class=nt>&gt;&lt;/script&gt;</span>\n <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n <span class=p>{</span>\n      <span class=s2>"loginBtn"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Button"</span><span class=p>,</span>\n        <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"montage/ui/button.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"loginButton"</span><span class=p>}</span>\n        <span class=p>}</span>\n      <span class=p>}</span>\n <span class=p>}</span>\n <span class=nt>&lt;/script&gt;</span>\n <span class=nt>&lt;body&gt;</span>\n      <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"loginButton"</span> <span class=na>class=</span><span class=s>"text"</span><span class=nt>&gt;</span>Click to enter<span class=nt>&lt;/div&gt;</span>\n <span class=nt>&lt;body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h3>Referencing other objects in a serialization<a class=anchor id=Referencing-other-objects-in-a-serialization href="#Referencing-other-objects-in-a-serialization"></a>\n</h3>\n\n<p>Often you need to reference one serialized Montage object from another object in the same serialization. For instance, the serialization might declare a Montage button that you want to reference from the controller (or owner) object in the serialization.</p>\n\n<p>To reference an element by ID, use the following JSON syntax. In this example, <em>objectLabel</em> is the label assigned to the serialized object.</p>\n\n<p><code>{"@": "objectLabel"}</code></p>\n\n<p>To demonstrate, first create the owner prototype object that references the button. The owner object—a custom component named Main—is defined in a JavaScript file main.js. The Main component declares a variable <code>loginButton</code> that will hold the reference to the Button object in the main application. We can reference that variable elsewhere in the Main component, such as its <code>prepareForDraw()</code> function, which is invoked before the first time the component is drawn. In this case, we use this callback opportunity to attach an event listener to the Button object. The event handler displays a message in the JavaScript console.</p>\n\n<p></p>\n<div class=highlight><pre><span class=c1>// Module: main.js</span>\n<span class=c1>// Name: Main</span>\n<span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/core/core"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>Component</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/component"</span><span class=p>).</span><span class=nx>Component</span><span class=p>;</span>\n<span class=nx>exports</span><span class=p>.</span><span class=nx>Main</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Component</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>hasTemplate</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kc>false</span>\n    <span class=p>},</span>\n    <span class=nx>loginButton</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span><span class=kc>null</span>\n    <span class=p>},</span>\n    <span class=nx>handleAction</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>event</span><span class=p>)</span> <span class=p>{</span>\n            <span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"Button event handled..."</span><span class=p>);</span>\n            <span class=c1>// Do login stuff...</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nx>prepareForDraw</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>loginButton</span><span class=p>.</span><span class=nx>addEventListener</span><span class=p>(</span><span class=s2>"action"</span><span class=p>,</span> <span class=k>this</span><span class=p>)</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>Next, create the main HTML document that declares the Button and Main components. On line 10 a reference to the “loginBtn” serialized Button is assigned to the “loginButton” property of the Main component.</p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;html&gt;</span>\n <span class=nt>&lt;script </span><span class=na>src=</span><span class=s>"../../montage.js"</span><span class=nt>&gt;&lt;/script&gt;</span>\n <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n <span class=p>{</span>\n    <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Main"</span><span class=p>,</span>\n        <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"main"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"main"</span><span class=p>},</span>\n            <span class=s2>"loginButton"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"@"</span><span class=o>:</span> <span class=s2>"loginBtn"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=s2>"loginBtn"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Button"</span><span class=p>,</span>\n        <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"montage/ui/button.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"buttonDiv"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n <span class=p>}</span>\n <span class=nt>&lt;/script&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"main"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"buttonDiv"</span> <span class=na>class=</span><span class=s>"text"</span><span class=nt>&gt;</span>Click to enter<span class=nt>&lt;/div&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h2>Data bindings in serializations<a class=anchor id=Data-bindings-in-serializations href="#Data-bindings-in-serializations"></a>\n</h2>\n\n<p>You can define event listener and data bindings between components within a serialization. To better understand the binding serialization syntax, look at the underlying JavaScript method used for creating data bindings, <code>Object.defineBinding()</code>. This method takes three parameters:</p>\n\n<ul>\n<li>The source object defining the binding.</li>\n<li>The name of the source object’s property that is being bound.</li>\n<li>A descriptor object that specifies, minimally, the bound object and the key path of the property being bound. The descriptor can have optional parameters for specifying whether the binding is one-way, or whether the binding should not execute immediately.</li>\n</ul>\n<p></p>\n<div class=highlight><pre><span class=nb>Object</span><span class=p>.</span><span class=nx>defineBinding</span><span class=p>(</span><span class=nx>sourceObject</span><span class=p>,</span> <span class=s2>"propertyName"</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>boundObject</span><span class=o>&gt;</span><span class=p>,</span>\n    <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=s2>"property.key.path"</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>You specify a component’s bindings in a serialization with a “bindings” JSON object that, in turn, defines one or more JSON objects.</p>\n\n<p></p>\n<div class=highlight><pre><span class=s2>"bindings"</span><span class=err>:</span> <span class=p>{</span>\n   <span class=nt>"boundValue"</span><span class=p>:</span> <span class=p>{</span>\n      <span class=nt>"boundObject"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"bound-object-label"</span><span class=p>,</span>\n      <span class=nt>"boundObjectPropertyPath"</span><span class=p>:</span> <span class=s2>"key.path.of.property"</span><span class=p>,</span>\n   <span class=p>},</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>The following simple example adds data bindings to a serialization. It consists of two Montage Slider components. The first slider’s value is bound to the second slider’s value. By default, data bindings are bi-directional, so changes to either bound property are pushed to the corresponding property. In this case, the “oneway” parameter is set to false so that changes propagate only from the bound object to the one that defined the binding (the source object).</p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;</span>Slider binding text<span class=nt>&lt;/title&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>src=</span><span class=s>"../../montage.js"</span><span class=nt>&gt;&lt;/script&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n    <span class=p>{</span>\n        <span class=s2>"slider1"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Slider"</span><span class=p>,</span>\n            <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"montage/ui/slider.reel"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"slider1"</span><span class=p>}</span>\n            <span class=p>},</span>\n            <span class=s2>"bindings"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"value"</span><span class=o>:</span> <span class=p>{</span>\n                    <span class=s2>"boundObject"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"@"</span><span class=o>:</span> <span class=s2>"slider2"</span><span class=p>},</span>\n                    <span class=s2>"boundObjectPropertyPath"</span><span class=o>:</span> <span class=s2>"value"</span><span class=p>,</span>\n                    <span class=s2>"oneway"</span><span class=o>:</span> <span class=kc>true</span>\n                <span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>},</span>\n        <span class=s2>"slider2"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Slider"</span><span class=p>,</span>\n            <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"montage/ui/slider.reel"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"slider2"</span><span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=nt>&lt;/script&gt;</span>\n<span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"slider1"</span><span class=nt>&gt;&lt;/div&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"slider2"</span><span class=nt>&gt;&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h2>Event listeners in serializations<a class=anchor id=Event-listeners-in-serializations href="#Event-listeners-in-serializations"></a>\n</h2>\n\n<p>You can assign event listeners to serialized components in a serialization using a <code>listeners</code> property.</p>\n\n<p>This can reduce the amount of code required to establish event handling for your components. The serialization in the following example declares two objects: a custom controller object (Controller) and a Montage Button. The controller object acts as the event listener object to respond to “action” events that the Button emits when clicked or touched.</p>\n\n<p>This code for the Controller component defines a single function named <code>handleAction()</code>, which is invoked when the user clicks the button:\n</p>\n<div class=highlight><pre><span class=c1>// Module: controller.js</span>\n<span class=c1>// Name: Controller</span>\n<span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/core/core"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>;</span>\n<span class=nx>exports</span><span class=p>.</span><span class=nx>Controller</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Montage</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>handleAction</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>event</span><span class=p>)</span> <span class=p>{</span>\n            <span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"Button event handled..."</span><span class=p>);</span>\n            <span class=c1>// Do login stuff...</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>The following is the HTML document and component serialization. The “loginBtn” object in the serialization contains a “listeners” array property. This array can contain one or more.</p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;html&gt;</span>\n <span class=nt>&lt;script </span><span class=na>src=</span><span class=s>"../../montage.js"</span><span class=nt>&gt;&lt;/script&gt;</span>\n <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n <span class=p>{</span>\n    <span class=s2>"controller"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Controller"</span><span class=p>,</span>\n        <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"controller"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"main"</span><span class=p>},</span>\n            <span class=s2>"loginButton"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"@"</span><span class=o>:</span> <span class=s2>"loginBtn"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=s2>"loginBtn"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Button"</span><span class=p>,</span>\n        <span class=s2>"module"</span><span class=o>:</span> <span class=s2>"montage/ui/button.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"buttonDiv"</span><span class=p>}</span>\n        <span class=p>},</span>\n        <span class=s2>"listeners"</span><span class=o>:</span> <span class=p>[</span>\n            <span class=p>{</span>\n                <span class=s2>"type"</span><span class=o>:</span> <span class=s2>"action"</span><span class=p>,</span>\n                <span class=s2>"listener"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"@"</span><span class=o>:</span> <span class=s2>"controller"</span><span class=p>},</span>\n                <span class=s2>"capture"</span><span class=o>:</span> <span class=kc>false</span>\n            <span class=p>}</span>\n        <span class=p>]</span>\n    <span class=p>}</span>\n <span class=p>}</span>\n <span class=nt>&lt;/script&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"main"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"buttonDiv"</span> <span class=na>class=</span><span class=s>"text"</span><span class=nt>&gt;</span>Click to enter<span class=nt>&lt;/div&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h2>JSON formatting rules<a class=anchor id=JSON-formatting-rules href="#JSON-formatting-rules"></a>\n</h2>\n\n<p>Montage uses the browser’s native JSON parsing APIs to parse the serialization block. For the browser to successfully parse the JSON object, the JSON must be well-formed. If the JSON serialization contains a formatting error, Montage throws an error and does not attempt to deserialize the JSON object. Some formatting concerns are:</p>\n\n<ul>\n<li>Trailing commas. A trailing comma after the last property in a JSON object or array generates runtime errors. In the following example the comma that trails the <code>readyState</code> property would generate a JSON parsing error:\n<div class=highlight><pre><span class=s2>"anObject"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"id"</span><span class=p>:</span> <span class=s2>"123asd"</span><span class=p>,</span>\n    <span class=nt>"colors"</span><span class=p>:</span> <span class=p>[</span> <span class=s2>"red"</span><span class=p>,</span> <span class=s2>"green"</span><span class=p>,</span> <span class=s2>"blue"</span><span class=p>],</span>\n    <span class=nt>"readystate"</span><span class=p>:</span> <span class=kc>false</span><span class=p>,</span>\n<span class=p>}</span>\n</pre></div>\n</li>\n<li>Matching brackets. Obviously, each open bracket must have a matching close bracket.</li>\n</ul>\n<p>Montage reports any serialization/JSON formatting errors in the console when you run the application.</p>\n</div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}();</script>\n\n</body>\n</html>'});
