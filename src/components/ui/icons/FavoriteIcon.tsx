type FavoriteIconProps = {
  isFavorited?: boolean;
  onToggle?: () => void;
};

export default function FavoriteIcon({ isFavorited, onToggle }: FavoriteIconProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle Favorite"
      className="transition hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isFavorited ? 'red' : 'none'}
        viewBox="0 0 24 24"
        stroke={isFavorited ? 'red' : 'currentColor'}
        strokeWidth={2}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
          5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
          4.5 2.09C13.09 3.81 14.76 3 16.5 
          3 19.58 3 22 5.42 22 8.5c0 
          3.78-3.4 6.86-8.55 11.18L12 21z"
        />
      </svg>
    </button>
  );
}
