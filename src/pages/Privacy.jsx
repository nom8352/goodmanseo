import React from 'react';
import Seo from '../components/Seo';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24 bg-gradient-to-tr from-[#f2fafb] via-white to-[#ecf6f8] text-[#0f2230] min-h-screen">
      <Seo
        title="개인정보처리방침"
        description="GoodmanSEO 개인정보처리방침 페이지입니다. 수집하는 개인정보 항목, 수집 목적, 보유 기간 등에 대해 안내해 드립니다."
        path="/privacy"
      />
      <div className="container max-w-4xl px-6 text-left">
        <h1 className="text-3xl font-black tracking-[-0.04em] text-[#0f2230] mb-2">개인정보처리방침</h1>
        <p className="text-sm text-[#7c8f9f] mb-8 font-medium">시행일자: 2026년 6월 16일</p>

        <div className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-[0_24px_60px_rgba(0,122,140,0.04)] space-y-8 leading-relaxed text-[#4e6170]">
          
          <section>
            <h2 className="text-lg font-bold text-[#0f2230] mb-3">1. 개인정보의 수집 및 이용 목적</h2>
            <p className="text-[0.92rem]">
              GoodmanSEO는 귀하가 제공하는 개인정보를 다음의 목적을 위해 수집하고 이용합니다. 수집된 개인정보는 목적 외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[0.92rem]">
              <li>홈페이지, Google Business Profile, 기본 SEO 점검 및 관련 서비스 제공</li>
              <li>신청인 본인 확인 및 문의에 대한 답변/상담 연락</li>
              <li>서비스 품질 개선 및 맞춤형 컨설팅 피드백 제공</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f2230] mb-3">2. 수집하는 개인정보의 항목</h2>
            <p className="text-[0.92rem]">
              서비스 신청 및 문의 접수를 위해 아래와 같은 개인정보를 수집하고 있습니다.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[0.92rem]">
              <li><strong>필수항목:</strong> 업체명, 담당자 이름, 연락처(전화번호)</li>
              <li><strong>선택항목:</strong> 홈페이지 URL, Google Business Profile 링크, 서비스 요청 세부사항/고민 항목</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f2230] mb-3">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="text-[0.92rem]">
              원칙적으로 개인정보의 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 관계법령에서 정한 일정 기간 동안 개인정보를 보관합니다.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[0.92rem]">
              <li>신청자 상담 및 진단 기록 보존: <strong>목적 달성 후 1년</strong></li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: <strong>3년</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f2230] mb-3">4. 개인정보의 파기절차 및 방법</h2>
            <p className="text-[0.92rem]">
              보유 기간이 경과하거나 수집 목적이 달성된 개인정보는 복구 불가능한 방법으로 즉시 영구 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄하거나 소각합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f2230] mb-3">5. 이용자의 권리와 그 행사방법</h2>
            <p className="text-[0.92rem]">
              이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 수집 동의 철회 및 삭제를 요청할 수 있습니다. 개인정보 관리책임자에게 서면 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f2230] mb-3">6. 개인정보의 안전성 확보 조치</h2>
            <p className="text-[0.92rem]">
              GoodmanSEO는 이용자의 개인정보가 분실, 도난, 유출, 위조 또는 변조되지 않도록 안전성 확보를 위해 관리적, 기술적 보호 조치를 취하고 있습니다. 외부로부터의 무단 접근을 통제하며 안전한 암호화 프로토콜을 사용해 데이터를 관리합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f2230] mb-3">7. 개인정보 보호책임자 및 연락처</h2>
            <p className="text-[0.92rem]">
              개인정보 보호 관련 문의 및 불만 처리는 아래 책임 부서로 연락해 주시기 바랍니다.
            </p>
            <div className="bg-[#f2fafb] border border-[#d5ecf0] rounded-2xl p-4 mt-3 text-sm">
              <p><strong>책임자:</strong> GoodmanSEO 개인정보 보호 담당자</p>
              <p className="mt-1"><strong>이메일:</strong> <a href="mailto:goodmanseo.sydney@gmail.com" className="text-[#007a8c] font-bold">goodmanseo.sydney@gmail.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
