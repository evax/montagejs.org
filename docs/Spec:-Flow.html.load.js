montageDefine("870af22","docs/Spec:-Flow.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Spec: Flow - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs class=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>FLOW Spec in progress by Javier Román</p>\n\n<p>Index</p>\n\n<ol>\n<li>Introduction</li>\n<li>Data Source\n2.1. Properties</li>\n<li>Paths\n3.1. Translation\n3.2. Additional Parameters\n       3.2.1. Density\n       3.2.2. Rotation\n       3.2.3. Arbitrary CSS\n3.3. Multiple Paths\n3.4. Properties</li>\n<li>Scroll\n4.1. Properties</li>\n<li>Scrolling Transitions\n5.1. Properties\n5.2. Methods\n5.3. Events</li>\n<li>Camera and Frustum Culling\n6.1. Properties</li>\n<li><p>Dependencies</p></li>\n<li><p>Introduction</p></li>\n</ol><p>Flow is a UI component that allows the design of scrollable 3D-layouts (that will be called paths) for a given list of data and/or components (a repetition).</p>\n\n<p>Flow is useful to create a wide range of visual interfaces, like a common vertical/horizontal scrollable list or a 3D carousel.</p>\n\n<ol>\n<li>Data Source</li>\n</ol><p>Flow requires a list of data/components. As Flow internally requires the Repetition component, it shares Repetition’s functionality/API.</p>\n\n<p>Flow wraps the iteration with a div element, allowing this way composite CSS3 transforms: the ones specified by the path and the ones CSS-defined for selected/active status of elements in the repetition.</p>\n\n<p>2.1. Properties (same as Repetition)\nProperty</p>\n\n<p>Type</p>\n\n<p>Default</p>\n\n<p>Description</p>\n\n<p>objects</p>\n\n<p>Objects Array</p>\n\n<p>contentController</p>\n\n<p>ArrayController</p>\n\n<p>null</p>\n\n<p>isSelectionEnabled</p>\n\n<p>Boolean</p>\n\n<p>false</p>\n\n<p>selectedIndexes</p>\n\n<p>Integers Array</p>\n\n<p>activeIndexes</p>\n\n<p>Integers Array</p>\n\n<ol>\n<li>Paths</li>\n</ol><p>Paths define the 3D-layout of the repetition. The elements in the repetition will be positioned along the path at regular intervals. When Flow scrolls, the elements will move along the path. Multiple paths can be defined and the elements in the repetition will be assigned a path by interleaving its iteration index to the number of paths.</p>\n\n<p>3.1. Translation</p>\n\n<p>Translation in a path is defined as a 3D cubic Bézier spline. A Bézier spline is defined as multiple chained Bézier curve segments, where the end knot (3D point the curve crosses) of a curve is the first knot of the next curve. Each knot contains two shape control points called handlers (next handler and previous handler).</p>\n\n<p>3.2. Additional Parameters</p>\n\n<p>At each knot, it is possible to define additional parameters that will give fine grained control in the distribution of elements, rotation of elements, and arbitrary CSS properties applied to elements along the path.</p>\n\n<p>3.2.1. Density</p>\n\n<p>Density parameters controls the amount of elements that will be displayed at each spline curve.</p>\n\n<p>Each knot defines a couple of properties: previousDensity and nextDensity. Density is linearly interpolated along the curve. It is interpolated in the range defined by the current knot’s nextDensity property and the next knot’s previousDensity property.</p>\n\n<p>3.2.2. Rotation</p>\n\n<p>RotateX, rotateY and rotateZ parameters describe the rotation of elements at each knot of the spline. Its value is linearly interpolated along the segment.</p>\n\n<p>3.2.3. Arbitrary CSS</p>\n\n<p>Any CSS parameter can be controlled per knot, and it will be interpolated along the segment as in the case of rotations. Examples: opacity, borderRadius, backgroundColor.</p>\n\n<p>Units have to be defined for each path and each CSS parameter, like, for example, “px” in the case of borderRadius or no units in the case of opacity.</p>\n\n<p>3.3. Multiple Paths</p>\n\n<p>Multiple paths can be defined and Flow will interleave the repetition element at each iteration to a different path. Multiple paths share the scroll property, so they scroll in tandem.</p>\n\n<p>The element at iteration index i in the repetition will be assigned to the path with index i % paths.length. The offset within a path for an element at index i will be computed as floor(i / paths.length).</p>\n\n<p>Example with 2 paths:\nElement’s index   0   1   2   3   4   5   6   7   8\nPath’s index  0   1   0   1   0   1   0   1   0\nOffset  0   0   1   1   2   2   3   3   4</p>\n\n<p>3.4. Properties\nProperty    Type    Description\npaths   Objects Array   All paths\npaths[i]    Object  Path i\npaths[i].knots  Array   Knots at path i\npaths[i].knots[j]   Object  Knot j at path i\npaths[i].units  Object  Units for arbitrary CSS properties\npaths[i].units[j]   String  Example: borderRadius: “px”\npaths[i].headOffset Number  Offset within the path where the first element in the repetition will be for minimum scroll value. Defaults to 0\npaths[i].tailOffset Number  Offset where the last element in the repetition will be for the maximum scroll value. Defaults to 0\npaths[i].knots[j].knotPosition  Array   [x, y, z]\npaths[i].knots[j].previousHandlerPosition   Array   [x, y, z]\npaths[i].knots[j].nextHandlerPosition   Array   [x, y, z]\npaths[i].knots[j].previousDensity   Number<br>\npaths[i].knots[j].nextDensity   Number<br>\npaths[i].knots[j].rotateX   Number  In radians\npaths[i].knots[j].rotateY   Number  In radians\npaths[i].knots[j].rotateZ   Number  In radians\npaths[i].knots[j].[arbitraryCssProperty]    Number/Array    Array used with units like rgb</p>\n\n<ol>\n<li>Scroll</li>\n</ol><p>Some text here</p>\n\n<p>4.1. Properties\nProperty    Type    Default Description\nscroll  Number  0<br>\nisInputEnabled  Boolean true    Enables/disables scroll by drag and drop</p>\n\n<ol>\n<li>Scrolling Transitions</li>\n</ol><p>Scrolling transitions allow Flow to scroll programatically to a given offset in a smooth animation.</p>\n\n<p>5.1. Properties\nProperty    Type    Default Description\nscrollingTransitionDuration String/Number   “500ms” Same format as CSS3’s transition duration or number interpreted as miliseconds\nscrollingTransitionTimingFunction   String  “ease”  Same format as CSS3’s transition timing function\nhasSelectedIndexScrolling   Boolean false   Automatically starts a scrolling transition of the latest selected index\nselectedIndexScrollingOffset    Number  0   Sets the desired offset for the automatic scrolling transitions during selection</p>\n\n<p>5.2. Methods\nMethod  Parameters  Description\nstartScrollingIndexToOffset [Integer] index,\n[Number] offset Starts the scrolling animation of the element at the given index from the current offset to the given offset at the path\nstopScrolling   none    Stops the scrolling transition if there is any in-course</p>\n\n<p>5.3. Events\nEvent   Description\nscrollingTransitionStart    Fires when a scrolling transition starts\nscrollingTransitionEnd  Fires when a scrolling transition completely ends without haven’t been cancelled\nscrollingTransitionCancel   Fires if:</p>\n\n<p>stopScrolling was called during an in-course transition\nstartScrollingIndexToOffset was called and:\nThe user is touching/clicking the Flow scrollable area, so it is blocked for scrolling transitions\nA previous transition is in-course. It will fire before the next scrollingTransitionStart event\nThe user clip/tap the scrollable area in the middle of a transition, cancelling it</p>\n\n<ol>\n<li>Camera and Frustum Culling</li>\n</ol><p>Flow includes a virtual camera that can be moved inside the 3D scene. Flow’s container element define the viewport of the camera.</p>\n\n<p>This camera can be controlled with 4 parameters: camera position, target position, camera roll and field of view angle (fov). The fov is relative to the height of the viewport.</p>\n\n<p>Flow integrates a frustum culling algorithm to enhance rendering performance and memory consumption by reducing the number of elements in the DOM to the ones captured by the camera, and so, shown on the screen.</p>\n\n<p>This algorithm requires to optimally work the definition of a bounding sphere radius property. This sphere is centered at the rotational axis of the repetition elements, and has to be big enough to bound the bigger of the elements in that repetition. In the current version of Flow, this property is not yet computed automatically, so it needs to be set manually.</p>\n\n<p>6.1. Properties\nProperty    Type    Default Description\ncameraPosition  Array   [0, 0, 800] [x, y, z]\ncameraTargetPoint   Array   [0, 0, 0]   [x, y, z]\ncameraRoll  Number  0   Angle in radians\ncameraFov   Number  50  Angle in degrees\nelementsBoundingSphereRadius    Number  150 </p>\n\n<ol>\n<li>Dependencies</li>\n</ol><p>Repetition\nTranslateComposer</p>\n\n<p>API</p>\n\n<p>To be defined, but, at least it should include:</p>\n\n<ul>\n<li>Create/remove path</li>\n<li>Add/remove knots</li>\n<li>Add/modify knot parameters</li>\n<li>Set/modify units per path and CSS parameter</li>\n<li>Camera control\n...</li>\n</ul><p>By performance convenience, the serialization API will not be the same as the internal data structure so it could be defined in the most readable way as possible. A path could be defined as:</p>\n\n<p>path: {\n    knots: [\n        {\n            knotPosition: [x, y, z],\n            previousHandlerPosition: [x, y, z],\n            nextHandlerPosition: [x, y, z],\n            rotateX: 1,\n            density: 2,\n            opacity: 3,\n            borderRadius: 4\n        },\n        {\n            knotPosition: [x, y, z],\n            previousHandlerPosition: [x, y, z],\n            nextHandlerPosition: [x, y, z],\n            rotateX: 5,\n            density: 6,\n            opacity: 7,\n            borderRadius: 8\n        },\n        ...\n    ],\n    units: {\n        “rotateX”: “rad”,\n        “borderRadius”: “px”,\n        “opacity”: null\n    }\n}</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2012 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})