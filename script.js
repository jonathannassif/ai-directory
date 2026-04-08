// ─── CONSTANTS ─────────────────────────────────────────────────

const STORAGE_KEY = "ai-directory-tools";
const STORAGE_VERSION_KEY = "ai-directory-version";
const STORAGE_VERSION = "v2";

const CATEGORY_META = {
  all: {
    title: "All Tools",
    subtitle: "Browse the best AI tools available",
    emoji: "⚡",
  },
  chatbot: {
    title: "Chatbot",
    subtitle: "Conversational AI assistants",
    emoji: "💬",
  },
  image: {
    title: "Image Generation",
    subtitle: "Create images with AI",
    emoji: "🖼️",
  },
  video: {
    title: "Video Generation",
    subtitle: "Generate and edit videos with AI",
    emoji: "🎬",
  },
  writing: {
    title: "Writing",
    subtitle: "AI tools for writing and content",
    emoji: "✍️",
  },
  resume: {
    title: "Resume Builders",
    subtitle: "Build your resume with AI",
    emoji: "📄",
  },
  coding: { title: "Coding", subtitle: "AI tools for developers", emoji: "💻" },
  audio: {
    title: "Audio & Music",
    subtitle: "Generate voices and music with AI",
    emoji: "🎵",
  },
  productivity: {
    title: "Productivity",
    subtitle: "Work smarter with AI automation",
    emoji: "🚀",
  },
};

const DEFAULT_TOOLS = [
  {
    name: "ChatGPT",
    category: "chatbot",
    link: "https://chat.openai.com",
    image: "./assets/ChatGPT-Logo.png",
    description:
      "The most popular AI chatbot by OpenAI. Great for writing, coding, and answering questions.",
  },
  {
    name: "Claude",
    category: "chatbot",
    link: "https://claude.ai",
    image: "./assets/Claude_AI_logo.png",
    description:
      "AI assistant by Anthropic. Known for being helpful, harmless, and honest.",
  },
  {
    name: "Gemini",
    category: "chatbot",
    link: "https://gemini.google.com",
    image: "./assets/Google_Gemini_logo.svg.png",
    description:
      "Google's AI assistant integrated with Google services and Search.",
  },
  {
    name: "Perplexity",
    category: "chatbot",
    link: "https://perplexity.ai",
    image: "./assets/images.png",
    description:
      "AI-powered search engine that gives direct answers with sources.",
  },
  {
    name: "Midjourney",
    category: "image",
    link: "https://midjourney.com",
    image: "./assets/Midjourney_Emblem.svg.png",
    description: "Generate stunning AI artwork and images from text prompts.",
  },
  {
    name: "DALL·E",
    category: "image",
    link: "https://openai.com/dall-e-3",
    image: "./assets/Dall-E-Logo-PNG-758x473.jpg",
    description:
      "OpenAI's image generation model. Create images from text descriptions.",
  },
  {
    name: "Stable Diffusion",
    category: "image",
    link: "https://stability.ai",
    image: "./assets/stable.jfif",
    description:
      "Open source image generation model you can run locally or in the cloud.",
  },
  {
    name: "Adobe Firefly",
    category: "image",
    link: "https://firefly.adobe.com",
    image: "./assets/Adobe_Firefly_Logo.svg.png",
    description: "Adobe's AI image generator built into Creative Cloud tools.",
  },
  {
    name: "Runway",
    category: "video",
    link: "https://runwayml.com",
    image: "./assets/runaway.png",
    description:
      "AI-powered video generation and editing platform used by professionals.",
  },
  {
    name: "Sora",
    category: "video",
    link: "https://openai.com/sora",
    image: "https://logo.clearbit.com/openai.com",
    description:
      "OpenAI's text-to-video model. Generate realistic videos from prompts.",
  },
  {
    name: "Pika",
    category: "video",
    link: "https://pika.art",
    image: "https://logo.clearbit.com/pika.art",
    description: "Create and edit videos using AI with simple text prompts.",
  },
  {
    name: "Kling",
    category: "video",
    link: "https://klingai.com",
    image: "https://logo.clearbit.com/klingai.com",
    description: "High quality AI video generation from text or image inputs.",
  },
  {
    name: "Jasper",
    category: "writing",
    link: "https://jasper.ai",
    image: "https://logo.clearbit.com/jasper.ai",
    description:
      "AI writing assistant for marketing copy, blogs, and long-form content.",
  },
  {
    name: "Copy.ai",
    category: "writing",
    link: "https://copy.ai",
    image: "https://logo.clearbit.com/copy.ai",
    description:
      "Generate marketing copy, emails, and social media posts instantly.",
  },
  {
    name: "Grammarly",
    category: "writing",
    link: "https://grammarly.com",
    image: "https://logo.clearbit.com/grammarly.com",
    description:
      "AI-powered writing assistant that checks grammar and improves clarity.",
  },
  {
    name: "Notion AI",
    category: "writing",
    link: "https://notion.so",
    image: "https://logo.clearbit.com/notion.so",
    description:
      "AI writing assistant built directly inside Notion for notes and docs.",
  },
  {
    name: "Kickresume",
    category: "resume",
    link: "https://kickresume.com",
    image: "https://logo.clearbit.com/kickresume.com",
    description:
      "Build professional resumes and cover letters using AI suggestions.",
  },
  {
    name: "Resume.io",
    category: "resume",
    link: "https://resume.io",
    image: "https://logo.clearbit.com/resume.io",
    description:
      "Easy resume builder with AI suggestions and professional templates.",
  },
  {
    name: "Rezi",
    category: "resume",
    link: "https://rezi.ai",
    image: "https://logo.clearbit.com/rezi.ai",
    description: "AI resume builder optimized for applicant tracking systems.",
  },
  {
    name: "GitHub Copilot",
    category: "coding",
    link: "https://github.com/features/copilot",
    image: "https://logo.clearbit.com/github.com",
    description:
      "AI pair programmer that suggests code as you type inside VS Code.",
  },
  {
    name: "Cursor",
    category: "coding",
    link: "https://cursor.sh",
    image: "https://logo.clearbit.com/cursor.sh",
    description:
      "AI-first code editor built on VS Code. Chat with your entire codebase.",
  },
  {
    name: "Tabnine",
    category: "coding",
    link: "https://tabnine.com",
    image: "https://logo.clearbit.com/tabnine.com",
    description: "AI code completion tool that works with all major editors.",
  },
  {
    name: "ElevenLabs",
    category: "audio",
    link: "https://elevenlabs.io",
    image: "https://logo.clearbit.com/elevenlabs.io",
    description:
      "Generate realistic AI voices and clone any voice from audio samples.",
  },
  {
    name: "Suno",
    category: "audio",
    link: "https://suno.ai",
    image: "https://logo.clearbit.com/suno.ai",
    description:
      "Generate full songs with vocals and music from a text prompt.",
  },
  {
    name: "Udio",
    category: "audio",
    link: "https://udio.com",
    image: "https://logo.clearbit.com/udio.com",
    description:
      "AI music generator that creates high quality songs from descriptions.",
  },
  {
    name: "Notion",
    category: "productivity",
    link: "https://notion.so",
    image: "https://logo.clearbit.com/notion.so",
    description:
      "All-in-one workspace with AI built in for notes, tasks, and wikis.",
  },
  {
    name: "Zapier",
    category: "productivity",
    link: "https://zapier.com",
    image: "https://logo.clearbit.com/zapier.com",
    description: "Automate workflows between apps using AI-powered automation.",
  },
  {
    name: "Motion",
    category: "productivity",
    link: "https://usemotion.com",
    image: "https://logo.clearbit.com/usemotion.com",
    description:
      "AI calendar that automatically schedules your tasks and meetings.",
  },
];

// ─── STATE ─────────────────────────────────────────────────────

let tools = [];
let currentCategory = "all";
let searchQuery = "";
let showHidden = false;
let editingToolName = null;

// Derived from URL — read-only at runtime.
const isAdmin =
  new URLSearchParams(window.location.search).get("admin") === "1";

// ─── LOCAL STORAGE ─────────────────────────────────────────────

function saveTools() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tools));
}

function loadTools() {
  const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);

  if (storedVersion !== STORAGE_VERSION) {
    // Version mismatch — clear stale data and seed defaults.
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
    return DEFAULT_TOOLS.map((t) => ({ ...t }));
  }

  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : DEFAULT_TOOLS.map((t) => ({ ...t }));
}

function resetStorage() {
  if (!confirm("Reset all tools to default? This will undo all changes."))
    return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_VERSION_KEY);
  tools = DEFAULT_TOOLS.map((t) => ({ ...t }));
  saveTools();
  renderCards(getFilteredTools());
}

// ─── FILTERING ─────────────────────────────────────────────────

function getFilteredTools() {
  const q = searchQuery.toLowerCase();

  return tools.filter((tool) => {
    if (tool.hidden && !showHidden) return false;
    if (currentCategory !== "all" && tool.category !== currentCategory)
      return false;
    if (!q) return true;

    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q)
    );
  });
}

// ─── HEADER ────────────────────────────────────────────────────

function updateHeader(category) {
  const meta = CATEGORY_META[category] ?? { title: category, subtitle: "" };
  document.getElementById("category-title").textContent = meta.title;
  document.getElementById("category-subtitle").textContent = meta.subtitle;
  document.title = `${meta.title} — AI Directory`;
}

// ─── TOOL COUNT ────────────────────────────────────────────────

function updateToolCount(count) {
  const el = document.getElementById("tool-count");
  if (el) el.textContent = `${count} tool${count !== 1 ? "s" : ""}`;
}

// ─── FADE-IN (INTERSECTION OBSERVER) ──────────────────────────

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target); // Observe only once per element.
      }
    });
  },
  { threshold: 0.1 },
);

function observeFadeElements() {
  document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => {
    fadeObserver.observe(el);
  });
}

// ─── HELPERS ───────────────────────────────────────────────────

/**
 * Safely escape a tool name for use inside an HTML attribute string.
 * Replaces single quotes so the value can sit inside onclick="...".
 */
function escapeAttr(str) {
  return str.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

/**
 * Derive a Clearbit logo URL from a link, falling back to an empty string.
 */
function logoFromLink(link) {
  try {
    const url = new URL(link.startsWith("http") ? link : `https://${link}`);
    return `https://logo.clearbit.com/${url.hostname}`;
  } catch {
    return "";
  }
}

// ─── RENDER CARDS ──────────────────────────────────────────────

function buildCardHTML(tool) {
  const safeName = escapeAttr(tool.name);

  const hiddenBadge = tool.hidden
    ? `<span class="px-2 py-0.5 text-xs bg-gray-100 text-gray-400 rounded-full border border-gray-200 ml-1">Hidden</span>`
    : "";

  const adminButtons = isAdmin
    ? `<div class="flex gap-2 mt-3 pt-3 border-t border-gray-100 flex-wrap">
        <button onclick="openEditForm('${safeName}')"   class="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 font-medium">Edit</button>
        <button onclick="toggleHideTool('${safeName}')" class="px-3 py-1 text-xs ${tool.hidden ? "bg-green-100 text-green-600 hover:bg-green-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"} rounded-lg font-medium">
          ${tool.hidden ? "Unhide" : "Hide"}
        </button>
        <button onclick="deleteTool('${safeName}')"     class="px-3 py-1 text-xs bg-red-100 text-red-600 rounded-lg hover:bg-red-200 font-medium">Delete</button>
      </div>`
    : "";

  const cardBorder = tool.hidden
    ? "border-gray-200 opacity-60"
    : "border-gray-100 hover:shadow-md hover:border-blue-100";

  return `
    <div class="fade-in bg-white p-5 rounded-xl shadow-sm mb-4 border ${cardBorder} transition-all duration-200">
      <div class="flex items-start gap-4">
        <div class="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src="${tool.image}"
            alt="${tool.name} logo"
            class="w-10 h-10 object-contain"
            onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\'font-size:24px\'>🤖</span>'"
          />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <h2 class="font-bold text-gray-800 text-base">${tool.name}</h2>
            <span class="px-2 py-0.5 text-xs bg-blue-50 text-blue-600 rounded-full font-medium border border-blue-100">${tool.category}</span>
            ${hiddenBadge}
          </div>
          <p class="text-gray-500 text-sm leading-relaxed">${tool.description}</p>
          <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">
            Visit site →
          </a>
          ${adminButtons}
        </div>
      </div>
    </div>`;
}

function renderCards(filteredTools) {
  const container = document.getElementById("card-container");
  updateToolCount(filteredTools.length);

  if (filteredTools.length === 0) {
    const resetBtn = isAdmin
      ? `<button onclick="resetStorage()" class="mt-4 px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-gray-200">Reset to default</button>`
      : "";
    container.innerHTML = `
      <div class="text-center mt-20">
        <p class="text-4xl mb-4">🔍</p>
        <p class="text-gray-400 text-lg">No tools found.</p>
        ${resetBtn}
      </div>`;
    return;
  }

  container.innerHTML = filteredTools.map(buildCardHTML).join("");
  observeFadeElements();
}

// ─── DELETE ────────────────────────────────────────────────────

function deleteTool(toolName) {
  if (!isAdmin) return;
  if (!confirm(`Are you sure you want to delete "${toolName}"?`)) return;

  const index = tools.findIndex((t) => t.name === toolName);
  if (index !== -1) tools.splice(index, 1);

  saveTools();
  renderCards(getFilteredTools());
}

// ─── HIDE / UNHIDE ─────────────────────────────────────────────

function toggleHideTool(toolName) {
  if (!isAdmin) return;

  const tool = tools.find((t) => t.name === toolName);
  if (tool) tool.hidden = !tool.hidden;

  saveTools();
  renderCards(getFilteredTools());
}

function toggleShowHidden() {
  showHidden = !showHidden;
  document.getElementById("show-hidden-btn").textContent = showHidden
    ? "Hide Hidden Tools"
    : "Show Hidden Tools";
  renderCards(getFilteredTools());
}

// ─── ADD / EDIT FORM ───────────────────────────────────────────

function getFormField(id) {
  return document.getElementById(id);
}

function openAddForm() {
  editingToolName = null;
  getFormField("form-title").textContent = "Add New Tool";
  getFormField("form-name").value = "";
  getFormField("form-category").value = "";
  getFormField("form-link").value = "";
  getFormField("form-image").value = "";
  getFormField("form-description").value = "";
  getFormField("tool-form").classList.remove("hidden");
  getFormField("form-name").focus();
}

function openEditForm(toolName) {
  const tool = tools.find((t) => t.name === toolName);
  if (!tool) return;

  editingToolName = toolName;
  getFormField("form-title").textContent = "Edit Tool";
  getFormField("form-name").value = tool.name;
  getFormField("form-category").value = tool.category;
  getFormField("form-link").value = tool.link;
  getFormField("form-image").value = tool.image ?? "";
  getFormField("form-description").value = tool.description;
  getFormField("tool-form").classList.remove("hidden");
  getFormField("form-name").focus();
}

function closeForm() {
  getFormField("tool-form").classList.add("hidden");
  editingToolName = null;
}

function submitForm() {
  const name = getFormField("form-name").value.trim();
  const category = getFormField("form-category").value;
  const link = getFormField("form-link").value.trim();
  const imageInput = getFormField("form-image").value.trim();
  const description = getFormField("form-description").value.trim();

  if (!name || !category || !link || !description) {
    alert("Please fill in all required fields.");
    return;
  }

  // Fall back to Clearbit logo if no image URL was provided.
  const image = imageInput || logoFromLink(link);

  if (editingToolName) {
    const index = tools.findIndex((t) => t.name === editingToolName);
    if (index !== -1) {
      tools[index] = {
        ...tools[index],
        name,
        category,
        link,
        image,
        description,
      };
    }
  } else {
    if (tools.some((t) => t.name === name)) {
      alert("A tool with this name already exists.");
      return;
    }
    tools.push({ name, category, link, image, description, hidden: false });
  }

  saveTools();
  closeForm();
  renderCards(getFilteredTools());
}

// ─── SEARCH ────────────────────────────────────────────────────

function handleSearch(query) {
  searchQuery = query.trim();
  renderCards(getFilteredTools());
}

function syncSearchInputs(sourceId, targetId, value) {
  document.getElementById(targetId).value = value;
  handleSearch(value);
}

document.getElementById("search-input").addEventListener("input", (e) => {
  syncSearchInputs("search-input", "search-input-mobile", e.target.value);
});

document
  .getElementById("search-input-mobile")
  .addEventListener("input", (e) => {
    syncSearchInputs("search-input-mobile", "search-input", e.target.value);
  });

// ─── CATEGORY BUTTONS ──────────────────────────────────────────

function setActiveCategory(activeBtn) {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    const isActive = btn === activeBtn;
    btn.classList.toggle("bg-blue-500", isActive);
    btn.classList.toggle("text-white", isActive);
    btn.classList.toggle("bg-gray-100", !isActive);
    btn.classList.toggle("text-gray-700", !isActive);
  });
}

document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    searchQuery = "";

    document.getElementById("search-input").value = "";
    document.getElementById("search-input-mobile").value = "";

    setActiveCategory(btn);
    updateHeader(currentCategory);
    renderCards(getFilteredTools());

    if (window.innerWidth < 768) closeSidebar();
  });
});

// ─── SIDEBAR TOGGLE ────────────────────────────────────────────

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-btn");

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openSidebar);

// ─── ADMIN UI ──────────────────────────────────────────────────

if (isAdmin) {
  document.getElementById("admin-badge").classList.remove("hidden");
  document.getElementById("add-tool-btn").classList.remove("hidden");
}

// ─── INIT ──────────────────────────────────────────────────────

tools = loadTools();
updateHeader("all");
renderCards(getFilteredTools());
