(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{272:(e,t,a)=>{Promise.resolve().then(a.bind(a,1339))},1567:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});var s=a(7437);let r=e=>{let{src:t,videoRef:a,initialOpacity:r=1}=e;return(0,s.jsx)("div",{ref:a,className:"absolute inset-0 w-full h-full transition-opacity duration-150",style:{opacity:r},children:(0,s.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover",children:(0,s.jsx)("source",{src:t,type:"video/mp4"})})})}},1339:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var s=a(7437),r=a(2265),n=a(9582),l=a(1204),i=a(6648);let o=e=>{let{text:t,icon:a,onClick:r}=e;return(0,s.jsxs)("button",{onClick:r,className:"text-white hover:bg-slate-500 transition-all duration-300 ease-in-out rounded-lg p-2 uppercase flex items-center gap-2",children:[a,(0,s.jsx)("span",{className:"transition-transform duration-300",children:t})]})};var c=a(1942);function d(e){let{onLaunchClick:t,onAstronautsClick:a,onVenatioClick:l}=e,[d,u]=(0,r.useState)(!1),[m,x]=(0,r.useState)(!1),h=(0,r.useRef)(null),f=(0,r.useCallback)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),p=[{text:"Launch",icon:(0,s.jsx)(c.ef0,{className:"mr-2"}),onClick:()=>{t(),u(!1)}},{text:"Astronauts",icon:(0,s.jsx)(c.m9R,{className:"mr-2"}),onClick:()=>{a(),u(!1)}},{text:"Info",icon:(0,s.jsx)(c.DAO,{className:"mr-2"}),onClick:()=>{l(),u(!1)}}];return(0,r.useEffect)(()=>{let e=()=>{let e=window.scrollY>50;e!==m&&(x(e),document.body.style.backgroundColor=e?"#000000":"var(--background)",document.body.style.transition="background-color 0.5s ease-in-out")};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[m]),(0,r.useEffect)(()=>{h.current&&(d?n.p8.to(h.current,{height:"auto",opacity:1,duration:.4,ease:"power3.out"}):n.p8.to(h.current,{height:0,opacity:0,duration:.3,ease:"power3.inOut"}))},[d]),(0,s.jsxs)("div",{className:"fixed top-0 left-0 right-0 z-[9999]",children:[(0,s.jsxs)("nav",{className:"bg-slate-800 shadow-lg shadow-slate-300/50 h-14 m-5 rounded-lg flex flex-wrap items-center transition-all duration-300",children:[(0,s.jsxs)("div",{onClick:f,className:"w-1/2 md:w-1/3 flex items-center pl-5",children:[(0,s.jsx)(i.default,{src:"/VenatioLogo.png",alt:"Venatio logo",width:45,height:45,priority:!0,className:"transition-transform duration-300 hover:scale-105"}),(0,s.jsx)("div",{className:"ml-5 font-bold text-2xl uppercase tracking-wider text-white cursor-pointer hover:text-gray-300 transition-colors duration-300",children:"Venatio"})]}),(0,s.jsx)("div",{className:"w-1/2 md:hidden flex justify-end pr-5",children:(0,s.jsx)("button",{onClick:()=>u(!d),className:"text-2xl p-2 text-white hover:bg-slate-700 rounded-lg transition-all duration-300 ease-in-out","aria-label":"Toggle menu",children:d?(0,s.jsx)(c.aHS,{}):(0,s.jsx)(c.Fm7,{})})}),(0,s.jsx)("div",{className:"hidden md:flex w-1/3 justify-center items-center",children:(0,s.jsx)("div",{className:"flex gap-3",children:p.map(e=>{let{text:t,icon:a,onClick:r}=e;return(0,s.jsx)(o,{text:t,icon:a,onClick:r},t)})})}),(0,s.jsx)("div",{className:"hidden md:block w-1/3"})]}),(0,s.jsx)("div",{ref:h,className:"absolute left-0 right-0 mx-5 md:hidden overflow-hidden h-0 opacity-0  bg-slate-800 rounded-lg shadow-lg transition-all duration-300",children:(0,s.jsx)("div",{className:"p-4 flex flex-col gap-4",children:p.map(e=>{let{text:t,icon:a,onClick:r}=e;return(0,s.jsx)(o,{text:t,icon:a,onClick:r},t)})})})]})}let u=["Presenting","An Artemis II Visualization","Brought to you by Venatio","Download the app"];function m(){let e=(0,r.useRef)(null),t=(0,r.useRef)(null),a=(0,r.useMemo)(()=>e=>e.split(" ").map(e=>'<span class="word [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">'.concat(e," </span>")).join(""),[]);return(0,r.useLayoutEffect)(()=>{let s=e.current;if(!s)return;let r=n.p8.context(()=>{n.p8.set(".message",{autoAlpha:1}),t.current=n.p8.timeline({repeat:-1,onComplete:()=>{var e;return null===(e=t.current)||void 0===e?void 0:e.kill()}}),n.p8.utils.toArray(".message").forEach((e,s)=>{e.innerHTML=a(e.textContent);let r=e.querySelectorAll(".word");t.current.fromTo(r,{rotationX:90,opacity:0,transformOrigin:"100% 0"},{duration:1,rotationX:0,opacity:1,transformOrigin:"100% 0",ease:"back(2.3)",stagger:.06},s>0?"-=0.38":0).to(r,{duration:.5,y:20,rotationX:-100,transformOrigin:"100% 100%",opacity:0,ease:"power1.in",stagger:.04},"+=2")})},s);return()=>{var e;null===(e=t.current)||void 0===e||e.kill(),r.revert()}},[a]),(0,s.jsx)("main",{className:"min-h-screen grid place-content-center overflow-hidden",children:(0,s.jsx)("div",{ref:e,className:"wrap",style:{perspective:"800px"},children:(0,s.jsx)("ul",{id:"titleEffects",className:"m-0 p-0 list-none",children:u.map((e,t)=>(0,s.jsx)("li",{className:"message invisible text-white text-5xl lg:text-7xl font-[Rubik] text-center",children:e},t))})})})}let x=()=>{let[e,t]=(0,r.useState)(null),[a,n]=(0,r.useState)(!1),[l,i]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{let e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);if(n(e),e){let e=/iPhone|iPad|iPod/i.test(navigator.userAgent);t(e?"ios":"android")}else{let e=navigator.userAgent.toLowerCase();e.includes("windows")?t("windows"):e.includes("mac os")?t("mac"):e.includes("linux")?t("linux"):t("unknown")}}catch(e){console.error("Platform detection failed:",e),t("unknown")}finally{i(!1)}})()},[]),(0,s.jsxs)("button",{className:"mx-auto px-8 py-4 bg-blue-400 text-white rounded-lg shadow-lg drop-shadow-2xl  hover:bg-red-300 hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out hover:shadow-red-500/50 transform-gpu flex items-center justify-center gap-2 text-xl font-semibold tracking-wide",children:[a?"Download":"Check it Out",(()=>{if(l)return(0,s.jsx)(c.aBF,{className:"ml-2 text-xl animate-pulse"});if(!e)return null;switch(e){case"ios":return(0,s.jsx)(c.Zyz,{className:"ml-2 text-xl"});case"android":return(0,s.jsx)(c.q2m,{className:"ml-2 text-xl"});case"windows":return(0,s.jsx)(c.zTP,{className:"ml-2 text-xl"});case"mac":return(0,s.jsx)(c.oPZ,{className:"ml-2 text-xl"});case"linux":return(0,s.jsx)(c._Aq,{className:"ml-2 text-xl"});default:return(0,s.jsx)(c.aBF,{className:"ml-2 text-xl"})}})()]})};var h=a(1567),f=a(4008),p=a(4300),g=a(5137),b=a(1976),v=a(4839),w=a(6164);function j(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,w.m6)((0,v.W)(t))}var y=a(2974);let N=(0,a(3027).j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),k=r.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:l=!1,...i}=e,o=l?y.g7:"button";return(0,s.jsx)(o,{className:j(N({variant:r,size:n,className:a})),ref:t,...i})});k.displayName="Button";let C=r.createContext(null);function S(){let e=r.useContext(C);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let A=r.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:n,setApi:l,plugins:i,className:o,children:c,...d}=e,[u,m]=(0,p.Z)({...n,axis:"horizontal"===a?"x":"y"},i),[x,h]=r.useState(!1),[f,g]=r.useState(!1),b=r.useCallback(e=>{e&&(h(e.canScrollPrev()),g(e.canScrollNext()))},[]),v=r.useCallback(()=>{null==m||m.scrollPrev()},[m]),w=r.useCallback(()=>{null==m||m.scrollNext()},[m]),y=r.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),v()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[v,w]);return r.useEffect(()=>{m&&l&&l(m)},[m,l]),r.useEffect(()=>{if(m)return b(m),m.on("reInit",b),m.on("select",b),()=>{null==m||m.off("select",b)}},[m,b]),(0,s.jsx)(C.Provider,{value:{carouselRef:u,api:m,opts:n,orientation:a||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:v,scrollNext:w,canScrollPrev:x,canScrollNext:f},children:(0,s.jsx)("div",{ref:t,onKeyDownCapture:y,className:j("relative",o),role:"region","aria-roledescription":"carousel",...d,children:c})})});A.displayName="Carousel";let R=r.forwardRef((e,t)=>{let{className:a,...r}=e,{carouselRef:n,orientation:l}=S();return(0,s.jsx)("div",{ref:n,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:t,className:j("flex","horizontal"===l?"-ml-4":"-mt-4 flex-col",a),...r})})});R.displayName="CarouselContent";let I=r.forwardRef((e,t)=>{let{className:a,...r}=e,{orientation:n}=S();return(0,s.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:j("min-w-0 shrink-0 grow-0 basis-full","horizontal"===n?"pl-4":"pt-4",a),...r})});I.displayName="CarouselItem";let V=r.forwardRef((e,t)=>{let{className:a,variant:r="outline",size:n="icon",...l}=e,{orientation:i,scrollPrev:o,canScrollPrev:c}=S();return(0,s.jsxs)(k,{ref:t,variant:r,size:n,className:j("absolute  h-8 w-8 rounded-full","horizontal"===i?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!c,onClick:o,...l,children:[(0,s.jsx)(g.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});V.displayName="CarouselPrevious";let P=r.forwardRef((e,t)=>{let{className:a,variant:r="outline",size:n="icon",...l}=e,{orientation:i,scrollNext:o,canScrollNext:c}=S();return(0,s.jsxs)(k,{ref:t,variant:r,size:n,className:j("absolute h-8 w-8 rounded-full","horizontal"===i?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!c,onClick:o,...l,children:[(0,s.jsx)(b.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});P.displayName="CarouselNext";let E=(0,r.memo)(e=>{let{children:t,onClick:a,className:r=""}=e;return(0,s.jsx)("button",{onClick:a,className:"w-full px-6 py-3 mt-5\n      bg-white\n      text-black text-lg font-bold \n      rounded-xl \n      shadow-lg hover:shadow-xl \n      transform hover:scale-105 \n      hover:shadow-gray-100/50\n      hover:bg-gray-800\n      hover:text-white\n      transition-all duration-300 \n      hover:outline-none hover:ring-2 \n      hover:ring-offset-2 \n      hover:ring-offset-zinc-200\n      ".concat(r),children:t})});E.displayName="Button";let L=(0,r.memo)(e=>{let{welcomeRef:t,downloadRef:a,firstVideoRef:r,onScroll:n,onLaunchClick:l,onAstronautsClick:i,onVenatioClick:o}=e;return(0,s.jsxs)("section",{className:"h-screen relative",children:[(0,s.jsx)("div",{className:"absolute inset-0",children:(0,s.jsx)(h.default,{src:"/bettervignette.mov",videoRef:r})}),(0,s.jsxs)("div",{className:"relative z-10 h-full",children:[(0,s.jsx)(d,{onLaunchClick:l,onAstronautsClick:i,onVenatioClick:o}),(0,s.jsxs)("div",{className:"h-full flex flex-col",children:[(0,s.jsx)("div",{ref:t,className:"flex-grow flex items-center justify-center px-4",children:(0,s.jsx)(m,{})}),(0,s.jsxs)("div",{ref:a,className:"absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center space-y-4 pb-8 md:pb-12 px-4",children:[(0,s.jsx)("div",{className:"w-full max-w-xs",children:(0,s.jsx)(x,{})}),(0,s.jsxs)("div",{className:"flex items-center space-x-4 w-full max-w-xs justify-center",children:[(0,s.jsx)("div",{className:"h-0.5 bg-white/30 flex-grow"}),(0,s.jsx)("span",{className:"text-white/70 text-sm font-medium",children:"OR"}),(0,s.jsx)("div",{className:"h-0.5 bg-white/30 flex-grow"})]}),(0,s.jsx)("div",{className:"w-full max-w-xs",children:(0,s.jsx)(E,{onClick:n,className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-purple-600/60",children:"Dive Into Artemis"})})]})]})]})]})});L.displayName="FirstSection";let z=(0,r.memo)(e=>{let{moonRef:t,secondSectionRef:a,onLaunchClick:r,onAstronautsClick:n,onVenatioClick:l}=e;return(0,s.jsxs)("section",{ref:a,className:"h-screen bg-gradient-to-b from-black to-[#131e30] flex items-center px-4 relative overflow-x-clip",children:[(0,s.jsx)(i.default,{ref:t,src:"/moon.png",alt:"Moon",width:1200,height:1200,className:"moon object-contain select-none absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] brightness-75 overflow-y-visible overflow-x-hidden z-0 md:z-10",priority:!0}),(0,s.jsxs)("div",{className:"text-white text-justify max-w-xl left-0 w-full p-8 bg-black/20 rounded-2xl select-none",children:[(0,s.jsx)("h2",{className:"text-3xl md:text-5xl font-bold mb-6 tracking-wide",children:"Artemis II"}),(0,s.jsx)("p",{className:"text-base md:text-xl opacity-80",children:"Artemis II is NASA's upcoming mission, designed to daringly send four astronauts to orbit around the Moon and back to Earth. Artemis II's purpose is to confirm that all of Artemis' spacecraft systems work properly, ensuring that our future missions among the stars will be successful. Artemis II is the next step forward in humanity's cosmic ambitions."}),(0,s.jsx)(E,{onClick:r,children:"Learn about the Launch"}),(0,s.jsx)(E,{onClick:n,children:"Learn about the Astronauts"}),(0,s.jsx)(E,{onClick:l,children:"Learn about Venatio"})]})]})});z.displayName="SecondSection";let T=(0,r.memo)(e=>{let{thirdSectionRef:t}=e;return(0,s.jsxs)("section",{ref:t,className:"h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-[url('/artemisLaunchSite.webp')] bg-cover bg-center opacity-25"}),(0,s.jsxs)("div",{className:"relative text-white max-w-4xl w-full px-4 sm:px-8 py-8 sm:py-12 bg-black/40 rounded-2xl shadow-2xl mx-4 sm:mx-auto",children:[(0,s.jsxs)("div",{className:"text-center mb-8 sm:mb-12",children:[(0,s.jsx)("h2",{className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",children:"Artemis II: The Launch"}),(0,s.jsx)("div",{className:"h-1 bg-gradient-to-r from-blue-500 to-purple-600 w-32 sm:w-96 mx-auto mb-6"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4 text-blue-300",children:"Launch Details"}),(0,s.jsxs)("ul",{className:"space-y-3 text-gray-300 text-sm sm:text-base",children:[(0,s.jsxs)("li",{className:"flex items-center",children:[(0,s.jsx)(f.XoX,{className:"h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-500"}),"Launch Window: September 2025 (TBD)"]}),(0,s.jsxs)("li",{className:"flex items-center",children:[(0,s.jsx)(f.k9l,{className:"h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-500"}),"Launch Site: Kennedy Space Center, Florida, Launch Pad 39B"]}),(0,s.jsxs)("li",{className:"flex items-center",children:[(0,s.jsx)(f.g89,{className:"h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-500"}),"Vehicle: Space Launch System (SLS)"]}),(0,s.jsxs)("li",{className:"flex items-center",children:[(0,s.jsx)(c.Jn2,{className:"h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-500"}),"Spacecraft: Orion MPCV"]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4 text-blue-300",children:"Mission Objectives"}),(0,s.jsx)("p",{className:"text-gray-300 mb-4 text-sm sm:text-base",children:"Artemis II marks humanity's return to lunar orbit. The mission will:"}),(0,s.jsxs)("ul",{className:"space-y-2 text-gray-300 list-disc pl-5 text-sm sm:text-base",children:[(0,s.jsx)("li",{children:"Test critical spacecraft systems"}),(0,s.jsx)("li",{children:"Validate crew life support technologies"}),(0,s.jsx)("li",{children:"Demonstrate deep space navigation"}),(0,s.jsx)("li",{children:"Pave the way for future lunar landings"})]})]})]}),(0,s.jsx)("div",{className:"mt-8 sm:mt-12 text-center",children:(0,s.jsx)(E,{onClick:()=>{window.open("https://www.nasa.gov/mission/artemis-ii/","_blank")},className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 text-sm sm:text-lg",children:"Learn more about Artemis II"})})]})]})});T.displayName="ThirdSection";let M=(0,r.memo)(e=>{let{astronautsSectionRef:t}=e,a=(0,r.useRef)(null),o=e=>{let{astronaut:t,index:a}=e,[n,l]=(0,r.useState)(!1);return(0,s.jsx)("div",{className:"\n          ".concat(t.background," \n          rounded-2xl \n          overflow-hidden \n          shadow-2xl \n          transform transition-all \n          duration-300 \n          hover:scale-105 \n          text-white\n          w-full\n          max-w-md\n          mx-auto\n          [transform-style:preserve-3d]\n          [backface-visibility:hidden]\n          [will-change:transform]\n        "),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:(0,s.jsxs)("div",{className:"relative h-[32rem] w-full",children:[(0,s.jsx)(i.default,{src:t.image,alt:t.name,fill:!0,className:"object-cover transition-opacity duration-300 ".concat(n?"opacity-100":"opacity-80")}),(0,s.jsxs)("div",{className:"\n              absolute bottom-0 left-0 right-0 p-8 \n              bg-black/60 backdrop-blur-sm\n              transition-all duration-300 ease-out\n              ".concat(n?"opacity-0 translate-y-full":"opacity-100 translate-y-0","\n            "),children:[(0,s.jsx)("h3",{className:"text-3xl font-bold mb-3",children:t.name}),(0,s.jsx)("p",{className:"text-xl font-medium text-gray-300 mb-3",children:t.role}),(0,s.jsx)("p",{className:"text-base opacity-80",children:t.bio})]})]})})};return(0,r.useEffect)(()=>{n.p8.registerPlugin(l.i);let e=n.p8.context(()=>{n.p8.from(".astronaut-card",{scrollTrigger:{trigger:a.current,start:"top 80%",toggleActions:"play none none reverse"},opacity:0,y:100,stagger:.2,ease:"power2.out",duration:.8})});return()=>e.revert()},[]),(0,s.jsx)("section",{ref:t,className:"min-h-screen bg-gradient-to-br from-black to-[#0a192f] py-16",style:{backgroundImage:'url("/pexels-instawally-176851.jpg")',backgroundSize:"cover",backgroundPosition:"50% 0%"},children:(0,s.jsxs)("div",{ref:a,className:"container mx-auto px-4",children:[(0,s.jsx)("div",{className:"text-center mb-16",children:(0,s.jsx)("h2",{className:"text-4xl md:text-6xl font-bold mb-4 text-white uppercase",children:"Meet the Artemis II Crew"})}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto",children:[{name:"Victor Glover",role:"Pilot",bio:"NASA astronaut with extensive flight experience, set to become the first African American to travel to the Moon. Born in California, Victor is a Naval Aviator with over 3,000 flight hours across 40 different aircrafts. He became a NASA astronaut back in 2013, and previously served as the pilot of SpaceX Crew-1",image:"/Victor.webp",background:"bg-blue-900"},{name:"Christina Koch",role:"Mission Specialist",bio:"Record-breaking astronaut with the longest single spaceflight by a woman and multiple spacewalks. Born and raised between Michigan and North Carolina, she graduated from North Carolina State University. She became an astronaut in 2013. She was also an electrical engineer at NASA Goddard Space Flight Center and a Research Associate in the United States Antarctic Program.",image:"/Christina.webp",background:"bg-purple-900"},{name:"Reid Wiseman",role:"Commander",bio:"Experienced NASA astronaut and former ISS commander with previous spaceflight and EVA experience. Born in Baltimore, he graduated from Rensselaer Polytechnic Institute and John Hopkins University. He became an Astronaut back in 2009, and served as flight engineer aboard the ISS Expedition 41 from May to November 2014.",image:"/Reid.webp",background:"bg-gray-900"},{name:"Jeremy Hansen",role:"Mission Specialist",bio:"Canadian Space Agency astronaut, first Canadian to journey beyond low Earth orbit. Born in Ontario, Jeremy was apart of the Royal Canadian Air Cadet Squadron growing up. He got his private pilot license at 17 years of age. He graduated from the Royal Military College of Canada, and served as a fighter pilot from 2004-2009. He eventually became an astronaut in 2009.",image:"/Jeremy.webp",background:"bg-teal-900"}].map((e,t)=>(0,s.jsx)("div",{className:"astronaut-card",children:(0,s.jsx)(o,{astronaut:e,index:t})},e.name))})]})})});M.displayName="AstronautsSection";let _=(0,r.memo)(e=>{let{venatioSectionRef:t}=e;return(0,s.jsxs)("section",{ref:t,className:"min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center py-16",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-[url('/Earth.jpg')] bg-cover bg-center opacity-20"}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 max-w-7xl w-full items-center",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 text-white space-y-8",children:[(0,s.jsxs)("div",{className:"p-8 rounded-2xl select-none z-10 flex items-center",children:[(0,s.jsx)(i.default,{src:"/VenatioLogo.png",alt:"Venatio logo",width:90,height:90,priority:!0,className:"transition-transform duration-300 hover:scale-110"}),(0,s.jsx)("h2",{className:"text-3xl md:text-5xl font-bold ml-6 tracking-wide uppercase",children:"Venatio"})]}),(0,s.jsx)("div",{className:"p-8 bg-slate-900/50 rounded-2xl select-none z-10 text-justify",children:"Venatio is a NASA ADC team aiming to inspire STEM learning and innovation. Through our participation in the App Development Challenge, we hope to create opportunities for our community to learn and grow in STEM fields. Our team has led initiatives to help educate and spread awareness about different fields under the STEM umbrella, including software development, quantum mechanics, statistics, and probability. As our main part of the Challenge, we have developed an app visualizing the path of Artemis II in a functional and beautiful app, featuring multiplatform support and high-quality rendering. Let's aim for new fronteirs, together."})]}),(0,s.jsx)("div",{className:"w-full md:w-1/2 flex justify-center",children:(0,s.jsxs)(A,{className:"w-full max-w-3xl",opts:{align:"start",loop:!0},children:[(0,s.jsx)(R,{children:[{src:"/CodeNinjasPic.webp",alt:"Venatio Team Teaching at an Outreach Event",caption:"\uD83C\uDF93 Teaching Today and Shaping Tomorrow"},{src:"/Collab.webp",alt:"Venatio Team Collaborating on App Design",caption:"\uD83C\uDF1F Collaboration Sparks Innovation"},{src:"/FixingStuff.webp",alt:"Venatio Team Working to Solve Challenges",caption:"\uD83D\uDEE0️ Innovative Minds turning challenges into opportunities"},{src:"/HavingFun.webp",alt:"Venatio Team Having Fun",caption:"\uD83D\uDCA1 Creating, collaborating, and celebrating"}].map((e,t)=>(0,s.jsx)(I,{className:"basis-full",children:(0,s.jsx)("div",{className:"p-1",children:(0,s.jsxs)("div",{className:"relative aspect-video rounded-xl overflow-hidden shadow-2xl group uppercase",children:[(0,s.jsx)(i.default,{src:e.src,alt:e.alt,fill:!0,className:"object-cover transition-transform duration-300 group-hover:scale-105"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white",children:(0,s.jsx)("p",{className:"text-center text-sm md:text-base",children:e.caption})})]})})},t))}),(0,s.jsx)(V,{className:"left-2 text-blue-950 bg-white/90 hover:bg-white/30"}),(0,s.jsx)(P,{className:"right-2 text-blue-950 bg-white/90 hover:bg-white/30"})]})})]})]})});function O(){let e=(0,r.useRef)(null),t=(0,r.useRef)(null),a=(0,r.useRef)(null),i=(0,r.useRef)(null),o=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useRef)(null),u=(0,r.useRef)(null),m=(0,r.useRef)(null),x=(0,r.useCallback)(()=>{var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[]),h=(0,r.useCallback)(()=>{var e;null===(e=o.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[]),f=(0,r.useCallback)(()=>{var e;null===(e=m.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[]);return(0,r.useEffect)(()=>{n.p8.registerPlugin(l.i);let s=n.p8.context(()=>{n.p8.to(t.current,{yPercent:-20,ease:"none",scrollTrigger:{trigger:e.current,start:"top top",end:"bottom top",scrub:!0}}),n.p8.to(a.current,{yPercent:-10,scale:1.05,ease:"power1.inOut",scrollTrigger:{trigger:e.current,start:"top top",end:"bottom top",scrub:.5}}),n.p8.to(u.current,{rotation:360,transformOrigin:"center",ease:"none",duration:240,repeat:-1})});return()=>s.revert()},[]),(0,s.jsxs)("main",{ref:e,className:"relative min-h-screen overflow-y-auto select-none scroll-smooth",children:[(0,s.jsx)(L,{welcomeRef:t,downloadRef:a,firstVideoRef:i,onScroll:h,onLaunchClick:x,onAstronautsClick:f,onVenatioClick:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}}),(0,s.jsx)(z,{moonRef:u,secondSectionRef:o,onLaunchClick:x,onAstronautsClick:f,onVenatioClick:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}}),(0,s.jsx)(T,{thirdSectionRef:c}),(0,s.jsx)(M,{astronautsSectionRef:m}),(0,s.jsx)(_,{venatioSectionRef:d})]})}_.displayName="VenatioSection"}},e=>{var t=t=>e(e.s=t);e.O(0,[422,699,922,932,130,215,744],()=>t(272)),_N_E=e.O()}]);