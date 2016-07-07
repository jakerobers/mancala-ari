Ext.data.JsonP.Caches({"tagname":"class","name":"Caches","autodetected":{},"files":[{"filename":"core.js","href":"core.html#Caches"}],"static":true,"members":[{"name":"imagePatterns","tagname":"property","owner":"Caches","id":"static-property-imagePatterns","meta":{"static":true}},{"name":"images","tagname":"property","owner":"Caches","id":"static-property-images","meta":{"static":true}},{"name":"preloadImages","tagname":"method","owner":"Caches","id":"static-method-preloadImages","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"static-class-Caches","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/core.html#Caches' target='_blank'>core.js</a></div></pre><div class='doc-contents'><p>Tracks cached items.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-imagePatterns' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Caches'>Caches</span><br/><a href='source/core.html#Caches-static-property-imagePatterns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Caches-static-property-imagePatterns' class='name expandable'>imagePatterns</a> : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A map from image file paths to CanvasPattern objects. ...</div><div class='long'><p>A map from image file paths to CanvasPattern objects.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='static-property-images' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Caches'>Caches</span><br/><a href='source/core.html#Caches-static-property-images' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Caches-static-property-images' class='name expandable'>images</a> : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A map from image file paths to Image objects. ...</div><div class='long'><p>A map from image file paths to Image objects.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-preloadImages' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Caches'>Caches</span><br/><a href='source/core.html#Caches-static-method-preloadImages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Caches-static-method-preloadImages' class='name expandable'>preloadImages</a>( <span class='pre'>files, [options]</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Preload a list of images asynchronously. ...</div><div class='long'><p>Preload a list of images asynchronously.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>files</span> : String[]<div class='sub-desc'><p>An Array of paths to images to preload.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>A map of options for this function.</p>\n<ul><li><span class='pre'>finishCallback</span> : Function (optional)<div class='sub-desc'><p>A function to run when all images have finished loading.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>numLoaded</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The number of images that were preloaded.</p>\n</div></li></ul></div></li><li><span class='pre'>itemCallback</span> : Function (optional)<div class='sub-desc'><p>A function to run when an image has finished loading.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filepath</span> : String (optional)<div class='sub-desc'><p>The file path of the loaded image.</p>\n</div></li><li><span class='pre'>numLoaded</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The number of images that have been loaded so far (including the\n  current one).</p>\n</div></li><li><span class='pre'>numImages</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The total number of images to load.</p>\n</div></li></ul></div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{"static":true}});