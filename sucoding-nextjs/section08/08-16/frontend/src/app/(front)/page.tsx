import { BookOpen, PenSquare, Users, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            생각을 나누는
            <br />
            <span className="bg-linear-to-br from-gray-700 to-gray-900 bg-clip-text text-transparent">
              가장 쉬운 방법
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            간단하고 직관적인 블로그 플랫폼으로 당신의 이야기를 세상과
            공유하세요. 누구나 쉽게 글을 작성하고, 소통할 수 있습니다.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-lg rounded-lg hover:bg-gray-800 transition-all hover:shadow-xl transform hover:-translate-y-0.5">
            <PenSquare size={22} />
            <span>지금 시작하기</span>
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <PenSquare size={24} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">쉬운 작성</h3>
            <p className="text-gray-600 leading-relaxed">
              복잡한 설정 없이 바로 글쓰기를 시작할 수 있습니다. 직관적인
              인터페이스로 당신의 생각을 자유롭게 표현하세요.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Users size={24} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              활발한 소통
            </h3>
            <p className="text-gray-600 leading-relaxed">
              댓글 기능을 통해 독자들과 실시간으로 소통하고 의견을 나눌 수
              있습니다. 커뮤니티를 만들어가세요.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Zap size={24} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">빠른 속도</h3>
            <p className="text-gray-600 leading-relaxed">
              최적화된 성능으로 빠르고 쾌적한 사용 경험을 제공합니다. 어디서나
              부드럽게 작동합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            회원가입 없이 바로 사용할 수 있습니다. 당신의 첫 글을 작성해보세요.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-lg rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-0.5 font-medium">
            <BookOpen size={22} />
            <span>블로그 둘러보기</span>
          </button>
        </div>
      </section>
    </main>
  );
}
