"use client";
import { useState } from "react";
import {
  Folder,
  Plus,
  Minus,
  CirclePlus,
  FileText,
  UserPlus,
} from "lucide-react";

// Sharp-edged About Us Panel - clean mustard and black design
const AboutUsPanelSharp = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    "About Us": true,
    "Our History": true,
    "Work Stuff": true,
  });
  const [currentPath, setCurrentPath] = useState("About us → #the404");
  const [selectedItem, setSelectedItem] = useState("#the404");

  const content = {
    "#the404": `At 4o4, we weren't built — we were found.
We didn't launch with a plan. We landed with a feeling.
We crawled out from the corners of abandoned artboards,
emerged from corrupted files, mismatched typefaces, and
the late-night crashes that everyone else gave up on.
We found beauty in the halfway, in the not-quite-right,
in the tension between what should've worked and what did despite the odds.
We're not here to polish pixels; we're here to spark reactions.
To challenge the grid, remix the rules, and make your brand
feel like a surprise.`,
    "#philosophy": `We believe in the beautiful mess.

The happy accident that becomes the hero element.
The "mistake" that makes everything click.
The detour that leads to the destination you didn't know you needed.

We don't follow trends — we set them on fire and dance around the flames.
We don't create "safe" brands — we birth rebellions disguised as logos.
We don't do "industry standard" — we do "industry shocked."

Our philosophy? If it doesn't make at least one person go "wait, what?" then we're not done yet.
Because comfortable brands are forgettable brands.
And forgettable is the only real failure.`,
    "#behindthename": `4o4: The error that became an identity.

We started as a mistake — a broken link, a missing page, a digital dead end.
But instead of fixing it, we lived in it.
We made it home.

4o4 isn't just our name; it's our origin story.
The moment when "page not found" became "purpose definitely found."
When the glitch became the feature.
When the bug became the brand.

We kept the name because it reminds us daily:
Sometimes the best discoveries happen when you're completely lost.
Sometimes the wrong turn is the right direction.
Sometimes the error IS the answer.

404: Not found.
4o4: Finally found.`,
    "#founding": `Once upon a time, in a cramped apartment that smelled like instant ramen and broken dreams...

Three designers sat staring at their screens at 3 AM, wondering why every brief sounded the same:
"Make it pop, but not too much."
"We want something unique, like everyone else has."
"Can you make the logo bigger? And smaller? At the same time?"

That night, surrounded by energy drink cans and existential dread, we made a pact:
"What if we just... didn't?"

What if we didn't make boring brands?
What if we didn't say yes to soul-crushing briefs?
What if we didn't pretend that "elevated" and "luxury" meant the same thing?

So we founded 4o4 on a simple principle:
Be the agency we wish existed when we were drowning in beige.

Spoiler alert: It worked.
(Sort of. We still smell like ramen sometimes.)`,
    "#milestones": `2019: Founded in Sarah's living room. Her cat became our first (unpaid) creative director.

2020: Survived the year everyone learned what "pivot" meant. We already lived there.

2021: First client said "I've never seen anything like this." We weren't sure if it was a compliment. Turned out it was.

2022: Won our first design award. Immediately used it as a very expensive paperweight.

2023: Moved to an actual office. The cat was devastated. We were too, honestly.

2024: Accidentally became the agency people call when they want to "shake things up." No complaints here.

Current day: Still making brands that make people do double-takes.
Still refusing to use the word "synergy" in proposals.
Still proud of our beautiful mistakes.

Next milestone: World domination.
(Or at least getting featured in that one design blog we all pretend not to read.)`,

    "#caffeinethoughts": `Coffee cup status: Lost count after #6
Eye twitch frequency: Every 3.2 seconds

EVERYTHING IS A TYPEFACE:
- That crack in the sidewalk? Custom serif
- My cat's whiskers? Modern sans-serif family
- The way this lamp casts shadows? Definitely a display font
- The client's handwriting? A crime against typography

Current thoughts: "What if we pitched a rebrand for oxygen?"
Also: "Why does this kerning feel... angry?"

*accidentally orders a venti typography analysis instead of coffee*`,
    "#3amrevelations": `3:17 AM: "What if we made a website that only works on Tuesdays?"
3:23 AM: "Clients would LOVE gradients that sync with their biorhythms"
3:31 AM: "Every logo is just a really confident doodle"
3:45 AM: "We should trademark the concept of 'slightly off-center'"
3:58 AM: "What if... hear me out... COMIC SANS BUT PREMIUM?"
4:12 AM: *saves random scribble as "PARADIGM_SHIFT_FINAL_FINAL_v847.ai"*
4:27 AM: "Everything is branding if you believe hard enough"
4:33 AM: "Maybe I should become a plant. Plants don't worry about hex codes."

Morning me will find this tomorrow and either cry or promote myself.`,
  };

  const folderItems = {
    "About Us": ["#the404", "#philosophy", "#behindthename"],
    "Our History": ["#founding", "#milestones"],
    "Work Stuff": ["#caffeinethoughts", "#3amrevelations"],
  };

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const selectItem = (item, parent = "About us") => {
    setCurrentPath(`${parent} → ${item}`);
    setSelectedItem(item);
  };

  return (
    <div className="absolute inset-0">
      {/* Header Bar */}
      <div className="w-full flex h-16 bg-[#FFB600] border-b-2 border-black">
        {/* Dynamic title - moved to top left */}
        <div className="flex items-center w-full pl-8">
          <div className="text-black">
            <span className="font-oswald text-2xl font-bold tracking-wider">
              {currentPath.split(" → ")[0]}
            </span>
            <span className="font-oswald text-2xl font-bold mx-2"> → </span>
            <span className="font-space-grotesk text-2xl font-medium bg-black/10 px-3 py-1 border border-black/20">
              {currentPath.split(" → ")[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex h-[calc(100%-4rem)]">
        {/* Left Column - Navigation */}
        <div className="w-1/4 bg-[#FFB600] p-4 overflow-y-auto border-r-2 border-black">
          <div className="space-y-2">
            {/* About Us Folder */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer hover:bg-black/10 transition-all duration-200 mb-1 p-2 group"
                onClick={() => toggleFolder("About Us")}
              >
                <div className="mr-3">
                  {expandedFolders["About Us"] ? (
                    <div className="w-4 h-4 bg-white border-2 border-black flex items-center justify-center">
                      <Minus
                        size={10}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  ) : (
                    <div className="w-4 h-4 bg-white border-2 border-black flex items-center justify-center">
                      <Plus
                        size={10}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  )}
                </div>
                <Folder size={18} className="mr-3 text-black" strokeWidth={2} />
                <span className="text-black font-semibold font-space-grotesk text-lg">
                  About Us
                </span>
              </div>

              {expandedFolders["About Us"] && (
                <div className="ml-4 mt-1 space-y-1">
                  {folderItems["About Us"].map((item, index) => (
                    <div key={item} className="relative">
                      <div
                        className={`flex items-center cursor-pointer transition-all duration-200 p-2 text-sm group ${
                          selectedItem === item
                            ? "bg-black text-white border-2 border-black"
                            : "text-black hover:bg-black/20"
                        }`}
                        onClick={() => selectItem(item, "About us")}
                      >
                        <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                        <span className="font-space-grotesk font-medium">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Our History Folder */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer hover:bg-black/10 transition-all duration-200 mb-1 p-2 group"
                onClick={() => toggleFolder("Our History")}
              >
                <div className="mr-3">
                  {expandedFolders["Our History"] ? (
                    <div className="w-4 h-4 bg-white border-2 border-black flex items-center justify-center">
                      <Minus
                        size={10}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  ) : (
                    <div className="w-4 h-4 bg-white border-2 border-black flex items-center justify-center">
                      <Plus
                        size={10}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  )}
                </div>
                <Folder size={18} className="mr-3 text-black" strokeWidth={2} />
                <span className="text-black font-semibold font-space-grotesk text-lg">
                  Our History
                </span>
              </div>

              {expandedFolders["Our History"] && (
                <div className="ml-4 mt-1 space-y-1">
                  {folderItems["Our History"].map((item, index) => (
                    <div key={item} className="relative">
                      <div
                        className={`flex items-center cursor-pointer transition-all duration-200 p-2 text-sm group ${
                          selectedItem === item
                            ? "bg-black text-white border-2 border-black"
                            : "text-black hover:bg-black/20"
                        }`}
                        onClick={() => selectItem(item, "Our History")}
                      >
                        <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                        <span className="font-space-grotesk font-medium">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Work Stuff Folder */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer hover:bg-black/10 transition-all duration-200 mb-1 p-2 group"
                onClick={() => toggleFolder("Work Stuff")}
              >
                <div className="mr-3">
                  {expandedFolders["Work Stuff"] ? (
                    <div className="w-4 h-4 bg-white border-2 border-black flex items-center justify-center">
                      <Minus
                        size={10}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  ) : (
                    <div className="w-4 h-4 bg-white border-2 border-black flex items-center justify-center">
                      <Plus
                        size={10}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  )}
                </div>
                <Folder size={18} className="mr-3 text-black" strokeWidth={2} />
                <span className="text-black font-semibold font-space-grotesk text-lg">
                  Work Stuff
                </span>
              </div>

              {expandedFolders["Work Stuff"] && (
                <div className="ml-4 mt-1 space-y-1">
                  {folderItems["Work Stuff"].map((item, index) => (
                    <div key={item} className="relative">
                      <div
                        className={`flex items-center cursor-pointer transition-all duration-200 p-2 text-sm group ${
                          selectedItem === item
                            ? "bg-black text-white border-2 border-black"
                            : "text-black hover:bg-black/20"
                        }`}
                        onClick={() => selectItem(item, "Work Stuff")}
                      >
                        <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                        <span className="font-space-grotesk font-medium">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-3/4 bg-white p-8 overflow-y-auto">
          <div className="bg-white border-2 border-black h-full p-8">
            <div className="text-black h-full font-space-grotesk text-lg leading-relaxed overflow-y-auto">
              <div className="whitespace-pre-line max-w-none">
                {content[selectedItem] || "Select an item to view content."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutTest() {
  return (
    <section className="w-full bg-[#F7F4E9]">
      <div className="mx-8 border border-gray-200 my-5">
        <div className="grid grid-cols-12 gap-6 px-8 pt-8 pb-4">
          <div className="col-span-10 col-start-2 flex flex-col items-center justify-center">
            <h1 className="font-bold mb-4 text-[70px] font-oswald text-black">
              ABOUT SECTION
            </h1>
            <p>This is section for about section (Sharp Version)</p>

            {/* Main Content Container */}
            <div className="mt-6 w-full flex justify-center relative">
              <div className="max-w-full relative">
                {/* Background Container */}
                <div className="relative w-[1080px] h-[520px]">
                  {/* Shadow */}
                  <div className="absolute top-2 left-2 w-[1053px] h-[502px] bg-black"></div>
                  {/* Main Container */}
                  <div className="absolute top-0 left-0 w-[1053px] h-[502px] bg-[#FFB600] border-[3px] border-black">
                    <AboutUsPanelSharp />
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
