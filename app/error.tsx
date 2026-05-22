"use client";

import Link from 'next/link';
import { BugIcon } from '@/components/Icons';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="err-container">
      
      <div className="err-iconWrapper">
        <BugIcon />
      </div>

      <h1 className="err-title">500: خطأ في النظام</h1>

      <p className="err-subtitle">
        عذرًا، حدث خطأ غير متوقع. يبدو أن هناك خطأ تقني (Bug) بسيط ظهر بينما كنت أُعد القهوة. لقد تم إبلاغي بالمشكلة تلقائيًا، ويمكنك محاولة تحديث الصفحة أو العودة بأمان إلى الصفحة الرئيسية.
      </p>

      <div className="err-buttonsContainer">
        <Link href="/" className="err-primaryButton" prefetch={false}>
          العودة إلى الصفحة الرئيسية
        </Link>
        <button onClick={() => reset()} className="err-secondaryButton">
          تحديث الصفحة
        </button>
      </div>
    </div>
  );
}