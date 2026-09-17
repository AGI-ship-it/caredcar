import dictionary from "./i18n/ar.json";

// Arabic mode translates rendered text in place rather than threading t() through every page.
// A MutationObserver re-applies translations whenever React writes new English text, and
// the original strings are kept so switching back to English restores them exactly.

const DICT = dictionary as Record<string, string>;
const ATTRS = ["placeholder", "aria-label", "title", "alt"] as const;
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "PRE"]);

// Arabic counted nouns change form for 1, 2, 3–10 and 11+
function arCount(n: number, one: string, two: string, few: string, many: string) {
  if (n === 1) return one;
  if (n === 2) return two;
  if (n >= 3 && n <= 10) return `${n} ${few}`;
  return `${n} ${many}`;
}
const arCars = (n: number) => arCount(n, "سيارة واحدة", "سيارتان", "سيارات", "سيارة");
const arVehicles = (n: number) => arCount(n, "مركبة واحدة", "مركبتان", "مركبات", "مركبة");
const arYears = (n: number) => arCount(n, "سنة واحدة", "سنتان", "سنوات", "سنة");
const arDiffs = (n: number) => arCount(n, "فرق واحد", "فرقان", "فروقات", "فرقًا");
const arTime = (t: string, ampm: string) => `${t} ${ampm === "AM" ? "ص" : "م"}`;

const PATTERNS: [RegExp, (...m: string[]) => string | null][] = [
  [/^Show (\d+) cars?$/, (_, n) => `عرض ${arCars(Number(n))}`],
  [/^Search all (\d+) cars$/, (_, n) => `البحث في ${arCars(Number(n))}`],
  [/^Comparing (\d+) of (\d+) cars\.$/, (_, a, b) => `مقارنة ${a} من ${b} سيارات.`],
  [/^Comparing (\d+) of (\d+) cars$/, (_, a, b) => `مقارنة ${a} من ${b} سيارات`],
  [/^Comparing (\d+) of (\d+) cars · (\d+) differences?$/, (_, a, b, d) => `مقارنة ${a} من ${b} سيارات · ${arDiffs(Number(d))}`],
  [/^Pick up to (\d+) cars and weigh their specs, pricing and features side by side\.$/, (_, n) => `اختر حتى ${n} سيارات وقارن بين مواصفاتها وأسعارها ومزاياها جنبًا إلى جنب.`],
  [/^Showing (\d+) vehicles?$/, (_, n) => `عرض ${arVehicles(Number(n))}`],
  [/^(\d+) vehicles? found$/, (_, n) => `تم العثور على ${arVehicles(Number(n))}`],
  [/^Show all (\d+) makes$/, (_, n) => `عرض كل الماركات (${n})`],
  [/^(\d+) seats$/, (_, n) => (n === "2" ? "مقعدان" : `${n} مقاعد`)],
  [/^(\d+) Years?$/, (_, n) => arYears(Number(n))],
  [/^Principal (\d+)%, interest (\d+)%$/, (_, a, b) => `أصل المبلغ ${a}%، والفائدة ${b}%`],
  [/^Open now · until (\d+:\d+) (AM|PM)$/, (_, t, p) => `مفتوح الآن · حتى ${arTime(t, p)}`],
  [/^Closed · opens (today|tomorrow) at (\d+:\d+) (AM|PM)$/, (_, d, t, p) => `مغلق · يفتح ${d === "today" ? "اليوم" : "غدًا"} الساعة ${arTime(t, p)}`],
  [/^Shop (.+)$/, (_, x) => `تسوّق ${x}`],
  [/^(.+) view (\d+)$/, (_, x, n) => `${x} - الصورة ${n}`],
  [/^Up to ([\d,]+) km$/, (_, n) => `حتى ${n} كم`],
  [/^([\d,]+) km$/, (_, n) => `${n} كم`],
  [/^([\d.]+)k km$/, (_, n) => `${n} ألف كم`],
  [/^(\d+) min read$/, (_, n) => `قراءة ${n} دقائق`],
  [/^Continue \((\d)\/(\d)\)$/, (_, a, b) => `متابعة (${a}/${b})`],
  [/^Remove filter: (.+)$/, (_, x) => `إزالة عامل التصفية: ${translate(x) ?? x}`],
  [/^Show reviews (\d+) to (\d+)$/, (_, a, b) => `عرض التقييمات ${a} إلى ${b}`],
  [/^Account: (.+)$/, (_, x) => `الحساب: ${x}`],
  [/^Language: (.+)$/, (_, x) => `اللغة: ${x}`],
  [/^AED ([\d,]+)$/, (_, n) => `${n} درهم`],
  [/^(\d+) Seats$/, (_, n) => `${n} مقاعد`],
  [/^View (.+)$/, (_, x) => `عرض ${x}`],
  [/^Step (\d+)$/, (_, n) => `الخطوة ${n}`],
  [/^You've viewed (\d+) of (\d+) cars$/, (_, a, b) => `شاهدت ${a} من ${b} سيارة`],
  [/^You've viewed all (\d+) cars$/, (_, n) => `شاهدت جميع السيارات (${n})`],
  [/^Favorites \((\d+) saved\)$/, (_, n) => `المفضلة (${n} محفوظة)`],
  [/^(\d+) months at ([\d.]+)%$/, (_, m, r) => `${m} شهرًا بفائدة ${r}%`],
  [/^(\d+) months at ([\d.]+)% · AED ([\d,]+) financed$/, (_, m, r, v) => `${m} شهرًا بفائدة ${r}% · تمويل ${v} درهم`],
  [/^AED ([\d,]+k?)$/, (_, n) => `${n} درهم`],
  [/^([\d,]+) - ([\d,]+) AED$/, (_, a, b) => `${a} - ${b} درهم`],
  [/^([\d,]+) - ([\d,]+) km$/, (_, a, b) => `${a} - ${b} كم`],
  [/^(\d+) - (\d+) cc$/, (_, a, b) => `${a} - ${b} سي سي`],
  [/^([A-Za-z][A-Za-z ]+) \((\d+)\)$/, (_, x, n) => {
    const hit = DICT[x];
    return hit ? `${hit} (${n})` : null;
  }],
];

function translate(raw: string): string | null {
  const key = raw.replace(/\s+/g, " ").trim();
  if (!key || !/[A-Za-z]/.test(key)) return null;
  const hit = DICT[key];
  if (hit !== undefined) return hit === key ? null : hit;
  for (const [re, fn] of PATTERNS) {
    const m = key.match(re);
    const out = m ? fn(...m) : null;
    if (out !== null) return out;
  }
  return null;
}

function withWhitespace(original: string, translated: string) {
  const lead = original.match(/^\s*/)?.[0] ?? "";
  const trail = original.match(/\s*$/)?.[0] ?? "";
  return lead + translated + trail;
}

const originalText = new WeakMap<Text, string>();
const writtenText = new WeakMap<Text, string>();
const originalAttrs = new WeakMap<Element, Map<string, string>>();
const writtenAttrs = new WeakMap<Element, Map<string, string>>();
const touchedText = new Set<Text>();
const touchedEls = new Set<Element>();

function skipped(node: Node) {
  for (let el = node.parentElement; el; el = el.parentElement) {
    if (SKIP_TAGS.has(el.tagName) || el.hasAttribute("data-no-translate")) return true;
  }
  return false;
}

function translateText(node: Text) {
  const value = node.nodeValue ?? "";
  if (writtenText.get(node) === value) return;
  const tr = translate(value);
  if (tr === null || skipped(node)) return;
  const next = withWhitespace(value, tr);
  originalText.set(node, value);
  writtenText.set(node, next);
  touchedText.add(node);
  node.nodeValue = next;
}

function translateAttrs(el: Element) {
  for (const name of ATTRS) {
    const value = el.getAttribute(name);
    if (!value || writtenAttrs.get(el)?.get(name) === value) continue;
    const tr = translate(value);
    if (tr === null) continue;
    if (!originalAttrs.has(el)) originalAttrs.set(el, new Map());
    if (!writtenAttrs.has(el)) writtenAttrs.set(el, new Map());
    originalAttrs.get(el)!.set(name, value);
    writtenAttrs.get(el)!.set(name, tr);
    touchedEls.add(el);
    el.setAttribute(name, tr);
  }
}

function translateTree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) return translateText(root as Text);
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const el = root as Element;
  if (SKIP_TAGS.has(el.tagName)) return;
  translateAttrs(el);
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (n.nodeType === Node.TEXT_NODE) translateText(n as Text);
    else translateAttrs(n as Element);
  }
}

let observer: MutationObserver | null = null;

export function startTranslating() {
  if (observer) return;
  translateTree(document.body);
  observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "characterData") translateText(m.target as Text);
      else if (m.type === "attributes") translateAttrs(m.target as Element);
      else m.addedNodes.forEach(translateTree);
    }
  });
  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: [...ATTRS],
  });
}

export function stopTranslating() {
  observer?.disconnect();
  observer = null;
  for (const node of touchedText) {
    if (writtenText.get(node) === node.nodeValue) node.nodeValue = originalText.get(node) ?? node.nodeValue;
    writtenText.delete(node);
  }
  for (const el of touchedEls) {
    originalAttrs.get(el)?.forEach((value, name) => {
      if (writtenAttrs.get(el)?.get(name) === el.getAttribute(name)) el.setAttribute(name, value);
    });
    writtenAttrs.delete(el);
  }
  touchedText.clear();
  touchedEls.clear();
}
