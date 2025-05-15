'use client';

import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-6">OPENLAB 테스트 페이지</h1>
      <p className="text-xl mb-8">이 페이지가 보이면 Next.js 라우팅이 정상 작동합니다.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
