// AUREN WEAR - Persistent Cart System & Product Database

// Global Product Database mapping item IDs to details from mockups
const PRODUCTS_DB = {
  "sculpted-wool-overcoat": {
    id: "sculpted-wool-overcoat",
    name: "Sculpted Wool Overcoat",
    price: 1250.00,
    category: "Jackets & Coats",
    description: "A masterclass in modern tailoring. This overcoat is crafted from ethically sourced virgin wool with a double-faced finish for exceptional warmth without the weight. Designed for a sharp, architectural silhouette that transcends seasonal trends.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeHDPJU2nVRRQ-76WVAGVbXLCViFty7T2o5HiC7YFAxWqnNF4iueujl0g1vSO6XKrSu9ahae0g_8kflrUgO4IYqDAo3qCdk9ZblEKv4-sLq3TWkJVDmrEWz18ZlQ1awV8NL78XLC3_k1RM7sgnSFDQkHtRmW1fAOzbdytttvIhiTcUFhLzymepwhXHs9U44U7NbyE0jIrg8mJx2mShO8y17DvZDghf39JyrUwSMn-aS_I9JG1FSkv_UVKWSpH5G0j1Egd6gmdCh00",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeHDPJU2nVRRQ-76WVAGVbXLCViFty7T2o5HiC7YFAxWqnNF4iueujl0g1vSO6XKrSu9ahae0g_8kflrUgO4IYqDAo3qCdk9ZblEKv4-sLq3TWkJVDmrEWz18ZlQ1awV8NL78XLC3_k1RM7sgnSFDQkHtRmW1fAOzbdytttvIhiTcUFhLzymepwhXHs9U44U7NbyE0jIrg8mJx2mShO8y17DvZDghf39JyrUwSMn-aS_I9JG1FSkv_UVKWSpH5G0j1Egd6gmdCh00",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhFedyJEs96VjYBkkc72I7qf17GVdFlsfMZuQ0amYlSCSjEko_s09c-wYz46mdv5spJVo77nce48_9ChMCXIHUflXrwIbD7kCFKYivGNy5nTGMffVZGs8eGO3Pp6u9qcDo4z3VFMr6BYbT3bRHSK-D5G5Zje6FaHdhqWij6nwR-HdYhMXqOWjPi3SeuSWtOUmzdvuNpLqWMTaz8iSjtGH78kznTPHl8lpcCQqNsvvLCvTVI6KCaETU3J5odcpf-f7DKf8cni1B--w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4qjnb1bRgZvyiWnsz70erBlygc1x4v5SduIWMEQ36f-r9clseYYe7TfxP3MSM_9HJXXWVL9XiNFQTBRyjVraXeebZ0FUklwcT4nDTb9AMVp4BWwg5Q7X3k3YdnPuPFu3p0S-euaP6mjik_qv__F1CjWJSqY36McWzDzcqjtuPffLRsv4QdkmOtS5E87oQsyeHVj5un_ixu765PH0b9asoK7ihzTLqmoQYXN_A3peXbRmSBP-CaZpqDnqVPY4SuJXBzS92sf8NZjA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLDWut5a1-V8lIdCfh6wrhZcphXwBwYk5DDNlfBRHwdPbnVmJ3aKtK_ED_wJr63_vrl2dcCfoqEo9AQaiopCfo7xS467mRfirXLJeh12Wy21ywO4T0IBbT2ym_KuNV1CgzsRnNxd6htqV8VU4hDZvLi2WEU0KTaITOIyP9TpaX6TvWL7dq1Q_61Bms2abKba6502-JQv3mLHY9fYkiaoX_xgYUFttykZKFm_V0ocqX99DNL3d_vKBtSPsH9FpOAwxhLjU3pP00FiM"
    ],
    details: {
      material: "100% Super 140s Virgin Wool. Sourced from the prestigious Biella region in Italy. Naturally water-repellent.",
      construction: "Half-canvased construction for a natural drape. Hand-finished collar and silk-blend internal piping.",
      care: "Dry clean only. Store on a wide-shoulder cedar hanger to maintain structural integrity.",
      origin: "Designed in Stockholm. Tailored in our carbon-neutral atelier in Portugal."
    },
    colors: ["Charcoal", "Beige", "Black"],
    colorHexes: ["#2C2C2C", "#E5E5E0", "#1A1A1A"],
    sizes: ["S", "M", "L", "XL"]
  },
  "essential-heavy-hoodie": {
    id: "essential-heavy-hoodie",
    name: "Essential Heavy Hoodie",
    price: 120.00,
    category: "Hoodies",
    description: "Crafted from 500gsm heavy organic cotton, custom-woven and garment-dyed for a unique vintage texture. Tailored for a structural boxy fit, dropping at the shoulders with a double-lined drawstring-free hood.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf7vnyFnabBlMKhoGrzcA-DGlYG4X3OrIKTt5qGPygx5VX3DWeRDWC9pHe_zaNB4ed3D5F122l3h-qIVOwwLZWHGRjQH-H4eXMfbRtJe0UWVpxzk2B-mSYB4pqvBxixUBbC8sWg5qfmYVn0ucWVT-hfR08Do5zYzUjtigIEW4brYExTNbBdMpL1EdQtUi3atEJO2UZeVMFXM4Iac9nUhdAWjg_ETFsiasxsXPxczI8-DRSr-fLCq69_5OKXBQ4fpdXHUYO5oPeDtw",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf7vnyFnabBlMKhoGrzcA-DGlYG4X3OrIKTt5qGPygx5VX3DWeRDWC9pHe_zaNB4ed3D5F122l3h-qIVOwwLZWHGRjQH-H4eXMfbRtJe0UWVpxzk2B-mSYB4pqvBxixUBbC8sWg5qfmYVn0ucWVT-hfR08Do5zYzUjtigIEW4brYExTNbBdMpL1EdQtUi3atEJO2UZeVMFXM4Iac9nUhdAWjg_ETFsiasxsXPxczI8-DRSr-fLCq69_5OKXBQ4fpdXHUYO5oPeDtw"
    ],
    details: {
      material: "100% Organic Cotton, 500gsm heavyweight loopback French terry cloth.",
      construction: "Flatlock stitching throughout. Double-layered fabric hood. Ribbed side panels for comfort.",
      care: "Machine wash cold inside out. Lay flat to dry to maintain fit and wash quality.",
      origin: "Designed in Stockholm. Knitted and dyed in Barcelos, Portugal."
    },
    colors: ["Charcoal", "Oatmeal", "Off-White"],
    colorHexes: ["#2F2F31", "#D7D2CB", "#F3ECE1"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  "classic-minimal-tee": {
    id: "classic-minimal-tee",
    name: "Classic Minimal Tee",
    price: 45.00,
    category: "T-Shirts",
    description: "The foundation of a modern wardrobe. Constructed from long-staple combed Supima cotton in a medium weight. Features a tight mock neck collar that retains its structure through countess washes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGGKOcoVuQGN1RLl5SVsYfk8ddq9ovxA2dJ6TiFkiCsaPIoRxGin4H9FgrWqJTF0I_Wt5k-jMNiBzafkzr_WBYaFBBtevviHfMhn5eKN-2DiWXabkrRcGG6IKPteLicgRrQ8VfqL01OJq9-uPNpvA1p9GmHyZLSihHPh0y3cu53MDKzk05hF69LmxRou7GZpEPuJPYHyEqwELgBaxn-clF0QladNl2urxC6HeO3toDzLozOFeBZECH1wz6lVRXAKWNfI2oPfjYpas",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGGKOcoVuQGN1RLl5SVsYfk8ddq9ovxA2dJ6TiFkiCsaPIoRxGin4H9FgrWqJTF0I_Wt5k-jMNiBzafkzr_WBYaFBBtevviHfMhn5eKN-2DiWXabkrRcGG6IKPteLicgRrQ8VfqL01OJq9-uPNpvA1p9GmHyZLSihHPh0y3cu53MDKzk05hF69LmxRou7GZpEPuJPYHyEqwELgBaxn-clF0QladNl2urxC6HeO3toDzLozOFeBZECH1wz6lVRXAKWNfI2oPfjYpas"
    ],
    details: {
      material: "100% US-grown Supima Cotton, extra-long staple fibers for longevity and softness.",
      construction: "Reinforced shoulder-to-shoulder taping. Lycra-reinforced rib collar.",
      care: "Machine wash cold with like colors. Tumble dry low.",
      origin: "Designed in Stockholm. Tailored in Portugal."
    },
    colors: ["White", "Charcoal", "Black"],
    colorHexes: ["#FFFFFF", "#4A4A4A", "#111111"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  "urban-tech-sneaker": {
    id: "urban-tech-sneaker",
    name: "Urban Tech Sneaker",
    price: 185.00,
    category: "Footwear",
    description: "Sleek, low-profile lifestyle footwear featuring technical mesh uppers overlayed with panels of Italian calf suede. Built with a bespoke rubber compound cupsole for durability and comfort.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbNVbZLYnXG7FJClbyaocGx7q9EmXy6uipzsjYYzH3XpFehXuuEfmW1eE-WRum13uxcf6tna4pD2z1zDPmVMSOPBjlPIVsNtRH7pawrR-9lJQKaDbUvFHv814LjJGjhfXI_aMtNJ2uza1Tq0Cvkq5H2gnUQJeNt3obP2bUoo1qpKc23Tz6wEz8hv0E9xyp8Hi7RALa7cqTN3S9FPJ55JGRfYUoPK3JZqfWUYMmBWhjVorWiIRQCFnralAXhiN8uHII6uKOEFMDn_s",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbNVbZLYnXG7FJClbyaocGx7q9EmXy6uipzsjYYzH3XpFehXuuEfmW1eE-WRum13uxcf6tna4pD2z1zDPmVMSOPBjlPIVsNtRH7pawrR-9lJQKaDbUvFHv814LjJGjhfXI_aMtNJ2uza1Tq0Cvkq5H2gnUQJeNt3obP2bUoo1qpKc23Tz6wEz8hv0E9xyp8Hi7RALa7cqTN3S9FPJ55JGRfYUoPK3JZqfWUYMmBWhjVorWiIRQCFnralAXhiN8uHII6uKOEFMDn_s"
    ],
    details: {
      material: "Premium Italian Suede, Recycled Polyester Technical Mesh, Calfskin Leather Lining.",
      construction: "Hand-stitched panels. Custom molded EVA footbed. Stitched rubber cupsole.",
      care: "Protect with suede protector spray before wearing. Clean with a suede brush.",
      origin: "Designed in Stockholm. Handcrafted in Porto, Portugal."
    },
    colors: ["Monochrome Grey", "Triple Black"],
    colorHexes: ["#AFAFAF", "#1E1E1E"],
    sizes: ["40", "41", "42", "43", "44", "45"]
  },
  "sculptural-overcoat": {
    id: "sculptural-overcoat",
    name: "Sculptural Overcoat",
    price: 320.00,
    category: "Jackets & Coats",
    description: "An editorial statement coat rendered in a warm camel tone. Features drop shoulders, a relaxed double-breasted closure, and a dramatic structural silhouette that highlights fluid motion.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQNnr0w82ymDq1FpDQfy6Hwkc5hxu3nn85YuGs9PIl_FbopM95xgeJujcIaXti6Mnfh-UjvOs_d2hN2UU_z1DRtRgOIUbKGdp3P7vN6DNlmN6EMIofoH3QLDTqXSy27Ez0fIbsNbuSMcEF-4eu6TsVD3M_aRcbhnUMGySOHZhB_dZ6X-WUmvjrrBgiI_r2ZzAmdbiWUTix7jiocmsqUgNFkg3xFxsSayMcLyfL1JOXkLMNVfgdHsR1vWTVp0B5BJbWWSmWTOY04uk",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQNnr0w82ymDq1FpDQfy6Hwkc5hxu3nn85YuGs9PIl_FbopM95xgeJujcIaXti6Mnfh-UjvOs_d2hN2UU_z1DRtRgOIUbKGdp3P7vN6DNlmN6EMIofoH3QLDTqXSy27Ez0fIbsNbuSMcEF-4eu6TsVD3M_aRcbhnUMGySOHZhB_dZ6X-WUmvjrrBgiI_r2ZzAmdbiWUTix7jiocmsqUgNFkg3xFxsSayMcLyfL1JOXkLMNVfgdHsR1vWTVp0B5BJbWWSmWTOY04uk"
    ],
    details: {
      material: "80% Virgin Wool, 20% Nylon Cashmere-Blend for soft finish and drape.",
      construction: "Oversized silhouette. Unlined interior seams finished with cotton binding.",
      care: "Dry clean only. Press with a cool iron using a damp cloth if necessary.",
      origin: "Designed in Stockholm. Fabric woven in Italy, tailored in Portugal."
    },
    colors: ["Camel", "Charcoal"],
    colorHexes: ["#C59B74", "#3D3D3F"],
    sizes: ["S", "M", "L", "XL"]
  },
  "archival-wool-overcoat": {
    id: "archival-wool-overcoat",
    name: "Archival Wool Overcoat",
    price: 450.00,
    category: "Jackets & Coats",
    description: "Our signature double-breasted overcoat, showcasing an architectural wrap fit. Tailored with heavy Italian-milled wool, features flat horn buttons, silk piping, and utility welt pockets.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-EdmhJrKg-Tcg86cnUN1BMfoHQlm0rGP6oHBM4xtxAND3qy3M1TDMBrXcjGagYuJ7uXlz_bVpCs6p1HpFh1F9iCbAI8aer3eH5aEXEe1fGLxWRn0lxdqV1-Gtu5WBQdTq4bLZDTioCw3MBZGnRw6nUO8_eo5ZX9CVnG6aoED4gZJEiIlCYDVbxE7VY40JHaOeSTu1h0OjkVXcntE_1ZtwnUW4cSgqI1qGupLZQuW4Ql31zA3quJB1H5YpKm8EW-owi3UPhLTNwPE",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-EdmhJrKg-Tcg86cnUN1BMfoHQlm0rGP6oHBM4xtxAND3qy3M1TDMBrXcjGagYuJ7uXlz_bVpCs6p1HpFh1F9iCbAI8aer3eH5aEXEe1fGLxWRn0lxdqV1-Gtu5WBQdTq4bLZDTioCw3MBZGnRw6nUO8_eo5ZX9CVnG6aoED4gZJEiIlCYDVbxE7VY40JHaOeSTu1h0OjkVXcntE_1ZtwnUW4cSgqI1qGupLZQuW4Ql31zA3quJB1H5YpKm8EW-owi3UPhLTNwPE"
    ],
    details: {
      material: "90% Melton Wool, 10% Cashmere warp yarns. Silky Bemberg lining.",
      construction: "Structured shoulders. Hand-welted buttonholes. Fully lined.",
      care: "Dry clean only. Steam gently to remove wrinkles.",
      origin: "Designed in Stockholm. Fabric milled in Biella, tailored in Portugal."
    },
    colors: ["Black", "Charcoal"],
    colorHexes: ["#0B0B0C", "#2F2F31"],
    sizes: ["S", "M", "L", "XL"]
  },
  "heavyweight-box-hoodie": {
    id: "heavyweight-box-hoodie",
    name: "Heavyweight Box Hoodie",
    price: 180.00,
    category: "Hoodies",
    description: "An archival hoodie piece cut in a wide, boxy silhouette. Made from extremely heavy 500gsm loopback cotton that holds its structural shape. Completed with ribbed detailing and hidden side-seam pockets.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqwdvOITpdqniQMdtatz0-0V1CKKzmM4qMONEOtZZOYJOXXwsv6iLI2WU3xeTyMJE6Z46Culdau2Hlw8sV6Q2OliV3LWtTI9L-i7ySgWPRfj5Jl6Y4V5on4QYmHIiSvsiv7lE2sRbF2lbogJqusuMVqHUxcsBidBAszEGkUTp3BhCAug3j4ORNwhFiuQKD4ErIn8AQGs5dqQgS5TqWWXlRTDHAUauiQgnliSR-rIPxsypSNtr2lRG5pQ4nCoXWZOjgg_C-63vGUuo",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqwdvOITpdqniQMdtatz0-0V1CKKzmM4qMONEOtZZOYJOXXwsv6iLI2WU3xeTyMJE6Z46Culdau2Hlw8sV6Q2OliV3LWtTI9L-i7ySgWPRfj5Jl6Y4V5on4QYmHIiSvsiv7lE2sRbF2lbogJqusuMVqHUxcsBidBAszEGkUTp3BhCAug3j4ORNwhFiuQKD4ErIn8AQGs5dqQgS5TqWWXlRTDHAUauiQgnliSR-rIPxsypSNtr2lRG5pQ4nCoXWZOjgg_C-63vGUuo"
    ],
    details: {
      material: "100% Organic Cotton French Terry, 500gsm heavyweight fabric.",
      construction: "Blind stitched hems. Integrated side-seam pockets. Double-layered hood.",
      care: "Wash cold inside out. Flat air dry is highly recommended.",
      origin: "Designed in Stockholm. Made in Barcelos, Portugal."
    },
    colors: ["Oatmeal", "Off-Black"],
    colorHexes: ["#D7D2CB", "#1A1A1A"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  "core-supima-tee": {
    id: "core-supima-tee",
    name: "Core Supima Tee",
    price: 85.00,
    category: "T-Shirts",
    description: "Our core classic tee. Knitted from extra-long staple Supima cotton for unparalleled durability and premium hand feel. Cut in a standard drape fit that sits perfectly.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVMJwk1biC5MeI0q7wpovumCelp4bwPvt4siUJWSGuIcs5692JU6smQrB8tqVIWrCAQncTS3-R4VeQoKlTTbSv2TIAU-bswxvmVPvUpvgHJ8c9D4NXiswHi64wSKY69uinlj91tErEhcFFrN5bQiko7Y9Aa99sxdnvBBZ8JZU_-iwVDWGtAAcb6vbqSbGTlG6qoMsAqUSkOEev1R9DvgyiQlLZ9uuNdIJVP2fBe8icNU5CNwSGExG8NBfk6ijX8QjtwXL3lUhGWKA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVMJwk1biC5MeI0q7wpovumCelp4bwPvt4siUJWSGuIcs5692JU6smQrB8tqVIWrCAQncTS3-R4VeQoKlTTbSv2TIAU-bswxvmVPvUpvgHJ8c9D4NXiswHi64wSKY69uinlj91tErEhcFFrN5bQiko7Y9Aa99sxdnvBBZ8JZU_-iwVDWGtAAcb6vbqSbGTlG6qoMsAqUSkOEev1R9DvgyiQlLZ9uuNdIJVP2fBe8icNU5CNwSGExG8NBfk6ijX8QjtwXL3lUhGWKA"
    ],
    details: {
      material: "100% Organic Supima Cotton, midweight 240gsm jersey weave.",
      construction: "Reinforced rib collar. Double needle stitch on sleeves and bottom hem.",
      care: "Machine wash cold. Hang dry or tumble dry low.",
      origin: "Designed in Stockholm. Made in Portugal."
    },
    colors: ["Off-White", "Black"],
    colorHexes: ["#F6F3F2", "#111111"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  "raw-edge-denim": {
    id: "raw-edge-denim",
    name: "Raw Edge Denim",
    price: 220.00,
    category: "Jackets",
    description: "A cropped, structured denim jacket with raw selvedge trims. Sourced from Kojima, Japan, it is constructed from 14.5oz rigid raw indigo denim. Styled with custom hardware and standard fit.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwq3LDPgkc4oJESlUwCvbID4kyUbY6AUOn6fHST51JaQ_Pty_9slsqMhamk63mkqiaNNZUjVrPqy4pFNRrreKLrnvs7OgsDTbRmqux-zjntBqRCMXARQYz_nCU0DKyFjJuXPcLq7oG2jsbwL-6o3myPYGmOLotabtFiCcOZsd13qSmTjoM0bl67ZoYMwWDlAYVLyV3EkIo6TSxccKDYKZhIlnHpbjaZf1KkVtYk-4KrvwVuTNJQV8XDjWyflvkI2Cd6NM9LECfta4",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwq3LDPgkc4oJESlUwCvbID4kyUbY6AUOn6fHST51JaQ_Pty_9slsqMhamk63mkqiaNNZUjVrPqy4pFNRrreKLrnvs7OgsDTbRmqux-zjntBqRCMXARQYz_nCU0DKyFjJuXPcLq7oG2jsbwL-6o3myPYGmOLotabtFiCcOZsd13qSmTjoM0bl67ZoYMwWDlAYVLyV3EkIo6TSxccKDYKZhIlnHpbjaZf1KkVtYk-4KrvwVuTNJQV8XDjWyflvkI2Cd6NM9LECfta4"
    ],
    details: {
      material: "100% Cotton, 14.5oz rigid Japanese selvedge denim.",
      construction: "Flat-felled seams. Custom branded brushed silver shank buttons. Raw selvedge detailing.",
      care: "Avoid washing for 6 months to allow custom fading. Hand wash cold or dry clean if necessary.",
      origin: "Fabric made in Kojima, Japan. Tailored in Portugal."
    },
    colors: ["Raw Indigo", "Solid Black"],
    colorHexes: ["#1B293E", "#111111"],
    sizes: ["S", "M", "L", "XL"]
  },
  "raw-selvedge-denim": {
    id: "raw-selvedge-denim",
    name: "Raw Selvedge Denim",
    price: 320.00,
    category: "Pants",
    description: "Classic straight-leg trousers crafted from Japanese selvedge denim. Rigid and unwashed to crease, stretch, and fade uniquely to your silhouette. Features branded metal buttons and premium rivets.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGMkBpdOiRxh6zs-y2sD5wgxKXkNKWcO3VDj-gFLNxbqWY5Zo-PHF4DgNeiTWCrOYutJFPxGkUuq38yR9ktCZXf-99ZESjR_oQXg47dbsa5zY4MDQ8AOE6Bmj8li8EU443wshcl-znXJlIx46cEEvjXdMC-MRl0UxTbzTNvn8bm-qbVwYHCpQxfmsJeR026Y6KNag_E5SdhojsyifHka7ZszWt63ttAqIT8WmFu32yH175G-6TrSHqOLfwD7IrMutmNg-bLyAz40Y",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGMkBpdOiRxh6zs-y2sD5wgxKXkNKWcO3VDj-gFLNxbqWY5Zo-PHF4DgNeiTWCrOYutJFPxGkUuq38yR9ktCZXf-99ZESjR_oQXg47dbsa5zY4MDQ8AOE6Bmj8li8EU443wshcl-znXJlIx46cEEvjXdMC-MRl0UxTbzTNvn8bm-qbVwYHCpQxfmsJeR026Y6KNag_E5SdhojsyifHka7ZszWt63ttAqIT8WmFu32yH175G-6TrSHqOLfwD7IrMutmNg-bLyAz40Y"
    ],
    details: {
      material: "14.5oz rigid Japanese selvedge cotton denim.",
      construction: "Traditional 5-pocket design. Button fly. Chain-stitched hem. Red-line selvedge ID.",
      care: "Spot clean or dry clean. If washing, hand wash cold inside out and hang to dry.",
      origin: "Fabric woven in Okayama, Japan. Crafted in Portugal."
    },
    colors: ["Indigo", "Black"],
    colorHexes: ["#1B293E", "#111111"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  "cashmere-crew": {
    id: "cashmere-crew",
    name: "Cashmere Crew",
    price: 310.00,
    category: "Knitwear",
    description: "An exceptionally soft crewneck knitted from 100% fine Inner Mongolian cashmere. Made with a dense 12-gauge structure that offers superior heat retention and a luxurious, smooth finish.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwfKJcmAVQLymeGUWlkih5myuQIMNK3KDI3uSvIc_RZI2J3NubSyf41sS81AyWvLP823JMZZiMLngxnU57HbaBSZWRPQIEscjpMAQoennrAXQvpfPdjqhPJN5nsuvNLPiBOs9WApldI1plXuOodne-q_5M8XzHWXnwJFNZPrhqVFZjgHfa3s18B_Wwh5y9yZSnN-MYGKZNYHJkZHaUe9a0znFme_M5QL9f5OT_YJPNTM9Nygul330zXDc3BIr5sS-d7PMUI16RClc",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwfKJcmAVQLymeGUWlkih5myuQIMNK3KDI3uSvIc_RZI2J3NubSyf41sS81AyWvLP823JMZZiMLngxnU57HbaBSZWRPQIEscjpMAQoennrAXQvpfPdjqhPJN5nsuvNLPiBOs9WApldI1plXuOodne-q_5M8XzHWXnwJFNZPrhqVFZjgHfa3s18B_Wwh5y9yZSnN-MYGKZNYHJkZHaUe9a0znFme_M5QL9f5OT_YJPNTM9Nygul330zXDc3BIr5sS-d7PMUI16RClc"
    ],
    details: {
      material: "100% Cashmere, ethically sourced, 12-gauge knit.",
      construction: "Fully fashioned knit armholes and neckline. Ribbed neck, cuffs, and hem.",
      care: "Hand wash cold with wool detergent. Dry flat. Store folded, never hang.",
      origin: "Designed in Stockholm. Knitted in a specialty workshop in Inner Mongolia."
    },
    colors: ["Charcoal Grey", "Beige", "Black"],
    colorHexes: ["#4A4A4D", "#D2C2B1", "#111111"],
    sizes: ["S", "M", "L", "XL"]
  }
};

// Default products to pre-populate for demo if cart is empty
const DEFAULT_CART = [
  {
    id: "sculpted-wool-overcoat",
    name: "Sculpted Wool Overcoat",
    price: 1250.00, // Syncing with product detail price
    size: "M",
    color: "Charcoal",
    image: PRODUCTS_DB["sculpted-wool-overcoat"].image,
    quantity: 1
  },
  {
    id: "raw-selvedge-denim",
    name: "Raw Selvedge Denim",
    price: 320.00,
    size: "32",
    color: "Indigo",
    image: PRODUCTS_DB["raw-selvedge-denim"].image,
    quantity: 1
  }
];

// Initialize cart from localStorage
function getCart() {
  const cartData = localStorage.getItem('auren_cart');
  if (!cartData) {
    localStorage.setItem('auren_cart', JSON.stringify(DEFAULT_CART));
    return DEFAULT_CART;
  }
  return JSON.parse(cartData);
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('auren_cart', JSON.stringify(cart));
  // Trigger update across scripts and elements
  const event = new CustomEvent('cartUpdated', { detail: cart });
  window.dispatchEvent(event);
  updateCartBadges();
  renderCartDrawer();
  updateCheckoutSummary();
}

// Add item to cart
function addToCart(product) {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => 
    item.id === product.id && 
    item.size === product.size && 
    item.color === product.color
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += (product.quantity || 1);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.size,
      color: product.color,
      image: product.image,
      quantity: product.quantity || 1
    });
  }
  saveCart(cart);
  
  // Auto-open cart drawer to show feedback
  if (typeof toggleMiniCart === 'function') {
    const overlay = document.getElementById('miniCartOverlay');
    if (overlay && overlay.classList.contains('hidden')) {
      toggleMiniCart();
    }
  }
}

// Update quantity
function updateQuantity(id, size, color, newQty) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.id === id && item.size === size && item.color === color);
  
  if (idx > -1) {
    if (newQty <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].quantity = newQty;
    }
    saveCart(cart);
  }
}

// Remove item
function removeFromCart(id, size, color) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === id && item.size === size && item.color === color));
  saveCart(cart);
}

// Clear cart
function clearCart() {
  saveCart([]);
}

// Get subtotal
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get item count
function getCartCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update cart counter badges
function updateCartBadges() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = count;
    if (count === 0) {
      badge.classList.add('hidden');
    } else {
      badge.classList.remove('hidden');
    }
  });
}

// Render cart drawer items dynamically
function renderCartDrawer() {
  const drawerContainer = document.getElementById('miniCartItems');
  const drawerSubtotal = document.getElementById('miniCartSubtotal');
  const drawerTitle = document.getElementById('miniCartTitle');
  if (!drawerContainer) return;

  const cart = getCart();
  drawerTitle.textContent = `Your Cart (${getCartCount()})`;
  
  if (cart.length === 0) {
    drawerContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <span class="material-symbols-outlined text-4xl text-outline mb-4">shopping_bag</span>
        <p class="font-label-sm uppercase text-secondary tracking-widest text-sm">Your cart is empty</p>
        <a href="shop.html" class="mt-6 border border-primary text-primary px-8 py-3 font-label-sm uppercase text-xs hover:bg-primary hover:text-on-primary transition-all">Shop Collections</a>
      </div>
    `;
    if (drawerSubtotal) drawerSubtotal.textContent = "$0.00";
    return;
  }

  let html = '';
  cart.forEach(item => {
    html += `
      <div class="flex gap-6 group border-b border-outline-variant/10 pb-6">
        <div class="w-24 h-32 bg-surface-container-low overflow-hidden flex-shrink-0">
          <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="${item.image}" alt="${item.name}"/>
        </div>
        <div class="flex flex-col justify-between flex-grow">
          <div>
            <div class="flex justify-between items-start gap-2">
              <h3 class="font-label-sm uppercase text-sm text-primary tracking-tight leading-tight">${item.name}</h3>
              <button class="text-on-surface-variant hover:text-primary transition-colors animate-all" onclick="removeFromCart('${item.id}', '${item.size}', '${item.color}')">
                <span class="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
            <p class="text-xs text-secondary mt-1">${item.color} / Size: ${item.size}</p>
          </div>
          <div class="flex justify-between items-end mt-2">
            <div class="flex items-center border border-outline-variant/30 bg-surface">
              <button class="px-2.5 py-1 hover:bg-surface-container-low transition-colors text-secondary" onclick="updateQuantity('${item.id}', '${item.size}', '${item.color}', ${item.quantity - 1})">-</button>
              <span class="px-3 text-sm font-label-sm text-primary">${item.quantity}</span>
              <button class="px-2.5 py-1 hover:bg-surface-container-low transition-colors text-secondary" onclick="updateQuantity('${item.id}', '${item.size}', '${item.color}', ${item.quantity + 1})">+</button>
            </div>
            <span class="font-body-md text-primary font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      </div>
    `;
  });
  drawerContainer.innerHTML = html;
  if (drawerSubtotal) drawerSubtotal.textContent = `$${getCartTotal().toFixed(2)}`;
}

// Update Checkout Page order summary dynamically
function updateCheckoutSummary() {
  const summaryContainer = document.getElementById('checkoutSummaryItems');
  const summarySubtotal = document.getElementById('checkoutSubtotal');
  const summaryTotal = document.getElementById('checkoutTotal');
  if (!summaryContainer) return;

  const cart = getCart();
  
  if (cart.length === 0) {
    summaryContainer.innerHTML = `
      <div class="py-8 text-center text-secondary">
        No items in cart. <a href="shop.html" class="underline hover:text-primary">Go to Shop</a>
      </div>
    `;
    if (summarySubtotal) summarySubtotal.textContent = "$0.00";
    if (summaryTotal) summaryTotal.textContent = "$0.00";
    return;
  }

  let html = '';
  cart.forEach(item => {
    html += `
      <div class="flex gap-4 border-b border-outline-variant/10 pb-4">
        <div class="w-20 h-28 bg-surface overflow-hidden flex-shrink-0">
          <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}"/>
        </div>
        <div class="flex flex-col justify-between py-1 flex-grow">
          <div>
            <h3 class="font-label-sm uppercase text-xs text-primary leading-tight">${item.name}</h3>
            <p class="text-secondary text-[11px] mt-1">${item.color} / Size: ${item.size} / Qty: ${item.quantity}</p>
          </div>
          <span class="font-body-md text-sm text-primary font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    `;
  });
  summaryContainer.innerHTML = html;
  
  const total = getCartTotal();
  if (summarySubtotal) summarySubtotal.textContent = `$${total.toFixed(2)}`;
  if (summaryTotal) summaryTotal.textContent = `$${total.toFixed(2)}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  renderCartDrawer();
  updateCheckoutSummary();
});
