(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{281:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},793:function(t,a,s){"use strict";s.r(a);var e=s(0),n=s(54),r=(s(88),s(20),s(34),s(281)),o=s(1),p=(o.default.config.optionMergeStrategies,{VueRemarkRoot:r.a}),c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===Object(n.a)(p[t])&&"function"==typeof p[t].render?a[t]=p[t]:s[t]=function(){return p[t]}}))},i=o.default.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Additional Syntax "};var v=function(t){t.options[l]&&(t.options[l]=u),o.default.util.defineReactive(t.options,l,u),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"additional-syntax"}},[s("a",{attrs:{href:"#additional-syntax","aria-hidden":"true"}},[t._v("#")]),t._v("Additional Syntax")]),s("p",[t._v("By now you can already build some actual projects. And you should do it! Before we dive into the next unit, let's learn some more practical syntax so you have the real-world tools you need need to build that next killer dapp.")]),s("h2",{attrs:{id:"binary-operators"}},[s("a",{attrs:{href:"#binary-operators","aria-hidden":"true"}},[t._v("#")]),t._v("Binary Operators")]),s("p",[t._v("The first new syntax will be some binary operators. Binary operators take two operands, which is why they're called "),s("em",[t._v("bi")]),t._v(" -nary. Most of these are for arithmetic. Consider these examples.")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",{pre:!0,attrs:{class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("c2f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f2c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token doc-comment comment"}},[t._v(" /**\n   * Converts Celcius temperatures to Farenheit. The conversion\n   * multiply by 9/5 and add 32\n   */")]),t._v("\n  contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c2f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("celcius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("celcius "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n  contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f2c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("farenheit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Nil "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO you complete this contract")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stdout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("rho:io:stdout")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 C should be 32 F")]),t._v("\n    c2f"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 100 C should be 212 F")]),t._v("\n    c2f"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h3",{attrs:{id:"exercise"}},[s("a",{attrs:{href:"#exercise","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("Your turn to implement the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("f2c")]),t._v(" contract. You can use the same two test cases in reverse to make sure you're getting the right result.")]),s("p",[t._v("The final binary operator you should know is "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("++")]),t._v(' which is used for "concatenation" or connecting two smaller things to make a bigger thing. The operator works for lists, which we\'ll learn about in the next unit, as well as strings which we already know about.')]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",{pre:!0,attrs:{class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("greeter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello there, "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stdout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("rho:io:stdout")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    greeter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Joshy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    greeter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("What would the code "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('stdout!("I" ++ "<3" ++ "rholang")')]),t._v(" output?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" I <3 rholang")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(' ["I", "<3", "rholang"]')]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" I<3rholang")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" I++<3++rholang")])]),s("h2",{attrs:{id:"receiving-processes"}},[s("a",{attrs:{href:"#receiving-processes","aria-hidden":"true"}},[t._v("#")]),t._v("Receiving Processes?")]),s("p",[t._v("We always send _"),s("strong",[t._v("_ and receive __")]),t._v(".")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" processes, names")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" processes, processes")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" names, names")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" names, processes")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" no such restriction")])]),s("p",[t._v("That was just a nice refresher from last unit. Hope your memory is holding up so far. If you've been writing your own rholang code, you may have found yourself really wishing you could receive processes directly so you didn't have to type all those "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("*")]),t._v("s. This is a common situation, and luckily rholang has a nice solution. We do always have to receive names, but we can bind them to name syntax like "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("@myValue")]),t._v(". Since "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("@myValue")]),t._v(" is a name, "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("myValue")]),t._v(" must be a process.")]),s("p",[t._v("This syntax allows us to do things like\n`for (@number <- someChan){double!(2 * number)}"),s("code",{pre:!0,attrs:{class:"language-text"}})]),s("p",[t._v("What code could be parred with the previous code to leave the number "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("24")]),t._v(" on "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("double")]),t._v("?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" @number!(12)")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" someChan!(12)")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" @number!(24)")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" double!(48)")])]),s("h3",{attrs:{id:"exercise-1"}},[s("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("Revisit the telephone game from lesson 3 and show that we could have used the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("@message")]),t._v(" pattern so "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("message")]),t._v(" would be a process.")]),s("p",[t._v("What should replace the ... in "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("for(@x <- @y){stdout!(...)}")]),t._v(" to make the program valid?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("@x")])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("x")])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("*x")])])]),s("h2",{attrs:{id:"ifs-and-conditions"}},[s("a",{attrs:{href:"#ifs-and-conditions","aria-hidden":"true"}},[t._v("#")]),t._v("Ifs and Conditions")]),s("p",[t._v("In nearly every programming language the program's behavior can vary depending on some condition. For example I run on the trails "),s("em",[t._v("if")]),t._v(" it is nice out, but stick to the roads in "),s("em",[t._v("if")]),t._v(" it is rainy. In rholang the syntax is to do that is.")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("if ( /* condition */ ) {\n  Nil // Do this if condition is true\n}\nelse {\n  Nil // Do this if condition is false\n}`")])]),s("p",[t._v("The situations where you will use "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("if")]),t._v(" are limitless and include guessing a secret word correctly, setting the high score in a video game, determining which poker hand is higher, and calculating the winner of an election. This example contract shows how you might check the status of a bank account.")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",{pre:!0,attrs:{class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stdout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("rho:io:stdout")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"signTest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      stdout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Account in good standing."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      stdout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Account overdrawn."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"signTest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("h3",{attrs:{id:"exercise-2"}},[s("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v('The accounting program has a problem. It says that accounts with a balance of zero are overdrawn. But really zero should be in good standing. You can fix this using the "greater than or equal" operator, '),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v(">=")]),t._v(". Make sure you add a few tests to make sure it works.")]),s("h2",{attrs:{id:"comparison-operators"}},[s("a",{attrs:{href:"#comparison-operators","aria-hidden":"true"}},[t._v("#")]),t._v("Comparison Operators")]),s("p",[t._v("Now that you know how to use the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("if")]),t._v("/"),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("else")]),t._v(" construct, there are lots of good comparison operators at your disposal.")]),s("ul",[s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a > b")]),t._v(" Is a greater than b?")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a < b")]),t._v(" Is a less than b?")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a == b")]),t._v(" Is a equal to b?")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a <= b")]),t._v(" Is a less than "),s("em",[t._v("or")]),t._v(" equal to b?")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a >= b")]),t._v(" Is a greater than "),s("em",[t._v("or")]),t._v(" equal to b?")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a != b")]),t._v(" Is a unequal to b?")])]),s("p",[t._v("These operators work on both numbers and text strings. Text strings are sorted lexicographically, which is a lot like alphabetically. But be careful! If you try to compare a number to a string, it will just be another stopped process.")]),s("p",[t._v("Which of these are true?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" 4 < 3")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(' "b" < "a"')]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" 5 <= 6")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(' "hello" != "hello"')])]),s("h3",{attrs:{id:"exercise-3"}},[s("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v('Write a rholang program that requires the user to send in their name. In most cases the contract will simply reply with "hello", but if their name is the same as yours, it will tell them so.')]),s("h2",{attrs:{id:"boolean-operators"}},[s("a",{attrs:{href:"#boolean-operators","aria-hidden":"true"}},[t._v("#")]),t._v("Boolean Operators")]),s("p",[t._v("Rholang also has the classic Boolean operators AND, OR, and NOT. The syntax is")]),s("ul",[s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a and b")]),t._v(" true when both "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a")]),t._v(" and "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("b")]),t._v(" are true")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a or b")]),t._v(" true when either "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a")]),t._v(" or "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("b")]),t._v(" is true")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("not a")]),t._v(" true when "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("a")]),t._v(" is false")])]),s("p",[t._v("What would "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("stdout!(true and true)")]),t._v(" output?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" true")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" false")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" neither; that's invalid syntax")])]),s("p",[t._v("What would "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("stdout!(not true)")]),t._v(" output?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" true")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" false")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" neither; that's invalid syntax")])]),s("p",[t._v("What would "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("stdout!((not not true) or false)")]),t._v(" output?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" true")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" false")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" neither; that's invalid syntax")])]),s("h3",{attrs:{id:"exercise-4"}},[s("a",{attrs:{href:"#exercise-4","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("Write a contract that tells a caller whether they are eligible to vote. In order to vote you must be a certain age and of a certain country. You can pick the age and country. To use the contract, I would par in "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('canIVote!("Nigeria", 30)"')]),t._v(".")]),s("h3",{attrs:{id:"exercise-5"}},[s("a",{attrs:{href:"#exercise-5","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("The contract above only works for one specific country. Use what we learned about factories to enable creating many of these eligibility checkers. To create a new checker for Canada, where the voting age is 18 par in "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('checkerFactory!(canadaChecker, "Canada", 18)')]),t._v(". Then a 41-year-old Estonian would check whether he can vote in Canada with "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('canadaChecker!("Estonia", 41)')]),t._v(". Spoiler alert: He cannot vote in Canada.")])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);a.default=_.exports}}]);