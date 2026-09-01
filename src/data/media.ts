// Dihasilkan otomatis oleh scripts/optimize-images.mjs — jangan diedit manual.
// Jalankan `npm run images` untuk membangun ulang dari folder FOTO/.

export type MediaSource = { w: number; url: string }

export type MediaEntry = {
  /** Teks alternatif bawaan; boleh ditimpa per pemakaian. */
  alt: string
  /** Dimensi hasil crop, dipakai untuk memesan rasio kotak gambar. */
  width: number
  height: number
  /** Placeholder blur (data URI WebP ~16px) untuk transisi blur-up. */
  lqip: string
  sources: { avif: MediaSource[]; webp: MediaSource[]; jpeg: MediaSource[] }
}

export const media = {
  "jahe": {
    "alt": "Segelas Jahe Ceria Jamuin berwarna jingga hangat dengan irisan jeruk di atas meja putih",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQBACdASoQABgAPxl4tFGspyUisAgBkCMJZgC7ACHfstwYRSw+F9KgAAD+5yuBQrPVcGiLshnSi/DzaC5Fu1sOAU4J0ACEUZpCE8i/kg1EiX9v9GNCAAAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/jahe-320.avif"
        },
        {
          "w": 520,
          "url": "/media/jahe-520.avif"
        },
        {
          "w": 760,
          "url": "/media/jahe-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/jahe-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/jahe-320.webp"
        },
        {
          "w": 520,
          "url": "/media/jahe-520.webp"
        },
        {
          "w": 760,
          "url": "/media/jahe-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/jahe-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/jahe-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/jahe-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/jahe-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/jahe-1024.jpg"
        }
      ]
    }
  },
  "jaheBooster": {
    "alt": "Segelas Jahe Booster Jamuin, varian lebih pekat untuk kebutuhan sepanjang hari",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACQAwCdASoQABgAPxl2tFGspyUisAgBkCMJZgC7AB51j7SMaw7cAP7e50eqhwUaS9ifnNZ7CdkzVMbtu2/qd1brbRUazlPrWkP28C9Aqfynd4l704xHNgAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/jaheBooster-320.avif"
        },
        {
          "w": 520,
          "url": "/media/jaheBooster-520.avif"
        },
        {
          "w": 760,
          "url": "/media/jaheBooster-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/jaheBooster-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/jaheBooster-320.webp"
        },
        {
          "w": 520,
          "url": "/media/jaheBooster-520.webp"
        },
        {
          "w": 760,
          "url": "/media/jaheBooster-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/jaheBooster-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/jaheBooster-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/jaheBooster-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/jaheBooster-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/jaheBooster-1024.jpg"
        }
      ]
    }
  },
  "kunyit": {
    "alt": "Segelas Kunyit Ceria Jamuin berwarna kuning cerah di atas meja dapur putih",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAACQAwCdASoQABgAPxl0sVCspqSisAgBkCMJbACdL1yB0ofrNiBwAP5XLE+g48+Kj/5W8CtV2cA1r9TZSviGJRta44TTDmPLsDsgbmDlX3QAAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/kunyit-320.avif"
        },
        {
          "w": 520,
          "url": "/media/kunyit-520.avif"
        },
        {
          "w": 760,
          "url": "/media/kunyit-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/kunyit-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/kunyit-320.webp"
        },
        {
          "w": 520,
          "url": "/media/kunyit-520.webp"
        },
        {
          "w": 760,
          "url": "/media/kunyit-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/kunyit-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/kunyit-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/kunyit-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/kunyit-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/kunyit-1024.jpg"
        }
      ]
    }
  },
  "kunyitBooster": {
    "alt": "Segelas Kunyit Booster Jamuin, varian lebih pekat untuk kebutuhan sepanjang hari",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAwCdASoQABgAPxl2slCspySisAgBkCMJbACsACG8Eu5/gjDSRm4AAP6MPhjFow33+rrlLULAhYa0SN7XBMl5lHLdGzp2k8Rkfly2ANFFJV6gAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/kunyitBooster-320.avif"
        },
        {
          "w": 520,
          "url": "/media/kunyitBooster-520.avif"
        },
        {
          "w": 760,
          "url": "/media/kunyitBooster-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/kunyitBooster-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/kunyitBooster-320.webp"
        },
        {
          "w": 520,
          "url": "/media/kunyitBooster-520.webp"
        },
        {
          "w": 760,
          "url": "/media/kunyitBooster-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/kunyitBooster-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/kunyitBooster-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/kunyitBooster-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/kunyitBooster-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/kunyitBooster-1024.jpg"
        }
      ]
    }
  },
  "kencur": {
    "alt": "Segelas Kencur Ceria Jamuin berwarna keemasan dengan potongan rempah di dalamnya",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAABwAwCdASoQABgAPxl4slEspySisAgBkCMJYgC7AC0Kc1dvJBAA/ut9kf0GKGe1aIcN4HfSXzss8md536xywKCyEGSyteqBOob21y5E1fdSGooAAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/kencur-320.avif"
        },
        {
          "w": 520,
          "url": "/media/kencur-520.avif"
        },
        {
          "w": 760,
          "url": "/media/kencur-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/kencur-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/kencur-320.webp"
        },
        {
          "w": 520,
          "url": "/media/kencur-520.webp"
        },
        {
          "w": 760,
          "url": "/media/kencur-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/kencur-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/kencur-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/kencur-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/kencur-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/kencur-1024.jpg"
        }
      ]
    }
  },
  "kencurBooster": {
    "alt": "Segelas Kencur Booster Jamuin, varian lebih pekat untuk kebutuhan sepanjang hari",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADwAwCdASoQABgAPxl6slCsqCSisAgBkCMJaAC7ABuvS42Va4dyDoAAAPxam7z6yFo5deo1VahYJzy6s1Jo2LvZrJPqqRKbhIeK04vY3AAAAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/kencurBooster-320.avif"
        },
        {
          "w": 520,
          "url": "/media/kencurBooster-520.avif"
        },
        {
          "w": 760,
          "url": "/media/kencurBooster-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/kencurBooster-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/kencurBooster-320.webp"
        },
        {
          "w": 520,
          "url": "/media/kencurBooster-520.webp"
        },
        {
          "w": 760,
          "url": "/media/kencurBooster-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/kencurBooster-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/kencurBooster-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/kencurBooster-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/kencurBooster-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/kencurBooster-1024.jpg"
        }
      ]
    }
  },
  "temulawak": {
    "alt": "Segelas Temulawak Ceria Jamuin berwarna kuning kehijauan dengan irisan lemon",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAwCdASoQABgAPxl2slCspySisAgBkCMJaACdABBcgpf8KeShg0AA/c1Lj1IAoBfwWt8uwI5QMYaQsJhSm+YueXUt7INDCRR37IdqvsKAAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/temulawak-320.avif"
        },
        {
          "w": 520,
          "url": "/media/temulawak-520.avif"
        },
        {
          "w": 760,
          "url": "/media/temulawak-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/temulawak-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/temulawak-320.webp"
        },
        {
          "w": 520,
          "url": "/media/temulawak-520.webp"
        },
        {
          "w": 760,
          "url": "/media/temulawak-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/temulawak-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/temulawak-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/temulawak-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/temulawak-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/temulawak-1024.jpg"
        }
      ]
    }
  },
  "telang": {
    "alt": "Segelas Teh Bunga Telang Jamuin dengan gradasi ungu dan lapisan bening di bawahnya",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAwCdASoQABgAPxl2slCspySisAgBkCMJYwC7AB8xNnEOBOvEUEAA/t7n3bN3L2R2UiN2p1SvJPE8Ctle3wS65R0M4NjU2WBBCP6oAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/telang-320.avif"
        },
        {
          "w": 520,
          "url": "/media/telang-520.avif"
        },
        {
          "w": 760,
          "url": "/media/telang-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/telang-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/telang-320.webp"
        },
        {
          "w": 520,
          "url": "/media/telang-520.webp"
        },
        {
          "w": 760,
          "url": "/media/telang-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/telang-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/telang-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/telang-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/telang-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/telang-1024.jpg"
        }
      ]
    }
  },
  "tehhijau": {
    "alt": "Segelas Teh Hijau Jamuin dengan irisan lemon dan biji selasih",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAwCdASoQABgAPxl2s1CspySisAgBkCMJaAC/OCHEyEVKTsKGy52aAP7erFsS64YWxbLA8NVBhJsYZZ45OgVk53hcuivIkJjxjJOUH5XH/pnPAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/tehhijau-320.avif"
        },
        {
          "w": 520,
          "url": "/media/tehhijau-520.avif"
        },
        {
          "w": 760,
          "url": "/media/tehhijau-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/tehhijau-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/tehhijau-320.webp"
        },
        {
          "w": 520,
          "url": "/media/tehhijau-520.webp"
        },
        {
          "w": 760,
          "url": "/media/tehhijau-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/tehhijau-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/tehhijau-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/tehhijau-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/tehhijau-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/tehhijau-1024.jpg"
        }
      ]
    }
  },
  "rosella": {
    "alt": "Segelas Teh Rosella Jamuin berwarna merah delima dengan potongan buah",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACQAwCdASoQABgAPxl2slEspySisAgBkCMJZgAAW+q0lYdkaIYAAP7Ejdv2a8LsAAZR3TCC8X5UzqX8qi9cgOWI38OKAAAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/rosella-320.avif"
        },
        {
          "w": 520,
          "url": "/media/rosella-520.avif"
        },
        {
          "w": 760,
          "url": "/media/rosella-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/rosella-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/rosella-320.webp"
        },
        {
          "w": 520,
          "url": "/media/rosella-520.webp"
        },
        {
          "w": 760,
          "url": "/media/rosella-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/rosella-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/rosella-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/rosella-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/rosella-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/rosella-1024.jpg"
        }
      ]
    }
  },
  "americano": {
    "alt": "Segelas Americano Jamuin dengan gradasi kopi pekat di atas lapisan bening",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAABwAwCdASoQABgAPxl4slEspySisAgBkCMJYwAAYdeAKGHd4+AA/ll5Jk/yH4Bkp8sKdgrFhZawvbqe/MvhIyUDm3WIJCY30PKFeXqAAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/americano-320.avif"
        },
        {
          "w": 520,
          "url": "/media/americano-520.avif"
        },
        {
          "w": 760,
          "url": "/media/americano-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/americano-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/americano-320.webp"
        },
        {
          "w": 520,
          "url": "/media/americano-520.webp"
        },
        {
          "w": 760,
          "url": "/media/americano-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/americano-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/americano-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/americano-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/americano-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/americano-1024.jpg"
        }
      ]
    }
  },
  "americanoLemon": {
    "alt": "Segelas Americano Lemon Jamuin dengan irisan lemon di dalam kopi dingin",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAwCdASoQABgAPxl4slCspySisAgBkCMJYwAAUZP7naeAAP7E0zlwihDYI7jAPQ6tkkQyKplDmnXShkkQ/eN1bxq3NLNI3jf9BAAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/americanoLemon-320.avif"
        },
        {
          "w": 520,
          "url": "/media/americanoLemon-520.avif"
        },
        {
          "w": 760,
          "url": "/media/americanoLemon-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/americanoLemon-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/americanoLemon-320.webp"
        },
        {
          "w": 520,
          "url": "/media/americanoLemon-520.webp"
        },
        {
          "w": 760,
          "url": "/media/americanoLemon-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/americanoLemon-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/americanoLemon-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/americanoLemon-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/americanoLemon-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/americanoLemon-1024.jpg"
        }
      ]
    }
  },
  "panglima": {
    "alt": "Segelas Kopi Kerajaan Jamuin di atas meja marmer putih",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAwCdASoQABgAPxl2s1EspySisAgBkCMJQBWABDv50yUX7GWZWIAA/up1RZ7mB4jn30ydOMN79tlVkRF77bcHRnCzSvHakM2vBjUASTQUiMAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/panglima-320.avif"
        },
        {
          "w": 520,
          "url": "/media/panglima-520.avif"
        },
        {
          "w": 760,
          "url": "/media/panglima-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/panglima-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/panglima-320.webp"
        },
        {
          "w": 520,
          "url": "/media/panglima-520.webp"
        },
        {
          "w": 760,
          "url": "/media/panglima-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/panglima-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/panglima-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/panglima-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/panglima-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/panglima-1024.jpg"
        }
      ]
    }
  },
  "kopsu": {
    "alt": "Segelas Kopsu Himalaya Salt Jamuin dengan lapisan krem lembut di bagian atas",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAwCdASoQABgAPxl4tFGspyUisAgBkCMJYwAAW5y8mHixrkMEbgAA/dpB6U/COsNZwD4Wiaswt+upDBsy95jww3k9jex7ovv+TyoAAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/kopsu-320.avif"
        },
        {
          "w": 520,
          "url": "/media/kopsu-520.avif"
        },
        {
          "w": 760,
          "url": "/media/kopsu-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/kopsu-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/kopsu-320.webp"
        },
        {
          "w": 520,
          "url": "/media/kopsu-520.webp"
        },
        {
          "w": 760,
          "url": "/media/kopsu-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/kopsu-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/kopsu-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/kopsu-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/kopsu-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/kopsu-1024.jpg"
        }
      ]
    }
  },
  "kopsuCinnamon": {
    "alt": "Segelas Kopsu Cinnamon Jamuin dengan taburan bubuk kayu manis di bagian atas",
    "width": 1024,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAwCdASoQABgAPxmGtlMsqiUisAgBkCMJYgC7ACHe0FoIXIg7SptAAP7eq2ZdAVr49XzaJNZdZzfanm5WMwSrWmmLYUgy/36ObsyAAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/kopsuCinnamon-320.avif"
        },
        {
          "w": 520,
          "url": "/media/kopsuCinnamon-520.avif"
        },
        {
          "w": 760,
          "url": "/media/kopsuCinnamon-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/kopsuCinnamon-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/kopsuCinnamon-320.webp"
        },
        {
          "w": 520,
          "url": "/media/kopsuCinnamon-520.webp"
        },
        {
          "w": 760,
          "url": "/media/kopsuCinnamon-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/kopsuCinnamon-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/kopsuCinnamon-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/kopsuCinnamon-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/kopsuCinnamon-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/kopsuCinnamon-1024.jpg"
        }
      ]
    }
  },
  "bottles": {
    "alt": "Deretan botol Jamuin Booster — Jahe, Kunyit, dan Kencur — berjajar di atas meja putih",
    "width": 1024,
    "height": 1024,
    "lqip": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoQABAABABsJagCdACz0ABqZgAA/rDvpM83rThOFEQ+SEBy6Ei6SA7WS+aWOI3EwYeb8NeqiaDJuuwS8gfdAAAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/bottles-320.avif"
        },
        {
          "w": 520,
          "url": "/media/bottles-520.avif"
        },
        {
          "w": 760,
          "url": "/media/bottles-760.avif"
        },
        {
          "w": 1024,
          "url": "/media/bottles-1024.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/bottles-320.webp"
        },
        {
          "w": 520,
          "url": "/media/bottles-520.webp"
        },
        {
          "w": 760,
          "url": "/media/bottles-760.webp"
        },
        {
          "w": 1024,
          "url": "/media/bottles-1024.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/bottles-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/bottles-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/bottles-760.jpg"
        },
        {
          "w": 1024,
          "url": "/media/bottles-1024.jpg"
        }
      ]
    }
  },
  "track": {
    "alt": "Segelas Jamuin diletakkan di lintasan lari sementara seseorang berlari melintas",
    "width": 2048,
    "height": 1365,
    "lqip": "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoQAAsABABsJbACdAChetgAAPhXFls1ZMsKxICLWPe5W+HM1t9b7e0G9LuQuD24AAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/track-320.avif"
        },
        {
          "w": 520,
          "url": "/media/track-520.avif"
        },
        {
          "w": 760,
          "url": "/media/track-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/track-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/track-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/track-320.webp"
        },
        {
          "w": 520,
          "url": "/media/track-520.webp"
        },
        {
          "w": 760,
          "url": "/media/track-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/track-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/track-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/track-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/track-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/track-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/track-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/track-1600.jpg"
        }
      ]
    }
  },
  "trail": {
    "alt": "Tangan menggenggam segelas Jamuin kuning saat beristirahat di jalur pendakian",
    "width": 1536,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoQABAABABsJaAC7AChNINpNAAA/u0KRlWPIhbaHex135lPFx8KFhvF+rtBdPoLwate0V6WIm2riaVY4l7fvnDSzI8AAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/trail-320.avif"
        },
        {
          "w": 520,
          "url": "/media/trail-520.avif"
        },
        {
          "w": 760,
          "url": "/media/trail-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/trail-1120.avif"
        },
        {
          "w": 1536,
          "url": "/media/trail-1536.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/trail-320.webp"
        },
        {
          "w": 520,
          "url": "/media/trail-520.webp"
        },
        {
          "w": 760,
          "url": "/media/trail-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/trail-1120.webp"
        },
        {
          "w": 1536,
          "url": "/media/trail-1536.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/trail-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/trail-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/trail-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/trail-1120.jpg"
        },
        {
          "w": 1536,
          "url": "/media/trail-1536.jpg"
        }
      ]
    }
  },
  "kids": {
    "alt": "Dua anak tertawa sambil mengangkat gelas Jamuin di padang rumput di bawah langit biru",
    "width": 1536,
    "height": 1536,
    "lqip": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAgCdASoQABAABABsJbACdGaAAvxQruNUAAD+ERbeZzTS9h/KzfbnncBMrgomE3RSz7Kq8/757tB5iJQpRcjt7zN2bqZixuKREAAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/kids-320.avif"
        },
        {
          "w": 520,
          "url": "/media/kids-520.avif"
        },
        {
          "w": 760,
          "url": "/media/kids-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/kids-1120.avif"
        },
        {
          "w": 1536,
          "url": "/media/kids-1536.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/kids-320.webp"
        },
        {
          "w": 520,
          "url": "/media/kids-520.webp"
        },
        {
          "w": 760,
          "url": "/media/kids-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/kids-1120.webp"
        },
        {
          "w": 1536,
          "url": "/media/kids-1536.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/kids-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/kids-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/kids-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/kids-1120.jpg"
        },
        {
          "w": 1536,
          "url": "/media/kids-1536.jpg"
        }
      ]
    }
  },
  "galSignageTeal": {
    "alt": "Papan nama gerai Jamuin Kopi & Rempah dengan spanduk ucapan terima kasih di lokasi baru",
    "width": 6048,
    "height": 6048,
    "lqip": "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoQABAABABsJaACdACkIuq4AADh+npA5oR0SXqAF1Bz6JqSJcCulAVFk9Gk8NFvKNGPYNdwb4xb1EAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galSignageTeal-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galSignageTeal-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galSignageTeal-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galSignageTeal-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galSignageTeal-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galSignageTeal-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galSignageTeal-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galSignageTeal-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galSignageTeal-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galSignageTeal-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galSignageTeal-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galSignageTeal-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galSignageTeal-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galSignageTeal-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galSignageTeal-1600.jpg"
        }
      ]
    }
  },
  "galSignageOrange": {
    "alt": "Tampak depan gerai Jamuin dengan logo dan pelanggan berjalan masuk",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAQAgCdASoQABAABABsJYwCdADPx9mTYVMAAP7EO8kkl6+toa5E1B58o3c4uRBh3R0EZUZC6TdG4rNjLZedAAAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galSignageOrange-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galSignageOrange-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galSignageOrange-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galSignageOrange-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galSignageOrange-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galSignageOrange-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galSignageOrange-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galSignageOrange-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galSignageOrange-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galSignageOrange-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galSignageOrange-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galSignageOrange-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galSignageOrange-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galSignageOrange-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galSignageOrange-1600.jpg"
        }
      ]
    }
  },
  "galStaffCounter": {
    "alt": "Barista Jamuin menyiapkan pesanan di balik meja counter",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAAAwAgCdASoQABAABABsJZgCdADGmLdoGXsAAAD+ljfitVT2yiwD/Powx+HtWQZJxDUNZ/RReRMKVphjtCwwAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galStaffCounter-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galStaffCounter-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galStaffCounter-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galStaffCounter-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galStaffCounter-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galStaffCounter-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galStaffCounter-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galStaffCounter-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galStaffCounter-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galStaffCounter-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galStaffCounter-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galStaffCounter-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galStaffCounter-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galStaffCounter-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galStaffCounter-1600.jpg"
        }
      ]
    }
  },
  "galStaffDuo": {
    "alt": "Dua barista Jamuin tersenyum di balik counter gerai",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoQABAABABsJQBOgB9RpnhwfQAA/d9SA8n8Se3bDcH9MY+2Ov+jhD2FH/dOJHbfTYGFa/cgAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galStaffDuo-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galStaffDuo-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galStaffDuo-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galStaffDuo-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galStaffDuo-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galStaffDuo-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galStaffDuo-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galStaffDuo-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galStaffDuo-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galStaffDuo-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galStaffDuo-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galStaffDuo-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galStaffDuo-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galStaffDuo-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galStaffDuo-1600.jpg"
        }
      ]
    }
  },
  "galCustomersFriends": {
    "alt": "Sekelompok teman duduk santai menikmati minuman Jamuin di gerai",
    "width": 6048,
    "height": 6048,
    "lqip": "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoQABAABABsJYwAAp04ej7DgAD+YGmHD+pN8JO18ujFdxW7BS+qbQezABsWT8zlcymIT1T/AAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galCustomersFriends-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galCustomersFriends-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galCustomersFriends-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersFriends-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersFriends-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galCustomersFriends-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galCustomersFriends-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galCustomersFriends-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersFriends-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersFriends-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galCustomersFriends-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galCustomersFriends-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galCustomersFriends-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersFriends-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersFriends-1600.jpg"
        }
      ]
    }
  },
  "galCustomersFamily": {
    "alt": "Keluarga pelanggan berfoto bersama di depan gerai Jamuin",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQABAABABsJYgAAp2P7OXtXAAA/tHfmXe8PK3U9a/b7vpiumzHjl3wvNNQhGh1nxUk5sw/Tb/t6du2WlBwAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galCustomersFamily-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galCustomersFamily-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galCustomersFamily-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersFamily-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersFamily-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galCustomersFamily-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galCustomersFamily-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galCustomersFamily-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersFamily-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersFamily-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galCustomersFamily-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galCustomersFamily-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galCustomersFamily-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersFamily-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersFamily-1600.jpg"
        }
      ]
    }
  },
  "galCustomersBooth": {
    "alt": "Tiga pelanggan duduk di booth gerai Jamuin sambil memegang minuman",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoQABAABABsJYwC7ACb8HQMAAD+eNWwr3/uv4foP9XHOzfNXE2nzPREgV4ePoUfB+0+pzk8UaYojdvQAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galCustomersBooth-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galCustomersBooth-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galCustomersBooth-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersBooth-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersBooth-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galCustomersBooth-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galCustomersBooth-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galCustomersBooth-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersBooth-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersBooth-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galCustomersBooth-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galCustomersBooth-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galCustomersBooth-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersBooth-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersBooth-1600.jpg"
        }
      ]
    }
  },
  "galCustomersOutdoor": {
    "alt": "Sekelompok pelanggan mengobrol santai di meja luar gerai Jamuin",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoQABAABABsJQBdgBb2cVeLIAAA/sxi/JpARlANmYzSTXUh428DnHFaFrFqbSBR3qmW8JULs6ifBJAA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galCustomersOutdoor-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galCustomersOutdoor-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galCustomersOutdoor-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersOutdoor-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersOutdoor-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galCustomersOutdoor-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galCustomersOutdoor-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galCustomersOutdoor-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersOutdoor-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersOutdoor-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galCustomersOutdoor-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galCustomersOutdoor-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galCustomersOutdoor-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galCustomersOutdoor-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galCustomersOutdoor-1600.jpg"
        }
      ]
    }
  },
  "galInterior": {
    "alt": "Suasana interior gerai Jamuin dengan meja, kursi, dan area kasir",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoQABAABABsJZQAAfxn9AAA+l3qwaJWrfezS+09/3fFrCGbq1a4U/MuuyAAAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galInterior-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galInterior-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galInterior-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galInterior-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galInterior-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galInterior-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galInterior-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galInterior-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galInterior-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galInterior-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galInterior-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galInterior-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galInterior-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galInterior-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galInterior-1600.jpg"
        }
      ]
    }
  },
  "galCommunityWall": {
    "alt": "Botol tumbler Jamuin berjajar di samping papan harapan penuh catatan pelanggan",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoQABAABABsJZACdABYlgAA/Nhxw5a1O/39zUUf81O6hS//+YehuP6lxlggiP4BtW15TjQA",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galCommunityWall-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galCommunityWall-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galCommunityWall-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galCommunityWall-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galCommunityWall-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galCommunityWall-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galCommunityWall-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galCommunityWall-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galCommunityWall-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galCommunityWall-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galCommunityWall-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galCommunityWall-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galCommunityWall-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galCommunityWall-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galCommunityWall-1600.jpg"
        }
      ]
    }
  },
  "galPromoBanner": {
    "alt": "Spanduk promo Gebyar Akhir Tahun Jamuin terpasang di depan gerai",
    "width": 2160,
    "height": 2160,
    "lqip": "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoQABAABABsJZQAAg4f4ZAAAPgldLA3PP1lJky6YedURYgY+OzDOoFAAAA=",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galPromoBanner-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galPromoBanner-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galPromoBanner-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galPromoBanner-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galPromoBanner-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galPromoBanner-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galPromoBanner-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galPromoBanner-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galPromoBanner-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galPromoBanner-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galPromoBanner-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galPromoBanner-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galPromoBanner-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galPromoBanner-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galPromoBanner-1600.jpg"
        }
      ]
    }
  },
  "galProductHold": {
    "alt": "Pelanggan memegang dua gelas minuman Jamuin di depan gerai",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAAAQAgCdASoQABAABABsJYgC7ADb9v8EESKwAP7zmsj2GjdZxAHNZpRHH2YXp8Mx9c3cx4Rp9iN85FV6aULMKvdqpQVaaA32bAAAAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galProductHold-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galProductHold-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galProductHold-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galProductHold-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galProductHold-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galProductHold-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galProductHold-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galProductHold-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galProductHold-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galProductHold-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galProductHold-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galProductHold-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galProductHold-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galProductHold-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galProductHold-1600.jpg"
        }
      ]
    }
  },
  "galTeamBanner": {
    "alt": "Anggota tim Jamuin memasang spanduk promo di depan gerai",
    "width": 3024,
    "height": 3024,
    "lqip": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQABAABABsJZQCdAEDxujDGsgA/tavWsdm26QS7iHsCs4aAuh3uPNNw2YqOnfs+58nSlX3QwUpJtZS5QAAAA==",
    "sources": {
      "avif": [
        {
          "w": 320,
          "url": "/media/galTeamBanner-320.avif"
        },
        {
          "w": 520,
          "url": "/media/galTeamBanner-520.avif"
        },
        {
          "w": 760,
          "url": "/media/galTeamBanner-760.avif"
        },
        {
          "w": 1120,
          "url": "/media/galTeamBanner-1120.avif"
        },
        {
          "w": 1600,
          "url": "/media/galTeamBanner-1600.avif"
        }
      ],
      "webp": [
        {
          "w": 320,
          "url": "/media/galTeamBanner-320.webp"
        },
        {
          "w": 520,
          "url": "/media/galTeamBanner-520.webp"
        },
        {
          "w": 760,
          "url": "/media/galTeamBanner-760.webp"
        },
        {
          "w": 1120,
          "url": "/media/galTeamBanner-1120.webp"
        },
        {
          "w": 1600,
          "url": "/media/galTeamBanner-1600.webp"
        }
      ],
      "jpeg": [
        {
          "w": 320,
          "url": "/media/galTeamBanner-320.jpg"
        },
        {
          "w": 520,
          "url": "/media/galTeamBanner-520.jpg"
        },
        {
          "w": 760,
          "url": "/media/galTeamBanner-760.jpg"
        },
        {
          "w": 1120,
          "url": "/media/galTeamBanner-1120.jpg"
        },
        {
          "w": 1600,
          "url": "/media/galTeamBanner-1600.jpg"
        }
      ]
    }
  }
} satisfies Record<string, MediaEntry>

export type MediaKey = keyof typeof media
