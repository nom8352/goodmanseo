# AI Persona 100x10 Cost Raw Notes - 2026-07-02

> Raw note from discussion. Prices, model names, and token assumptions in this file are not independently verified in this document. Re-check official provider pricing before using for customer-facing claims, invoices, or final cost estimates.

## Scenario

100만 명이 아니라 100명 정도만 사용하고, 각 사람당 질문 10개 정도를 한다고 가정한다.

## Cost Assumptions

- 총 인터랙션: 100명 x 10질문 = 1,000회
- 평균 input: 600 tokens
  - 페르소나 설명
  - 질문
  - 약간의 이전 대화
- 평균 output: 400 tokens
  - 답변 길이
- 총 사용량:
  - 600,000 input tokens
  - 400,000 output tokens
  - 총 약 1M tokens

실제 비용은 질문 내용과 답변 길이에 따라 약 ±30% 정도 차이가 날 수 있다.

## 모델별 예상 비용 (100명 x 10질문 기준)

| 순위 | 모델 | Input 가격 | Output 가격 | 예상 총 비용 (약) | 비고 |
|---:|---|---:|---:|---:|---|
| 1 | DeepSeek V4-Flash | $0.14 | $0.28 | $0.22 ~ $0.28 | 가장 저렴 |
| 2 | DeepSeek V4-Pro | $0.435 | $0.87 | $0.61 ~ $0.70 | 품질 좋으면서도 저렴 |
| 3 | GPT-5.4 Nano | $0.20 | $1.25 | $0.62 ~ $0.72 | OpenAI 중 가장 저렴 |
| 4 | Gemini 3.1 Flash-Lite | $0.25 | $1.50 | $0.75 ~ $0.85 | Google 모델 |
| 5 | Grok-4.3 | $1.25 | $2.50 | $1.75 ~ $2.00 | 품질 좋지만 가격대 있음 |
| 6 | GPT-5.4-mini | $0.75 | $4.50 | $2.25 ~ $2.50 | 비용이 좀 부담 |
| 7 | GPT-5.4 | $2.50 | $15.00 | $7.5 ~ $8.5 | 대량으로는 비추천 |

## 상세 비용 분석

| 모델 | 600k Input 비용 | 400k Output 비용 | 총 예상 비용 | 100명 기준 코멘트 |
|---|---:|---:|---:|---|
| DeepSeek V4-Flash | $0.084 | $0.112 | 약 $0.20 ~ $0.28 | 가장 추천 |
| DeepSeek V4-Pro | $0.26 | $0.35 | 약 $0.60 ~ $0.70 | 품질 원하면 이걸로 |
| GPT-5.4 Nano | $0.12 | $0.50 | 약 $0.62 | OpenAI 쓰고 싶을 때 괜찮음 |
| Gemini 3.1 Flash-Lite | $0.15 | $0.60 | 약 $0.75 | Google 사용자에게 적합 |
| Grok-4.3 | $0.75 | $1.00 | 약 $1.75 | 품질 중시할 때 |
| GPT-5.4-mini | $0.45 | $1.80 | 약 $2.25 | 비용이 좀 나감 |
| GPT-5.4 | $1.50 | $6.00 | 약 $7.5 | 거의 비추천, 너무 비쌈 |

## 추천 정리 (100명 x 10질문 규모)

| 상황 | 추천 모델 | 예상 비용 | 이유 |
|---|---|---:|---|
| 최대한 저렴하게 | DeepSeek V4-Flash | $0.25 내외 | 가성비 최강 |
| 품질도 좀 신경 쓰고 싶을 때 | DeepSeek V4-Pro | $0.65 내외 | 가격 대비 품질이 좋음 |
| OpenAI를 쓰고 싶을 때 | GPT-5.4 Nano | $0.65 내외 | Nano가 제일 저렴 |
| Grok을 메인으로 쓰고 싶을 때 | Grok-4.3 | $1.8 내외 | 비용은 좀 더 들지만 품질 좋음 |

## Additional Notes

- DeepSeek V4-Flash를 쓰면 100명 기준으로 2,000~3,000원 정도라는 계산이다.
- 환율 가정: 약 1,380원 / USD
- 캐시를 잘 활용하면 DeepSeek는 실제 비용이 더 내려갈 수 있다.
- GPT-5.4 Nano는 OpenAI 생태계에 이미 익숙하다면 괜찮은 선택지다.
- 100명 규모라면 DeepSeek V4-Flash나 V4-Pro가 가장 합리적이라는 판단이다.

## GoodmanSEO 적용 메모

- 100명 x 10질문은 고객 리포트의 `AI 고객 반응 시뮬레이션` 기본 단위로 적당하다.
- 상품화 시에는 10개 질문을 각각 따로 API 호출하기보다, persona 1명당 한 번의 API 호출로 10개 질문 답변을 JSON으로 받는 방식이 더 저렴하고 관리하기 쉽다.
- 고객-facing 문구에서는 `실제 설문`이 아니라 `AI 기반 가상 고객 반응 시뮬레이션`으로 표현한다.
- 비용표를 공개하거나 리포트 가격 산정에 쓰기 전에는 provider 공식 가격을 재확인한다.
