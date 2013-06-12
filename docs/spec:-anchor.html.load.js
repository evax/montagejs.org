montageDefine("3d983b5","docs/spec:-anchor.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Anchor - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>Anchor wraps a <code>&lt;a&gt;</code> HTMLElement and provides Data binding support. Anchor extends from NativeControl.</p>\n\n<p>Fires an <em>action</em> event</p>\n\n<h2>Properties<a class=anchor id=Properties href="#Properties"></a>\n</h2>\n\n<p><code>textContent</code> (added to component) same as dynamic-text</p>\n\n<p><code>hash</code>\nData Type = String, Default value = null</p>\n\n<p><code>href</code>\nData Type = String, Default value = null</p>\n\n<p><code>hreflang</code>\nData Type = String, Default value = null</p>\n\n<p><code>media</code>\nData Type = String, Default value = null</p>\n\n<p><code>rel</code>\nData Type = String, Default value = null</p>\n\n<p><code>target</code>\nData Type = String, Default value = null</p>\n\n<p><code>type</code>\nData Type = String, Default value = null</p>\n\n<p><code>name</code>\nData Type = String, Default value = null</p>\n\n<h2>Markup and Serialization<a class=anchor id=Markup-and-Serialization href="#Markup-and-Serialization"></a>\n</h2>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;tbody</span> <span class=na>id=</span><span class=s>"table-row"</span><span class=nt>&gt;</span>\n<span class=nt>&lt;tr&gt;</span>\n   <span class=nt>&lt;td&gt;&lt;a</span> <span class=na>id=</span><span class=s>"link"</span> <span class=na>target=</span><span class=s>"_blank"</span><span class=nt>&gt;&lt;/a&gt;&lt;/td&gt;</span>\n   <span class=nt>&lt;td&gt;&lt;span</span> <span class=na>id=</span><span class=s>"desc"</span><span class=nt>&gt;&lt;/span&gt;&lt;/td&gt;</span>\n<span class=nt>&lt;/tr&gt;</span>\n<span class=nt>&lt;/tbody&gt;</span>\n</pre></div>\n\n<p></p><div class=highlight><pre><span class=p>{</span>\n    <span class=nt>"link"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"module"</span><span class=p>:</span> <span class=s2>"montage/ui/anchor.reel"</span><span class=p>,</span>\n        <span class=nt>"name"</span><span class=p>:</span> <span class=s2>"Anchor"</span><span class=p>,</span>\n        <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"link"</span><span class=p>}</span>\n        <span class=p>},</span>\n        <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"href"</span><span class=p>:</span> <span class=p>{</span>\n                <span class=nt>"boundObject"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"list1"</span><span class=p>},</span>\n                <span class=nt>"boundObjectPropertyPath"</span><span class=p>:</span> <span class=s2>"objectAtCurrentIteration.href"</span><span class=p>,</span>\n                <span class=nt>"oneway"</span><span class=p>:</span> <span class=kc>true</span>\n            <span class=p>},</span>\n            <span class=nt>"textContent"</span><span class=p>:</span> <span class=p>{</span>\n                <span class=nt>"boundObject"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"list1"</span><span class=p>},</span>\n                <span class=nt>"boundObjectPropertyPath"</span><span class=p>:</span> <span class=s2>"objectAtCurrentIteration.src"</span><span class=p>,</span>\n                <span class=nt>"oneway"</span><span class=p>:</span> <span class=kc>true</span>\n            <span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Example: examples/sink/components/anchor-example.reel\nUnit Tests: test/ui/anchor-spec.js</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)}();</script>\n\n</body>\n</html>'});