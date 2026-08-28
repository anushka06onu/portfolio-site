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
  assert.ok(fs.existsSync(path.join(publicDir, "projects/study-hub/overview.png")), "study-hub overview.png exists");
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

test("Research outputs match exact thesis details and 4 under-review conference papers", () => {
  const researchContent = fs.readFileSync(path.resolve("src/content/research.ts"), "utf-8");
  
  // Thesis details
  assert.match(researchContent, /Parameter-Efficient Adaptation of Vision Foundation Models for Multi-Class Dental Radiograph Diagnosis/);
  assert.match(researchContent, /DentIRO/);
  assert.match(researchContent, /DINOv2, BiomedCLIP, MedSAM/);
  assert.match(researchContent, /LoRA, BitFit, VPT/);

  // Health Conference Paper
  assert.match(researchContent, /Detecting Compensated Microcytosis: A Benchmarked and Explainable Machine Learning Approach to Tri-Class Hematological Classification/);

  // 3 NLP Conference Papers
  assert.match(researchContent, /Bridging the Dialect Gap: Enhancing Bangla Dialect-to-English Machine Translation with Regional Metadata and Romanized Standard Bangla/);
  assert.match(researchContent, /Explainable Neural Machine Translation for Bangla Regional Dialect Normalization: A Multi-Model Comparative Study with Attention-Based Interpretability/);
  assert.match(researchContent, /Explainable and Parameter-Efficient Identification of Ethnic Languages in Shared Bengali Script under Low-Resource Conditions/);
});

test("Footer removed Next.js and location lines", () => {
  const footerContent = fs.readFileSync(path.resolve("src/components/Footer.tsx"), "utf-8");
  assert.doesNotMatch(footerContent, /Built with Next\.js/);
  assert.doesNotMatch(footerContent, /Dhaka, Bangladesh · 2026/);
});

test("LICENSE and CI workflow files are present", () => {
  assert.ok(fs.existsSync(path.resolve("LICENSE")), "MIT LICENSE file present");
  assert.ok(fs.existsSync(path.resolve(".github/workflows/ci.yml")), "CI workflow present");
});
