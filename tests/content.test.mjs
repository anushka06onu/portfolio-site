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

test("Public screenshots and diagrams exist", () => {
  const publicDir = path.resolve("public");
  assert.ok(fs.existsSync(path.join(publicDir, "fateha-hossain.jpg")), "fateha-hossain.jpg exists");
  assert.ok(fs.existsSync(path.join(publicDir, "og-image.svg")), "og-image.svg exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/resilinet/overview.png")), "resilinet overview.png exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/computepulse/dashboard.png")), "computepulse dashboard.png exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/healthcare-analytics/overview.png")), "healthcare overview.png exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/academic-analytics/dashboard.png")), "academic-analytics dashboard.png exists");
  assert.ok(fs.existsSync(path.join(publicDir, "projects/gcpc-diu/homepage.png")), "gcpc-diu homepage.png exists");
});

test("ResiliNet content adheres to exact repository policies, scenarios, and classifier wording", () => {
  const projectsContent = fs.readFileSync(path.resolve("src/content/projects.ts"), "utf-8");
  
  // Exact policy names
  assert.match(projectsContent, /static\/no-reroute/, "Includes static/no-reroute policy");
  assert.match(projectsContent, /reactive-threshold/, "Includes reactive-threshold policy");
  assert.match(projectsContent, /predictive-ML/, "Includes predictive-ML policy");

  // Exact scenario names
  assert.match(projectsContent, /normal operation/, "Includes normal operation scenario");
  assert.match(projectsContent, /gradual congestion/, "Includes gradual congestion scenario");
  assert.match(projectsContent, /sudden traffic surge/, "Includes sudden traffic surge scenario");
  assert.match(projectsContent, /concurrent service-class flows/, "Includes concurrent flows scenario");

  // Exact model task: classifier estimating short-horizon link-congestion risk
  assert.match(projectsContent, /LightGBM classifier estimating short-horizon link-congestion risk/);
  assert.doesNotMatch(projectsContent, /LightGBM regressor predicting queue depth/);

  // No unsupported LSTM comparison or unbenchmarked latency claims
  assert.doesNotMatch(projectsContent, /< 8ms/);
  assert.doesNotMatch(projectsContent, /Deep RNN\/LSTM/);
  assert.doesNotMatch(projectsContent, /physical Mininet/);
});

test("ComputePulse, Healthcare, and GCPC entries use verified claims and genuine links", () => {
  const projectsContent = fs.readFileSync(path.resolve("src/content/projects.ts"), "utf-8");
  
  assert.match(projectsContent, /Hackathon prototype · Synthetic telemetry demonstration/);
  assert.match(projectsContent, /Rule-based mitigation recommendations/);
  assert.doesNotMatch(projectsContent, /> 500 node events\/sec/);
  assert.doesNotMatch(projectsContent, /Automated workload migration orchestration/);

  // Healthcare responsible framing
  assert.match(projectsContent, /Responsible Framing as Decision Support/);
  assert.doesNotMatch(projectsContent, /patient trajectory/i);
  assert.doesNotMatch(projectsContent, /provable calibration/i);

  // GCPC Official Website
  assert.match(projectsContent, /DIU GCPC Official Website/);
  assert.match(projectsContent, /https:\/\/gcpc\.daffodilvarsity\.edu\.bd\//);
  assert.match(projectsContent, /Lead Developer & Maintainer/);
});

test("Site configuration uses canonical URL, exact roles, and natural text", () => {
  const siteContent = fs.readFileSync(path.resolve("src/content/site.ts"), "utf-8");
  
  assert.match(siteContent, /https:\/\/portfolio-site-omega-rose\.vercel\.app/);
  assert.match(siteContent, /March 2026 – Present/);
  assert.match(siteContent, /Health Informatics Research Lab/);
  assert.match(siteContent, /Backend Developer Intern/);
  assert.match(siteContent, /label:\s*"View CV"/);
  assert.doesNotMatch(siteContent, /Direct inquiries typically answered within 24–48 hours/);
});

test("Research outputs use neutral, verified titles and statuses", () => {
  const researchContent = fs.readFileSync(path.resolve("src/content/research.ts"), "utf-8");
  
  assert.match(researchContent, /Undergraduate Thesis: Medical Image Classification/);
  assert.match(researchContent, /Health Informatics Journal Study/);
  assert.match(researchContent, /Earlier Bangla NLP Research/);
});

test("LICENSE and CI workflow files are present", () => {
  assert.ok(fs.existsSync(path.resolve("LICENSE")), "MIT LICENSE file present");
  assert.ok(fs.existsSync(path.resolve(".github/workflows/ci.yml")), "CI workflow present");
});
