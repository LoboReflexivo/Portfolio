import Link from "next/link";
import React from "react";

export default function ButtonComponent() {
  return (
    <div>
      <div>
        <Link href="#home" className="back-top">
          <svg
            version="1.1"
            id="mdi-arrow-up-circle-outline"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="back-top-icon"
          >
            <path d="M13,18H11V10L7.5,13.5L6.08,12.08L12,6.16L17.92,12.08L16.5,13.5L13,10V18M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
