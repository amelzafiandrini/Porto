"use client";
import LogoLoop from "./LogoLoop";

const techLogos = [
  // Canva
  { 
    node: (
      <img 
        src="https://img.icons8.com/color/48/canva.png" 
        alt="Canva" 
        className="h-12 w-auto object-contain" 
      />
    ), 
    title: "Canva", 
    href: "https://www.canva.com" 
  },

  // Figma
  { 
    node: (
      <img 
        src="https://img.icons8.com/color/48/figma.png" 
        alt="Figma" 
        className="h-12 w-auto object-contain" 
      />
    ), 
    title: "Figma", 
    href: "https://figma.com" 
  },

  // Adobe Photoshop
  { 
    node: (
      <img 
        src="https://img.icons8.com/color/48/adobe-photoshop--v1.png" 
        alt="Adobe Photoshop" 
        className="h-12 w-auto object-contain" 
      />
    ), 
    title: "Adobe Photoshop", 
    href: "https://www.adobe.com/products/photoshop.html" 
  },

  // Microsoft Word
  { 
    node: (
      <img 
        src="https://img.icons8.com/color/48/microsoft-word-2019--v1.png" 
        alt="Microsoft Word" 
        className="h-12 w-auto object-contain" 
      />
    ), 
    title: "Microsoft Word", 
    href: "https://www.microsoft.com/microsoft-365/word" 
  },

  // Microsoft Excel
  { 
    node: (
      <img 
        src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" 
        alt="Microsoft Excel" 
        className="h-12 w-auto object-contain" 
      />
    ), 
    title: "Microsoft Excel", 
    href: "https://www.microsoft.com/microsoft-365/excel" 
  },

  // Microsoft PowerPoint
  { 
    node: (
      <img 
        src="https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png" 
        alt="Microsoft PowerPoint" 
        className="h-12 w-auto object-contain" 
      />
    ), 
    title: "Microsoft PowerPoint", 
    href: "https://www.microsoft.com/microsoft-365/powerpoint" 
  },

  // Visual Studio Code
  { 
    node: (
      <img 
        src="https://img.icons8.com/color/48/visual-studio-code-2019.png" 
        alt="Visual Studio Code" 
        className="h-12 w-auto object-contain" 
      />
    ), 
    title: "Visual Studio Code", 
    href: "https://code.visualstudio.com" 
  },

  // Odoo
  {
    node: (
      <img 
        src="/logoodoo.png" 
        alt="Odoo" 
        className="h-20 w-auto object-contain" 
      />
    ),
    title: "Odoo",
    href: "https://www.odoo.com"
  },
];

export default function Skills() {
  return (
    <section className="relative w-full py-16 px-6 backdrop-blur-sm text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
        My Tools & Skills
      </h2>

      {/* Logo Loop */}
      <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={50}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#eb667eff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
