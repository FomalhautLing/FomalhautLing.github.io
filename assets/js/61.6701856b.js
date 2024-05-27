(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{345:function(a,_,v){"use strict";v.r(_);var t=v(14),r=Object(t.a)({},(function(){var a=this,_=a._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"正则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[a._v("#")]),a._v(" 正则")]),a._v(" "),_("p",[a._v("正则是一套规则，用于对字符串进行模式匹配")]),a._v(" "),_("p",[_("a",{attrs:{href:"https://regexr-cn.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("学习工具"),_("OutboundLink")],1)]),a._v(" "),_("h2",{attrs:{id:"基本匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本匹配"}},[a._v("#")]),a._v(" 基本匹配")]),a._v(" "),_("h3",{attrs:{id:"abc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#abc"}},[a._v("#")]),a._v(" "),_("code",[a._v("abc")])]),a._v(" "),_("p",[a._v('匹配 "abc"')]),a._v(" "),_("h3",{attrs:{id:"abc-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#abc-2"}},[a._v("#")]),a._v(" "),_("code",[a._v("[abc]")])]),a._v(" "),_("p",[a._v('匹配 "a" 或 "b" 或 "c"，整个方括号被视为一个字符')]),a._v(" "),_("h3",{attrs:{id:"abc-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#abc-3"}},[a._v("#")]),a._v(" "),_("code",[a._v("[^abc]")])]),a._v(" "),_("p",[a._v('匹配 "a"、"b"、"c" 以外的所有字符，整个方括号被视为一个字符')]),a._v(" "),_("h3",{attrs:{id:"a-z"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#a-z"}},[a._v("#")]),a._v(" "),_("code",[a._v("[a-z]")])]),a._v(" "),_("p",[a._v("匹配 a-z 中的任意一个字符。它是一种简写，除此以外还有 "),_("code",[a._v("[A-Z]")]),a._v(" 以及 "),_("code",[a._v("[0-9]")]),_("br"),a._v("\n它们可以写在一起 "),_("code",[a._v("[a-zA-Z0-9]")])]),a._v(" "),_("h3",{attrs:{id:"a-b"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#a-b"}},[a._v("#")]),a._v(" "),_("code",[a._v("a|b")])]),a._v(" "),_("p",[a._v('匹配 "a" 或 "b"')]),a._v(" "),_("h3",{attrs:{id:"点号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#点号"}},[a._v("#")]),a._v(" 点号 "),_("code",[a._v(".")])]),a._v(" "),_("p",[a._v("匹配除 "),_("code",[a._v("\\n")]),a._v(" "),_("code",[a._v("\\r")]),a._v(" 以外的任意一个字符，相当于 "),_("code",[a._v("[^\\n\\r]")])]),a._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[a._v("DETAILS")]),a._v(" "),_("p",[a._v("Vuepress 会给标题生成锚点链接，但锚点中不允许点号 "),_("code",[a._v(".")]),a._v(" 出现"),_("br"),a._v("\n本标题的 url 就不是 "),_("code",[a._v("../regex.html#点号.")])])]),a._v(" "),_("h3",{attrs:{id:"限定符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#限定符"}},[a._v("#")]),a._v(" 限定符")]),a._v(" "),_("ol",[_("li",[_("code",[a._v("+")]),a._v("：出现一次或多次")]),a._v(" "),_("li",[_("code",[a._v("*")]),a._v("：出现零次或多次")]),a._v(" "),_("li",[_("code",[a._v("?")]),a._v("：出现零次或一次")]),a._v(" "),_("li",[_("code",[a._v("{n}")]),a._v("：出现 n 次")]),a._v(" "),_("li",[_("code",[a._v("{n, }")]),a._v("：出现 n 次及以上")]),a._v(" "),_("li",[_("code",[a._v("{n, m}")]),a._v("：出现 n 到 m 次，包含端点")])]),a._v(" "),_("h2",{attrs:{id:"转义匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#转义匹配"}},[a._v("#")]),a._v(" 转义匹配")]),a._v(" "),_("h3",{attrs:{id:"s-与-s"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#s-与-s"}},[a._v("#")]),a._v(" "),_("code",[a._v("\\s")]),a._v(" 与 "),_("code",[a._v("\\S")])]),a._v(" "),_("p",[_("code",[a._v("\\s")]),a._v("：匹配空白字符，包括空格、制表符、换页符等等，相当于 "),_("code",[a._v("[ \\f\\n\\r\\t\\v]")])]),a._v(" "),_("p",[_("code",[a._v("\\S")]),a._v("：匹配非空白字符，相当于 "),_("code",[a._v("[^\\s]")])]),a._v(" "),_("h3",{attrs:{id:"d-与-d"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d-与-d"}},[a._v("#")]),a._v(" "),_("code",[a._v("\\d")]),a._v(" 与 "),_("code",[a._v("\\D")])]),a._v(" "),_("p",[_("code",[a._v("\\d")]),a._v("：匹配数字，相当于 "),_("code",[a._v("[0-9]")])]),a._v(" "),_("p",[_("code",[a._v("\\D")]),a._v("：匹配非数字，相当于 "),_("code",[a._v("[^\\d]")])]),a._v(" "),_("h3",{attrs:{id:"w-与-w"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#w-与-w"}},[a._v("#")]),a._v(" "),_("code",[a._v("\\w")]),a._v(" 与 "),_("code",[a._v("\\W")])]),a._v(" "),_("p",[_("code",[a._v("\\w")]),a._v("：匹配手写字符，相当于 "),_("code",[a._v("[a-zA-Z0-9_]")])]),a._v(" "),_("p",[_("code",[a._v("\\W")]),a._v("：匹配非手写字符，相当于 "),_("code",[a._v("[^\\w]")])]),a._v(" "),_("h2",{attrs:{id:"分组匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分组匹配"}},[a._v("#")]),a._v(" 分组匹配")]),a._v(" "),_("p",[a._v("圆括号内的字符被视为一个组，一般与或连用")]),a._v(" "),_("h3",{attrs:{id:"捕获组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#捕获组"}},[a._v("#")]),a._v(" 捕获组")]),a._v(" "),_("p",[a._v("圆括号圈起来的，例如 "),_("code",[a._v("Phone Number: ([0-9]{11})")])]),a._v(" "),_("h3",{attrs:{id:"非捕获组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非捕获组"}},[a._v("#")]),a._v(" 非捕获组")]),a._v(" "),_("p",[a._v("圆括号圈起来，且有 "),_("code",[a._v("?:")]),a._v(" 前导，例如 "),_("code",[a._v("My Like: ((?:apple)|(?:banana))")])]),a._v(" "),_("h3",{attrs:{id:"断言组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#断言组"}},[a._v("#")]),a._v(" 断言组")]),a._v(" "),_("p",[a._v("断言组也是非捕获组")]),a._v(" "),_("h4",{attrs:{id:"abc-d"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#abc-d"}},[a._v("#")]),a._v(" "),_("code",[a._v("abc(?=\\d+)")])]),a._v(" "),_("p",[a._v('匹配 "abc"，且后面紧跟着一串数字')]),a._v(" "),_("h4",{attrs:{id:"d-abc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d-abc"}},[a._v("#")]),a._v(" "),_("code",[a._v("(?<=\\d+)abc")])]),a._v(" "),_("p",[a._v('匹配 "abc"，且前面紧跟着一串数字')]),a._v(" "),_("h4",{attrs:{id:"abc-d-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#abc-d-2"}},[a._v("#")]),a._v(" "),_("code",[a._v("abc(?!\\d+)")])]),a._v(" "),_("p",[a._v('匹配 "abc"，且后面'),_("strong",[a._v("不")]),a._v("紧跟着一串数字")]),a._v(" "),_("h4",{attrs:{id:"d-abc-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d-abc-2"}},[a._v("#")]),a._v(" "),_("code",[a._v("(?<!\\d+)abc")])]),a._v(" "),_("p",[a._v('匹配 "abc"，且前面'),_("strong",[a._v("不")]),a._v("紧跟着一串数字")]),a._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),_("p",[_("a",{attrs:{href:"https://www.runoob.com/regexp/regexp-syntax.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("[1] 菜鸟教程.正则表达式[EB/OL].菜鸟教程."),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);