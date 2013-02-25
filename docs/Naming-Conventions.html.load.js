montageDefine("e3acbc9","docs/Naming-Conventions.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Naming Conventions - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body class=docs>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Naming Conventions<a class=anchor id=Naming-Conventions href="#Naming-Conventions"></a>\n</h1>\n\n<h2>Modules<a class=anchor id=Modules href="#Modules"></a>\n</h2>\n\n<ol>\n<li>All module names and package names are <code>lower-case</code>, that is all terms are lower-case words or numbers delimited by hyphens.</li>\n</ol><h2>Reels<a class=anchor id=Reels href="#Reels"></a>\n</h2>\n\n<ol>\n<li>If there is an official W3C HTML element we use that name, like <code>button</code> for a <code>&lt;button&gt;</code>\n</li>\n<li>If there is no official equivalent we can make up a name, like <code>toggle-switch</code>\n</li>\n<li>For input elements we use an <code>"element-type"</code> pattern, like <code>input-range</code>, <code>input-radio</code>, <code>input-color</code>.</li>\n</ol><h2>CSS<a class=anchor id=CSS href="#CSS"></a>\n</h2>\n\n<p>Class names follow a <code>org-Component</code> and <code>org-Component-childElement</code> pattern. So for the progress bar it would be: <code>montage-Progress</code> and <code>montage-Progress-bar</code>.</p>\n\n<p>Here a guide with more details:</p>\n\n<ol>\n<li>All CSS classes are namespaced with <strong>montage</strong> + a <strong>dash</strong>, like <code>montage-</code>.</li>\n<li>After follows the component name in <strong>CamelCase</strong> (same as the JS class), like <code>montage-Button</code>, <code>montage-InputRange</code>.</li>\n<li>If the component has <strong>child elements</strong>, they get added to a component’s name with a dash, like <code>montage-InputRange-thumb</code>. Note: that child elements start with lower case to make the distinction between component and child element more clear. The name of the children should be the same as the native pseudo elements/Shadow DOM (if already known and it makes sense). For example: -webkit-progress-**bar**. Here a <a href="https://gist.github.com/3759334">list</a> used in WebKit.</li>\n<li>If a child element needs to have a name that contains multiple words, <strong>camelCase</strong> is used: <code>montage-InputRange-thumbWithSpikyEars</code>.</li>\n<li>If child elements have child elements themselves. They also get appended with a dash and the same rules as in point 3 + 4 applies, like <code>montage-InputRange-thumb-nobs-centerNob</code>. There is <strong>no limit</strong> to how many levels of child elements can be used, but if the whole CSS class becomes too long, it might be a good idea to <strong>break</strong> it into sub-components.</li>\n<li>If a class name represents a <strong>state</strong> or a <strong>variation</strong>, double dash is used, like <code>montage-InputRange--dragging</code>, <code>montage-Button--pressed</code> or variations <code>montage-Button--big</code>, <code>montage-Button--primary</code>.</li>\n</ol><p>For the reasoning of this naming convention, see this <a href="https://github.com/montagejs/montage/issues/795">discussion</a>. In short:</p>\n\n<ul>\n<li>The goal was to make it easy to see the <strong>markup structure</strong> by just looking at the CSS name.</li>\n<li>It also has good usability because you can double-click <strong>each part</strong> to quickly select/edit them. That\'s why no <code>_</code> underscores are used. Try <code>montage-InputRange-thumb</code> vs <code>montage_InputRange_thumb</code>.</li>\n<li>And by using a single selector, it avoids <strong>name collisions</strong> (less likely to leak-in/out).</li>\n</ul><p><strong>TODO</strong>: Since we will be using <a href="http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets">aria</a> for "states", we could also use that for the CSS selectors. That way we don\'t have to add aria AND a class when changing states. The currently used <code>.montage-hidden</code> could be replaced with <code>[aria-hidden]</code>. Not sure if this still needs a montage namespace or if it should be on component basis? It would leave it open to the component author to choose the best way for hiding (display:none, visibility:hidden or opacity..). And it also is safer to use instead of the global selector. We just would need to "enforce" it everywhere.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})