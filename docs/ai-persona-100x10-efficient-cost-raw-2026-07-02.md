# AI Persona 100x10 Efficient Cost Raw Notes - 2026-07-02

> Raw note from discussion. Prices, model names, and token assumptions in this file are not independently verified in this document. Re-check official provider pricing before using for customer-facing claims, invoices, or final cost estimates.

## Context

기존 `100명 x 10질문` 비용 계산은 1,000회 별도 호출을 전제로 해서 비용이 과대평가된 부분이 있었다.

상품화 관점에서는 각 질문마다 따로 호출하는 방식보다, `persona 1명당 1회 호출` 안에 10개 질문을 모두 넣고 JSON으로 받는 구조가 더 효율적이다.

## Efficient Structure

- 호출 횟수: 100명 x 1회 호출 = 총 100회 호출
- 각 호출당 10개 질문을 한 번에 물어봄
- 답변은 JSON 형식으로 받음

## Token Assumptions Per Call

| 항목 | 토큰 수 (예상) | 비고 |
|---|---:|---|
| Input (페르소나 + 프롬프트 + 10개 질문) | 900 ~ 1,200 | 평균 1,000 tokens |
| Output (10개 답변 JSON) | 1,800 ~ 2,500 | 평균 2,000 tokens |
| 1회 호출 총합 | 약 3,000 | - |

## Total Usage For 100 Personas

- 총 input: 100,000 tokens
- 총 output: 200,000 tokens
- 총 tokens: 약 300,000 tokens

## 모델별 예상 비용 (100명 x 10질문, 효율 구조)

| 순위 | 모델 | Input 가격 | Output 가격 | 예상 총 비용 | 100명 기준 코멘트 |
|---:|---|---:|---:|---:|---|
| 1 | DeepSeek V4-Flash | $0.14 | $0.28 | $0.07 ~ $0.09 | 압도적 1위 |
| 2 | DeepSeek V4-Pro | $0.435 | $0.87 | $0.22 ~ $0.26 | 품질 좋고 가성비 좋음 |
| 3 | GPT-5.4 Nano | $0.20 | $1.25 | $0.27 ~ $0.32 | OpenAI 중 가장 저렴 |
| 4 | Gemini 3.1 Flash-Lite | $0.25 | $1.50 | $0.33 ~ $0.38 | Google 사용자에게 적합 |
| 5 | Grok-4.3 | $1.25 | $2.50 | $0.63 ~ $0.75 | 품질은 좋지만 비용 상승 |
| 6 | GPT-5.4-mini | $0.75 | $4.50 | $0.98 ~ $1.15 | 비용 부담 있음 |
| 7 | GPT-5.4 | $2.50 | $15.00 | 약 $3.5 | 비추천 |

## 비용 비교 요약 (100명 기준)

| 모델 | 예상 비용 (USD) | 한화 환산 (약) | 비고 |
|---|---:|---:|---|
| DeepSeek V4-Flash | $0.08 | 110원 | 가장 추천 |
| DeepSeek V4-Pro | $0.24 | 330원 | 품질 원하면 이걸로 |
| GPT-5.4 Nano | $0.30 | 410원 | OpenAI 생태계라면 괜찮음 |
| Gemini 3.1 Flash-Lite | $0.35 | 480원 | Google 사용자 |
| Grok-4.3 | $0.70 | 960원 | 비용이 좀 더 듦 |
| GPT-5.4-mini | $1.05 | 1,450원 | 비추천 |
| GPT-5.4 | $3.5 | 4,800원 | 거의 비추천 |

## 결론 및 추천 (100명 규모)

| 목적 | 추천 모델 | 예상 비용 | 추천 이유 |
|---|---|---:|---|
| 최저 비용 | DeepSeek V4-Flash | 약 110원 | 압도적으로 저렴 |
| 품질 + 비용 균형 | DeepSeek V4-Pro | 약 330원 | 현재 가장 합리적 |
| OpenAI 쓰고 싶을 때 | GPT-5.4 Nano | 약 410원 | Nano가 제일 저렴 |
| Grok 쓰고 싶을 때 | Grok-4.3 | 약 960원 | 비용은 좀 더 들지만 품질 좋음 |

## Additional Notes

- DeepSeek V4-Flash를 쓰면 100명 전체를 처리해도 약 100~150원 정도라는 계산이다.
- 상품화하기에 매우 부담이 적은 수준이다.
- JSON 구조로 한 번에 받으면 토큰 효율이 기존 방식보다 3~5배 이상 좋아질 수 있다.
- 실제 비용은 페르소나 길이, 질문 난이도, 답변 길이에 따라 ±20~30% 정도 차이가 날 수 있다.

## Conservative / Aggressive Recalculation Options

필요하면 아래 두 가지 버전으로 다시 계산할 수 있다.

1. 보수적 계산:
   - Input 1,200 tokens / call
   - Output 2,500 tokens / call
2. 공격적 계산:
   - Input 800 tokens / call
   - Output 1,600 tokens / call

## GoodmanSEO 적용 메모

- `100명 x 10질문`은 `persona 100명 x 1회 API 호출` 구조로 구현하는 것이 적절하다.
- 리포트 상품에는 `AI 고객 반응 시뮬레이션 100명` 같은 기본 항목으로 넣을 수 있다.
- 대량 확장 시에는 1,000명 / 10,000명도 같은 구조로 확장하면 된다.
- 고객-facing 표현은 `실제 고객 설문`이 아니라 `AI 기반 가상 고객 반응 시뮬레이션`으로 유지한다.
- 가격표나 모델명을 고객에게 직접 공개하기 전에는 공식 가격을 재확인한다.
