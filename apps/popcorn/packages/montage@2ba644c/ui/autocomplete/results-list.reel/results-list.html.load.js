montageDefine("2ba644c","ui/autocomplete/results-list.reel/results-list.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=results-list.css>\n    <script type="text/montage-serialization">{"results":{"prototype":"ui/controller/array-controller","properties":{"selectObjectsOnAddition":true,"automaticallyOrganizeObjects":true}},"repetition1":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"repetition1"},"contentController":{"@":"results"},"isSelectionEnabled":true},"bindings":{"contentController":{"<-":"@owner.contentController"},"activeIndexes":{"<-":"@owner.activeIndexes"}}},"resultItem":{"prototype":"ui/autocomplete/result-item.reel","properties":{"element":{"#":"result-item"}},"bindings":{"textPropertyPath":{"<-":"@owner.textPropertyPath"},"object":{"<-":"@repetition1.objectAtCurrentIteration"}}},"owner":{"prototype":"ui/autocomplete/results-list.reel","properties":{"element":{"#":"results-list"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=results-list class=results-list>\n        <ul class=repetition data-montage-id=repetition1>\n            <li class=result-item data-montage-id=result-item></li>\n        </ul>\n    </div>\n</body>\n</html>'})