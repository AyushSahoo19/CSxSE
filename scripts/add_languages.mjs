import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src', 'content', 'dictionary');

const languages = [
  {
    term: "Assembly Language",
    category: "Programming Languages & Paradigms",
    level: "Expert",
    definition: "A low-level programming language that is closely related to the hardware architecture (machine code). It uses mnemonics to represent CPU instructions.",
    example: "Used for writing device drivers, hardware-level optimizations, and kernels where direct hardware control and maximum performance are critical."
  },
  {
    term: "C",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "A powerful, efficient systems programming language that provides low-level memory access and is the foundation for most modern operating systems like Linux and Windows.",
    example: "The Linux Kernel is written predominantly in C, taking advantage of its ability to manage memory directly and its high performance."
  },
  {
    term: "C++",
    category: "Programming Languages & Paradigms",
    level: "Advanced",
    definition: "An extension of C that adds object-oriented, generic, and functional features. It is widely used for performance-critical applications like game engines and high-frequency trading.",
    example: "The Unreal Engine is built with C++, allowing game developers to create highly optimized and visually stunning 3D environments."
  },
  {
    term: "Rust",
    category: "Programming Languages & Paradigms",
    level: "Advanced",
    definition: "A modern systems programming language focused on safety, especially memory safety and concurrency, without sacrificing performance (no garbage collector).",
    example: "Cloudflare and Discord use Rust to build high-performance network services that are safe from common memory-related bugs like buffer overflows."
  },
  {
    term: "Go (Golang)",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "A statically typed, compiled language designed at Google for simplicity and high-performance concurrency (via Goroutines). Perfect for cloud-native backend services.",
    example: "Docker and Kubernetes are built in Go, utilizing its excellent support for concurrent processes and efficient networking."
  },
  {
    term: "Java",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "A class-based, object-oriented language designed for 'Write Once, Run Anywhere' (WORA) portability via the Java Virtual Machine (JVM). A staple of enterprise software.",
    example: "Used by major banks for core transaction processing systems and by Android for legacy mobile application development."
  },
  {
    term: "Python",
    category: "Programming Languages & Paradigms",
    level: "Foundational",
    definition: "An interpreted, high-level, general-purpose programming language with a focus on readability. It is the leading language for Data Science, AI, and Automation.",
    example: "Building a machine learning model using PyTorch or Scikit-learn, or writing a quick script to automate spreadsheet processing."
  },
  {
    term: "TypeScript",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "A superset of JavaScript developed by Microsoft that adds static typing. It helps developers catch errors at compile-time rather than runtime in large-scale web apps.",
    example: "Developing a massive web application like VS Code or Slack, where strong typing prevents breaking changes in a codebase with thousands of contributors."
  },
  {
    term: "Swift",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "Apple's modern programming language for iOS, macOS, watchOS, and tvOS. It focuses on performance, safety, and modern syntax compared to Objective-C.",
    example: "Building a native iPhone app that uses the camera, sensors, and high-quality UI animations provided by the iOS SDK."
  },
  {
    term: "Kotlin",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "A modern, concise, cross-platform language that is the officially recommended language for Android development by Google. It is fully interoperable with Java.",
    example: "Migrating an old Android banking app from Java to Kotlin to reduce boilerplate code and prevent NullPointerExceptions."
  },
  {
    term: "Ruby",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "A dynamic, object-oriented language known for its elegant syntax. Most famous for the Ruby on Rails framework which popularized the MVC pattern for web development.",
    example: "Building a fast-growing startup like Shopify or GitHub, where developer productivity and rapid feature iteration are priority #1."
  },
  {
    term: "PHP",
    category: "Programming Languages & Paradigms",
    level: "Foundational",
    definition: "A server-side scripting language primarily used for web development. It remains the backbone of a huge portion of the internet through CMS systems like WordPress.",
    example: "Creating a dynamic blog or e-commerce site using WordPress or the Laravel framework for more complex custom backends."
  },
  {
    term: "C# (.NET)",
    category: "Programming Languages & Paradigms",
    level: "Intermediate",
    definition: "Microsoft's flagship object-oriented language. It is incredibly versatile, used for enterprise backends, Windows desktop apps, and Unity game development.",
    example: "Developing a 2D or 3D indie game in Unity or building a complex corporate management system on the .NET Core platform."
  },
  {
    term: "SQL (Structured Query Language)",
    category: "Programming Languages & Paradigms",
    level: "Foundational",
    definition: "A domain-specific language used for managing data held in a relational database management system (RDBMS). It is essential for data persistence.",
    example: "Querying a database to fetch 'all users who purchased a subscription in the last 30 days' for a marketing report."
  },
  {
    term: "Haskell",
    category: "Programming Languages & Paradigms",
    level: "Expert",
    definition: "A purely functional programming language with strong static typing and lazy evaluation. It is used to teach computer science theory and for high-reliability systems.",
    example: "Building ultra-secure financial transaction systems or complex compiler tools where mathematical correctness is paramount."
  }
];

languages.forEach(item => {
  const slug = item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const frontmatter = `---
term: "${item.term}"
category: "${item.category}"
level: "${item.level}"
---

${item.definition}

### Application & Where to Use

${item.example}
`;
  fs.writeFileSync(path.join(contentDir, `${slug}.md`), frontmatter);
});

console.log(`Successfully generated ${languages.length} programming language terms.`);
