if(!self.define){let e,s={};const r=(r,c)=>(r=new URL(r+".js",c).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const n=e=>r(e,o),d={module:{uri:o},exports:a,require:n};s[o]=Promise.all(c.map((e=>d[e]||n(e)))).then((e=>(i(...e),a)))}}define(["./workbox-7efc0276"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"logo.svg",revision:"7389185a490e70e4163ca06190a13eef"},{url:"playwright.config.ts",revision:"cd34b73dbbcf35531b7f84fed0fd6707"},{url:"public/android-chrome-192x192.png",revision:"0c18f249158fb1312653ba5d58f99694"},{url:"public/android-chrome-512x512.png",revision:"fb7c0555e46c69807e43c38fc64e9b02"},{url:"public/apple-touch-icon.png",revision:"c369589afcff3eb248bd5e8d58fe6a72"},{url:"public/browserconfig.xml",revision:"e4e40b0c82d228add33b5bcfe276a859"},{url:"public/favicon-16x16.png",revision:"3342d15e26bfe66de19cf3a4964112d5"},{url:"public/favicon-32x32.png",revision:"b9effc4af6de9496310ee227e74457af"},{url:"public/favicon.ico",revision:"b391dec283f110a962f26cbbc980f336"},{url:"public/icon.png",revision:"58fd65538db9e59ba4c3b534f44bd999"},{url:"public/index.html",revision:"4ff962f8684d6e2f00051e406ad5a7c6"},{url:"public/mstile-144x144.png",revision:"8c127e51a032edcdd7abc38adda2c274"},{url:"public/mstile-150x150.png",revision:"8b1c67cdb8c1bc6ddedede3af24d16a5"},{url:"public/mstile-310x150.png",revision:"1e15cf380c361a06d3c60075be63ba55"},{url:"public/mstile-310x310.png",revision:"856f2e40f0a8ce6aa80978d566df2a5e"},{url:"public/mstile-70x70.png",revision:"56cbe4d2f2de451288a671e436c617e8"},{url:"public/reset.css",revision:"0d05960530c2b2c749b581290f6e5d98"},{url:"public/safari-pinned-tab.svg",revision:"14e4f543e63f5025b767e5fd78fb9c3f"},{url:"public/site.webmanifest",revision:"328b26a0be8b1ed68299854368874c23"},{url:"publish/android-chrome-192x192.png",revision:"0c18f249158fb1312653ba5d58f99694"},{url:"publish/android-chrome-512x512.png",revision:"fb7c0555e46c69807e43c38fc64e9b02"},{url:"publish/apple-touch-icon.png",revision:"c369589afcff3eb248bd5e8d58fe6a72"},{url:"publish/browserconfig.xml",revision:"e4e40b0c82d228add33b5bcfe276a859"},{url:"publish/dist/index.css",revision:"1c25b2a3cc4dae333f0f861c98a67fbf"},{url:"publish/dist/index.js",revision:"a912a4278ca193e945293cfabe1d6696"},{url:"publish/dist/views/AgentPage.js",revision:"3574cb2a95a3fc4b3053d2c7625f3914"},{url:"publish/favicon-16x16.png",revision:"3342d15e26bfe66de19cf3a4964112d5"},{url:"publish/favicon-32x32.png",revision:"b9effc4af6de9496310ee227e74457af"},{url:"publish/favicon.ico",revision:"b391dec283f110a962f26cbbc980f336"},{url:"publish/icon.png",revision:"58fd65538db9e59ba4c3b534f44bd999"},{url:"publish/index.html",revision:"48af4fa0e0d4c65b14cadd53e7282fec"},{url:"publish/mstile-144x144.png",revision:"8c127e51a032edcdd7abc38adda2c274"},{url:"publish/mstile-150x150.png",revision:"8b1c67cdb8c1bc6ddedede3af24d16a5"},{url:"publish/mstile-310x150.png",revision:"1e15cf380c361a06d3c60075be63ba55"},{url:"publish/mstile-310x310.png",revision:"856f2e40f0a8ce6aa80978d566df2a5e"},{url:"publish/mstile-70x70.png",revision:"56cbe4d2f2de451288a671e436c617e8"},{url:"publish/safari-pinned-tab.svg",revision:"14e4f543e63f5025b767e5fd78fb9c3f"},{url:"publish/site.webmanifest",revision:"328b26a0be8b1ed68299854368874c23"},{url:"snowpack.config.js",revision:"788b89856cf94bda897378962813bbf3"},{url:"src/App.test.jsx",revision:"75860cdcdae59144b27aa19936f56645"},{url:"src/App.tsx",revision:"ac505da33a7a8e7b27b5d34685dbcfe7"},{url:"src/components/AllProps.tsx",revision:"c1a8ad0038452561de3adab5bbcda373"},{url:"src/components/Button.tsx",revision:"5e8725c7632d8fd9c15f60d49e240bfd"},{url:"src/components/Card.tsx",revision:"73ae5fcc2d08403f41f15c00645aadb2"},{url:"src/components/ClassDetail.tsx",revision:"a2b4b12847a3ab64f1a28360d1e17bd1"},{url:"src/components/CodeBlock.tsx",revision:"2138eddfe707c7c04d6c0b6ab23b161e"},{url:"src/components/Containers.tsx",revision:"fab03267f1d5974aff1dcb873ba88ee6"},{url:"src/components/datatypes/DateTime.tsx",revision:"d0c7328d6c8bc8a73dc72e961f39a74a"},{url:"src/components/datatypes/Markdown.tsx",revision:"b2a5a7de7e2e2a428ba40752f356d1d9"},{url:"src/components/datatypes/NestedResource.tsx",revision:"0dbcae9ddd0460436a1d53f487489836"},{url:"src/components/datatypes/ResourceArray.tsx",revision:"417239772bb55190a7806f94416be20e"},{url:"src/components/DropdownMenu.tsx",revision:"fce48f5579bc81b8f3f1d810913563b7"},{url:"src/components/FilePill.tsx",revision:"4b2bf565e11f40e2dab93cadd8b43330"},{url:"src/components/forms/DropdownInput.tsx",revision:"03b1f64883b4ccb858d06a20e2ab7ebe"},{url:"src/components/forms/Field.tsx",revision:"b84c809abd17aef0a56f47b0eed367e9"},{url:"src/components/forms/InputBoolean.tsx",revision:"d8ad9ea9d0904082a2df7e7afa81a86f"},{url:"src/components/forms/InputMarkdown.tsx",revision:"5a74165d1cf530318a321a3704299e1a"},{url:"src/components/forms/InputNumber.tsx",revision:"45ee39d22c534528263e53de3b063dce"},{url:"src/components/forms/InputResource.tsx",revision:"a69fa490d97f1fc12570d44c1adf2f57"},{url:"src/components/forms/InputResourceArray.tsx",revision:"7fdc7116601c78179bbaa53d955bf985"},{url:"src/components/forms/InputString.tsx",revision:"686c415e2088678ba0049d37777e2706"},{url:"src/components/forms/InputStyles.tsx",revision:"6cd5faec79a229dc512580e706fed0ef"},{url:"src/components/forms/InputSwitcher.tsx",revision:"c1146ad1a6dab0cfd86b34dae1a344a2"},{url:"src/components/forms/ResourceField.tsx",revision:"a3e1c2ad16ed907896b3eb0e246af972"},{url:"src/components/forms/ResourceForm.tsx",revision:"65153a89f4a8e774c8ba2ec11224dd77"},{url:"src/components/forms/ResourceSelector.tsx",revision:"6e3bb41651204e1ebf373e5660c1b19f"},{url:"src/components/forms/UploadForm.tsx",revision:"92143ba0cd87c8d7d367d7f4c24a0b72"},{url:"src/components/forms/ValueForm.tsx",revision:"5c41683f64b574c86af034cf2c31c034"},{url:"src/components/HotKeyWrapper.tsx",revision:"bf25a5dd2bc0109a64fc4e435cc9673b"},{url:"src/components/ImageViewer.tsx",revision:"5d7f239ae76ee8cb5c77df934f6791e6"},{url:"src/components/InviteForm.tsx",revision:"5810648d1ae4cc67dfe14db99acfaf84"},{url:"src/components/Link.tsx",revision:"f35b42b3c71c5163fbfe5401b4c2bced"},{url:"src/components/Logo.tsx",revision:"79a79bc0c6e0691f05b845293aa745ac"},{url:"src/components/MetaSetter.tsx",revision:"1cd97c770b986b141623236741dc9b26"},{url:"src/components/Navigation.tsx",revision:"4fd684afc07e6360b58af44c017d138e"},{url:"src/components/NavStyleButton.tsx",revision:"d721c5b7fd9fa54909888415e8bb5dcb"},{url:"src/components/NewInstanceButton.tsx",revision:"45a1511678b999f44f863c9dc6d4e9b6"},{url:"src/components/Parent.tsx",revision:"7e50082e15e077ad27a8062d60a34688"},{url:"src/components/PropVal.tsx",revision:"db6e79828521c83eef9edcb93cf1e6c3"},{url:"src/components/ResourceContextMenu.tsx",revision:"32aed9679849f1fb54d1f5cf20f62b9b"},{url:"src/components/ResourceSideBar.tsx",revision:"76d44a7b985a06a0d73915bb3a7167da"},{url:"src/components/SideBar.tsx",revision:"ac2ad50c6acf9d20e275421dbe6e19fa"},{url:"src/components/SignInButton.tsx",revision:"7f39fa4b8c5f5694e0a9b58657827a05"},{url:"src/components/Table.tsx",revision:"e58bb4744657db0a8e41afa4dac1f3ec"},{url:"src/components/Toaster.tsx",revision:"28d2fbfa2e65e819094a2271e838a94c"},{url:"src/components/ValueComp.tsx",revision:"b895a18d58be3d3e81b57c94e4d9a2ec"},{url:"src/components/WebMonetizationWrapper.tsx",revision:"b511e36272728246a1767f8091147d28"},{url:"src/config.ts",revision:"65fdc419aaf182badfed9fe6ce1bbc84"},{url:"src/helpers/AppSettings.tsx",revision:"317c1ae0f207c607eba116e33a69b582"},{url:"src/helpers/formatTimeAgo.ts",revision:"e01d825724636dbe96c526695161a8ac"},{url:"src/helpers/handlers.tsx",revision:"6c016e8b1957d2a39570fd7f9bd5542f"},{url:"src/helpers/navigation.tsx",revision:"a37ee7278dfad8adcf76f53e6fac31b1"},{url:"src/helpers/useCurrentSubject.tsx",revision:"2ae75d88fe3b40e8770da2cea80d8351"},{url:"src/helpers/useDarkMode.tsx",revision:"501cc2951941cb3e1eeda680483a2e90"},{url:"src/helpers/useDetectOutsideClick.tsx",revision:"d704327a919c4a9e33f7aa64a9298e64"},{url:"src/helpers/useFocus.tsx",revision:"90844071c9d2a6601d1d87ffc1fc58cf"},{url:"src/helpers/useHover.tsx",revision:"45d195f9e1c1a0f476e9a114d42177ee"},{url:"src/helpers/useLocalSearch.tsx",revision:"b5a322b72bdf8f46625983620d3d1716"},{url:"src/helpers/useMedia.tsx",revision:"8f3d8f6f6ebd8b12f788c3895cd33c14"},{url:"src/helpers/useWindowSize.tsx",revision:"bb08412880468b4065fca92eacd09b6c"},{url:"src/index.tsx",revision:"dbfdf5bb940857c9bbcd156c7b89dc62"},{url:"src/routes/AboutRoute.tsx",revision:"23984cdf57fe46f85000e2109bfa8ba8"},{url:"src/routes/DataRoute.tsx",revision:"e5ae9e9e4193d15f898c78648d86228c"},{url:"src/routes/EditRoute.tsx",revision:"0a82cc733e54a3a8752cf46f3ce2b3fc"},{url:"src/routes/LocalRoute.tsx",revision:"736b91f3e608dc4fe451adbf16d41e7d"},{url:"src/routes/NewRoute.tsx",revision:"f8fbac798cca28fa661af2e0f92c206d"},{url:"src/routes/paths.tsx",revision:"3e09ab134e7b9c680ef677980544a1b7"},{url:"src/routes/Routes.tsx",revision:"b2796c0fed8be08cc6ed18f3621f51e4"},{url:"src/routes/SearchRoute.tsx",revision:"82edfc0e4b4058b49c7c5dc188342a0c"},{url:"src/routes/SettingsAgent.tsx",revision:"b2ddff962267d200fc324b3616ca6013"},{url:"src/routes/SettingsServer.tsx",revision:"af5ff14c626f421e21cf7671b76552a9"},{url:"src/routes/SettingsTheme.tsx",revision:"7a9d3d18e1c6470f2532531dfdc8c0b8"},{url:"src/routes/ShareRoute.tsx",revision:"d9469ee5019e9a1e663596b979f782b8"},{url:"src/routes/ShortcutsRoute.tsx",revision:"b4482a7155b00bfbed76500515534bf1"},{url:"src/routes/ShowRoute.tsx",revision:"5678957e4dd779cd18fbcb5356af15a7"},{url:"src/styling.tsx",revision:"6095fcf8d790384493a764629725bf4e"},{url:"src/views/AgentPage.tsx",revision:"cab085c023d963abec23ae3210160762"},{url:"src/views/ClassPage.tsx",revision:"46aa5e18a5b94c5086bc4cf37b459ef4"},{url:"src/views/CollectionCard.tsx",revision:"cbe4590fb97c7dd8b677ca50ad07e480"},{url:"src/views/CollectionPage.tsx",revision:"f78df2990ffc4a78541aa0b25d3ac426"},{url:"src/views/CrashPage.tsx",revision:"b8dc16434186c940cea2bed12311c3f5"},{url:"src/views/DocumentPage.tsx",revision:"a50fea21883131ef46b13928fe855c82"},{url:"src/views/DrivePage.tsx",revision:"6ad851b137674a5074ae6071a731287d"},{url:"src/views/Element.tsx",revision:"6e95fa7adeaf1a43b66f67d515b6feb8"},{url:"src/views/EndpointPage.tsx",revision:"b4073f411d4bdf0a6ddcd8b2371f5e93"},{url:"src/views/ErrorPage.tsx",revision:"339914b82a07be7b3f76ee2e06edf234"},{url:"src/views/FileCard.tsx",revision:"f82f749dcc0c911fb5c70408b6116c05"},{url:"src/views/FilePage.tsx",revision:"f638edb65f8544f8484e4876ee19d553"},{url:"src/views/InvitePage.tsx",revision:"01dc3d1f02df3491eb44ccbf702f5d46"},{url:"src/views/RedirectPage.tsx",revision:"daaefea3b0a893e1e4aff9f9845bea25"},{url:"src/views/ResourceCard.tsx",revision:"c2d58add86881cb115261b6d59664fc0"},{url:"src/views/ResourceInline.tsx",revision:"ce89b82dc456dd9881d41174eef6c7db"},{url:"src/views/ResourceLine.tsx",revision:"213109d981e9845ab288ccc13fbfdd09"},{url:"src/views/ResourcePage.tsx",revision:"ff1db6da69824d9918773039b8b51bc5"},{url:"src/views/ResourcePageDefault.tsx",revision:"07aa397282b53526651c9716d5a88b7a"},{url:"tests/browser.spec.ts",revision:"399bd27a21b8ee671f1c982527cc8a7f"},{url:"web-test-runner.config.js",revision:"68ff2d9284205d201eff03bf66f936a5"},{url:"workbox-config.js",revision:"1c613582c645ef164831b1c3bc8f8a36"},{url:"yarn-error.log",revision:"5ec90b8786ea6e91e6ca6993cd6ba2eb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
