if(!self.define){let e,s={};const r=(r,c)=>(r=new URL(r+".js",c).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const n=e=>r(e,o),d={module:{uri:o},exports:a,require:n};s[o]=Promise.all(c.map((e=>d[e]||n(e)))).then((e=>(i(...e),a)))}}define(["./workbox-7efc0276"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"playwright.config.ts",revision:"cd34b73dbbcf35531b7f84fed0fd6707"},{url:"public/android-chrome-192x192.png",revision:"0c18f249158fb1312653ba5d58f99694"},{url:"public/android-chrome-512x512.png",revision:"fb7c0555e46c69807e43c38fc64e9b02"},{url:"public/apple-touch-icon.png",revision:"c369589afcff3eb248bd5e8d58fe6a72"},{url:"public/browserconfig.xml",revision:"e4e40b0c82d228add33b5bcfe276a859"},{url:"public/favicon-16x16.png",revision:"3342d15e26bfe66de19cf3a4964112d5"},{url:"public/favicon-32x32.png",revision:"b9effc4af6de9496310ee227e74457af"},{url:"public/favicon.ico",revision:"b391dec283f110a962f26cbbc980f336"},{url:"public/icon.png",revision:"58fd65538db9e59ba4c3b534f44bd999"},{url:"public/index.html",revision:"4ff962f8684d6e2f00051e406ad5a7c6"},{url:"public/mstile-144x144.png",revision:"8c127e51a032edcdd7abc38adda2c274"},{url:"public/mstile-150x150.png",revision:"8b1c67cdb8c1bc6ddedede3af24d16a5"},{url:"public/mstile-310x150.png",revision:"1e15cf380c361a06d3c60075be63ba55"},{url:"public/mstile-310x310.png",revision:"856f2e40f0a8ce6aa80978d566df2a5e"},{url:"public/mstile-70x70.png",revision:"56cbe4d2f2de451288a671e436c617e8"},{url:"public/reset.css",revision:"0d05960530c2b2c749b581290f6e5d98"},{url:"public/safari-pinned-tab.svg",revision:"14e4f543e63f5025b767e5fd78fb9c3f"},{url:"public/site.webmanifest",revision:"328b26a0be8b1ed68299854368874c23"},{url:"publish/android-chrome-192x192.png",revision:"0c18f249158fb1312653ba5d58f99694"},{url:"publish/android-chrome-512x512.png",revision:"fb7c0555e46c69807e43c38fc64e9b02"},{url:"publish/apple-touch-icon.png",revision:"c369589afcff3eb248bd5e8d58fe6a72"},{url:"publish/browserconfig.xml",revision:"e4e40b0c82d228add33b5bcfe276a859"},{url:"publish/dist/index.css",revision:"1c25b2a3cc4dae333f0f861c98a67fbf"},{url:"publish/dist/index.js",revision:"f3a63c8a7c89514afe0865f07cf1425b"},{url:"publish/dist/views/AgentPage.js",revision:"09ff1b7644e902b300d608fbbf717513"},{url:"publish/favicon-16x16.png",revision:"3342d15e26bfe66de19cf3a4964112d5"},{url:"publish/favicon-32x32.png",revision:"b9effc4af6de9496310ee227e74457af"},{url:"publish/favicon.ico",revision:"b391dec283f110a962f26cbbc980f336"},{url:"publish/icon.png",revision:"58fd65538db9e59ba4c3b534f44bd999"},{url:"publish/index.html",revision:"48af4fa0e0d4c65b14cadd53e7282fec"},{url:"publish/mstile-144x144.png",revision:"8c127e51a032edcdd7abc38adda2c274"},{url:"publish/mstile-150x150.png",revision:"8b1c67cdb8c1bc6ddedede3af24d16a5"},{url:"publish/mstile-310x150.png",revision:"1e15cf380c361a06d3c60075be63ba55"},{url:"publish/mstile-310x310.png",revision:"856f2e40f0a8ce6aa80978d566df2a5e"},{url:"publish/mstile-70x70.png",revision:"56cbe4d2f2de451288a671e436c617e8"},{url:"publish/safari-pinned-tab.svg",revision:"14e4f543e63f5025b767e5fd78fb9c3f"},{url:"publish/site.webmanifest",revision:"328b26a0be8b1ed68299854368874c23"},{url:"snowpack.config.js",revision:"a10d7165104552ed94b89a62a0ca0316"},{url:"src/App.test.jsx",revision:"75860cdcdae59144b27aa19936f56645"},{url:"src/App.tsx",revision:"3fa85bb6ae6dda2ec5c8f0210cb94aa6"},{url:"src/components/AllProps.tsx",revision:"c1a8ad0038452561de3adab5bbcda373"},{url:"src/components/Button.tsx",revision:"fea68f9fb885907270e58a3fe67fbc3d"},{url:"src/components/Card.tsx",revision:"8ee02e615ac7866aa81e50b558a4bb17"},{url:"src/components/ClassDetail.tsx",revision:"a2b4b12847a3ab64f1a28360d1e17bd1"},{url:"src/components/Containers.tsx",revision:"fab03267f1d5974aff1dcb873ba88ee6"},{url:"src/components/datatypes/DateTime.tsx",revision:"d0c7328d6c8bc8a73dc72e961f39a74a"},{url:"src/components/datatypes/Markdown.tsx",revision:"b2a5a7de7e2e2a428ba40752f356d1d9"},{url:"src/components/datatypes/NestedResource.tsx",revision:"0dbcae9ddd0460436a1d53f487489836"},{url:"src/components/datatypes/ResourceArray.tsx",revision:"417239772bb55190a7806f94416be20e"},{url:"src/components/DropdownMenu.tsx",revision:"5ea163511887baa2e4d0554c08a85a2c"},{url:"src/components/forms/DropdownInput.tsx",revision:"ae67b6d4e5976e78b4040c39a145be5c"},{url:"src/components/forms/Field.tsx",revision:"b84c809abd17aef0a56f47b0eed367e9"},{url:"src/components/forms/InputBoolean.tsx",revision:"d8ad9ea9d0904082a2df7e7afa81a86f"},{url:"src/components/forms/InputMarkdown.tsx",revision:"5a74165d1cf530318a321a3704299e1a"},{url:"src/components/forms/InputNumber.tsx",revision:"45ee39d22c534528263e53de3b063dce"},{url:"src/components/forms/InputResource.tsx",revision:"a69fa490d97f1fc12570d44c1adf2f57"},{url:"src/components/forms/InputResourceArray.tsx",revision:"89514bb75241d41e1710d44386773ac6"},{url:"src/components/forms/InputString.tsx",revision:"686c415e2088678ba0049d37777e2706"},{url:"src/components/forms/InputStyles.tsx",revision:"6cd5faec79a229dc512580e706fed0ef"},{url:"src/components/forms/InputSwitcher.tsx",revision:"5363f598785fcab07093e421b88f5865"},{url:"src/components/forms/ResourceField.tsx",revision:"3c30d5aff669678464f19ec446c26b9f"},{url:"src/components/forms/ResourceForm.tsx",revision:"ce67daedb919de6fda4ec5ee53fc1780"},{url:"src/components/forms/ResourceSelector.tsx",revision:"6e3bb41651204e1ebf373e5660c1b19f"},{url:"src/components/forms/ValueForm.tsx",revision:"5c41683f64b574c86af034cf2c31c034"},{url:"src/components/HotKeyWrapper.tsx",revision:"bf25a5dd2bc0109a64fc4e435cc9673b"},{url:"src/components/Link.tsx",revision:"963a9935ce71dfb5bc13826d3b312cb2"},{url:"src/components/Logo.tsx",revision:"79a79bc0c6e0691f05b845293aa745ac"},{url:"src/components/MetaSetter.tsx",revision:"0d314befed9aa079659739f9a84ebd75"},{url:"src/components/Navigation.tsx",revision:"4fd684afc07e6360b58af44c017d138e"},{url:"src/components/NavStyleButton.tsx",revision:"d721c5b7fd9fa54909888415e8bb5dcb"},{url:"src/components/NewInstanceButton.tsx",revision:"45a1511678b999f44f863c9dc6d4e9b6"},{url:"src/components/Parent.tsx",revision:"ebae7117577a473300b0124a03fdd91f"},{url:"src/components/PropVal.tsx",revision:"505f618286afe3261f9aa6781fee5e68"},{url:"src/components/ResourceContextMenu.tsx",revision:"f005c89517bc053114b84e41cafffdd4"},{url:"src/components/ResourceSideBar.tsx",revision:"76d44a7b985a06a0d73915bb3a7167da"},{url:"src/components/SideBar.tsx",revision:"05c75a72d3f6358570657ae329474c15"},{url:"src/components/SignInButton.tsx",revision:"7f39fa4b8c5f5694e0a9b58657827a05"},{url:"src/components/Table.tsx",revision:"157b46bad073b8d063e1d22d1ccbfdc1"},{url:"src/components/Toaster.tsx",revision:"28d2fbfa2e65e819094a2271e838a94c"},{url:"src/components/ValueComp.tsx",revision:"b895a18d58be3d3e81b57c94e4d9a2ec"},{url:"src/config.ts",revision:"65fdc419aaf182badfed9fe6ce1bbc84"},{url:"src/helpers/AppSettings.tsx",revision:"317c1ae0f207c607eba116e33a69b582"},{url:"src/helpers/formatTimeAgo.ts",revision:"e01d825724636dbe96c526695161a8ac"},{url:"src/helpers/handlers.tsx",revision:"6c016e8b1957d2a39570fd7f9bd5542f"},{url:"src/helpers/navigation.tsx",revision:"a37ee7278dfad8adcf76f53e6fac31b1"},{url:"src/helpers/useCurrentSubject.tsx",revision:"b3e5700336cd147957a04ab3fc76b417"},{url:"src/helpers/useDarkMode.tsx",revision:"501cc2951941cb3e1eeda680483a2e90"},{url:"src/helpers/useDebounce.tsx",revision:"58da32a4234bc3bccb27e9e49dc61f74"},{url:"src/helpers/useDetectOutsideClick.tsx",revision:"d704327a919c4a9e33f7aa64a9298e64"},{url:"src/helpers/useFocus.tsx",revision:"90844071c9d2a6601d1d87ffc1fc58cf"},{url:"src/helpers/useHover.tsx",revision:"45d195f9e1c1a0f476e9a114d42177ee"},{url:"src/helpers/useLocalSearch.tsx",revision:"8e7ef78c4070446080158ad7538f5959"},{url:"src/helpers/useMedia.tsx",revision:"8f3d8f6f6ebd8b12f788c3895cd33c14"},{url:"src/helpers/useServerSearch.tsx",revision:"7c91474b1d8460156adbec9d22f8e18f"},{url:"src/helpers/useWindowSize.tsx",revision:"bb08412880468b4065fca92eacd09b6c"},{url:"src/index.tsx",revision:"dbfdf5bb940857c9bbcd156c7b89dc62"},{url:"src/routes/AboutRoute.tsx",revision:"5c4b5a8388ef4c174f781d7f882f4f7e"},{url:"src/routes/DataRoute.tsx",revision:"bbc4c4a13366061e28ee1bc08aa70784"},{url:"src/routes/EditRoute.tsx",revision:"0a82cc733e54a3a8752cf46f3ce2b3fc"},{url:"src/routes/LocalRoute.tsx",revision:"736b91f3e608dc4fe451adbf16d41e7d"},{url:"src/routes/NewRoute.tsx",revision:"81479fedcdce78ec9128fe32ec153020"},{url:"src/routes/paths.tsx",revision:"3e09ab134e7b9c680ef677980544a1b7"},{url:"src/routes/Routes.tsx",revision:"b2796c0fed8be08cc6ed18f3621f51e4"},{url:"src/routes/SearchRoute.tsx",revision:"65e9ffec047a18ca748cbd651591bbd6"},{url:"src/routes/SettingsAgent.tsx",revision:"2dc2005b7e5c0cb5a8f71bdb3b701ff9"},{url:"src/routes/SettingsServer.tsx",revision:"a39dc7982aa9451259e0d14feeaf694e"},{url:"src/routes/SettingsTheme.tsx",revision:"7a9d3d18e1c6470f2532531dfdc8c0b8"},{url:"src/routes/ShareRoute.tsx",revision:"9c53ef5683b7e996da23049d4222eef8"},{url:"src/routes/ShortcutsRoute.tsx",revision:"b4482a7155b00bfbed76500515534bf1"},{url:"src/routes/ShowRoute.tsx",revision:"5678957e4dd779cd18fbcb5356af15a7"},{url:"src/styling.tsx",revision:"6095fcf8d790384493a764629725bf4e"},{url:"src/views/AgentPage.tsx",revision:"1a38a1c9e6766ef1737e4dfe6dced2d1"},{url:"src/views/CollectionCard.tsx",revision:"cbe4590fb97c7dd8b677ca50ad07e480"},{url:"src/views/CollectionPage.tsx",revision:"dea244f30015043caaee3fc519ce254e"},{url:"src/views/CrashPage.tsx",revision:"b8dc16434186c940cea2bed12311c3f5"},{url:"src/views/DocumentPage.tsx",revision:"7ee353a01e51971b518a22a66ef295e0"},{url:"src/views/DrivePage.tsx",revision:"9ed8ec22ad55229dcbe896c57d29b2a7"},{url:"src/views/Element.tsx",revision:"14ecd1fba9c6b544ca86992a09fc613a"},{url:"src/views/EndpointPage.tsx",revision:"b4073f411d4bdf0a6ddcd8b2371f5e93"},{url:"src/views/ErrorPage.tsx",revision:"4b4d68b82035fba5415b665215896131"},{url:"src/views/InvitePage.tsx",revision:"53eefaa1a3119c32a92b7be08ef7bc30"},{url:"src/views/RedirectPage.tsx",revision:"a892069a51124a92d84b8058294f344c"},{url:"src/views/ResourceCard.tsx",revision:"b453095dc5e77f522dd36af662ff2bda"},{url:"src/views/ResourceInline.tsx",revision:"0b5e3da8c4c2b210c515d5dd421bd9f1"},{url:"src/views/ResourceLine.tsx",revision:"213109d981e9845ab288ccc13fbfdd09"},{url:"src/views/ResourcePage.tsx",revision:"a83c6731d713921e96d28e143da170c4"},{url:"tests/browser.spec.ts",revision:"03d48b1e2b0d2e9ccf7c60bb4c752556"},{url:"web-test-runner.config.js",revision:"68ff2d9284205d201eff03bf66f936a5"},{url:"workbox-config.js",revision:"1c613582c645ef164831b1c3bc8f8a36"},{url:"yarn-error.log",revision:"5ec90b8786ea6e91e6ca6993cd6ba2eb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
