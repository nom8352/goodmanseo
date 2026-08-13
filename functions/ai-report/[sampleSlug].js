import { aiReportSamples } from '../../src/data/aiReportSamples.js';

const validSampleSlugs = new Set(aiReportSamples.map((sample) => sample.slug));

const notFoundHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <link rel="canonical" href="https://goodmanseo.com/ai-report/" />
    <title>리포트를 찾을 수 없습니다 | Goodman SEO</title>
    <style>
      :root { color: #102133; background: #f1f0ed; font-family: system-ui, sans-serif; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 1.5rem; }
      main { width: min(42rem, 100%); box-sizing: border-box; padding: 4rem 2rem; text-align: center; background: #fff; border: 1px solid #d8d3cb; }
      h1 { margin: 0; font-size: clamp(1.5rem, 5vw, 2.5rem); }
      p { margin: 1.25rem auto 0; max-width: 34rem; color: #44515d; line-height: 1.75; }
      a { display: inline-block; margin-top: 2rem; padding: 0.75rem 1.25rem; color: #fff; background: #102133; text-decoration: none; border-radius: 0.25rem; font-weight: 700; }
    </style>
  </head>
  <body>
    <main>
      <h1>리포트를 찾을 수 없습니다</h1>
      <p>요청하신 AI 리포트 샘플을 찾을 수 없습니다. 다른 샘플 리포트를 확인해보세요.</p>
      <a href="/ai-report/">AI 리포트 안내로 돌아가기</a>
    </main>
  </body>
</html>`;

export function onRequest(context) {
  const sampleSlug = String(context.params.sampleSlug || '');

  if (validSampleSlugs.has(sampleSlug)) {
    return context.next();
  }

  const isHeadRequest = context.request.method === 'HEAD';

  return new Response(isHeadRequest ? null : notFoundHtml, {
    status: 404,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
