function FeedHandler(e){this.init(e,{ignoreWhitespace:!0})}function getElements(e,t){return DomUtils.getElementsByTagName(e,t,!0)}function getOneElement(e,t){return DomUtils.getElementsByTagName(e,t,!0,1)[0]}function fetch(e,t,n){return DomUtils.getText(DomUtils.getElementsByTagName(e,t,n,1))}var index=require("./index.js"),DomHandler=index.DomHandler,DomUtils=index.DomUtils;require("util").inherits(FeedHandler,DomHandler),FeedHandler.prototype.init=DomHandler;var isValidFeed=function(e){return"rss"===e||"feed"===e||"rdf:RDF"===e};FeedHandler.prototype.onend=function(){var e,t,n={},r=getOneElement(isValidFeed,this.dom);r&&("feed"===r.name?(t=r.children,n.type="atom",(e=fetch("id",t))&&(n.id=e),(e=fetch("title",t))&&(n.title=e),(e=getOneElement("link",t))&&(e=e.attribs)&&(e=e.href)&&(n.link=e),(e=fetch("subtitle",t))&&(n.description=e),(e=fetch("updated",t))&&(n.updated=new Date(e)),(e=fetch("email",t,!0))&&(n.author=e),n.items=getElements("entry",t).map(function(e){var t,n={};return e=e.children,(t=fetch("id",e))&&(n.id=t),(t=fetch("title",e))&&(n.title=t),(t=getOneElement("link",e))&&(t=t.attribs)&&(t=t.href)&&(n.link=t),(t=fetch("summary",e))&&(n.description=t),(t=fetch("updated",e))&&(n.pubDate=new Date(t)),n})):(t=getOneElement("channel",r.children).children,n.type=r.name.substr(0,3),n.id="",(e=fetch("title",t))&&(n.title=e),(e=fetch("link",t))&&(n.link=e),(e=fetch("description",t))&&(n.description=e),(e=fetch("lastBuildDate",t))&&(n.updated=new Date(e)),(e=fetch("managingEditor",t))&&(n.author=e),n.items=getElements("item",r.children).map(function(e){var t,n={};return e=e.children,(t=fetch("guid",e))&&(n.id=t),(t=fetch("title",e))&&(n.title=t),(t=fetch("link",e))&&(n.link=t),(t=fetch("description",e))&&(n.description=t),(t=fetch("pubDate",e))&&(n.pubDate=new Date(t)),n}))),this.dom=n,DomHandler.prototype._handleCallback.call(this,r?null:Error("couldn't find root of feed"))},module.exports=FeedHandler;