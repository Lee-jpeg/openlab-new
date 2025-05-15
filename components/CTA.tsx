'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // 텍스트 애니메이션
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // 버튼 애니메이션
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-light/90 text-white"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
        <h2
          ref={textRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white"
        >
          함께 혁신을 시작하세요.
        </h2>
        <Link
          href="/contact"
          ref={buttonRef}
          className="inline-flex items-center px-8 py-4 border border-white/20 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-custom"
        >
          문의하기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      
      {/* 그라데이션 웨이브 효과 */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-primary-dark/40 via-blue-400/20 to-primary-light/30 transform -skew-y-1"></div>
    </section>
  );
} 