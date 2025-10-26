"use client";
import "./globals.css";
export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="background-image" id="body-form">
        {children}
      </div>
      <div className="bg-green"></div>
    </>
  );
}
