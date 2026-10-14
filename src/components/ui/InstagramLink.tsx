import { instagramUrl } from "@/data/social";

export default function InstagramLink({
  showLabel = false,
  className = "",
  gradientId,
  iconSize = 16,
}: {
  showLabel?: boolean;
  className?: string;
  gradientId?: string;
  iconSize?: number;
}) {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram (opens in a new tab)"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {showLabel && <span>Instagram</span>}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={gradientId ? `url(#${gradientId})` : "currentColor"} width={iconSize} height={iconSize} className="shrink-0" aria-hidden="true" focusable="false">
        {gradientId && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEDA75" />
              <stop offset="25%" stopColor="#FA7E1E" />
              <stop offset="50%" stopColor="#D62976" />
              <stop offset="75%" stopColor="#962FBF" />
              <stop offset="100%" stopColor="#4F5BD5" />
            </linearGradient>
          </defs>
        )}
        <path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a5.885 5.885 0 0 0-2.126 1.384A5.885 5.885 0 0 0 .63 4.14C.333 4.903.13 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.885 5.885 0 0 0 4.14 23.37c.763.297 1.635.5 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.885 5.885 0 0 0 2.126-1.384 5.885 5.885 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.913C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.885 5.885 0 0 0-1.384-2.126A5.885 5.885 0 0 0 19.86.63c-.763-.297-1.635-.5-2.913-.558C15.667.014 15.26 0 12 0zm0 2.162c3.204 0 3.584.012 4.85.07 1.17.053 1.805.249 2.228.413.56.218.96.478 1.38.897.419.42.679.82.897 1.38.164.423.36 1.058.413 2.228.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.249 1.805-.413 2.228a3.723 3.723 0 0 1-.897 1.38c-.42.419-.82.679-1.38.897-.423.164-1.058.36-2.228.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.805-.249-2.228-.413a3.723 3.723 0 0 1-1.38-.897 3.723 3.723 0 0 1-.897-1.38c-.164-.423-.36-1.058-.413-2.228-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.249-1.805.413-2.228.218-.56.478-.96.897-1.38.42-.419.82-.679 1.38-.897.423-.164 1.058-.36 2.228-.413 1.266-.058 1.646-.07 4.85-.07zm0 3.676a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </svg>
    </a>
  );
}
