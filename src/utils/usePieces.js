import { useState, useCallback } from "react";

const sortPiecesByDate = (pieces) => {
  return [...pieces].sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const usePieces = () => {
  const [pieces, setPieces] = useState([]);

  const addPiece = useCallback((newPiece) => {
    setPieces((prev) => {
      const updated = [...prev, { ...newPiece, id: Date.now().toString() }];
      return sortPiecesByDate(updated);
    });
  }, []);

  const removePiece = useCallback((id) => {
    setPieces((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      return sortPiecesByDate(updated);
    });
  }, []);

  return { pieces, addPiece, removePiece };
};