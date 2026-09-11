"use client";

import Image from "next/image";
import Link from "next/link";

export default function MovieModalContent() {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row">
        {/* 포스터 이미지 */}
        <div className="relative w-full md:w-1/2 aspect-2/3">
          <Image
            src="https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
            alt="컨저링"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 영화 정보 */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              컨저링
            </h2>
            <p className="text-sm text-muted-foreground mb-4">The Conjuring</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                55%
              </span>
              <span className="text-muted-foreground text-sm">
                공포, 미스터리, 스릴러 · 1h 52m
              </span>
            </div>

            <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-4">
              유명한 초자연 현상 수사관 부부가 새로운 악령을 마주하게 되는
              이야기
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">개봉일:</span>
                <span className="text-foreground">2025-01-20</span>
              </p>
              <p>
                <span className="text-muted-foreground">감독:</span>
                <span className="text-foreground">제임스 완</span>
              </p>
              <p>
                <span className="text-muted-foreground">출연:</span>
                <span className="text-foreground">
                  패트릭 윌슨, 베라 파미가, 론 리빙스턴
                </span>
              </p>
              <p>
                <span className="text-muted-foreground">제작자:</span>
                <span className="text-foreground">수코딩 컴퍼니</span>
              </p>
            </div>
          </div>

          <Link
            href="/movie/1306368"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            상세정보 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
