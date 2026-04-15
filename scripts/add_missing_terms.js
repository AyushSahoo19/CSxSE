import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src', 'content', 'dictionary');

const newTerms = [
  // Hardware
  {
    term: "Central Processing Unit (CPU)",
    category: "Computer Architecture & Hardware",
    level: "Foundational",
    definition: "The primary component of a computer that acts as its 'brain.' It executes instructions of a computer program by performing basic arithmetic, logic, controlling, and I/O operations.",
    example: "When you open a web browser, the CPU fetches the program instructions from memory, decodes them, and executes them to render the UI."
  },
  {
    term: "Arithmetic Logic Unit (ALU)",
    category: "Computer Architecture & Hardware",
    level: "Intermediate",
    definition: "A digital circuit used to perform arithmetic and logic operations. It represents the fundamental building block of the Central Processing Unit (CPU) of a computer.",
    example: "During an IF statement evaluating `x > 5`, the ALU handles the mathematical comparison between the variable's value and 5."
  },
  {
    term: "Cache Coherence",
    category: "Computer Architecture & Hardware",
    level: "Expert",
    definition: "The uniformity of shared resource data that ends up stored in multiple local caches. When clients in a system maintain caches of a common memory resource, problems may arise with inconsistent data.",
    example: "In a multi-core processor, if Core A modifies variable X in its L1 cache, Cache Coherence protocols (like MESI) ensure Core B sees the updated value instead of stale data."
  },
  {
    term: "RISC vs CISC",
    category: "Computer Architecture & Hardware",
    level: "Advanced",
    definition: "Two different processor architecture philosophies. RISC (Reduced Instruction Set Computer) uses simple, fast instructions. CISC (Complex Instruction Set Computer) uses complex instructions that can execute multiple operations in one step.",
    example: "ARM processors (like Apple Silicon) use RISC, focusing on energy efficiency. Intel x86 processors use CISC, packing complex functions into single CPU instructions."
  },
  
  // Data Engineering
  {
    term: "ETL vs ELT",
    category: "Data Engineering & Big Data",
    level: "Intermediate",
    definition: "Data integration methodologies. ETL (Extract, Transform, Load) transforms data before loading into a warehouse. ELT (Extract, Load, Transform) loads raw data directly into the warehouse and uses the warehouse's power to transform it later.",
    example: "Using Python scripts on a small server to clean sales data before pushing it to PostgreSQL (ETL), versus pushing raw JSON logs directly into Snowflake and using SQL to query schemas dynamically (ELT)."
  },
  {
    term: "MapReduce",
    category: "Data Engineering & Big Data",
    level: "Advanced",
    definition: "A programming model for processing massively large datasets in parallel across a distributed cluster. It consists of a Map step (filtering and sorting) and a Reduce step (summary operation).",
    example: "Counting word occurrences across 10,000 Wikipedia articles: The 'Map' step counts words within individual files, and the 'Reduce' step aggregates those counts globally."
  },
  {
    term: "Data Lake",
    category: "Data Engineering & Big Data",
    level: "Foundational",
    definition: "A centralized repository that allows you to store all your structured and unstructured data at any scale without having to first structure the data.",
    example: "Storing raw website clickstream JSON logs, MP4 videos, and raw CSV files directly into an Amazon S3 bucket for future analysis."
  },
  {
    term: "Apache Spark",
    category: "Data Engineering & Big Data",
    level: "Advanced",
    definition: "An open-source, distributed processing system used for big data workloads. It utilizes in-memory caching and optimized query execution for fast analytic queries against data of any size.",
    example: "Processing terabytes of IoT sensor data in real-time to alert a factory about failing machinery using Spark Streaming."
  },

  // Mobile Development
  {
    term: "React Native",
    category: "Mobile Development",
    level: "Foundational",
    definition: "An open-source UI software framework created by Meta Platforms. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework.",
    example: "Building a food delivery app's UI simultaneously for iOS and Android entirely using JavaScript components."
  },
  {
    term: "Activity Lifecycle",
    category: "Mobile Development",
    level: "Intermediate",
    definition: "The set of states an Android Activity goes through from the time it's created until it's destroyed. Key callbacks include onCreate, onStart, onResume, onPause, onStop, and onDestroy.",
    example: "Using the `onPause` method to halt a video's playback when a user receives a phone call or switches to another app."
  },
  {
    term: "Flutter",
    category: "Mobile Development",
    level: "Foundational",
    definition: "An open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase using Dart.",
    example: "Drawing customized, highly complex 60fps animations that render identically on both iPhone and Android screens."
  },

  // Cryptography
  {
    term: "Public Key Infrastructure (PKI)",
    category: "Cryptography & Web3",
    level: "Advanced",
    definition: "A set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption.",
    example: "The underlying trust system that allows your browser to verify that the SSL certificate served by `bank.com` is legitimate via Certificate Authorities."
  },
  {
    term: "SHA-256",
    category: "Cryptography & Web3",
    level: "Intermediate",
    definition: "A cryptographic hash function that outputs a value that is 256 bits long. It's an industry standard for securely scrambling data.",
    example: "Verifying that a downloaded ISO file is authentic by checking if its output hash perfectly matches the publisher's provided SHA-256 checksum string."
  },
  {
    term: "Smart Contract",
    category: "Cryptography & Web3",
    level: "Advanced",
    definition: "A self-executing program stored on a blockchain that runs when predetermined conditions are met, eliminating the need for intermediaries.",
    example: "Code on the Ethereum network that automatically transfers digital assets between parties when a specific date is reached without a lawyer involved."
  },
  {
    term: "Consensus Mechanism",
    category: "Cryptography & Web3",
    level: "Expert",
    definition: "A fault-tolerant mechanism utilized in computer and blockchain systems to achieve the necessary agreement on a single data value or a single state of the network among distributed processes or multi-agent systems.",
    example: "Proof of Work (Bitcoin) and Proof of Stake (Ethereum), which ensure bad actors can't inject fake transactions without burning massive computational energy or currency."
  }
];

newTerms.forEach(item => {
  const slug = item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const frontmatter = `---
term: "${item.term.replace(/"/g, '\\"')}"
category: "${item.category.replace(/"/g, '\\"')}"
level: "${item.level.replace(/"/g, '\\"')}"
---

${item.definition}

### Example

${item.example}
`;
  fs.writeFileSync(path.join(contentDir, `${slug}.md`), frontmatter);
});

console.log('Created ' + newTerms.length + ' missing terms');
