import svgPaths from "./svg-zuokym5pis";
import { imgContainer, imgContent } from "./svg-obozm";

function Logo() {
  return (
    <div className="content-stretch flex gap-2 h-8 items-center justify-center relative shrink-0" data-name="logo">
      <div className="font-['Shantell_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.8)] text-nowrap" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-none whitespace-pre">Abdu</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0 w-full" data-name="heading">
      <Logo />
    </div>
  );
}

function PageLinks() {
  return (
    <div className="content-stretch flex font-['Shantell_Sans:Medium',_sans-serif] font-medium gap-12 items-start justify-start leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] text-nowrap" data-name="pageLinks">
      <div className="relative shrink-0" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[20px] text-nowrap whitespace-pre">Courses</p>
      </div>
      <div className="relative shrink-0" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[20px] text-nowrap whitespace-pre">About Us</p>
      </div>
      <div className="relative shrink-0" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[20px] text-nowrap whitespace-pre">Testimonials</p>
      </div>
      <div className="relative shrink-0" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[20px] text-nowrap whitespace-pre">Contact</p>
      </div>
      <div className="relative shrink-0" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[20px] text-nowrap whitespace-pre">Blog</p>
      </div>
    </div>
  );
}

function LocalBusinessNavBar() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-6 items-center justify-start pb-4 pt-6 px-0 relative shrink-0 w-full z-[3]" data-name="local business Nav Bar">
      <Heading />
      <PageLinks />
      <div className="absolute bottom-0 h-0 left-[-96px] right-[-96px]" data-name="divider">
        <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1536 2">
            <path d="M0 1H1536" id="divider" stroke="var(--stroke-0, black)" strokeOpacity="0.8" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonMarketing() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] box-border content-stretch flex items-center justify-center px-6 py-3 relative rounded-[4px] shrink-0" data-name="buttonMarketing?">
      <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[24px] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-24 items-center justify-start relative shrink-0 w-full" data-name="content">
      <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[120px] text-[rgba(0,0,0,0.8)] text-center" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0", width: "min-content" }}>
        <p className="leading-[120px]">Master AI and Web Development with Abdu Academy</p>
      </div>
      <ButtonMarketing />
    </div>
  );
}

function Logomark() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="logomark">
          <path d={svgPaths.p31c9bea0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.75" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute content-stretch flex gap-1.5 h-12 items-center justify-start left-10 top-[37px]" data-name="logo">
      <Logomark />
      <div className="font-['Shantell_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[42px] text-[rgba(0,0,0,0.8)] text-nowrap" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-none whitespace-pre">Abdu</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-2 items-center justify-center px-4 py-3 right-10 rounded-[4px] top-[37px]" data-name="Button Container">
      <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[24px] whitespace-pre">Enroll Now</p>
      </div>
    </div>
  );
}

function HeroDesktopUi() {
  return (
    <div className="absolute bg-white h-[720px] left-1/2 rounded-[8px] top-[22px] translate-x-[-50%] w-[1024px]" data-name="hero desktop UI">
      <div className="h-[720px] overflow-clip relative w-[1024px]">
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[271px] left-10 opacity-30 rounded-[8px] top-[106px] w-[729px]" data-name="Container" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[271px] left-10 opacity-30 rounded-[8px] top-[409px] w-[729px]" data-name="Container" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[574px] left-[801px] opacity-30 rounded-[8px] top-[106px] w-[183px]" data-name="Container" />
        <Logo1 />
        <ButtonContainer />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Ui() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ui">
      <HeroDesktopUi />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white bottom-[290px] box-border content-stretch flex flex-col gap-32 items-center justify-start left-0 pb-0 pt-24 px-24 right-0 top-0" data-name="container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1344 1108\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.699999988079071\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0.0000089812 172.7 -259.85 0.000014392 672 -17.157)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.31174\\\'/><stop stop-color=\\\'rgba(204,204,204,0.77)\\\' offset=\\\'0.48381\\\'/><stop stop-color=\\\'rgba(153,153,153,0.54)\\\' offset=\\\'0.65587\\\'/><stop stop-color=\\\'rgba(102,102,102,0.31)\\\' offset=\\\'0.82794\\\'/><stop stop-color=\\\'rgba(51,51,51,0.08)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Content />
      <Ui />
    </div>
  );
}

function LandingPageHeroWithTaglineAndDesktopAppMockup() {
  return (
    <div className="bg-white h-[1398px] relative shrink-0 w-full z-[3]" data-name="Landing Page Hero With Tagline and Desktop App Mockup">
      <Container />
    </div>
  );
}

function TextContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="textContent">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] px-8 py-0 relative w-full">
          <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[28px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            <p className="leading-[32px]">Expert Instructors</p>
          </div>
          <div className="font-['Flow_Circular:Regular',_sans-serif] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)] w-full">
            <p className="leading-[24px]">Learn from industry leaders.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white left-0 rounded-[8px] top-[81px] w-[357px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start overflow-clip p-[28px] relative w-[357px]">
        <div className="flex flex-col font-['Shantell_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[28px] text-[rgba(0,0,0,0.8)] text-nowrap" style={{ width: "min-content", fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[32px] overflow-inherit">Interactive Classes</p>
        </div>
        <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-full" data-name="Placeholder" />
        <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-[172px]" data-name="Placeholder" />
        <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-52" data-name="Placeholder" />
        <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-[261px]" data-name="Placeholder" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NestedContainer() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Nested Container">
      <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-[177px]" data-name="Rounded Rectangle" />
      <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-[207px]" data-name="Rounded Rectangle" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white rounded-[8px] top-[156px] translate-x-[-50%] w-[255px]" data-name="Container" style={{ left: "calc(50% + 12.5px)" }}>
      <div className="box-border content-stretch flex flex-col gap-5 items-end justify-start overflow-clip p-[24px] relative w-[255px]">
        <NestedContainer />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute size-[84px] top-[19px] translate-x-[-50%]" data-name="profile" style={{ left: "calc(50% + 126px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_233">
            <path d={svgPaths.p249b93c0} />
          </mask>
          <path d={svgPaths.p249b93c0} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p6371f00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_233)" />
          <path clipRule="evenodd" d={svgPaths.p26575400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Profile1() {
  return (
    <div className="absolute right-0 size-[84px] top-[179px]" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_233">
            <path d={svgPaths.p249b93c0} />
          </mask>
          <path d={svgPaths.p249b93c0} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p6371f00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_233)" />
          <path clipRule="evenodd" d={svgPaths.p26575400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Profile2() {
  return (
    <div className="absolute size-[84px] top-[343px] translate-x-[-50%]" data-name="profile" style={{ left: "calc(50% + 174px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_233">
            <path d={svgPaths.p249b93c0} />
          </mask>
          <path d={svgPaths.p249b93c0} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p6371f00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_233)" />
          <path clipRule="evenodd" d={svgPaths.p26575400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UiSnippet() {
  return (
    <div className="h-[405px] relative shrink-0 w-full" data-name="ui snippet">
      <Container1 />
      <Container2 />
      <Profile />
      <Profile1 />
      <Profile2 />
    </div>
  );
}

function ImageDiv() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Image div">
      <UiSnippet />
    </div>
  );
}

function Bento1() {
  return (
    <div className="basis-0 bg-white grow h-[480px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="bento1">
      <div className="box-border content-stretch flex flex-col h-[480px] items-end justify-start overflow-clip pb-0 pt-8 px-0 relative w-full">
        <TextContent />
        <ImageDiv />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="textContent">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] px-8 py-0 relative w-full">
          <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[28px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            <p className="leading-[32px]">Flexible Learning</p>
          </div>
          <div className="font-['Flow_Circular:Regular',_sans-serif] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)] w-full">
            <p className="leading-[24px]">Study at your own pace.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Profile3() {
  return (
    <div className="relative shrink-0 size-16" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_230">
            <path d={svgPaths.pfbaa800} />
          </mask>
          <path d={svgPaths.pfbaa800} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p34dbd80} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_230)" />
          <path clipRule="evenodd" d={svgPaths.p1272d2c0} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-center justify-start left-[42px] top-[42px]" data-name="User Info">
      <Profile3 />
      <div className="flex flex-col font-['Shantell_Sans:Medium',_sans-serif] font-medium h-full justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[34px] text-[rgba(0,0,0,0.8)] text-nowrap w-[244px]" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[40px] overflow-inherit">Online Access</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white bottom-[-120.5px] h-[493.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-2px] mask-size-[532px_375px] right-[-51px] rounded-[24px] w-[579px]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <div className="h-[493.5px] overflow-clip relative w-[579px]">
        <UserInfo />
        <div className="absolute bg-[rgba(0,0,0,0.8)] h-12 left-[42px] opacity-30 rounded-[4px] top-[135px] w-[296.25px]" data-name="Rectangle" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-12 left-[42px] opacity-50 rounded-[4px] top-[213px] w-[247.5px]" data-name="Rectangle" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-12 left-[42px] opacity-50 rounded-[4px] top-[291px] w-[275.25px]" data-name="Rectangle" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-12 left-[42px] opacity-50 rounded-[4px] top-[369px] w-[296.25px]" data-name="Rectangle" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[528px] left-[399px] opacity-30 rounded-[4px] top-[50px] w-[296px]" data-name="Background Shape" />
      </div>
      <div aria-hidden="true" className="absolute border-[2.25px] border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[-120.5px] contents right-[-51px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function UiSnippet1() {
  return (
    <div className="h-[405px] overflow-clip relative shrink-0 w-full" data-name="ui snippet">
      <Container4 />
    </div>
  );
}

function ImageDiv1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Image div">
      <UiSnippet1 />
    </div>
  );
}

function Bento2() {
  return (
    <div className="basis-0 bg-white grow h-[480px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="bento2">
      <div className="box-border content-stretch flex flex-col h-[480px] items-end justify-start overflow-clip pb-0 pt-8 px-0 relative w-full">
        <TextContent1 />
        <ImageDiv1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full" data-name="row1">
      <Bento1 />
      <Bento2 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="textContent">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] px-8 py-0 relative w-full">
          <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[28px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            <p className="leading-[32px]">Career Support</p>
          </div>
          <div className="font-['Flow_Circular:Regular',_sans-serif] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)] w-full">
            <p className="leading-[24px]">We help you succeed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white h-[404px] left-1/2 rounded-[8px] top-[33px] translate-x-[-50%] w-[296px]" data-name="Container">
      <div className="h-[404px] overflow-clip relative w-[296px]">
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-8 left-7 rounded-[4px] top-7 w-[142px]" data-name="Header section" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] bottom-7 left-7 opacity-50 right-7 rounded-[4px] top-20" data-name="Primary section" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Briefcase() {
  return (
    <div className="absolute left-5 size-8 top-5" data-name="briefcase">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="briefcase">
          <path d={svgPaths.p1999a600} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white h-[72px] rounded-[8px] top-[289px] translate-x-[-50%] w-[231px]" data-name="Container" style={{ left: "calc(50% - 143.5px)" }}>
      <div className="h-[72px] overflow-clip relative w-[231px]">
        <div className="absolute flex flex-col font-['Shantell_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] left-[69px] overflow-ellipsis overflow-hidden text-[20px] text-[rgba(0,0,0,0.8)] text-nowrap top-[38px] translate-y-[-50%] w-[142px]" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Job Placement</p>
        </div>
        <Briefcase />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Pause() {
  return (
    <div className="absolute left-5 size-8 top-5" data-name="pause">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="pause">
          <g id="Vector">
            <path d={svgPaths.p14f3ca00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p1f893b00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p324fed00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p443d500} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p243dfd40} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p2d93eb00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p2cb5f140} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p31123400} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p2d79c610} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p1f0a4400} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p35e25c70} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p3fdd6b80} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.pa2ffd40} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p205d6380} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p38e6f080} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p3f67bef0} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p3a4ae400} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p98d2100} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p31235a00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p1393aef0} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p17c07500} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p3cdb24c0} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p2dc1c00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p1c1c7100} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p399e0d00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p36aa780} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p2b8c40f0} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.pb2a7e00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p22045f00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p1bd29f00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p5fa1180} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p2dd3bb00} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.pcee5580} fill="var(--fill-0, black)" fillOpacity="0.8" />
            <path d={svgPaths.p265e9d00} fill="var(--fill-0, black)" fillOpacity="0.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white h-[72px] rounded-[8px] top-[158px] translate-x-[-50%] w-[231px]" data-name="Container" style={{ left: "calc(50% + 146.5px)" }}>
      <div className="h-[72px] overflow-clip relative w-[231px]">
        <div className="absolute flex flex-col font-['Shantell_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] left-[69px] overflow-ellipsis overflow-hidden text-[20px] text-[rgba(0,0,0,0.8)] text-nowrap top-9 translate-y-[-50%] w-[142px]" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Resume Workshops</p>
        </div>
        <Pause />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function UiSnippet2() {
  return (
    <div className="h-[405px] relative shrink-0 w-full" data-name="ui snippet">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function ImageDiv2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Image div">
      <UiSnippet2 />
    </div>
  );
}

function Bento3() {
  return (
    <div className="basis-0 bg-white grow h-[480px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="bento3">
      <div className="box-border content-stretch flex flex-col h-[480px] items-end justify-start overflow-clip pb-0 pt-8 px-0 relative w-full">
        <TextContent2 />
        <ImageDiv2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextContent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="textContent">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] px-8 py-0 relative w-full">
          <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[28px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
            <p className="leading-[32px]">Community</p>
          </div>
          <div className="font-['Flow_Circular:Regular',_sans-serif] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)] w-full">
            <p className="leading-[24px]">Join a network of learners.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-2 h-12 items-center justify-center px-4 py-2 relative rounded-[4px] shrink-0" data-name="Title Container">
      <div className="flex flex-col font-['Shantell_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="[text-overflow:inherit] leading-[24px] overflow-inherit whitespace-pre">Peer Discussions</p>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="absolute content-stretch flex gap-6 items-center justify-start right-10 top-10" data-name="Button Container">
      <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-[139px]" data-name="Left Button" />
      <div className="bg-[rgba(0,0,0,0.2)] h-8 opacity-50 rounded-[4px] shrink-0 w-[105px]" data-name="Right Button" />
      <TitleContainer />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute bg-white bottom-[-120.5px] h-[493.5px] left-[-51px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[51px_-22px] mask-size-[557px_395px] rounded-[24px] w-[579px]" data-name="Content" style={{ maskImage: `url('${imgContent}')` }}>
      <div className="h-[493.5px] overflow-clip relative w-[579px]">
        <ButtonContainer1 />
        <div className="absolute bg-[rgba(0,0,0,0.2)] bottom-[45.5px] left-0 opacity-50 right-10 rounded-[4px] top-[152px]" data-name="Content Background" />
      </div>
      <div aria-hidden="true" className="absolute border-[2.25px] border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Window() {
  return (
    <div className="absolute bottom-[-120.5px] contents left-[-51px]" data-name="Window">
      <Content1 />
    </div>
  );
}

function UiSnippet3() {
  return (
    <div className="h-[405px] overflow-clip relative shrink-0 w-full" data-name="ui snippet">
      <Window />
    </div>
  );
}

function ImageDiv3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Image div">
      <UiSnippet3 />
    </div>
  );
}

function Bento4() {
  return (
    <div className="basis-0 bg-white grow h-[480px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="bento4">
      <div className="box-border content-stretch flex flex-col h-[480px] items-end justify-start overflow-clip pb-0 pt-8 px-0 relative w-full">
        <TextContent3 />
        <ImageDiv3 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full" data-name="row2">
      <Bento3 />
      <Bento4 />
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="bentoGrid">
      <Row1 />
      <Row2 />
    </div>
  );
}

function SoftwareMarketingShortFeatureBoxes() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-12 items-start justify-center px-0 py-12 relative shrink-0 w-full z-[2]" data-name="Software Marketing Short Feature Boxes">
      <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)] text-center" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0", width: "min-content" }}>
        <p className="leading-[52px]">Why Choose Us?</p>
      </div>
      <BentoGrid />
    </div>
  );
}

function Profile4() {
  return (
    <div className="relative shrink-0 size-12" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_221">
            <path d={svgPaths.pc6baf00} />
          </mask>
          <path d={svgPaths.pc6baf00} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p14ef8b00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_221)" />
          <path clipRule="evenodd" d={svgPaths.p3cc6400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextContent4() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Flow_Circular:Regular',_sans-serif] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px]" data-name="textContent">
      <div className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
        <p className="leading-[20px]">Zara T.</p>
      </div>
      <div className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">
        <p className="leading-[20px]">Software Engineer</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Profile4 />
      <TextContent4 />
    </div>
  );
}

function LineContainer() {
  return (
    <div className="relative self-stretch shrink-0 w-12" data-name="Line Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 72">
        <g id="Line Container">
          <path d="M24 0V72" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start opacity-80 pb-2 pt-0 px-0 relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer />
      <div className="basis-0 font-['Flow_Circular:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)]">
        <p className="leading-[24px]">Abdu Academy transformed my career!</p>
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-72" data-name="testimonialCard">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative w-72">
        <Container8 />
        <QuoteContainer />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Profile5() {
  return (
    <div className="relative shrink-0 size-12" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_221">
            <path d={svgPaths.pc6baf00} />
          </mask>
          <path d={svgPaths.pc6baf00} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p14ef8b00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_221)" />
          <path clipRule="evenodd" d={svgPaths.p3cc6400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextContent5() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Flow_Circular:Regular',_sans-serif] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px]" data-name="textContent">
      <div className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
        <p className="leading-[20px]">Liam K.</p>
      </div>
      <div className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">
        <p className="leading-[20px]">AI Specialist</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Profile5 />
      <TextContent5 />
    </div>
  );
}

function LineContainer1() {
  return (
    <div className="relative self-stretch shrink-0 w-12" data-name="Line Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 72">
        <g id="Line Container">
          <path d="M24 0V72" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer1() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start opacity-80 pb-2 pt-0 px-0 relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer1 />
      <div className="basis-0 font-['Flow_Circular:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)]">
        <p className="leading-[24px]">The courses are top-notch and practical.</p>
      </div>
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-72" data-name="testimonialCard">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative w-72">
        <Container9 />
        <QuoteContainer1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Profile6() {
  return (
    <div className="relative shrink-0 size-12" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_221">
            <path d={svgPaths.pc6baf00} />
          </mask>
          <path d={svgPaths.pc6baf00} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p14ef8b00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_221)" />
          <path clipRule="evenodd" d={svgPaths.p3cc6400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextContent6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Flow_Circular:Regular',_sans-serif] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px]" data-name="textContent">
      <div className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
        <p className="leading-[20px]">Ava R.</p>
      </div>
      <div className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">
        <p className="leading-[20px]">Web Developer</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Profile6 />
      <TextContent6 />
    </div>
  );
}

function LineContainer2() {
  return (
    <div className="relative self-stretch shrink-0 w-12" data-name="Line Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 72">
        <g id="Line Container">
          <path d="M24 0V72" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer2() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start opacity-80 pb-2 pt-0 px-0 relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer2 />
      <div className="basis-0 font-['Flow_Circular:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)]">
        <p className="leading-[24px]">I landed my dream job thanks to Abdu.</p>
      </div>
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-72" data-name="testimonialCard">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative w-72">
        <Container10 />
        <QuoteContainer2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Profile7() {
  return (
    <div className="relative shrink-0 size-12" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_221">
            <path d={svgPaths.pc6baf00} />
          </mask>
          <path d={svgPaths.pc6baf00} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p14ef8b00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_221)" />
          <path clipRule="evenodd" d={svgPaths.p3cc6400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextContent7() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Flow_Circular:Regular',_sans-serif] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px]" data-name="textContent">
      <div className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
        <p className="leading-[20px]">Noah M.</p>
      </div>
      <div className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">
        <p className="leading-[20px]">Data Scientist</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Profile7 />
      <TextContent7 />
    </div>
  );
}

function LineContainer3() {
  return (
    <div className="relative self-stretch shrink-0 w-12" data-name="Line Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Line Container">
          <path d="M24 0V48" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer3() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start opacity-80 pb-2 pt-0 px-0 relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer3 />
      <div className="basis-0 font-['Flow_Circular:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)]">
        <p className="leading-[24px]">Great community and support.</p>
      </div>
    </div>
  );
}

function TestimonialCard3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-72" data-name="testimonialCard">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative w-72">
        <Container11 />
        <QuoteContainer3 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Profile8() {
  return (
    <div className="relative shrink-0 size-12" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_221">
            <path d={svgPaths.pc6baf00} />
          </mask>
          <path d={svgPaths.pc6baf00} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p14ef8b00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_221)" />
          <path clipRule="evenodd" d={svgPaths.p3cc6400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextContent8() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Flow_Circular:Regular',_sans-serif] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px]" data-name="textContent">
      <div className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
        <p className="leading-[20px]">Olivia L.</p>
      </div>
      <div className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">
        <p className="leading-[20px]">UX Designer</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Profile8 />
      <TextContent8 />
    </div>
  );
}

function LineContainer4() {
  return (
    <div className="relative self-stretch shrink-0 w-12" data-name="Line Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 72">
        <g id="Line Container">
          <path d="M24 0V72" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer4() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start opacity-80 pb-2 pt-0 px-0 relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer4 />
      <div className="basis-0 font-['Flow_Circular:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)]">
        <p className="leading-[24px]">Flexible and comprehensive learning.</p>
      </div>
    </div>
  );
}

function TestimonialCard4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-72" data-name="testimonialCard">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative w-72">
        <Container12 />
        <QuoteContainer4 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Profile9() {
  return (
    <div className="relative shrink-0 size-12" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="profile">
          <mask fill="white" id="path-1-inside-1_1_221">
            <path d={svgPaths.pc6baf00} />
          </mask>
          <path d={svgPaths.pc6baf00} fill="var(--fill-0, #EEEEEE)" />
          <path d={svgPaths.p14ef8b00} fill="var(--stroke-0, black)" fillOpacity="0.8" mask="url(#path-1-inside-1_1_221)" />
          <path clipRule="evenodd" d={svgPaths.p3cc6400} fill="var(--fill-0, black)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextContent9() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Flow_Circular:Regular',_sans-serif] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px]" data-name="textContent">
      <div className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
        <p className="leading-[20px]">Ethan P.</p>
      </div>
      <div className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">
        <p className="leading-[20px]">Tech Entrepreneur</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Profile9 />
      <TextContent9 />
    </div>
  );
}

function LineContainer5() {
  return (
    <div className="relative self-stretch shrink-0 w-12" data-name="Line Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 96">
        <g id="Line Container">
          <path d="M24 0V96" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer5() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start opacity-80 pb-2 pt-0 px-0 relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer5 />
      <div className="basis-0 font-['Flow_Circular:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)]">
        <p className="leading-[24px]">Highly recommend for anyone serious about tech.</p>
      </div>
    </div>
  );
}

function TestimonialCard5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-72" data-name="testimonialCard">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative w-72">
        <Container13 />
        <QuoteContainer5 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TestimonialCards() {
  return (
    <div className="content-stretch flex gap-6 items-start justify-start overflow-clip relative shrink-0 w-full" data-name="testimonialCards">
      <TestimonialCard />
      <TestimonialCard1 />
      <TestimonialCard2 />
      <TestimonialCard3 />
      <TestimonialCard4 />
      <TestimonialCard5 />
    </div>
  );
}

function LandingPageTestimonialCarousel() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-12 items-center justify-center px-0 py-12 relative shrink-0 w-full z-[1]" data-name="Landing Page Testimonial Carousel">
      <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium leading-[0] max-w-[1260px] min-w-full relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)] text-center" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0", width: "min-content" }}>
        <p className="leading-[52px]">What Our Students Say</p>
      </div>
      <TestimonialCards />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-24">
        <div className="flex-none h-[412px] rotate-[180deg] scale-y-[-100%] w-24">
          <div className="bg-gradient-to-l from-[#ffffff00] size-full to-84% to-[#ffffff]" data-name="Bleed" />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-start justify-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Main Content">
      <LandingPageHeroWithTaglineAndDesktopAppMockup />
      <SoftwareMarketingShortFeatureBoxes />
      <LandingPageTestimonialCarousel />
    </div>
  );
}

function Container14() {
  return (
    <div className="box-border content-stretch flex isolate items-start justify-start px-0 py-12 relative shrink-0 w-full z-[2]" data-name="Container">
      <MainContent />
    </div>
  );
}

function PageLinks1() {
  return (
    <div className="content-stretch flex gap-8 items-start justify-start relative shrink-0" data-name="pageLinks">
      <div className="font-['Flow_Circular:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.4)] text-nowrap">
        <p className="leading-[24px] whitespace-pre">2023 Abdu Academy</p>
      </div>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-6 py-3 relative rounded-[4px] shrink-0" data-name="buttonLarge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="font-['Shantell_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] text-nowrap" style={{ fontVariationSettings: "'BNCE' 0, 'INFM' 0, 'SPAC' 0" }}>
        <p className="leading-[24px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <PageLinks1 />
      <ButtonLarge />
    </div>
  );
}

function PersonalWebsiteFooter() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip pb-6 pt-24 px-0 relative shrink-0 w-full z-[1]" data-name="Personal Website Footer">
      <Container15 />
    </div>
  );
}

export default function CreateALandingPageForAnOnlineAcademyThatTeachesAiAndWebDevelopmentForAbduAcademy() {
  return (
    <div className="bg-white relative size-full" data-name="create a landing page for an online academy that teaches AI and web development for Abdu Academy">
      <div className="min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col isolate items-start justify-start min-h-inherit px-12 py-0 relative size-full">
          <LocalBusinessNavBar />
          <Container14 />
          <PersonalWebsiteFooter />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}