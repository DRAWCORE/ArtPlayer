"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[591],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],s={title:"Third party librarys",sidebar_position:7,slug:"/libraries"},i=void 0,p={unversionedId:"en/Libraries",id:"en/Libraries",title:"Third party librarys",description:"Overview",source:"@site/docs/en/Libraries.mdx",sourceDirName:"en",slug:"/libraries",permalink:"/document/libraries",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Third party librarys",sidebar_position:7,slug:"/libraries"},sidebar:"en",previous:{title:"Common events",permalink:"/document/events"},next:{title:"Danmuku plugin",permalink:"/document/en/Plugins/danmuku"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"flv.js",id:"flvjs",level:2},{value:"hls.js",id:"hlsjs",level:2},{value:"dash.js",id:"dashjs",level:2},{value:"shaka-player",id:"shaka-player",level:2},{value:"webtorrent",id:"webtorrent",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"With the option ",(0,l.kt)("inlineCode",{parentName:"p"},"customType"),", it is easy to integrate third-party video decoding libraries.\nWhen there are multiple decoders, you can add them to ",(0,l.kt)("inlineCode",{parentName:"p"},"customType"),". When the decoding library is too large, you can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"js")," to dynamically import")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"By default, the player will parse the video type of the ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," option (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"m3u8"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"flv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mpd"),").\nIf the correct video type cannot be parsed, you can add the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," option to indicate the video type"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Now this player can play: m3u8, flv, mpd\nvar art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.m3u8',\n    type: 'm3u8', // Optional, but it is better to fill in\n    customType: {\n        m3u8: async function (video, url) {\n            const { default: Hls } = await import('hls.js');\n        },\n        flv: async function (video, url) {\n            const { default: flvjs } = await import('flv.js');\n        },\n        mpd: async function (video, url) {\n            const { default: dashjs } = await import('dash.js');\n        },\n    },\n});\n\n// You can switch to a new video address\nart.url = '/assets/sample/video-new.m3u8';\n\n// You can also switch new video type\nart.type = 'flv';\nart.url = '/assets/sample/video.flv';\n\nart.type = 'mpd';\nart.url = '/assets/sample/video.mpd';\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},"customType")," is used, the previous decoder instance must be destroyed before switching url, otherwise memory leakage will occur"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var hls = null;\nvar art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.m3u8',\n    type: 'm3u8',\n    customType: {\n        m3u8: async function (video, url) {\n            const { default: Hls } = await import('hls.js');\n\n            // Destroy the last decoder instance before switching url\n            if (hls) {\n                hls.destroy();\n            }\n\n            // When the player is destroyed, the decoder instance must also be destroyed\n            art.on('destroy', () => {\n                if (hls) {\n                    hls.destroy();\n                }\n            });\n\n            hls = new Hls();\n            hls.loadSource(url);\n            hls.attachMedia(video);\n        },\n    },\n});\n\n// Switch to a new video address\nart.url = '/assets/sample/video-new.m3u8';\n")),(0,l.kt)("h2",{id:"flvjs"},"flv.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Bilibili/flv.js"},"https://github.com/Bilibili/flv.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://unpkg.com/flv.js@1.6.2/dist/flv.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: '/assets/sample/video.flv',\n    customType: {\n        flv: function (video, url) {\n            if (flvjs.isSupported()) {\n                const flvPlayer = flvjs.createPlayer({\n                    type: 'flv',\n                    url: url,\n                });\n                flvPlayer.attachMediaElement(video);\n                flvPlayer.load();\n            } else {\n                art.notice.show = 'Does not support playback of flv';\n            }\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"hlsjs"},"hls.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/video-dev/hls.js"},"https://github.com/video-dev/hls.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdnjs.cloudflare.com/ajax/libs/hls.js/8.0.0-beta.3/hls.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',\n    customType: {\n        m3u8: function (video, url) {\n            if (Hls.isSupported()) {\n                const hls = new Hls();\n                hls.loadSource(url);\n                hls.attachMedia(video);\n            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {\n                video.src = url;\n            } else {\n                art.notice.show = 'Does not support playback of m3u8';\n            }\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"dashjs"},"dash.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Dash-Industry-Forum/dash.js"},"https://github.com/Dash-Industry-Forum/dash.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.6.3/dash.all.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd',\n    customType: {\n        mpd: function (video, url) {\n            var player = dashjs.MediaPlayer().create();\n            player.initialize(video, url, true);\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"shaka-player"},"shaka-player"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/shaka-player"},"https://github.com/google/shaka-player"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://unpkg.com/shaka-player@3.3.1/dist/shaka-player.compiled.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',\n    customType: {\n        mpd: function (video, url) {\n            shaka.polyfill.installAll();\n            var player = new shaka.Player(video);\n            player.load(url);\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"webtorrent"},"webtorrent"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/webtorrent/webtorrent"},"https://github.com/webtorrent/webtorrent"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://unpkg.com/webtorrent@1.8.1/index.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d&dn=sintel.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel-1024-surround.mp4',\n    type: 'torrent',\n    customType: {\n        torrent: function (video, url, art) {\n            var client = new WebTorrent();\n            art.loading.show = true;\n            client.add(url, function (torrent) {\n                var file = torrent.files[0];\n                file.renderTo(video, {\n                    autoplay: true,\n                });\n            });\n        },\n    },\n});\n\nart.on('ready', () => {\n    art.template.$video.controls = false;\n});\n")))}m.isMDXComponent=!0}}]);