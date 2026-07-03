# AI Persona Survey Method - 2026-07-02

## Purpose

GoodmanSEO의 `AI 비즈니스 컨설팅 리포트`에 대해 실제 광고나 설문 비용을 쓰기 전에, 가상 고객군으로 구매의향과 메시지 반응을 빠르게 점검하는 방법이다.

이 방식은 실제 사람에게 물어보는 시장조사가 아니라, 공개 synthetic persona 데이터를 활용한 AI 시뮬레이션이다.

## Data Source

- Dataset: `nvidia/Nemotron-Personas-USA`
- Source: https://huggingface.co/datasets/nvidia/Nemotron-Personas-USA
- License: CC BY 4.0
- License details: https://creativecommons.org/licenses/by/4.0/

사용 시 출처 표기가 필요하다.

## What This Method Can Answer

- 어떤 고객군이 GoodmanSEO 서비스에 관심을 가질 가능성이 높은가
- 어떤 업종이나 사업 단계에서 반응이 좋은가
- 어떤 분석 항목에 가장 관심이 있는가
- 가격대에 대한 저항이 있는가
- 랜딩페이지에서 신뢰를 높이려면 무엇이 필요한가
- 영어권 고객에게 어떤 문구가 더 설득력 있는가

## What This Method Cannot Prove

- 실제 구매 전환율
- 실제 시장 수요의 확정
- 특정 지역의 정확한 상권 수요
- 실제 고객의 지불 의사
- 매출 예측

결과는 확정된 시장조사가 아니라, 광고나 랜딩페이지를 만들기 전의 가설 검증 자료로 사용한다.

## Sampling Method

1. `Nemotron-Personas-USA`에서 persona rows를 가져온다.
2. 아래 키워드가 포함된 persona를 우선 필터링한다.
   - `owner`
   - `own a`
   - `founding`
   - `startup`
   - `freelance`
   - `consultancy`
   - `manager`
   - `director`
   - `practice`
   - `business`
   - `entrepreneur`
3. 현재 사업 운영자, 창업 예정자, 프리랜서, 로컬 서비스 책임자에 가까운 persona를 고른다.
4. 처음 테스트는 10명으로 시작한다.
5. 반응이 좋은 업종이나 세그먼트가 보이면 100명, 1,000명으로 확장한다.

## GoodmanSEO Offer Used In The Survey

아래와 같은 서비스 설명을 persona에게 보여준다.

```text
GoodmanSEO provides an AI business consulting report for local and online businesses.

The report reviews the business website, Google visibility, local competition, target customers, positioning, message fit, and action priorities.

It is delivered as a PDF within 3 business days.

The goal is to help a business owner understand the current state of the business and the next growth direction.
```

## Survey Questions

각 persona에게 아래 질문을 묻는다.

1. 이 서비스를 처음 봤을 때 무엇을 해주는 서비스로 이해했나요?
2. 현재 본인 비즈니스에 이 리포트가 필요하다고 느끼나요? `1~10점`
3. 가장 관심 가는 분석 항목은 무엇인가요?
4. 구매를 망설이게 만드는 이유는 무엇인가요?
5. `USD 199~299` 가격대라면 적절하다고 느끼나요?
6. 신뢰를 높이려면 랜딩페이지에 무엇이 더 필요할까요?
7. 어떤 문구가 가장 설득력 있나요?
8. 최종적으로 구매 의향은 몇 점인가요? `1~10점`

## Example Prompt

```text
You are the persona below.

Persona:
{persona}

Offer:
GoodmanSEO provides an AI business consulting report for local and online businesses.
The report reviews the business website, Google visibility, local competition, target customers, positioning, message fit, and action priorities.
It is delivered as a PDF within 3 business days.

Answer as this persona.

Questions:
1. What do you think this service does?
2. Do you feel this report would be useful for your current or planned business? Rate from 1 to 10.
3. Which analysis area is most interesting to you?
4. What would make you hesitate to buy?
5. Does USD 199-299 feel reasonable?
6. What would make the landing page more trustworthy?
7. Which message would persuade you most?
8. Final purchase intent score from 1 to 10.

Return concise answers in structured JSON.
```

## Output Format

결과는 표로 정리한다.

| Field | Meaning |
|---|---|
| persona_id | Dataset row index or UUID |
| persona_summary | 나이, 지역, 직업, 사업 단계 요약 |
| business_context | 현재 운영 중 / 창업 예정 / 프리랜서 / 비즈니스 책임자 |
| purchase_intent | 구매의향 점수 |
| most_interesting_area | 가장 관심 있는 분석 항목 |
| hesitation | 구매 저항 요인 |
| price_reaction | 가격 반응 |
| trust_needed | 신뢰를 높이는 요소 |
| best_message | 가장 설득력 있는 문구 |

## 10-Person Test Summary

2026-07-02에 10명 샘플로 간단한 시뮬레이션을 진행했다.

평균 구매의향은 약 `6.2 / 10`이었다.

반응이 좋았던 고객군:

- 로컬 서비스 창업자
- 이벤트 / 케이터링 / 수리 / 뷰티 / 건설 / 디자인 업종
- 홈페이지와 Google Maps 노출이 실제 문의로 이어져야 하는 사업자
- 차별화 포인트와 고객 타겟이 불명확한 초기 사업자

가장 관심이 높았던 분석 항목:

- 로컬 경쟁 분석
- 타겟 고객 분석
- 포지셔닝 / USP 분석
- 홈페이지 문구 개선
- Google Maps / 리뷰 / 검색 노출 상태

가장 큰 구매 저항:

- AI 리포트가 얼마나 정확한지 모르겠다
- 샘플 리포트를 보기 전에는 판단하기 어렵다
- 내 업종을 제대로 이해할 수 있는지 궁금하다
- 결과가 일반적인 조언이면 돈이 아깝다

## Landing Page Implications

GoodmanSEO 랜딩페이지에는 아래 요소가 필요하다.

1. 샘플 리포트 캡처
2. 업종별 분석 예시
3. `AI 분석 + 사람 검수` 강조
4. 공개 온라인 데이터 기반의 상권 / 경쟁 분석이라는 설명
5. 단순 조언이 아니라 우선순위 실행 로드맵을 제공한다는 점

## Useful Message Candidates

```text
내 사업이 지역 안에서 어떻게 보이고 있는지, 어떤 고객에게 어떻게 보여야 하는지 분석합니다.
```

```text
홈페이지, 구글지도, 경쟁사, 고객 페르소나를 함께 보고 현재 상태와 성장 방향을 정리합니다.
```

## Recommended Next Test

다음 실험은 100명 샘플로 진행한다.

권장 필터:

- current owner
- planned business owner
- local service
- home service
- restaurant / cafe
- beauty / salon
- event planning
- repair service
- construction / design studio

권장 출력:

- 업종별 평균 구매의향
- 가격 저항 구간
- 가장 설득력 있는 헤드라인
- 랜딩페이지에서 가장 필요한 신뢰 요소
- 유망 세그먼트 Top 5
