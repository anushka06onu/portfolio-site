import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Canonical content files exist and are readable", () => {
  const contentDir = path.resolve("src/content");
  assert.ok(fs.existsSync(path.join(contentDir, "types.ts")), "types.ts exists");
  assert.ok(fs.existsSync(path.join(contentDir, "projects.ts")), "projects.ts exists");
  assert.ok(fs.existsSync(path.join(contentDir, "research.ts")), "research.ts exists");
  assert.ok(fs.existsSync(path.join(contentDir, "site.ts")), "site.ts exists");
});

test("Public SVG assets and diagrams exist", () => {
  const publicDir = path.resolve("public");
  assert.ok(fs.existsSync(path.join(publicDir, "fateha-hossain.jpg")), "fateha-hossain.jpg exists");
  assert.ok(fs.existsSync(path.join(publicDir, "og-image.svg")), "og-image.svg exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/resilinet/overview.svg")), "resilinet overview.svg exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/computepulse/dashboard.svg")), "computepulse dashboard.svg exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/healthcare-analytics/overview.svg")), "healthcare overview.svg exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/academic-analytics/dashboard.svg")), "academic-analytics dashboard.svg exists");
});

test("Projects file contains valid ResiliNet, ComputePulse, Healthcare Analytics, and DIU Academic Analytics", () => {
  const projectsContent = fs.readFileSync(path.resolve("src/content/projects.ts"), "utf-8");
  
  // Must include the 4 featured slugs
  assert.match(projectsContent, /slug:\s*"resilinet"/, "Contains resilinet");
  assert.match(projectsContent, /slug:\s*"computepulse"/, "Contains computepulse");
  assert.match(projectsContent, /slug:\s*"healthcare-analytics"/, "Contains healthcare-analytics");
  assert.match(projectsContent, /slug:\s*"academic-analytics"/, "Contains academic-analytics");

  // Must not contain excluded/inaccurate projects in featured work
  assert.doesNotMatch(projectsContent, /title:\s*"Compiler Toolkit"/, "Compiler Toolkit removed");
  assert.doesNotMatch(projectsContent, /title:\s*"Online To-let System"/, "Online To-let removed");
  assert.doesNotMatch(projectsContent, /title:\s*"Meal Management System"/, "Meal Management removed");

  // Verify correct GitHub URLs
  assert.match(projectsContent, /https:\/\/github\.com\/anushka06onu\/ResiliNet/, "ResiliNet github verified");
  assert.match(projectsContent, /https:\/\/github\.com\/anushka06onu\/computepulse/, "ComputePulse github verified");
  assert.match(projectsContent, /https:\/\/github\.com\/anushka06onu\/AI-Healthcare-Analytics-Platform/, "Healthcare github verified");
  assert.match(projectsContent, /https:\/\/github\.com\/anushka06onu\/DIU-Academic-Analytics-Platform/, "Academic Analytics github verified");
});

test("Site config contains Health Informatics positioning and verified experience", () => {
  const siteContent = fs.readFileSync(path.resolve("src/content/site.ts"), "utf-8");
  
  assert.match(siteContent, /HEALTH INFORMATICS · INTELLIGENT SYSTEMS · BACKEND ENGINEERING/);
  assert.match(siteContent, /I build reliable intelligent systems for healthcare and complex infrastructure\./);
  assert.match(siteContent, /Health Informatics Research Lab/);
  assert.match(siteContent, /Backend Developer Intern/);
  assert.match(siteContent, /DIU Girls’ Computer Programming Club/);
});

test("LICENSE and CI workflow files are present", () => {
  assert.ok(fs.existsSync(path.resolve("LICENSE")), "MIT LICENSE file present");
  assert.ok(fs.existsSync(path.resolve(".github/workflows/ci.yml")), "CI workflow present");
});
