import svgPaths from "./svg-qhcw3sf999";
import imgMazda from "./694829d53c594bd4e4d0e5ebc8666d550e0c7f8f.png";
import imgPeugeot from "./14f1496927c04f7c22a446471e0c946b57c86413.png";
import imgInfiniti from "./f6db9df72bf18008e5a7969061b10aabb02e569e.png";
import imgToyota from "./610f5633afde111b4005908ef06fa7e2748eff55.png";
import imgChevrolet from "./d4f398c64ce9e75efd01d675cf06b3e01780840a.png";
import imgFord from "./d4dbe249829e7bbb6a870811a131f95abd00bf16.png";
import imgHyundai from "./756043718a1b6faeb44cf4243d5b375a2d5b31db.png";
import imgJeep from "./14d1374e5b03b26dab8c29fce59580ab2fcf5a63.png";
import imgLexus from "./170dc56f23e123cef0254a7bb024da2a169b64c8.png";
import imgNissan from "./99d1cd0c84fb3067def0ce6659f97738f5ad90e0.png";
import imgMitsubishi from "./fcfb9be0a0edff0e0ae57f89e4f54f6df578cb28.png";
import imgMhero from "./c2fbe384d38c8c2c583472fe9b60b5cef8c414da.png";
import imgHero from "./f758d2bd46413b9e726861d2a5070736378557fe.png";
import imgUserProfile from "./df808745d4eeae509bbfb902288411fb819999c2.png";
import imgUserProfile1 from "./b2233af5eaaa66499916a4a89b1c52acbe944c44.png";
import imgUserProfile2 from "./1e832cd596aa7da2d61d5f318e6fe73ff4f2a059.png";
import imgUserProfile3 from "./d1de8b14dcdb224d3238629ee05b2850c42f6549.png";
import imgRectangle9 from "./e3067d5c8d7bd4fdb0f78d0daa2d890833a6d462.png";
import imgRectangle10 from "./68e642fd7cd3c1577f2a0325c37fa450fb962b13.png";
import imgRectangle11 from "./f97f126580334fd53976ffd8a24500fec3f2fa91.png";
import imgVector from "./b0c096f5a7c772f5726e18c77dcac7832ec808f0.png";
import imgCatalog1 from "./e3b6a65d10cd4604b8f8f2f794e4f1e8b3cf96eb.png";
import imgCatalog2 from "./1368185f18cdbc2f72f4ddb7af6cac81444b3c82.png";
import imgCatalog3 from "./0611f9c01982f7d9248cd5b0d49074ea7ca91b25.png";
import imgCatalog4 from "./da57e7082d55c6d6169440efa0a1ca3230868c67.png";
import imgCatalog5 from "./3d94aa648a1608e39b137b9c5a2d380d6d273dc1.png";
import imgCatalog6 from "./1bb302f8ebfa8bf79e9a5cbcbfba4030b2642db0.png";
import imgCatalog7 from "./2ab9a7f61fc6a4df5dc59d97d879d254b7419b92.png";
import imgCatalog8 from "./ceef944f350b3ac1ff11bec16a8d6b4a57e25a42.png";
import imgRectangle12 from "./0ad5b83199955ac5ae8c4d7d4333acedbc34e386.png";
import imgRectangle13 from "./b620b241b3ae0b1e5b1b3471022a86964635e438.png";
import imgRectangle15 from "./9c2cd8426059bf421672ff69c6ebe964241801fa.png";
import imgRectangle16 from "./13a56f4ec7766f7243affaa6050a9eb378a0324c.png";
import imgRectangle14 from "./e6cfe8099341ecab48a7319fc8a0f8bee6073ec1.png";
import imgModernBlueFamilyCarFrontView2 from "./7258a12e98d86112468ea9f08a5d6534fe586af5.png";
import imgModernBlueFamilyCarFrontView3 from "./45f7cc9de5d5c2a675534c1d473c40e9e3f3a192.png";
type MenuProps = {
  className?: string;
  property1?: boolean;
  text?: string;
};

function Menu({ className, property1 = true, text = "Buy" }: MenuProps) {
  const isNotProperty1 = !property1;
  return (
    <div className={className || `relative rounded-[99px] ${isNotProperty1 ? "h-[37px]" : ""}`}>
      <div className={`flex flex-col items-center size-full ${isNotProperty1 ? "" : "justify-center"}`}>
        <div className={`content-stretch flex flex-col gap-[8px] items-center px-[12px] relative size-full ${isNotProperty1 ? "py-[8px]" : "justify-center pt-[8px]"}`}>
          <div className="[word-break:break-word] flex flex-col font-['Forma_DJR_Micro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">{text}</p>
          </div>
          <div className={`bg-[#00f090] h-[2px] relative shrink-0 ${isNotProperty1 ? "opacity-0 w-px" : "w-full"}`} />
        </div>
      </div>
    </div>
  );
}
type CursorsGeneralProps = {
  className?: string;
  stateOrStyle?: "Default";
};

function CursorsGeneral({ className, stateOrStyle = "Default" }: CursorsGeneralProps) {
  return (
    <div className={className || "drop-shadow-[0px_1px_0.9px_rgba(0,0,0,0.65)] overflow-clip relative size-[24px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.578px] left-[calc(50%+0.71px)] top-[calc(50%-0.21px)] w-[11.414px]" data-name="arrow border">
        <svg className="absolute block inset-0 size-full" fill="none" height="17.5785" preserveAspectRatio="none" viewBox="0 0 11.4142 17.5785" width="11.4142">
          <path d={svgPaths.p2deb2570} fill="white" id="arrow border" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.096px] left-1/2 top-[calc(50%+0.46px)] w-[8px]" data-name="arrow">
        <svg className="absolute block inset-0 size-full" fill="none" height="14.0959" preserveAspectRatio="none" viewBox="0 0 8 14.0959" width="8">
          <path clipRule="evenodd" d={svgPaths.p3f078900} fill="black" fillRule="evenodd" id="arrow" />
        </svg>
      </div>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  property1?: "Start" | "Stop";
};

function Component({ className, property1 = "Start" }: ComponentProps) {
  const isStart = property1 === "Start";
  return (
    <div className={className || `relative ${isStart ? "w-[1272px]" : "w-[1280px]"}`}>
      <div className={`flex flex-row items-center size-full ${isStart ? "" : "justify-end"}`}>
        <div className={`content-stretch flex gap-[80px] items-center relative size-full ${isStart ? "" : "justify-end"}`}>
          <div className="h-[100px] opacity-40 relative shrink-0 w-[113px]" data-name="Mazda">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMazda} />
              </div>
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
            </div>
          </div>
          <div className="opacity-40 relative shrink-0 size-[100px]" data-name="Peugeot">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPeugeot} />
              </div>
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
            </div>
          </div>
          <div className="h-[65.7px] opacity-40 relative shrink-0 w-[167.97px]" data-name="Infiniti">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInfiniti} />
              </div>
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
            </div>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-40 place-items-start relative shrink-0">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[56.14px] place-items-start relative row-1">
              <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[109px]" data-name="Toyota">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[152.1%] left-[-47.91%] max-w-none top-[0.81%] w-[150.59%]" src={imgToyota} />
                </div>
              </div>
            </div>
            <div className="col-1 h-[62.579px] ml-[6px] mt-0 overflow-clip relative row-1 w-[96.275px]" data-name="Toyota_EU 1">
              <div className="absolute inset-[0.69%_0.89%_0.69%_0.03%]">
                <svg className="absolute block inset-0 size-full" fill="none" height="61.7139" preserveAspectRatio="none" viewBox="0 0 95.3851 61.7139" width="95.3851">
                  <g id="Group 1000004297">
                    <path d={svgPaths.p25df8800} fill="#282830" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[92.25px] opacity-40 relative shrink-0 w-[164px]" data-name="Chevrolet">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChevrolet} />
          </div>
          <div className="h-[87.285px] relative shrink-0 w-[138px]" data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height="87.2853" preserveAspectRatio="none" viewBox="0 0 138 87.2853" width="138">
              <g id="Group" opacity="0.4">
                <path d={svgPaths.p30040ef0} fill="black" id="svg_1" />
                <path d={svgPaths.p176113f0} fill="black" id="svg_2" />
                <path d={svgPaths.p246a3e00} fill="black" id="svg_3" />
                <path d={svgPaths.p1287ed00} fill="black" id="svg_4" />
                <path d={svgPaths.p11a34f80} fill="black" id="svg_5" />
                <path d={svgPaths.p2c464880} fill="black" id="svg_6" />
                <path d={svgPaths.p21e734b0} fill="black" id="svg_7" />
              </g>
            </svg>
          </div>
          <div className="h-[64px] opacity-40 relative shrink-0 w-[165px]" data-name="Ford">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFord} />
          </div>
          <div className="h-[93.958px] relative shrink-0 w-[140.195px]" data-name="layer1">
            <svg className="absolute block inset-0 size-full" fill="none" height="93.958" preserveAspectRatio="none" viewBox="0 0 140.195 93.958" width="140.195">
              <g id="layer1" opacity="0.4">
                <g id="g3532">
                  <path d={svgPaths.p3f078780} fill="#696969" id="path3534" />
                </g>
                <g id="g3536">
                  <path d={svgPaths.p144bd940} fill="#696969" id="path3538" />
                </g>
                <g id="g3540">
                  <path d={svgPaths.p21103700} fill="#696969" id="path3542" />
                </g>
                <g id="g3544">
                  <path d={svgPaths.p18cb9bc0} fill="#696969" id="path3546" />
                </g>
                <path d={svgPaths.p3fc55700} fill="#696969" id="path3548" />
                <g id="g3550">
                  <path d={svgPaths.p8a6be80} fill="#696969" id="path3552" />
                </g>
                <g id="g3554">
                  <path d={svgPaths.p15f2e500} fill="#696969" id="path3556" />
                </g>
              </g>
            </svg>
          </div>
          <div className="h-[99px] opacity-40 relative shrink-0 w-[130px]" data-name="Hyundai">
            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgHyundai} />
          </div>
          <div className="h-[56px] opacity-40 relative shrink-0 w-[139px]" data-name="Jeep">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-[0.01%] w-full" src={imgJeep} />
              </div>
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
            </div>
          </div>
          <div className="h-[96px] opacity-40 relative shrink-0 w-[171px]" data-name="Lexus">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLexus} />
              </div>
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
            </div>
          </div>
          <div className="h-[100px] opacity-40 relative shrink-0 w-[120px]" data-name="Nissan">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNissan} />
            </div>
          </div>
          <div className="h-[96px] opacity-40 relative shrink-0 w-[171px]" data-name="Mitsubishi">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMitsubishi} />
              </div>
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
            </div>
          </div>
          <div className="h-[30.14px] opacity-40 relative shrink-0 w-[167.95px]" data-name="MHERO">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMhero} />
              </div>
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-center leading-[0] left-1/2 text-center top-[146px] whitespace-nowrap">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Obviously_Demo:Bold',sans-serif] from-[#00f090] justify-center not-italic relative shrink-0 text-[40px] text-[transparent] to-[#00ffdb] uppercase">
        <p className="leading-[normal]">Just Good Cars</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] text-white tracking-[0.72px]">
        <p className="leading-[normal]">UAE’s trusted pre-owned cars</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#0063ff] content-stretch flex flex-[1_0_0] h-[50px] items-center justify-center min-w-px px-[16px] py-[12px] relative rounded-[8px]" data-name="Tab">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Buy a Car</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="backdrop-blur-[12px] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-[1_0_0] h-[50px] items-center justify-center min-w-px px-[16px] py-[8px] relative rounded-[8px]" data-name="Tab">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Sell a Car</p>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Category">
      <Tab />
      <Tab1 />
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretDown">
          <path d={svgPaths.p3410b100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Options() {
  return (
    <div className="border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex items-center justify-between opacity-70 p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Select make</p>
      </div>
      <CaretDown />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[normal]">Make</p>
      </div>
      <Options />
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretDown">
          <path d={svgPaths.p3410b100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Options1() {
  return (
    <div className="border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex items-center justify-between opacity-70 p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Select model</p>
      </div>
      <CaretDown1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[normal]">Model</p>
      </div>
      <Options1 />
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretDown">
          <path d={svgPaths.p3410b100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Options2() {
  return (
    <div className="border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex items-center justify-between opacity-70 p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Select price range</p>
      </div>
      <CaretDown2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[normal]">Price</p>
      </div>
      <Options2 />
    </div>
  );
}

function CaretDown3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretDown">
          <path d={svgPaths.p3410b100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Options3() {
  return (
    <div className="border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex items-center justify-between opacity-70 p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Select mileage (max)</p>
      </div>
      <CaretDown3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[normal]">Mileage</p>
      </div>
      <Options3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MagnifyingGlass">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="MagnifyingGlass">
          <path d={svgPaths.p3ee3db00} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0063ff] content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[24px] py-[12px] relative rounded-[999px] shrink-0 w-full" data-name="Button">
      <MagnifyingGlass />
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">Search (5,254)</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.4)] border-solid content-stretch flex flex-col gap-[24px] items-start left-[80px] p-[16px] rounded-[24px] top-[584px] w-[1280px]" data-name="Search">
      <Category />
      <Frame13 />
      <Button />
    </div>
  );
}

function Hero() {
  return (
    <div className="-translate-x-1/2 absolute h-[878px] left-1/2 overflow-clip top-0 w-[1440px]" data-name="Hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[100.37%] left-[-0.02%] max-w-none top-[-0.04%] w-[100.02%]" src={imgHero} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 878' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.5'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(4.4087e-15 43.9 -72 2.6881e-15 720 439)'><stop stop-color='rgba(0,0,0,0.1)' offset='0'/><stop stop-color='rgba(0,0,0,1)' offset='1'/></radialGradient></defs></svg>\")" }} />
      </div>
      <Frame1 />
      <Search />
    </div>
  );
}

function Frame134() {
  return <div className="h-[32px] relative shrink-0 w-full" />;
}

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[115px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 115 32" width="115">
        <g clipPath="url(#clip0_0_549)" id="CaredLogo.svg">
          <g filter="url(#filter0_d_0_549)" id="Vector">
            <path d={svgPaths.p30c8d740} fill="white" />
          </g>
          <g filter="url(#filter1_d_0_549)" id="Vector_2">
            <path d={svgPaths.p28d0300} fill="white" />
          </g>
          <g filter="url(#filter2_d_0_549)" id="Vector_3">
            <path d={svgPaths.p33c99600} fill="white" />
          </g>
          <g filter="url(#filter3_d_0_549)" id="Vector_4">
            <path d={svgPaths.p2b3d0ff0} fill="white" />
          </g>
          <g filter="url(#filter4_d_0_549)" id="Vector_5">
            <path d={svgPaths.p16af3c00} fill="white" />
          </g>
          <g filter="url(#filter5_d_0_549)" id="Vector_6">
            <path d={svgPaths.p33cfc900} fill="#00ED99" />
          </g>
          <g filter="url(#filter6_d_0_549)" id="Vector_7">
            <path d={svgPaths.p7ef7a00} fill="#0061FF" />
          </g>
          <g filter="url(#filter7_d_0_549)" id="Vector_8">
            <path d={svgPaths.p35cf8980} fill="white" />
          </g>
          <g filter="url(#filter8_d_0_549)" id="Vector_9">
            <path d={svgPaths.p3b99bd00} fill="white" />
          </g>
          <g filter="url(#filter9_d_0_549)" id="Vector_10">
            <path d={svgPaths.p5e82f80} fill="white" />
          </g>
          <g filter="url(#filter10_d_0_549)" id="Vector_11">
            <path d={svgPaths.p9912800} fill="white" />
          </g>
          <g filter="url(#filter11_d_0_549)" id="Vector_12">
            <path d={svgPaths.p28afd680} fill="white" />
          </g>
          <g filter="url(#filter12_d_0_549)" id="Vector_13">
            <path d={svgPaths.p2f378900} fill="white" />
          </g>
          <g filter="url(#filter13_d_0_549)" id="Vector_14">
            <path d={svgPaths.p30f6c100} fill="white" />
          </g>
          <g filter="url(#filter14_d_0_549)" id="Vector_15">
            <path d={svgPaths.p20729c80} fill="white" />
          </g>
          <g filter="url(#filter15_d_0_549)" id="Vector_16">
            <path d={svgPaths.p11d22c00} fill="white" />
          </g>
          <g filter="url(#filter16_d_0_549)" id="Vector_17">
            <path d={svgPaths.p1cf46c80} fill="white" />
          </g>
          <g filter="url(#filter17_d_0_549)" id="Vector_18">
            <path d={svgPaths.p203ec080} fill="white" />
          </g>
          <g filter="url(#filter18_d_0_549)" id="Vector_19">
            <path d={svgPaths.p9eb4d00} fill="white" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.7872" id="filter0_d_0_549" width="24.0292" x="15.2265" y="5.82078">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.7764" id="filter1_d_0_549" width="15.7409" x="33.204" y="5.83078">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.8978" id="filter2_d_0_549" width="24.0283" x="59.3037" y="0.862999">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.3113" id="filter3_d_0_549" width="24.4484" x="41.6105" y="5.44826">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.4926" id="filter4_d_0_549" width="26.7577" x="-4" y="1.34053">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.617" id="filter5_d_0_549" width="29.1205" x="89.8799" y="0.00295485">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.617" id="filter6_d_0_549" width="29.1205" x="78.6043" y="0.00295485">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.5965" id="filter7_d_0_549" width="12.0031" x="15.6787" y="25.4047">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.8701" id="filter8_d_0_549" width="12.0375" x="20.3574" y="27.1149">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9618" id="filter9_d_0_549" width="12.1601" x="24.9033" y="27.0123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.0284" id="filter10_d_0_549" width="10.6464" x="29.1777" y="25.9223">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.6986" id="filter11_d_0_549" width="13.9632" x="33.8027" y="25.292">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9695" id="filter12_d_0_549" width="12.5508" x="40.1436" y="27.0074">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9695" id="filter13_d_0_549" width="12.5508" x="45.0293" y="27.0074">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.5598" id="filter14_d_0_549" width="12.3607" x="49.918" y="25.4047">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.6972" id="filter15_d_0_549" width="13.8094" x="56.5362" y="25.2898">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9369" id="filter16_d_0_549" width="12.3568" x="62.6854" y="27.0223">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.8059" id="filter17_d_0_549" width="10.8205" x="67.7764" y="27.0674">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9618" id="filter18_d_0_549" width="12.1602" x="70.7061" y="27.0123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_549" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_549" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_0_549">
            <rect fill="white" height="32" width="115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlGhurairLogotypeEnglish() {
  return (
    <div className="absolute inset-[32.69%_38.3%_40.15%_0]" data-name="AlGhurair Logotype English">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6324" preserveAspectRatio="none" viewBox="0 0 64.5662 10.6324" width="64.5662">
        <g id="AlGhurair Logotype English">
          <path d={svgPaths.p114b4340} fill="white" id="Vector" />
          <g id="i">
            <path d={svgPaths.p25f35980} fill="white" id="Vector_2" />
            <path d={svgPaths.p134d51f0} fill="white" id="Vector_3" />
          </g>
          <path d={svgPaths.p17b46800} fill="white" id="a" />
          <path d={svgPaths.p2701cef0} fill="white" id="Vector_4" />
          <path d={svgPaths.p368659c0} fill="white" id="u" />
          <path d={svgPaths.p1eb71f00} fill="white" id="h" />
          <path d={svgPaths.p1186d040} fill="white" id="G" />
          <path d={svgPaths.p156baa80} fill="white" id="l" />
          <path d={svgPaths.p10d68e00} fill="white" id="A" />
        </g>
      </svg>
    </div>
  );
}

function AlGhurairSymbol() {
  return (
    <div className="absolute inset-[0_0_0_65.56%]" data-name="AlGhurair Symbol">
      <svg className="absolute block inset-0 size-full" fill="none" height="39.154" preserveAspectRatio="none" viewBox="0 0 36.0382 39.154" width="36.0382">
        <g id="AlGhurair Symbol">
          <path d={svgPaths.p5abaf80} fill="white" id="Vector" />
          <path d={svgPaths.p3f298f80} fill="#DE0090" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AlGhurairLogoEnglish() {
  return (
    <div className="absolute contents inset-0" data-name="Al Ghurair Logo English">
      <AlGhurairLogotypeEnglish />
      <AlGhurairSymbol />
    </div>
  );
}

function AlGhurairLogo1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Al Ghurair Logo">
      <AlGhurairLogoEnglish />
    </div>
  );
}

function AlGhurairLogo() {
  return (
    <div className="absolute inset-[0.47%_0.69%_1.65%_14.92%] overflow-clip" data-name="Al Ghurair Logo">
      <AlGhurairLogo1 />
    </div>
  );
}

function LogoAlGhurairSvg() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[124px]" data-name="logo-al-ghurair.svg">
      <div className="absolute inset-[40.09%_88.17%_34.38%_5.93%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.2135" preserveAspectRatio="none" viewBox="0 0 7.32559 10.2135" width="7.32559">
          <path d={svgPaths.p38730500} fill="white" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.7%_94.33%_40.84%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.5828" preserveAspectRatio="none" viewBox="0 0 7.03591 10.5828" width="7.03591">
          <path d={svgPaths.p355e100} fill="white" id="Vector" />
        </svg>
      </div>
      <AlGhurairLogo />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-center relative shrink-0">
      <Logo />
      <LogoAlGhurairSvg />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[302px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">At Al Ghurair, we drive transformation across food, mobility, infrastructure, and real estate.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Headquartered in Dubai, we operate in 20+ countries with 28,000+ employees worldwide.</p>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#00f090] text-[16px] w-[min-content]">
        <p className="leading-[24px]">About Us</p>
      </div>
      <Frame112 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame132 />
      <Frame139 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[411px]">
      <Frame140 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-white w-full">
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">Buy</p>
      </div>
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">Sell</p>
      </div>
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">Finance</p>
      </div>
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">Offers</p>
      </div>
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">About Us</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[0] min-w-px relative text-[16px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#00f090] w-full">
        <p className="leading-[24px]">Explore</p>
      </div>
      <Frame111 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[0] min-w-px relative text-[16px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center min-w-full relative shrink-0 text-[#00f090] w-[min-content]">
        <p className="leading-[24px]">Support</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center min-w-full relative shrink-0 text-white w-[min-content]">
        <p className="leading-[23.94px]">Book a Visit</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-white w-[133px]">
        <p className="leading-[23.94px]">{`Car Tips & Guides`}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center min-w-full relative shrink-0 text-white w-[min-content]">
        <p className="leading-[23.94px]">Contact Us</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center min-w-full relative shrink-0 text-white w-[min-content]">
        <p className="leading-[23.94px]">FAQ</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center min-w-full relative shrink-0 text-white w-[min-content]">
        <p className="leading-[23.94px]">{`Terms & Conditions`}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center min-w-full relative shrink-0 text-white w-[min-content]">
        <p className="leading-[23.94px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p2f65ad00} fill="white" />
            <path d={svgPaths.p2f65ad00} fill="url(#paint0_linear_0_532)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_532" x1="6.75" x2="12.375" y1="9" y2="9">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LinkFacebook() {
  return (
    <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link - Facebook">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p30001e00} fill="white" />
            <path d={svgPaths.p30001e00} fill="url(#paint0_linear_0_546)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_546" x1="1.65039" x2="16.3804" y1="9.0299" y2="9.0299">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LinkInstagram() {
  return (
    <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link - Instagram">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p27b9e900} fill="white" />
            <path d={svgPaths.p27b9e900} fill="url(#paint0_linear_0_574)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_574" x1="2.295" x2="15.2175" y1="9.0225" y2="9.0225">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="LinkedIn">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p2cdb1c50} fill="white" />
            <path d={svgPaths.p2cdb1c50} fill="url(#paint0_linear_0_601)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_601" x1="0.75" x2="17.25" y1="9.075" y2="9.075">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LinkYouTube() {
  return (
    <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link - YouTube">
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <g id="Vector">
            <path d={svgPaths.p308b4b00} fill="white" />
            <path d={svgPaths.p308b4b00} fill="url(#paint0_linear_0_580)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_580" x1="3.66699" x2="14.667" y1="8.8999" y2="8.8999">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LinkYouTube1() {
  return (
    <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link - YouTube">
      <Svg4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_12px] items-start pt-[4.6px] relative shrink-0 w-full" data-name="Container">
      <LinkFacebook />
      <LinkInstagram />
      <LinkedIn />
      <LinkYouTube />
      <LinkYouTube1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#00f090] text-[16px] w-full">
        <p className="leading-[24px]">Join Us</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[23.94px]">Follow AG CPO Cars</p>
      </div>
      <Container />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[845px]">
      <Frame2 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame89 />
      <Frame130 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame34 />
      <div className="bg-[rgba(255,255,255,0.2)] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[253.333px]">
        <p className="leading-[normal]">AG CARS @ 2026. All rights reserved.</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame134 />
      <Frame115 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#003] bottom-0 content-stretch flex flex-col items-center left-0 pb-[24px] pt-[40px] px-[80px] right-0 rounded-tl-[24px] rounded-tr-[24px]" data-name="Footer">
      <Frame135 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 w-[628px]">
      <div className="flex flex-col font-['Obviously_Demo:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#0063ff] text-[32px] uppercase w-full">
        <p className="leading-[44px]">Customer Reviews</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#495479] text-[24px] w-full">
        <p className="leading-[normal]">What people say after they drive away</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[0] relative shrink-0 text-center whitespace-nowrap">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[96px] text-white">
        <p className="leading-[normal]">4.9</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#ffb400] text-[40px]">
        <p className="leading-[40px]">★★★★★</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="SVG">
          <path d={svgPaths.p2ffca980} fill="#FFC107" id="Vector" />
          <path d={svgPaths.p239ad280} fill="#FF3D00" id="Vector_2" />
          <path d={svgPaths.p34e48800} fill="#4CAF50" id="Vector_3" />
          <path d={svgPaths.p35fbea00} fill="#1976D2" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ArrowUpRight">
          <path d={svgPaths.p4a58600} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0 w-full" data-name="Link">
      <Svg5 />
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0063ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Read Our Reviews</p>
      </div>
      <ArrowUpRight />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_18px_20px_rgba(28,41,88,0.12)] flex flex-col from-[#0063ff] gap-[24px] items-center p-[16px] relative rounded-[12px] shrink-0 to-[#001dd9] w-[302px]">
      <Frame53 />
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[25px] text-center text-white w-[173.22px]">
        <p className="leading-[normal]">Google Rating</p>
      </div>
      <Link />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[28px] relative shrink-0 w-[34px]" data-name="“">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 34 28" width="34">
          <path d={svgPaths.p2c269600} fill="#486284" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#122a5e] text-[16px] w-[min-content]">
        <p className="leading-[21.6px] mb-0">One of my best experiences buying a car in the UAE. Honestly, the</p>
        <p className="leading-[21.6px] mb-0">experience was excellent, and I</p>
        <p className="leading-[21.6px]">recommend them to anyone looking for a reliable, high-quality car under warranty. They provide all the details</p>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#811ea1] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile} />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile1} />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile2} />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile3} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[16px] text-center">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] whitespace-nowrap">
        <p className="leading-[normal]">Mohab Abuosbaa</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#ffb400] w-[71px]">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UserProfile />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[323px] items-start justify-between p-[16px] relative rounded-[12px] shrink-0 w-[302px]">
      <Frame19 />
      <Frame14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[28px] relative shrink-0 w-[34px]" data-name="“">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 34 28" width="34">
          <path d={svgPaths.p2c269600} fill="#486284" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#122a5e] text-[16px] w-[min-content]">
        <p className="leading-[21.6px]">My experience buying from Al Ghurair was absolutely fantastic, especially with Ziad, who was so cheerful and helpful. Anyone wanting to buy from Al Ghurair should go to Ziad. Everything is easy to deal with and he follows up on</p>
      </div>
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#811ea1] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile} />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile1} />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile2} />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[16px] text-center">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] whitespace-nowrap">
        <p className="leading-[normal]">Farhan Feroze</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#ffb400] w-[71px]">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UserProfile1 />
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[323px] items-start justify-between p-[16px] relative rounded-[12px] shrink-0 w-[302px]">
      <Frame18 />
      <Frame15 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[28px] relative shrink-0 w-[34px]" data-name="“">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 34 28" width="34">
          <path d={svgPaths.p2c269600} fill="#486284" fillOpacity="0.1" id="â" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#122a5e] text-[16px] w-[min-content]">
        <p className="leading-[21.6px]">I bought a 2024 Mazda CX-5 from AG Cars. It was truly my dream car. I had been searching for the right vehicle for a long time, and finally I found it at AG Cars. Mr. Dinesh helped me throughout the entire journey, from beginning to</p>
      </div>
    </div>
  );
}

function UserProfile2() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#811ea1] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile} />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgUserProfile1} />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[16px] text-center">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] whitespace-nowrap">
        <p className="leading-[normal]">Moawia Ahmed</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#ffb400] w-[71px]">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UserProfile2 />
      <Frame21 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[323px] items-start justify-between p-[16px] relative rounded-[12px] shrink-0 w-[302px]">
      <Frame20 />
      <Frame16 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame54 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 p-[80px] top-[5804px]">
      <Frame58 />
      <Frame73 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[545px]">
      <div className="flex flex-col font-['Obviously_Demo:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#0063ff] text-[32px] uppercase w-full">
        <p className="leading-[44px]">Shop by Brands</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#495479] text-[20px] w-full">
        <p className="leading-[normal]">Choose from a wide range of trusted car brands.</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[80px] top-[3674px] w-[1280px]">
      <Frame131 />
      <Component className="relative shrink-0 w-[1272px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-white whitespace-nowrap">
      <div className="flex flex-col font-['Obviously_Demo:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[32px] uppercase">
        <p className="leading-[normal]">Why Us?</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal]">A trusted car-buying experience, built around your peace of mind.</p>
      </div>
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="ShieldCheck">
      <svg className="absolute block inset-0 size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 64 64" width="64">
        <g id="ShieldCheck">
          <path d={svgPaths.p2f39fc40} fill="url(#paint0_linear_0_534)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_534" x1="8" x2="56" y1="35.0001" y2="35.0001">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-center text-white w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[normal]">Warranty Included</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">Drive with peace of mind</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[302px]">
      <ShieldCheck />
      <Frame63 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_10.07%_10.07%_4.17%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="49.555" preserveAspectRatio="none" viewBox="0 0 54.8862 49.555" width="54.8862">
        <g id="Group">
          <path d={svgPaths.p32e463f0} fill="url(#paint0_linear_0_523)" id="Vector" />
          <path d={svgPaths.p10a99c00} fill="url(#paint1_linear_0_523)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_523" x1="5.51953" x2="54.8862" y1="24.7775" y2="24.7775">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_523" x1="0" x2="38.6133" y1="21.335" y2="21.335">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[12.5%_10.07%_10.07%_4.17%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Frame64() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-center text-white w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[normal]">145-Point Inspection</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">Checked inside and out</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[302px]">
      <Frame />
      <Frame64 />
    </div>
  );
}

function Headset() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Headset">
      <svg className="absolute block inset-0 size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 64 64" width="64">
        <g id="Headset">
          <path d={svgPaths.p22f11880} fill="url(#paint0_linear_0_467)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_467" x1="6" x2="58.0002" y1="34.0004" y2="34.0004">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-center text-white w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[normal]">360 Support</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">{`We're here whenever you need us`}</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[302px]">
      <Headset />
      <Frame65 />
    </div>
  );
}

function Certificate() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Certificate">
      <svg className="absolute block inset-0 size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 64 64" width="64">
        <g id="Certificate">
          <path d={svgPaths.p290b0380} fill="url(#paint0_linear_0_465)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_465" x1="6" x2="61.9994" y1="34.009" y2="34.009">
            <stop stopColor="#00F090" />
            <stop offset="1" stopColor="#00FFDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-center text-white w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[normal]">Mileage Certified</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">Quality you can trust</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[302px]">
      <Certificate />
      <Frame66 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame59 />
      <Frame60 />
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#003] content-stretch flex flex-col gap-[40px] items-center left-1/2 p-[80px] top-[1759px] w-[1440px]">
      <Frame90 />
      <Frame67 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[611.129px]">
      <div className="flex flex-col font-['Obviously_Demo:Bold',sans-serif] h-[44px] justify-center not-italic relative shrink-0 text-[#0063ff] text-[32px] uppercase w-full">
        <p className="leading-[44px]">Best Sellers</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[30px] justify-center relative shrink-0 text-[#495479] text-[20px] w-full">
        <p className="leading-[normal]">Quickly browse popular car categories in your budget.</p>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowLeft">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ArrowLeft">
          <path d={svgPaths.p12a78bc0} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#e5efff] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[999px] shrink-0 size-[50px]" data-name="Link">
      <ArrowLeft />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ArrowRight">
          <path d={svgPaths.p24860100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#0063ff] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[999px] shrink-0 size-[50px]" data-name="Link">
      <ArrowRight />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50px] items-center justify-end relative shrink-0">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[80px] top-[958px] w-[1280px]">
      <Frame10 />
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Automatic</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">46,831 km</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">2000-2499 cc</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame40 />
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[16px] w-full">
        <p className="leading-[normal]">Exeed RX</p>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[18px] relative w-[21px]" data-name="Layer copy">
            <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 21 18" width="21">
              <path d={svgPaths.p1fc68680} fill="#122A5E" id="Layer copy" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">89,900</p>
      </div>
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.pf0f400} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame136 />
      <ArrowUpRight1 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start p-[16px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80px] top-[1088px] w-[411px]">
      <div className="h-[293px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
          <img alt="" className="absolute h-[100.17%] left-0 max-w-none top-[-0.17%] w-full" src={imgRectangle9} />
        </div>
      </div>
      <Frame47 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Automatic</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">1000-1499 cc</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[16px] w-full">
        <p className="leading-[normal]">Haval Jolion</p>
      </div>
      <Frame55 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[18px] relative w-[21px]" data-name="Layer copy">
            <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 21 18" width="21">
              <path d={svgPaths.p1fc68680} fill="#122A5E" id="Layer copy" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">89,900</p>
      </div>
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.pf0f400} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame137 />
      <ArrowUpRight2 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Frame69 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start p-[16px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <Frame51 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(33.33%+35px)] top-[1088px] w-[411px]">
      <div className="h-[293px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgRectangle10} />
      </div>
      <Frame50 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Automatic</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">10 km</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-[#e6f0ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">1500-1999 cc</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame76 />
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">GAC EMZOOM Standard</p>
      </div>
      <Frame75 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[183.5px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[18px] relative w-[21px]" data-name="Layer copy">
            <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 21 18" width="21">
              <path d={svgPaths.p1fc68680} fill="#122A5E" id="Layer copy" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">89,900</p>
      </div>
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.pf0f400} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame138 />
      <ArrowUpRight3 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame74 />
      <Frame79 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start p-[16px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_18px_20px_rgba(28,41,88,0.12)] flex flex-col items-start left-[calc(66.67%-10px)] top-[1088px] w-[411px]">
      <div className="h-[293px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgRectangle11} />
      </div>
      <Frame71 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[80px] top-[1581px]">
      <div className="absolute bg-[#e7eaef] h-[8px] left-[80px] rounded-[99px] top-[1581px] w-[1280px]" />
      <div className="absolute bg-[#00f090] h-[8px] left-[80px] rounded-[99px] top-[1581px] w-[320px]" />
    </div>
  );
}

function Frame81() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[80px] top-[112px] w-[935px] whitespace-nowrap">
      <div className="flex flex-col font-['Obviously_Demo:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#0063ff] text-[32px] uppercase">
        <p className="leading-[44px]">{`Featured Cars `}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#495479] text-[20px]">
        <p className="leading-[normal]">Handpicked deals with verified inspection.</p>
      </div>
    </div>
  );
}

function CarName() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">Corolla</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Toyota</p>
      </div>
    </div>
  );
}

function Price() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame141 />
      <Frame142 />
    </div>
  );
}

function ArrowUpRight4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight4 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame82 />
      <Frame91 />
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog1} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price />
      <Frame83 />
      <Heart />
    </div>
  );
}

function CarName1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">Everest</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Ford</p>
      </div>
    </div>
  );
}

function Price1() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame143() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame143 />
      <Frame144 />
    </div>
  );
}

function ArrowUpRight5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight5 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame85 />
      <Frame92 />
    </div>
  );
}

function Heart1() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog1() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog2} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName1 />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price1 />
      <Frame84 />
      <Heart1 />
    </div>
  );
}

function CarName2() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">7 Series</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">BMW</p>
      </div>
    </div>
  );
}

function Price2() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function ArrowUpRight6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight6 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame87 />
      <Frame93 />
    </div>
  );
}

function Heart2() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog2() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog2} />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog3} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName2 />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price2 />
      <Frame86 />
      <Heart2 />
    </div>
  );
}

function CarName3() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">3008</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Peugeot</p>
      </div>
    </div>
  );
}

function Price3() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame147 />
      <Frame148 />
    </div>
  );
}

function ArrowUpRight7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight7 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Heart3() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog3() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog4} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName3 />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price3 />
      <Frame88 />
      <Heart3 />
    </div>
  );
}

function CarName4() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">3 Series</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">BMW</p>
      </div>
    </div>
  );
}

function Price4() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame149() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame149 />
      <Frame150 />
    </div>
  );
}

function ArrowUpRight8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight8 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Heart4() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog4() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog5} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName4 />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price4 />
      <Frame96 />
      <Heart4 />
    </div>
  );
}

function CarName5() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">Q7</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Audi</p>
      </div>
    </div>
  );
}

function Price5() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame151() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function ArrowUpRight9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight9 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame100 />
      <Frame101 />
    </div>
  );
}

function Heart5() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog5() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog6} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName5 />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price5 />
      <Frame99 />
      <Heart5 />
    </div>
  );
}

function CarName6() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">Accord</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Honda</p>
      </div>
    </div>
  );
}

function Price6() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame153 />
      <Frame154 />
    </div>
  );
}

function ArrowUpRight10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight10 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame103 />
      <Frame104 />
    </div>
  );
}

function Heart6() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog6() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog7} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName6 />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price6 />
      <Frame102 />
      <Heart6 />
    </div>
  );
}

function CarName7() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[16px] top-[16px]" data-name="Car Name">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#122a5e] text-[16px] tracking-[-0.48px] w-[218px]">
        <p className="leading-[1.5]">Palisade</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6d7694] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Hyundai</p>
      </div>
    </div>
  );
}

function Price7() {
  return <div className="absolute h-[19px] left-[24px] top-[342.59px] w-[132px]" data-name="price" />;
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#6d7694] whitespace-nowrap">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[14px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">3,452</p>
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Newaed:mini',sans-serif] justify-center not-italic relative shrink-0 text-[#122a5e] text-[20px] w-[20px]">
        <p className="leading-[normal]">D</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c2958] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[24px]">172</span>
          <span className="leading-[normal] text-[12px]">/ month</span>
        </p>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <Frame155 />
      <Frame156 />
    </div>
  );
}

function ArrowUpRight11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpRight11 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] w-[270px]">
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Heart7() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[16px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Catalog7() {
  return (
    <div className="h-[388px] overflow-clip relative rounded-[12px] shrink-0 w-[302px]" data-name="Catalog 1">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgCatalog8} />
      </div>
      <div className="absolute inset-[21.13%_19.08%_22.16%_19.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
      </div>
      <CarName7 />
      <div className="absolute h-[100px] left-[40px] top-[122px] w-[224px]" data-name="Car" />
      <Price7 />
      <Frame105 />
      <Heart7 />
    </div>
  );
}

function Cars() {
  return (
    <div className="-translate-x-1/2 absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] left-1/2 top-[357px] w-[1280px]" data-name="Cars">
      <div className="col-1 h-[388px] relative row-1 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog />
        </div>
      </div>
      <div className="col-2 h-[388px] relative row-1 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog1 />
        </div>
      </div>
      <div className="col-3 h-[388px] relative row-1 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog2 />
        </div>
      </div>
      <div className="col-4 h-[388px] relative row-1 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog3 />
        </div>
      </div>
      <div className="col-1 h-[388px] relative row-2 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog4 />
        </div>
      </div>
      <div className="col-2 h-[388px] relative row-2 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog5 />
        </div>
      </div>
      <div className="col-3 h-[388px] relative row-2 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog6 />
        </div>
      </div>
      <div className="col-4 h-[388px] relative row-2 shrink-0 w-[302px]" data-name="Catalogue Car">
        <div className="content-stretch flex items-start relative size-full">
          <Catalog7 />
        </div>
      </div>
    </div>
  );
}

function ArrowUpRight12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ArrowUpRight">
          <path d={svgPaths.p4a58600} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Explore All</p>
      </div>
      <ArrowUpRight12 />
    </div>
  );
}

function Link3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#00f090] bottom-[117px] content-stretch flex flex-col h-[50px] items-start justify-center left-[calc(50%+0.5px)] px-[24px] py-[12px] rounded-[999px]" data-name="Link">
      <Frame9 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="bg-[#122a5e] content-stretch drop-shadow-[0px_0px_2px_rgba(28,41,88,0.12)] flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0 w-[107px]">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">Popular</p>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] opacity-60 relative shrink-0 text-[#122a5e] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">SUV</p>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-60 relative shrink-0 text-[#122a5e] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">Sedan</p>
      </div>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-60 relative shrink-0 text-[#122a5e] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">New Arrivals</p>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame158 />
      <Frame159 />
      <Frame160 />
      <Frame161 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="absolute border border-[#122a5e] border-solid content-stretch flex flex-col items-start left-[80px] p-[4px] rounded-[99px] top-[275px] w-[433px]">
      <Frame162 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[80px] top-[112px]">
      <Frame81 />
      <Cars />
      <Link3 />
      <Frame163 />
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f4f4f4] h-[1348px] left-1/2 overflow-clip top-[calc(50%-510px)] w-[1440px]" data-name="Content">
      <div className="absolute h-[804px] left-[737px] top-[-547.97px] w-[682px]" data-name="Vector">
        <div className="absolute inset-[-1%_-1.17%]">
          <img alt="" className="block max-w-none size-full" height="820.001" src={imgVector} width="698" />
        </div>
      </div>
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-[2246px]">
      <Content />
      <CursorsGeneral className="absolute drop-shadow-[0px_1px_0.9px_rgba(0,0,0,0.65)] left-[calc(50%+62px)] overflow-clip size-[24px] top-[3465px]" />
    </div>
  );
}

function ArrowUpRight13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ArrowUpRight">
          <path d={svgPaths.p4a58600} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0063ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Explore All</p>
      </div>
      <ArrowUpRight13 />
    </div>
  );
}

function Link4() {
  return (
    <div className="-translate-x-1/2 absolute border border-[#0063ff] border-solid content-stretch flex flex-col items-start justify-center left-[calc(50%+0.5px)] px-[24px] py-[12px] rounded-[999px] top-[1629px]" data-name="Link">
      <Frame11 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] text-[20px] w-full">
        <p className="leading-[normal] mb-0">Used Car Test Drive Checklist:</p>
        <p className="leading-[normal]">What to Inspect Before Making a P...</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#486284] text-[14px] w-full">
        <p className="leading-[normal]">2 min read</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[80px] rounded-[18px] top-[4912px] w-[411px]">
      <div className="h-[298px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgRectangle12} />
        </div>
      </div>
      <Frame110 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-[76px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] text-[20px] w-full">
        <p className="leading-[normal]">How to check a car history report in the UAE</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#486284] text-[14px] w-full">
        <p className="leading-[normal]">2 min read</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[80px] rounded-[18px] top-[5326px] w-[411px]">
      <div className="h-[298px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-full left-[-24.98%] max-w-none top-0 w-[149.95%]" src={imgRectangle13} />
          </div>
        </div>
      </div>
      <Frame114 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-[76px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] text-[20px] w-full">
        <p className="leading-[normal]">Financing basics: down payment and tenure</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#486284] text-[14px] w-full">
        <p className="leading-[normal]">2 min read</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[calc(66.67%-10px)] rounded-[18px] top-[5326px] w-[412px]">
      <div className="h-[298px] relative rounded-[12px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle15} />
      </div>
      <Frame117 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-[76px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] text-[20px] w-full">
        <p className="leading-[normal]">Financing basics: down payment and tenure</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#486284] text-[14px] w-full">
        <p className="leading-[normal]">2 min read</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[calc(66.67%-11px)] rounded-[18px] top-[4912px] w-[411px]">
      <div className="h-[298px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-full left-[-79.29%] max-w-none top-0 w-[258.59%]" src={imgRectangle16} />
          </div>
        </div>
      </div>
      <Frame119 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Obviously_Demo:Bold',sans-serif] h-[48px] justify-center not-italic relative shrink-0 text-[#0063ff] text-[32px] uppercase w-[411px]">
        <p className="leading-[44px]">{`Car Tips & Guides`}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#495479] text-[20px] w-[min-content]">
        <p className="leading-[normal]">Tips and insights to help you make confident car decisions.</p>
      </div>
    </div>
  );
}

function ArrowUpRight14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ArrowUpRight">
          <path d={svgPaths.p4a58600} fill="#0063FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0063ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[18px]">View All</p>
      </div>
      <ArrowUpRight14 />
    </div>
  );
}

function Link5() {
  return (
    <div className="border border-[#0063ff] border-solid content-stretch flex flex-col items-start justify-center px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Link">
      <Frame12 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
      <Frame122 />
      <Link5 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[390px] items-center justify-center left-1/2 rounded-[12px] top-[4912px] w-[410px]">
      <Frame121 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-[76px] items-start leading-[0] relative shrink-0 w-[411px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#122a5e] text-[20px] w-full">
        <p className="leading-[normal]">Signs a used car has been well maintained</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#486284] text-[14px] w-full">
        <p className="leading-[normal]">2 min read</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_18px_20px_rgba(28,41,88,0.12)] flex flex-col gap-[16px] items-start left-[calc(33.33%+27px)] p-[8px] rounded-[12px] top-[5318px]">
      <div className="h-[298px] relative rounded-[12px] shrink-0 w-[411px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle14} />
      </div>
      <Frame124 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[80px] top-[4912px]">
      <Frame108 />
      <Frame113 />
      <Frame116 />
      <Frame118 />
      <Frame120 />
      <Frame123 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[word-break:break-word] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Obviously_Demo:Bold',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 text-[#0063ff] text-[32px] uppercase whitespace-nowrap">
        <p className="leading-[44px]">Sell your car in 3 steps</p>
      </div>
      <div className="col-1 flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center ml-0 mt-[60px] relative row-1 text-[#495479] text-[20px] w-[578px]">
        <p className="leading-[normal] mb-0">Get an instant valuation, then book an inspection.</p>
        <p className="leading-[normal]">Fast, transparent, verified.</p>
      </div>
    </div>
  );
}

function Steps() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[23px]" data-name="Steps">
      <div className="bg-[#00f090] h-[4px] relative rounded-[99px] shrink-0 w-[188px]" />
      <div className="bg-[#e7eaef] h-[4px] relative rounded-[99px] shrink-0 w-[188px]" />
      <div className="bg-[#e7eaef] h-[4px] relative rounded-[99px] shrink-0 w-[188px]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[8px] items-center leading-[1.1] left-[392px] text-[#6d7694] text-[14px] top-0 uppercase whitespace-nowrap" data-name="03">
      <p className="relative shrink-0">03</p>
      <p className="relative shrink-0">Book inspection</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[8px] items-center leading-[1.1] left-0 text-[14px] top-0 uppercase whitespace-nowrap" data-name="01">
      <p className="relative shrink-0 text-[#1c2958]">01</p>
      <p className="relative shrink-0 text-[#122a5e]">Enter car details</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[6px] items-center leading-[1.1] left-[196px] text-[#6d7694] text-[14px] top-0 uppercase whitespace-nowrap" data-name="02">
      <p className="relative shrink-0">02</p>
      <p className="relative shrink-0">Get your valuation</p>
    </div>
  );
}

function Component3Steps() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-[580px]" data-name="3 steps">
      <Steps />
      <Component3 />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex h-[48px] items-center pl-[16px] pr-[359px] py-[18px] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d7694] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Plate / VIN</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] w-full">
        <p className="leading-[normal]">Plate / VIN</p>
      </div>
      <Frame28 />
    </div>
  );
}

function CaretDown4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretDown">
          <path d={svgPaths.p2ae2b580} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex h-[48px] items-center justify-between p-[16px] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d7694] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Select Make</p>
      </div>
      <CaretDown4 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] w-full">
        <p className="leading-[normal]">Make</p>
      </div>
      <Frame31 />
    </div>
  );
}

function CaretDown5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretDown">
          <path d={svgPaths.p2ae2b580} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex h-[48px] items-center justify-between p-[16px] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d7694] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Select Mileage</p>
      </div>
      <CaretDown5 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] w-full">
        <p className="leading-[normal]">Mileage</p>
      </div>
      <Frame33 />
    </div>
  );
}

function CaretDown6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretDown">
          <path d={svgPaths.p2ae2b580} fill="#122A5E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex h-[48px] items-center justify-between p-[16px] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d7694] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Year</p>
      </div>
      <CaretDown6 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[14px] w-full">
        <p className="leading-[normal]">Year</p>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame30 />
      <Frame32 />
      <Frame35 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col h-[50px] items-start justify-center px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0063ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Back</p>
      </div>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ArrowRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ArrowRight">
          <path d={svgPaths.p24860100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[26px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">Continue (1/3)</p>
      </div>
      <ArrowRight1 />
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#0063ff] content-stretch flex flex-col h-[50px] items-start px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Link">
      <Frame17 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link6 />
      <Link7 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[27px] justify-center leading-[0] relative shrink-0 text-[#122a5e] text-[16px] w-[185px]">
        <p className="leading-[26.4px]">How to Trade-in Works?</p>
      </div>
      <Frame128 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <Frame29 />
      <Frame127 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="-translate-y-1/2 absolute backdrop-blur-[12px] bg-white border border-solid border-white content-stretch drop-shadow-[0px_30px_30px_rgba(28,41,88,0.08)] flex flex-col gap-[40px] items-start left-[80px] p-[24px] rounded-[24px] top-1/2 w-[628px]">
      <Group2 />
      <Component3Steps />
      <Frame126 />
    </div>
  );
}

function Car() {
  return (
    <div className="absolute contents left-[593px] top-[115px]" data-name="car">
      <div className="absolute h-[619px] left-[850px] top-[115px] w-[522px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="619" preserveAspectRatio="none" viewBox="0 0 522 619" width="522">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_0_432">
              <path d={svgPaths.p11a7d0e0} />
            </mask>
            <path d={svgPaths.p6570300} fill="#00ED99" mask="url(#path-1-inside-1_0_432)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[639px] left-[593px] mix-blend-multiply top-[200px] w-[906px]" data-name="modern-blue-family-car-front-view 2">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgModernBlueFamilyCarFrontView2} />
      </div>
      <div className="absolute h-[619px] left-[850px] top-[115px] w-[522px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="619" preserveAspectRatio="none" viewBox="0 0 522 619" width="522">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_0_469">
              <path d={svgPaths.p11a7d0e0} />
            </mask>
            <path d={svgPaths.p6570300} fill="#00ED99" fillOpacity="0.6" mask="url(#path-1-inside-1_0_469)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[554px] left-[732px] top-[200px] w-[648px]" data-name="modern-blue-family-car-front-view 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.73%] left-[-30.93%] max-w-none top-[-25%] w-[161.7%]" src={imgModernBlueFamilyCarFrontView3} />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[593px] top-[115px]">
      <Car />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[853px] left-px right-px top-[3979px]" data-name="Section">
      <Frame125 />
      <Group7 />
    </div>
  );
}

function WhatsappButtonSvg() {
  return (
    <div className="absolute bottom-[40px] overflow-clip right-[24px] size-[40px]" data-name="whatsapp-button.svg">
      <div className="absolute inset-[-42.5%_-87.5%_-132.5%_-87.5%]">
        <svg className="block size-full" fill="none" height="110" preserveAspectRatio="none" viewBox="0 0 110 110" width="110">
          <g filter="url(#filter0_d_0_516)" id="whatsapp-button.svg">
            <g clipPath="url(#clip0_0_516)">
              <path d={svgPaths.p125eee00} fill="#60D669" id="Vector" />
              <path d={svgPaths.p1f2dae00} fill="url(#paint0_linear_0_516)" id="Vector_2" />
              <path d={svgPaths.p10718a80} fill="url(#paint1_linear_0_516)" id="Vector_3" />
              <path d={svgPaths.p2ae80f80} fill="url(#paint2_linear_0_516)" id="Vector_4" />
              <path d={svgPaths.p3340100} fill="white" id="Vector_5" />
              <path d={svgPaths.p189c4c00} fill="#FF0004" id="Vector_6" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="110" id="filter0_d_0_516" width="110" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="18" />
              <feGaussianBlur stdDeviation="17.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.160784 0 0 0 0 0.345098 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_516" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_516" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_516" x1="1191.25" x2="1191.25" y1="2226.98" y2="25.895">
              <stop stopColor="#1FAF38" />
              <stop offset="1" stopColor="#60D669" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_516" x1="1191.25" x2="1191.25" y1="2226.98" y2="25.895">
              <stop stopColor="#1FAF38" />
              <stop offset="1" stopColor="#60D669" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_516" x1="1232.01" x2="1232.01" y1="2305.52" y2="25.5">
              <stop stopColor="#F9F9F9" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="clip0_0_516">
              <rect fill="white" height="40" transform="translate(35 17)" width="40" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[115px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 115 32" width="115">
        <g clipPath="url(#clip0_0_410)" id="CaredLogo.svg">
          <g filter="url(#filter0_d_0_410)" id="Vector">
            <path d={svgPaths.p30c8d740} fill="white" />
          </g>
          <g filter="url(#filter1_d_0_410)" id="Vector_2">
            <path d={svgPaths.p28d0300} fill="white" />
          </g>
          <g filter="url(#filter2_d_0_410)" id="Vector_3">
            <path d={svgPaths.p33c99600} fill="white" />
          </g>
          <g filter="url(#filter3_d_0_410)" id="Vector_4">
            <path d={svgPaths.p2b3d0ff0} fill="white" />
          </g>
          <g filter="url(#filter4_d_0_410)" id="Vector_5">
            <path d={svgPaths.p16af3c00} fill="white" />
          </g>
          <g filter="url(#filter5_d_0_410)" id="Vector_6">
            <path d={svgPaths.p33cfc900} fill="#00ED99" />
          </g>
          <g filter="url(#filter6_d_0_410)" id="Vector_7">
            <path d={svgPaths.p7ef7a00} fill="#0061FF" />
          </g>
          <g filter="url(#filter7_d_0_410)" id="Vector_8">
            <path d={svgPaths.p35cf8980} fill="white" />
          </g>
          <g filter="url(#filter8_d_0_410)" id="Vector_9">
            <path d={svgPaths.p3b99bd00} fill="white" />
          </g>
          <g filter="url(#filter9_d_0_410)" id="Vector_10">
            <path d={svgPaths.p5e82f80} fill="white" />
          </g>
          <g filter="url(#filter10_d_0_410)" id="Vector_11">
            <path d={svgPaths.p9912800} fill="white" />
          </g>
          <g filter="url(#filter11_d_0_410)" id="Vector_12">
            <path d={svgPaths.p2eef8680} fill="white" />
          </g>
          <g filter="url(#filter12_d_0_410)" id="Vector_13">
            <path d={svgPaths.p2f378900} fill="white" />
          </g>
          <g filter="url(#filter13_d_0_410)" id="Vector_14">
            <path d={svgPaths.p30f6c100} fill="white" />
          </g>
          <g filter="url(#filter14_d_0_410)" id="Vector_15">
            <path d={svgPaths.p20729c80} fill="white" />
          </g>
          <g filter="url(#filter15_d_0_410)" id="Vector_16">
            <path d={svgPaths.p11d22c00} fill="white" />
          </g>
          <g filter="url(#filter16_d_0_410)" id="Vector_17">
            <path d={svgPaths.p1cf46c80} fill="white" />
          </g>
          <g filter="url(#filter17_d_0_410)" id="Vector_18">
            <path d={svgPaths.p203ec080} fill="white" />
          </g>
          <g filter="url(#filter18_d_0_410)" id="Vector_19">
            <path d={svgPaths.p9eb4d00} fill="white" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.7872" id="filter0_d_0_410" width="24.0292" x="15.2265" y="5.82078">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.7764" id="filter1_d_0_410" width="15.7409" x="33.204" y="5.83078">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.8978" id="filter2_d_0_410" width="24.0283" x="59.3037" y="0.862999">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.3113" id="filter3_d_0_410" width="24.4484" x="41.6105" y="5.44826">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.4926" id="filter4_d_0_410" width="26.7577" x="-4" y="1.34053">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.617" id="filter5_d_0_410" width="29.1205" x="89.8799" y="0.00295485">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.617" id="filter6_d_0_410" width="29.1205" x="78.6043" y="0.00295485">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.5965" id="filter7_d_0_410" width="12.0031" x="15.6787" y="25.4047">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.8701" id="filter8_d_0_410" width="12.0375" x="20.3574" y="27.1149">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9618" id="filter9_d_0_410" width="12.1601" x="24.9033" y="27.0123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.0284" id="filter10_d_0_410" width="10.6464" x="29.1777" y="25.9223">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.6986" id="filter11_d_0_410" width="13.9632" x="33.8027" y="25.2922">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9695" id="filter12_d_0_410" width="12.5508" x="40.1436" y="27.0074">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9695" id="filter13_d_0_410" width="12.5508" x="45.0293" y="27.0074">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.5598" id="filter14_d_0_410" width="12.3607" x="49.918" y="25.4047">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.6972" id="filter15_d_0_410" width="13.8094" x="56.5362" y="25.2898">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9369" id="filter16_d_0_410" width="12.3568" x="62.6854" y="27.0223">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.8059" id="filter17_d_0_410" width="10.8205" x="67.7764" y="27.0674">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9618" id="filter18_d_0_410" width="12.1602" x="70.7061" y="27.0123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_410" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_410" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_0_410">
            <rect fill="white" height="32" width="115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlGhurairLogotypeEnglish1() {
  return (
    <div className="absolute inset-[32.69%_38.3%_40.15%_0]" data-name="AlGhurair Logotype English">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6324" preserveAspectRatio="none" viewBox="0 0 64.5662 10.6324" width="64.5662">
        <g id="AlGhurair Logotype English">
          <path d={svgPaths.p114b4340} fill="white" id="Vector" />
          <g id="i">
            <path d={svgPaths.p26be9400} fill="white" id="Vector_2" />
            <path d={svgPaths.p1d463100} fill="white" id="Vector_3" />
          </g>
          <path d={svgPaths.p27708f00} fill="white" id="a" />
          <path d={svgPaths.p2701cef0} fill="white" id="Vector_4" />
          <path d={svgPaths.p368659c0} fill="white" id="u" />
          <path d={svgPaths.peb41f0} fill="white" id="h" />
          <path d={svgPaths.p1186d040} fill="white" id="G" />
          <path d={svgPaths.p156baa80} fill="white" id="l" />
          <path d={svgPaths.p10d68e00} fill="white" id="A" />
        </g>
      </svg>
    </div>
  );
}

function AlGhurairSymbol1() {
  return (
    <div className="absolute inset-[0_0_0_65.56%]" data-name="AlGhurair Symbol">
      <svg className="absolute block inset-0 size-full" fill="none" height="39.154" preserveAspectRatio="none" viewBox="0 0 36.0382 39.154" width="36.0382">
        <g id="AlGhurair Symbol">
          <path d={svgPaths.p5abaf80} fill="white" id="Vector" />
          <path d={svgPaths.p1e1ba000} fill="#DE0090" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AlGhurairLogoEnglish1() {
  return (
    <div className="absolute contents inset-0" data-name="Al Ghurair Logo English">
      <AlGhurairLogotypeEnglish1 />
      <AlGhurairSymbol1 />
    </div>
  );
}

function AlGhurairLogo3() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Al Ghurair Logo">
      <AlGhurairLogoEnglish1 />
    </div>
  );
}

function AlGhurairLogo2() {
  return (
    <div className="absolute inset-[0.47%_0.69%_1.65%_14.92%] overflow-clip" data-name="Al Ghurair Logo">
      <AlGhurairLogo3 />
    </div>
  );
}

function LogoAlGhurairSvg1() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[124px]" data-name="logo-al-ghurair.svg">
      <div className="absolute inset-[40.09%_88.17%_34.38%_5.93%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.2135" preserveAspectRatio="none" viewBox="0 0 7.32559 10.2135" width="7.32559">
          <path d={svgPaths.p38730500} fill="white" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.7%_94.33%_40.84%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.5828" preserveAspectRatio="none" viewBox="0 0 7.03591 10.5828" width="7.03591">
          <path d={svgPaths.p355e100} fill="white" id="Vector" />
        </svg>
      </div>
      <AlGhurairLogo2 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-center relative shrink-0">
      <Logo1 />
      <LogoAlGhurairSvg1 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="User">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="User">
          <path d={svgPaths.p1d1a2680} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heart8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Heart">
          <path d={svgPaths.p3f465200} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AccountShortcuts() {
  return (
    <div className="content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.12)] flex gap-[8px] items-center justify-center relative shrink-0" data-name="Account shortcuts">
      <User />
      <div className="bg-[rgba(255,255,255,0.2)] h-[24px] relative shrink-0 w-px" data-name="Vertical Divider" />
      <Heart8 />
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Globe">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Globe">
          <path d={svgPaths.pfb01800} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] border border-solid border-white content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[99px] shrink-0">
      <Globe />
      <div className="[word-break:break-word] flex flex-col font-['Forma_DJR_Micro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[21px]">
        <p className="leading-[18px]" dir="rtl">
          EN
        </p>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Phone">
          <path d={svgPaths.p2740b080} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[#0063ff] border border-[#0063ff] border-solid content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[99px] shrink-0" data-name="Link">
      <Phone />
      <div className="[word-break:break-word] flex flex-col font-['Forma_DJR_Micro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">Call Us</p>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame129 />
      <Link8 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <AccountShortcuts />
      <Frame157 />
    </div>
  );
}

function NavPrimary() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.12)] flex items-center left-1/2 top-[calc(50%+0.5px)]" data-name="Nav - Primary">
      <div className="h-[37px] relative rounded-[99px] shrink-0" data-name="Menu">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Forma_DJR_Micro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Buy</p>
            </div>
            <div className="bg-[#00f090] h-[2px] opacity-0 relative shrink-0 w-px" />
          </div>
        </div>
      </div>
      <div className="h-[37px] relative rounded-[99px] shrink-0" data-name="Menu">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Forma_DJR_Micro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Sell</p>
            </div>
            <div className="bg-[#00f090] h-[2px] opacity-0 relative shrink-0 w-px" />
          </div>
        </div>
      </div>
      <div className="h-[37px] relative rounded-[99px] shrink-0" data-name="Menu">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Forma_DJR_Micro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Finance</p>
            </div>
            <div className="bg-[#00f090] h-[2px] opacity-0 relative shrink-0 w-px" />
          </div>
        </div>
      </div>
      <Menu className="h-[37px] relative rounded-[99px] shrink-0" property1={false} text="Offers" />
      <div className="h-[37px] relative rounded-[99px] shrink-0" data-name="Menu">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Forma_DJR_Micro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">About Us</p>
            </div>
            <div className="bg-[#00f090] h-[2px] opacity-0 relative shrink-0 w-px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component00HomeV() {
  return (
    <div className="bg-white relative size-full" data-name="00-Home_v3.4">
      <div className="absolute h-[648px] left-[calc(66.67%+15px)] top-[435px] w-[547px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="648" preserveAspectRatio="none" viewBox="0 0 547 648" width="547">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_0_472">
              <path d={svgPaths.p29b56b80} />
            </mask>
            <path d={svgPaths.p3679670} fill="#00ED99" fillOpacity="0.2" mask="url(#path-1-inside-1_0_472)" />
          </g>
        </svg>
      </div>
      <Hero />
      <Footer />
      <Frame109 />
      <Frame80 />
      <Frame68 />
      <Frame38 />
      <Frame48 />
      <Frame49 />
      <Frame70 />
      <Group3 />
      <Group4 />
      <Link4 />
      <Group6 />
      <div className="absolute bg-gradient-to-l from-[rgba(255,255,255,0)] h-[382px] left-0 to-white top-[3594px] w-[80px]" />
      <div className="absolute flex h-[382px] items-center justify-center right-0 top-[3594px] w-[80px]">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-l from-[rgba(255,255,255,0)] h-[382px] relative to-white w-[80px]" />
        </div>
      </div>
      <Section />
      <CursorsGeneral className="absolute drop-shadow-[0px_1px_0.9px_rgba(0,0,0,0.65)] left-[calc(58.33%+20px)] overflow-clip size-[24px] top-[5681px]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[0px] bg-[rgba(255,255,255,0.01)] h-[106px] left-1/2 top-0 w-[1440px]" />
      <WhatsappButtonSvg />
      <div className="-translate-x-1/2 absolute backdrop-blur-[0px] bg-[#003] left-1/2 rounded-[999px] top-[24px] w-[1280px]" data-name="header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
            <Frame133 />
            <Frame37 />
            <NavPrimary />
          </div>
        </div>
      </div>
    </div>
  );
}