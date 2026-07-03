import React from 'react';
import Seo from '../components/Seo';

const Terms = () => {
  return (
    <div className="pt-32 pb-24 bg-gradient-to-tr from-[#f7f2ec] via-white to-[#eee7df] text-[#102133] min-h-screen">
      <Seo
        title="이용약관"
        description="GoodmanSEO 서비스 이용약관 페이지입니다. 서비스 이용 조건 및 절차, 회사와 회원의 권리 및 의무 등에 대해 규정합니다."
        path="/terms"
      />
      <div className="container max-w-4xl px-6 text-left">
        <h1 className="text-3xl font-black tracking-[-0.04em] text-[#102133] mb-2">이용약관</h1>
        <p className="text-sm text-[#687582] mb-8 font-medium">시행일자: 2026년 6월 16일</p>

        <div className="bg-white border border-[#ded8cf] rounded-[0.7rem] p-8 shadow-[0_24px_60px_rgba(16,33,51,0.04)] space-y-8 leading-relaxed text-[#44515d]">
          
          <section>
            <h2 className="text-lg font-bold text-[#102133] mb-3">제 1 조 (목적)</h2>
            <p className="text-[0.92rem]">
              본 약관은 GoodmanSEO(이하 "회사"라 함)가 제공하는 홈페이지 제작, 구글 비즈니스 세팅, 기본 SEO 점검 및 관련 지원 서비스(이하 "서비스"라 함)의 이용 조건 및 절차, 이용자와 회사 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102133] mb-3">제 2 조 (용어의 정의)</h2>
            <p className="text-[0.92rem]">
              본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[0.92rem]">
              <li><strong>이용자:</strong> 본 약관에 따라 회사가 제공하는 무료 점검 또는 AI 진단 서비스를 신청하고 이용하는 자를 말합니다.</li>
              <li><strong>무료 점검:</strong> 이용자가 제공한 홈페이지와 구글 비즈니스 정보를 기반으로 기본적인 보완점을 확인하는 무상 서비스를 의미합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102133] mb-3">제 3 조 (약관의 효력 및 변경)</h2>
            <ul className="list-decimal pl-5 space-y-1 text-[0.92rem]">
              <li>본 약관은 서비스 웹사이트 화면에 게시하거나 기타의 방법으로 이용자에게 공시함으로써 효력이 발생합니다.</li>
              <li>회사는 필요하다고 인정되는 경우 관련 법령을 위배하지 않는 범위 내에서 약관을 변경할 수 있으며, 변경된 약관은 공시된 시점부터 효력을 가집니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102133] mb-3">제 4 조 (서비스 신청 및 제공)</h2>
            <ul className="list-decimal pl-5 space-y-1 text-[0.92rem]">
              <li>이용자는 웹사이트 내의 문의/진단 신청 양식을 통해 정확한 비즈니스 정보를 입력하여 서비스를 신청합니다.</li>
              <li>무료 점검의 경우 순차적으로 진행되며, 신청 건수 및 내부 일정에 따라 리포트 발송 또는 상담 진행이 지연될 수 있습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102133] mb-3">제 5 조 (회사의 의무와 책임 한계)</h2>
            <ul className="list-decimal pl-5 space-y-1 text-[0.92rem]">
              <li>회사는 법령과 본 약관이 금지하는 행위를 하지 않으며, 지속적이고 안정적인 서비스 제공을 위해 최선을 다합니다.</li>
              <li><strong>책임의 제한:</strong> 회사가 제공하는 점검 의견 및 리포트는 업종 분석과 가이드라인 제공을 목적으로 하는 <strong>'참고 자료'</strong>입니다. 진단 결과에 포함된 조치사항을 이행하여 발생하는 결과나 비즈니스 매출 변화에 대해 회사는 법적 의무나 보증 책임을 지지 않습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102133] mb-3">제 6 조 (이용자의 의무)</h2>
            <p className="text-[0.92rem]">
              이용자는 신청 시 허위 사실 또는 타인의 정보를 무단 도용하여 기재해서는 안 되며, 서비스 결과물을 타인의 권리를 침해하거나 악의적인 용도로 오용하여서는 안 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102133] mb-3">제 7 조 (관할법원)</h2>
            <p className="text-[0.92rem]">
              서비스 이용과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우, 회사의 본사 소재지를 관할하는 법원을 합의 관할 법원으로 합니다.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
