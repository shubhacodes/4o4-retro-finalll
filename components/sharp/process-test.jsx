"use client";
import React, {
  useState,
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

// ProcessFrame component for sharp edges
export const ProcessFrame = ({ children }) => (
  <div style={{ position: "relative", width: "100%", minHeight: "400px" }}>
    {/* Shadow */}
    <div
      style={{
        position: "absolute",
        top: "8px",
        left: "8px",
        right: "0",
        bottom: "0",
        backgroundColor: "black",
      }}
    />
    {/* Main frame */}
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "400px",
        backgroundColor: "white",
        border: "3px solid black",
      }}
    >
      {children}
    </div>
  </div>
);

// Card component for GSAP animation
export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  onActiveCardChange,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    // Initial active card
    if (onActiveCardChange) {
      onActiveCardChange(order.current[0] + 1);
    }

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
        // Notify parent of new active card
        if (onActiveCardChange) {
          onActiveCardChange(order.current[0] + 1);
        }
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardDistance,
    verticalDistance,
    delay,
    pauseOnHover,
    skewAmount,
    easing,
    onActiveCardChange,
  ]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
        })
      : child
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

// Sharp Process Section - Angular edges and precise animations
export default function ProcessTest() {
  const [activeCard, setActiveCard] = useState(1);

  const tabData = [
    {
      id: 1,
      title: "Kickoff & Coffee Chats",
      content:
        "We get to know you - your brand, your goals, your vibe (and maybe your favorite snacks). This is where ideas start flying and the creative wheels start turning.",
    },
    {
      id: 2,
      title: "Strategy & Sketching",
      content:
        "We map out a plan and start bringing ideas to life with rough sketches and concepts. No idea is too wild at this stage.",
    },
    {
      id: 3,
      title: "Design & Development",
      content:
        "This is where the magic happens. We translate the approved concepts into pixel-perfect designs and functional code.",
    },
  ];

  const currentTabData = tabData.find((tab) => tab.id === activeCard);

  return (
    <section className="w-full bg-[#F7F4E9]">
      <div className="mx-auto max-w-[1150px] px-8 py-8">
        <div className="flex flex-col items-center justify-center">
          {/* Header */}
          <h1 className="font-bold mb-12 text-center text-7xl font-oswald text-black leading-tight">
            Our not-so <br /> secret sauce
            <span className="block text-2xl font-normal mt-2 opacity-60">
              (Sharp Version)
            </span>
          </h1>

          {/* Main Container - Sharp edges */}
          <div className="relative w-full">
            {/* Shadow layer */}
            <div className="absolute bg-black w-full h-[500px] transform translate-x-[12px] translate-y-[12px]" />

            {/* Main content area */}
            <div className="relative bg-white border-[3px] border-black w-full h-[500px] p-10">
              <div className="h-full flex flex-col justify-center">
                {/* Content Area - Full Height */}
                <div className="flex flex-1 relative items-center">
                  {/* Left: Dynamic Text Content */}
                  <div className="w-1/2 pr-8">
                    <h3 className="font-bold mb-4 text-4xl font-oswald text-black">
                      {currentTabData.title}
                    </h3>
                    <p className="text-[22px] leading-relaxed text-black">
                      {currentTabData.content}
                    </p>
                  </div>

                  {/* Right: Sharp Card Swap Animation */}
                  <div
                    className="w-1/2 relative flex items-center justify-center"
                    style={{ height: "400px", position: "relative" }}
                  >
                    <CardSwap
                      width={300}
                      height={240}
                      cardDistance={40}
                      verticalDistance={35}
                      delay={4000}
                      pauseOnHover={false}
                      easing="elastic"
                      skewAmount={3}
                      onActiveCardChange={setActiveCard}
                    >
                      <Card>
                        <div className="h-full flex items-center justify-center relative">
                          {/* Shadow */}
                          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1" />
                          {/* Main card */}
                          <div
                            className="relative w-full h-full flex items-center justify-center border-2 border-black"
                            style={{ backgroundColor: "#DE6A48" }}
                          >
                            <span className="text-8xl font-bold font-oswald text-black drop-shadow-lg">
                              1
                            </span>
                          </div>
                        </div>
                      </Card>
                      <Card>
                        <div className="h-full flex items-center justify-center relative">
                          {/* Shadow */}
                          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1" />
                          {/* Main card */}
                          <div
                            className="relative w-full h-full flex items-center justify-center border-2 border-black"
                            style={{ backgroundColor: "#DE6A48" }}
                          >
                            <span className="text-8xl font-bold font-oswald text-black drop-shadow-lg">
                              2
                            </span>
                          </div>
                        </div>
                      </Card>
                      <Card>
                        <div className="h-full flex items-center justify-center relative">
                          {/* Shadow */}
                          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1" />
                          {/* Main card */}
                          <div
                            className="relative w-full h-full flex items-center justify-center border-2 border-black"
                            style={{ backgroundColor: "#DE6A48" }}
                          >
                            <span className="text-8xl font-bold font-oswald text-black drop-shadow-lg">
                              3
                            </span>
                          </div>
                        </div>
                      </Card>
                    </CardSwap>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
