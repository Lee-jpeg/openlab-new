'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const symbolRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);

    // 심볼 초기 상태 설정 (꺼진 상태)
    if (symbolRef.current && glowRef.current) {
      gsap.set(symbolRef.current, {
        opacity: 0.7,
        scale: 0.9,
      });
      
      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.8,
      });
    }

    // 스크롤 시작 시 심볼 조명 켜짐 효과
    const symbolTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 10%',
        end: 'center center',
        scrub: 1,
      }
    });

    symbolTimeline
      .to(symbolRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
      })
      .to(glowRef.current, {
        opacity: 0.6,
        scale: 1.05,
        duration: 1,
      }, "-=1");

    // 마우스 호버 이벤트
    const symbolElement = symbolRef.current;
    const glowElement = glowRef.current;
    
    if (symbolElement && glowElement) {
      const onMouseEnter = () => {
        gsap.to(symbolElement, {
          scale: 1.1,
          duration: 0.6,
        });
        gsap.to(glowElement, {
          opacity: 1.0,
          scale: 1.15,
          duration: 0.6,
        });
      };
      
      const onMouseLeave = () => {
        const progress = ScrollTrigger.getAll().find(trigger => 
          trigger.vars.trigger === sectionRef.current
        )?.progress || 0;
        
        if (progress < 0.5) {
          gsap.to(symbolElement, {
            scale: 1,
            duration: 0.6,
          });
          gsap.to(glowElement, {
            opacity: 0.6,
            scale: 1.05,
            duration: 0.6,
          });
        } else {
          gsap.to(symbolElement, {
            scale: 0.9,
            duration: 0.6,
          });
          gsap.to(glowElement, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
          });
        }
      };
      
      symbolElement.addEventListener('mouseenter', onMouseEnter);
      symbolElement.addEventListener('mouseleave', onMouseLeave);
      
      return () => {
        symbolElement.removeEventListener('mouseenter', onMouseEnter);
        symbolElement.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-black"
    >
      {/* 콘텐츠 */}
      <div className="relative z-10 text-center hero-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">
          병원 마케팅, 한계를 열다.
        </h1>
        <h2 className="text-lg md:text-2xl font-medium mb-12 text-gray-300">
          오픈랩 마케팅
        </h2>
      </div>
      
      {/* 삼각형 글로우 효과 */}
      <div
        ref={glowRef}
        className="absolute z-0 transform -translate-y-1/4 w-0 h-0
          border-l-[42vh] border-l-transparent
          border-r-[42vh] border-r-transparent
          border-b-[84vh] border-b-primary/30
          filter blur-2xl"
        style={{ transformOrigin: 'center 70%' }}
      />
      
      {/* 인터랙티브 삼각형 심볼 */}
      <div
        ref={symbolRef}
        id="symbol"
        className="w-0 h-0 mx-auto
          border-l-[40vh] border-l-transparent
          border-r-[40vh] border-r-transparent
          border-b-[80vh] border-b-gradient
          absolute z-1 cursor-pointer
          filter drop-shadow-lg
          transform -translate-y-1/4"
        style={{ 
          transformOrigin: 'center 70%',
          borderBottomColor: 'transparent',
          background: 'linear-gradient(to bottom, rgba(78, 114, 255, 0.01) 0%, rgba(78, 114, 255, 1.0) 80%)',
          WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 0%, black 100%)',
          WebkitMaskSize: '40vh 80vh',
          WebkitMaskPosition: 'center top',
          WebkitMaskRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 0%, black 100%)',
          maskSize: '40vh 80vh',
          maskPosition: 'center top',
          maskRepeat: 'no-repeat',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
      
      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <span className="text-sm text-gray-400 mb-2">스크롤 다운</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce text-white"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
} 