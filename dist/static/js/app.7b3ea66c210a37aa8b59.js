webpackJsonp([1],{"9bGa":function(e,t){},M0B6:function(e,t){},MYl6:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/5sW"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{pre:!0,attrs:{class:"navbar"}},[n("router-link",{attrs:{to:"/"}},[e._v("Blogroll")]),e._v(" "),n("router-link",{attrs:{to:"/quotes"}},[e._v("Quotes")]),e._v(" "),e._m(0)],1),e._v(" "),n("div",{attrs:{id:"header"}},[n("img",{pre:!0,attrs:{id:"site-avatar",src:"/static/img/monkey1-square-grayscale.jpg",alt:"Avatar"}}),e._v(" "),n("h1",{staticClass:"link",attrs:{id:"site-title"},on:{click:function(t){e.$router.push("/")}}},[e._v(e._s(e.title))]),e._v(" "),n("h4",{attrs:{id:"site-subtitle"},domProps:{innerHTML:e._s(e.quote)}})]),e._v(" "),n("hr")])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{class:"dropdown"}},[t("button",{attrs:{class:"dropbtn"}},[this._v("External Links ↓")]),this._v(" "),t("div",{attrs:{class:"dropdown-content"}},[t("a",{attrs:{href:"https://wp.raywinkelman.com"}},[this._v("Wordpress Site")]),this._v(" "),t("a",{attrs:{href:"https://linkedin.com/in/raywinkelman"}},[this._v("LinkedIn")]),this._v(" "),t("a",{attrs:{href:"https://github.com/ray-winkelman"}},[this._v("GitHub")])])])}]};var r={name:"App",components:{SiteNav:n("VU/8")({name:"site-nav",data:function(){return{title:"Ray Winkelman"}},computed:{quote:function(){return this.$quotes.getRandomQuote()}}},o,!1,function(e){n("MYl6")},"data-v-693f76f6",null).exports}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content",attrs:{id:"app"}},[t("SiteNav"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")(r,a,!1,function(e){n("M0B6")},null,null).exports,u=n("/ocq"),l={name:"posts",data:function(){return{posts:Array(0),page:1,totalPages:Number(),search:String()}},created:function(){this.getPosts()},methods:{getPosts:function(){var e=this;this.$axios.get("posts",{params:{page:this.page,per_page:1,author:1,search:this.search}}).then(function(t){e.posts=t.data,e.totalPages=Number(t.headers["x-wp-totalpages"])}).catch(function(e){console.log(e)})},nextPage:_.debounce(function(){this.page<this.totalPages&&(this.page++,this.getPosts())},500,{leading:!0,trailing:!1}),backPage:_.debounce(function(){this.page>1&&(this.page--,this.getPosts())},500,{leading:!0,trailing:!1})}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"posts"}},[n("div",{staticClass:"post-nav-links-wrapper"},[n("button",{staticClass:"post-nav-links",on:{click:e.backPage}},[n("span",[e._v("«")])]),e._v(" "),n("span",[e._v("Page "+e._s(e.page)+" of "+e._s(e.totalPages))]),e._v(" "),n("button",{staticClass:"post-nav-links",on:{click:e.nextPage}},[n("span",[e._v("»")])])]),e._v(" "),e._l(e.posts,function(t,s){return t.title?n("div",{key:t.id,attrs:{id:t.id}},[n("h1",{staticClass:"post-title link",domProps:{innerHTML:e._s(t.title.rendered)},on:{click:function(n){e.$router.push("post/"+t.slug)}}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.modified)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(t.content.rendered)}}),e._v(" "),n("hr")]):e._e()}),e._v(" "),n("div",{staticClass:"post-nav-links-wrapper"},[n("button",{staticClass:"post-nav-links",on:{click:e.backPage}},[n("span",[e._v("«")])]),e._v(" "),n("span",[e._v("Page "+e._s(e.page)+" of "+e._s(e.totalPages))]),e._v(" "),n("button",{staticClass:"post-nav-links",on:{click:e.nextPage}},[n("span",[e._v("»")])])])],2)},staticRenderFns:[]};var h=n("VU/8")(l,c,!1,function(e){n("9bGa")},"data-v-ea5089c4",null).exports,d={name:"post",data:function(){return{post:{slug:this.$route.params.slug}}},created:function(){this.getPost()},methods:{getPost:function(){var e=this;this.$axios.get("posts",{params:{slug:this.$route.params.slug}}).then(function(t){e.post=t.data[0]}).catch(function(e){console.log(e)})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.post.title?n("div",{attrs:{id:"post"}},[n("h1",{staticClass:"post-title",domProps:{innerHTML:e._s(e.post.title.rendered)}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.post.modified)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.post.content.rendered)}})]):e._e()},staticRenderFns:[]};var g=n("VU/8")(d,p,!1,function(e){n("UyPN")},"data-v-67505410",null).exports,v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.quotes,function(t,s){return n("div",{key:s},[n("h4",{staticClass:"quote",domProps:{innerHTML:e._s(t)}}),e._v(" "),n("br")])}))},staticRenderFns:[]};var f=n("VU/8")({name:"quotes",computed:{quotes:function(){return this.$quotes.getQuotes()}}},v,!1,function(e){n("ZxIo")},"data-v-e7c20f4e",null).exports;s.a.use(u.a);var m=new u.a({mode:"history",routes:[{path:"/",name:"Posts",component:h},{path:"/post/:slug",name:"Post",component:g},{path:"/quotes",name:"Quotes",component:f}]}),T=n("HSQo"),b=n.n(T),k=n("//Fk"),y=n.n(k);b()(s.a.prototype,{$axios:{get:function(){return s.a.axios}}});b()(s.a.prototype,{$quotes:{get:function(){return s.a.quotes}}}),s.a.config.productionTip=!1,s.a.config.debug=!1,s.a.use(function(e){e.axios=axios.create({baseURL:"https://wp.raywinkelman.com/wp-json/wp/v2/",timeout:1/0}),e.axios.interceptors.request.use(function(t){return!0===e.config.debug&&console.log("Request:",t),t},function(e){return y.a.reject(e)}),e.axios.interceptors.response.use(function(t){return!0===e.config.debug&&console.log("Response:",t),t},function(e){if(e.response)switch(e.response.status){case 401:case 403:return y.a.reject("Oops. Unauthorized.");case 400:case 409:case 404:case 500:default:if(!e.response.statusText)break;return y.a.reject(e.response.statusText)}else{if(e.request)return y.a.reject("Oops. There was a Network Error.");if(e.message)return y.a.reject(e.message)}return y.a.reject("Oops. Something went wrong.")})}),s.a.use(function(e){e.quotes={quotes:['"To Get Respect, You Have To Give Respect."<br>― Anonymous','"A Cop Pulled Me Over Once. I Let Him Go With A Warning."<br>― Chuck Norris','"It Is The Mark Of An Educated Mind To Be Able To Entertain A Thought Without Accepting It."<br>― Aristotle','"If You Even Dream Of Beating Me You’d Better Wake Up And Apologize."<br>― Muhammad Ali','"Listen, Smile, Agree, And Then Do Whatever The F*ck You Were Gonna Do Anyway."<br>― Robert Downey Jr.','"In Theory There Is No Difference Between Theory And Practice. In Practice There Is."<br>― Yogi Berra','"Like Autumn Leaves His Sense Fell From Him...<br>An Empty Glass Of Himself... Shattered. Somewhere Within...<br>His Thoughts Like a Hundred Moths... Trapped in a Lampshade...<br>Somewhere Within...<br>Their Wings Banging and Burning... On Through Endless Night...<br>Forever Awake He Lies Shaking and Stuttering...<br>Praying For Someone To Turn Off The Light..."<br>― Zack De La Rocha of Rage Against The Machine','"If A Nation Expects To Be Ignorant And Free In A State Of Civilization, It Expects What Never Was And Never Will Be."<br>― Thomas Jefferson, 1816.','"You Have To Understand, Most Of These People Are Not Ready To Be Unplugged. And Many Of Them Are So Inert, So Hopelessly Dependent On The System, That They Will Fight To Protect It."<br>― Morpheus, The Matrix','"You Think Darkness Is Your Ally, But You Merely Adopted The Dark. I Was Born In It - Molded By It. I Didn\'t See The Light Until I Was Already A Man. By Then, To Me - It Was Only Blinding. The Shadows Betray You Because They Belong To Me."<br>― Bane, The Dark Knight Rises','"Hope Is For People Who Do Not Already Live In Grace."<br>― Mexican Samaritan, Prison Break','"Nobody Loves Me But My Mother, And She Could Be Jive\'n Too."<br>― Blues Singer, Fresh Prince of Bel Air','"Fortune Favors The Brave."<br>― Latin Proverb',"\"Which One Of U Motha' F*ckaz' Is Comin' In Second?!\"<br>― CT Fletcher","\"I'd Tighten My Belt 'Fore I Beg For Help.\"<br>― Jay Z",'"Keep Business Business. Keep Pleasure Pleasure; And I Never Mix It, Ever, Ever."<br>― Juelz Santana','"Do, Or Do Not. There Is No Try."<br>― Yoda','"Don\'t Talk About It. Be About It."<br>― Mos Def','"Ignorance Is Bliss."<br>― Anonymous','"Rumble, Young Man, Rumble!"<br>― Mohammed Ali','"Heavy Is The Head That Wears The Crown."<br>― Anonymous','"Know Yourself, And You Will Win All Battles"<br>― Sun Tzu','"You Miss 100% Of The Shots You Don\'t Take."<br>― Wayne Gretzky','"We All Self Conscious, I\'m Just The First To Admit It."<br>― Kanye West',"\"If You Havin' Girl Problems I Feel Bad For You Son, I Got 99 Problems And A B*tch Ain't One.\"<br>― Jay Z",'"Birthdays Were The Worst Days, Now We Sip Champagne When We Thirsty."<br>― Biggie',"\"I'm Not Cocky. I'm Confident. So When You Tell Me I'm The Best It's A Compliment.\"<br>― Jadakiss",'"Aim to be the best king I could be,<br>Ain\'t another rapper in the ring rival me,<br>Float like a butterfly, sting like a bee,<br>Talk like a gentleman, swing like a G"<br>― Iron Solomon','"I Ain\'t Really Tryna Play With These Boys, They Talk A Good One In The Booth But Got No Pain In They Voice.."<br>― Bender',"\"If Shootin's The Solution Then You Not That Clever, If You Don't Know Sh*t, Then You Still Know Better.\"<br>― Murs",'"As A Kid I Had To Steal Breakfast, Now The Best Question You Have To Ask Me Is This A Real Necklace."<br>― Crooked I','"People Of Character Do The Right Thing Even If No One Else Does, Not Because They Think It Will Change The World But Because They Refuse To Be Changed By The World."<br>― Michael Josephson'],getRandomQuote:function(){var e=Math.floor(Math.random()*this.quotes.length);return this.quotes[e]+" (Quote "+e+"/"+this.quotes.length+")"},getQuotes:function(){return _.clone(this.quotes)}}}),new s.a({el:"#app",router:m,render:function(e){return e(i)}})},UyPN:function(e,t){},ZxIo:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7b3ea66c210a37aa8b59.js.map